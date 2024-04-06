import React, { useState, ChangeEvent, FormEvent } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {Link, useNavigate} from "react-router-dom";
import { addAds } from "../../services/ads.service";
import ImageUpload from "../Image/ImageUpload";
import {TextEditorReact} from "../TextEditor";
import {Snackbar} from "@mui/material";
import MuiAlert from "@mui/material/Alert";

interface FormData {
  header: string;
  content: string;
}

export default function AddAds() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    header: "",
    content: "",
  });
  const [file, setFile] = useState<File | null>(null); // Хранение файла для загрузки
  const [editorContent, setEditorContent] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleEditorChange = (content: string) => {
    setEditorContent(content); // Сохраняем текст из редактора в состоянии
    setFormData(prevFormData => ({
      ...prevFormData,
      content: content // Обновляем только свойство content в объекте formData
    }));
  };

  const handleFileChange = (selectedFile: File) => {
    setFile(selectedFile);
  };

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    addAds(formData).then(() => navigate("/ads"));
  };

  return (
      <div className="container mt-3" style={{ height: "80vh" }}>
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
            Добавить объявление
          </button>
        </form>
      </div>

  );
}
