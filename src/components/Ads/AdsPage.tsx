import React, { useEffect, useState } from "react";
import {Box, Button, Card, CardContent, Container,Typography} from "@mui/material";
import { getAds } from "../../services/user.service";
import {Link} from "react-router-dom";
import IUser from "../../types/user.type";
import {getCurrentUser} from "../../services/auth.service";

interface AdData {
    header: string;
    content: string;
}

const AdsPage: React.FC = () => {
    const [content, setContent] = useState<AdData[]>([]);
    const [user, setUser] = useState<IUser | undefined>(() => getCurrentUser());

    const loadAds = () => {
        getAds()
            .then(
                (response) => {
                    setContent(response.data);
                },
                (error) => {
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
            <Card className={"root"}>
                <CardContent>
                    <Typography className={"header"} gutterBottom>
                        {header}
                    </Typography>
                    <Typography className={"content"} color="textSecondary">
                        {content}
                    </Typography>
                </CardContent>
            </Card>
        );
    };

    return (
        <Container>
            <Box marginTop={4}>
                {user?.roles && user.roles.includes("ROLE_ADMIN") && <Link to="/addAds" style={{textDecoration: "none"}}>
                    <Button variant="contained" color="primary" sx={{height: 40}}>
                        Добавить объявление
                    </Button>
                </Link>}
                {Array.isArray(content) && content?.map((ad, index) => (
                    <Ad key={index} {...ad} />
                ))}
            </Box>
        </Container>
    );
};

export default AdsPage;

