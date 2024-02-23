import React, { useState, ChangeEvent, FormEvent } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {addNews} from "../../services/news.service";
import {useNavigate} from "react-router-dom";
import {addAds} from "../../services/ads.service";

interface FormData {
    header: string;
    content: string;
}

//TODO rename
export default function AddNews() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState<FormData>({
        header: "",
        content: "",
    });

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        addAds(formData).then(() => navigate("/ads"))
    };

    return (
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
    );
}
