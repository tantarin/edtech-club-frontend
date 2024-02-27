import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Typography,
} from "@mui/material";
import { getAds } from "../../services/user.service";
import { Link } from "react-router-dom";
import IUser from "../../types/user.type";
import { getCurrentUser } from "../../services/auth.service";
import clsx from "clsx";

interface AdData {
  header: string;
  content: string;
}

const AdsPage: React.FC = () => {
  const [content, setContent] = useState<AdData[]>([]);
  const [user, setUser] = useState<IUser | undefined>(() => getCurrentUser());

  const loadAds = () => {
    getAds().then(
      response => {
        setContent(response.data);
      },
      error => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

        setContent([{ header: "Error", content: _content }]);
      }
    );
  };

  useEffect(() => {
    loadAds();
  }, []);

  const Ad: React.FC<AdData> = ({ header, content }) => {
    return (
      <div className={clsx("root", "border border-gray rounded-[10px]")}>
        <CardContent>
          <Typography className={"header"} gutterBottom>
            {header}
          </Typography>
          <Typography className={"content"} color="textSecondary">
            {content}
          </Typography>
        </CardContent>
      </div>
    );
  };

  return (
    <div className="container mt-3">
      <Container>
        <div className="gap-4 flex flex-col mt-2">
          {user?.roles && user.roles.includes("ROLE_ADMIN") && (
            <Link to="/addAds" style={{ textDecoration: "none" }}>
              <Button variant="contained" color="primary" sx={{ height: 50 }}>
                Добавить объявление
              </Button>
            </Link>
          )}
          <div className="grid grid-cols-1 gap-4">
            {Array.isArray(content) &&
              content?.map((ad, index) => <Ad key={index} {...ad} />)}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AdsPage;
