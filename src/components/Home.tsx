import React, { useState, useEffect } from "react";

import {getNews} from "../services/user.service";
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
            <Card key={item.id} sx={{ maxWidth: 345, margin: '0 2px 2px 0' }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image="https://via.placeholder.com/345x140"  // Replace this URL with the desired image URL
                        alt="Placeholder Image"
                    />
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
        <div className="container" >
            <header className="jumbotron">
                <h3>События клуба</h3>
            </header>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'left', border: '1px solid #000', padding: '1em'}}>
                {cards}
            </div>
        </div>
    );
};

export default Home;