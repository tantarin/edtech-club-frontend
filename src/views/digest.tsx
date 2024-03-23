import React, { useState, useEffect } from "react";
import { getNews } from "../services/user.service";
import { Link } from "react-router-dom";
import IUser from "../types/user.type";
import { getCurrentUser } from "../services/auth.service";
import { Button, Grid, Card, CardContent, Typography } from "@mui/material";
import "../components/News/News.css";

interface IContent {
    content: string;
    date: string;
    header: string;
    id: number;
}

const Digest: React.FC = () => {
    const [content, setContent] = useState<IContent[]>([]);
    const [user, setUser] = useState<IUser | undefined>(() => getCurrentUser());

    useEffect(() => {
        loadNews();
        getCurrentUser();
    }, []);

    const loadNews = () => {
        getNews().then(
            (response) => {
                setContent(response.data);
            },
            (error) => {
                const _content =
                    (error.response && error.response.data) ||
                    error.message ||
                    error.toString();

                setContent(_content);
            }
        );
    };

    return (
        <div className="container mt-3">
            <header className="jumbotron" style={{ marginBottom: 0 }}>
                <h3>События клуба</h3>
            </header>
            <Grid container spacing={3}>
                {content.map((item) => (
                    <Grid item xs={12} sm={6} md={4} key={item.id}>
                        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {item.header}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {item.content}
                                </Typography>
                            </CardContent>
                            <div style={{ flexGrow: 1 }} />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    {item.date}
                                </Typography>
                                <Link to="/" className="cursor-pointer text-lg text-indigo-600 font-semibold">Read more..</Link>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            {user?.roles && user.roles.includes("ROLE_ADMIN") && (
                <div className="flex justify-center mt-4">
                    <Link to="/addNews" style={{ textDecoration: "none" }}>
                        <Button variant="contained" color="primary">
                            Добавить новость
                        </Button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Digest;