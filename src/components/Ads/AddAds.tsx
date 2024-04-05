import React, { useState, ChangeEvent, FormEvent } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { addAds } from "../../services/ads.service";
import ImageUpload from "../Image/ImageUpload";

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
