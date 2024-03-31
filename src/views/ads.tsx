import React, { useEffect, useState } from "react";
import { Container, Button } from "@mui/material";
import { Link } from "react-router-dom";
import IUser from "../types/user.type";
import { getCurrentUser } from "../services/auth.service";
import { getAds } from "../services/user.service";
import SingleAd from "../components/Ads/SingleAd";

interface AdData {
    id: bigint;
    header: string;
    content: string;
}

const Ads: React.FC = () => {
    const [content, setContent] = useState<AdData[]>([]);
    const [user, setUser] = useState<IUser | undefined>(() => getCurrentUser());

    const loadAds = () => {
        getAds().then(
            (response) => {
                setContent(response.data);
            },
            (error) => {
                const _content =
                    (error.response && error.response.data) ||
                    error.message ||
                    error.toString();
                const errorId = error.response ? error.response.data.id : null;
                setContent([{ id: errorId, header: "Error", content: _content }]);
            }
        );
    };

    useEffect(() => {
        loadAds();
    }, []);

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
                            content.map((ad, index) => <SingleAd key={index} {...ad} />)}
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Ads;
