import React, { useEffect, useState } from "react";
import Ad from "./Ad";
import {Box, Container} from "@mui/material"; // Путь к вашему компоненту Ad

interface AdData {
    id: number;
    title: string;
    description: string;
}

const AdsPage: React.FC = () => {
    const [ads, setAds] = useState<AdData[]>([]);

    // Загрузка объявлений (замените на свой метод загрузки)
    const loadAds = async () => {
        // Ваш код для загрузки объявлений
        // const data: AdData[] = await fetchData(); // Замените fetchData на ваш метод загрузки данных
        // setAds(data);
    };

    useEffect(() => {
        loadAds();
    }, []); // Загрузка при монтировании компонента

    return (
        <Container>
            <Box marginTop={4}>
                {ads.map((ad) => (
                    <Ad key={ad.id} title={ad.title} description={ad.description} />
                ))}
            </Box>
        </Container>
    );
};

export default AdsPage;
