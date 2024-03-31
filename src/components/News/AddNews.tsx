import React, { useState, ChangeEvent, FormEvent } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { addNews, upload } from "../../services/news.service";
import { useNavigate } from "react-router-dom";
import ImageUpload from "../Image/ImageUpload";

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
  const [file, setFile] = useState<File | null>(null); // Хранение файла для загрузки

  const handleChange = (
      event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleFileChange = (selectedFile: File) => {
    setFile(selectedFile);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (!file) {
      console.error("No file selected.");
      return;
    }

    upload(file, onUploadProgress)
        .then(() => addNews(formData))
        .then(() => navigate("/news"))
        .catch((error) => console.error("Error uploading file:", error));
  };

  const onUploadProgress = (progressEvent: ProgressEvent<EventTarget>) => {
    // Обработка прогресса загрузки, если необходимо
  };

  return (
      <div className="container mt-3">
        <ImageUpload onChange={handleFileChange} />
        <form onSubmit={handleSubmit}>
          <TextField
              id="header"
              name="header"
              label="Заголовок"
              variant="outlined"
              fullWidth
              margin="normal"
              value={formData.header}
              onChange={handleChange}
          />

          <TextField
              id="content"
              name="content"
              label="Содержимое"
              variant="outlined"
              multiline
              rows={4}
              fullWidth
              margin="normal"
              value={formData.content}
              onChange={handleChange}
          />

          <Button type="submit" variant="contained" color="primary">
            Отправить
          </Button>
        </form>
      </div>
  );
}
