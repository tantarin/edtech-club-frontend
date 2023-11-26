import React, {useState, useEffect} from "react";

import {getNews} from "../../services/user.service";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {CardActionArea, Button, Box, Grid, Theme, CardActions} from "@mui/material";
import {Link} from "react-router-dom";
import {createStyles, makeStyles} from "@mui/styles";

interface IContent {
    content: string;
    date: string;
    header: string;
    id: number;
}

const News: React.FC = () => {
    const [content, setContent] = useState<IContent[]>([]);

    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            gridContainer: {
                padding: "0 20px"
            }
        }));

    const loadNews = () => {
        getNews()
            .then(
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

    useEffect(() => {
        loadNews();
    }, []);
    const classes = useStyles();

    const cards = content.map((item) => {
        return (
                <Grid item xs={12} sm={6} md={4} >
                <Card
                    key={item.id}
                    sx={{maxWidth: 345, margin: "0 2px 2px 0"}} style={{height: "100%"}}
                >
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://via.placeholder.com/345x140" // Замените этот URL на требуемый URL изображения
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
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </CardActionArea>
                </Card>
                </Grid>
        );
    });

    return (
        <div>
            <header className="jumbotron" style={{marginBottom: 0}}>
                <h3>События клуба</h3>
            </header>
            <Box
                m={1}
                display="flex"
                justifyContent="flex-end"
                alignItems="flex-end"
            >
                <Link to="/addNews" style={{textDecoration: "none"}}>
                    <Button variant="contained" color="primary" sx={{height: 40}}>
                        Добавить новость
                    </Button>
                </Link>
            </Box>
            <Grid container
                  spacing={3}
                  className={classes.gridContainer}>
            {cards}
            </Grid>
        </div>
    );
};

export default News;
