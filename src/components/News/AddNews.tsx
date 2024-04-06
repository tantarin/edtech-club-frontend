import React, { useState, ChangeEvent, FormEvent } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { addNews, upload } from "../../services/news.service";
import {Link, useNavigate} from "react-router-dom";
import ImageUpload from "../Image/ImageUpload";
import {TextEditorReact} from "../TextEditor";
import {Snackbar} from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

interface FormData {
  header: string;
  content: string;
}

export default function AddNews() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    header: "",
    content: "",
  });
  const [file, setFile] = useState<File | null>(null);
  const [editorContent, setEditorContent] = useState("");
    const [error, setError] = useState<string | null>(null);

    const handleEditorChange = (content: string) => {
        setEditorContent(content); // Сохраняем текст из редактора в состоянии
        setFormData(prevFormData => ({
            ...prevFormData,
            content: content // Обновляем только свойство content в объекте formData
        }));
    };


    const handleChange = (
      event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleFileChange = (selectedFile: File) => {
    setFile(selectedFile);
  };

    const handleClose = () => {
        setError(null); // Закрытие Snackbar
    };


    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        console.log(formData.content);
        try {
            if (!file) {
                throw new Error("Необходимо загрузить изображение");
            }

            const response = await addNews(formData);
            const { id } = response.data;
            console.log("id", id);

            await uploadImage(id);
            navigate("/news");
        } catch (error: any) { // Указание типа error как any
            console.error("Error adding news:", error);
            setError(error.message); // Установка ошибки
        }
    };


    const uploadImage = (id: bigint) => {
    if (!file) {
      console.error("No file selected.");
      return;
    }
    upload(file, id, onUploadProgress)
        .then(() => console.log("Image uploaded successfully"))
        .catch((error) => console.error("Error uploading image:", error));
  };



  const onUploadProgress = (progressEvent: ProgressEvent<EventTarget>) => {
    // Обработка прогресса загрузки, если необходимо
  };

  return (
      <div className="container mt-3" style={{ height: "80vh" }}>
        <ImageUpload onChange={handleFileChange} />
        <form onSubmit={handleSubmit}>
          <TextField
              className="rounded-b-lg bg-white"
              id="header"
              name="header"
              label="Заголовок"
              variant="outlined"
              fullWidth
              margin="normal"
              value={formData.header}
              onChange={handleChange}
              InputProps={{
                  disableUnderline: true,
              }}
          />
            <TextEditorReact inputWidth="700px" onChange={handleEditorChange} />
            <button type="submit" className="text-white bg-blue-700 py-2.5 px-5 text-sm font-medium focus:outline-none rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700">
                Добавить новость
            </button>
        </form>
          <Snackbar open={!!error} autoHideDuration={6000} onClose={handleClose}>
              <MuiAlert elevation={6} variant="filled" severity="error" onClose={handleClose}>
                  {error}
              </MuiAlert>
          </Snackbar>
      </div>

  );
}
