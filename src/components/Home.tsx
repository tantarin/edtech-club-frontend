import React, { useState, useEffect } from "react";

import {getNews, getPublicContent} from "../services/user.service";
import {array} from "yup";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

interface IContent {
    content: string;
    date: string;
    header: string;
    id: number;
}

const Home: React.FC = () => {
    const [content, setContent] = useState<IContent[]>([]);

    useEffect(() => {
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
    }, []);

    const cards = content.map((item) => {
        return (
            <Card key={item.id} sx={{ maxWidth: 345, marginBottom: 2 }}>
                <CardActionArea>
                    {/* Ваша карточка может выглядеть по-разному в зависимости от данных */}
                    {/* В примере используется изображение из поля content, а также отображение заголовка и контента */}
                    {/* Вы можете настроить это в соответствии с вашими данными */}
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {item.header}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {item.content}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        );
    });

    return (
        <div className="container">
            <header className="jumbotron">
                <h3>контент</h3>
            </header>
            <div>{cards}</div>
            <div>{/* Use the cards variable here or in some other part of your component */}</div>
        </div>
    );
};

export default Home;