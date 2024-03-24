import React, { useState, useEffect } from "react";

import { getNews } from "../../services/user.service";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Button, Box, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { getCurrentUser } from "../../services/auth.service";
import IUser from "../../types/user.type";
import "./News.css";
import SearchForm from "../SearchForm";

interface IContent {
  content: string;
  date: string;
  header: string;
  id: number;
}

const News: React.FC = () => {
  const [content, setContent] = useState<IContent[]>([]);
  const [user, setUser] = useState<IUser | undefined>(() => getCurrentUser());

  useEffect(() => {
    loadNews();
    getCurrentUser();
  }, []);

  const loadNews = () => {
    getNews().then(
      response => {
        setContent(response.data);
      },
      error => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  };

  return (
      <>
        <div className="showcase">
          <div className="overlay px-5">
            <h1 className="text-4xl font-bold text-white text-center mb-4 lg:text-6xl">
              События клуба
            </h1>
          </div>
        </div>
    <div className="container mt-3">
      <div>
        <Box
          m={1}
          display="flex"
          justifyContent="flex-end"
          alignItems="flex-end"
        >
          {user?.roles && user.roles.includes("ROLE_ADMIN") && (
            <Link to="/addNews" style={{ textDecoration: "none" }}>
              <Button variant="contained" color="primary" sx={{ height: 40 }}>
                Добавить новость
              </Button>
            </Link>
          )}
        </Box>
        <Grid container spacing={3} className={"px-0"}>
          {Array.isArray(content) &&
            content?.map(item => {
              return (
                <Grid item xs={12} sm={6} md={4}>
                  <Card
                    key={item.id}
                    sx={{ margin: "0 2px 2px 0", maxHeight: 500 }}
                    style={{ height: "100%" }}
                  >
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        image="https://via.placeholder.com/345x140"
                        alt="Placeholder Image"
                      />
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          className={"header"}
                          title={item.header}
                        >
                          {item.header}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {item.content}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              );
            })}
        </Grid>
      </div>
    </div>
      </>
  );
};

export default News;
