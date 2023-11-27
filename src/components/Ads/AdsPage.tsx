import React, { useEffect, useState } from "react";
import { Box, Card, CardContent, Container, Typography } from "@mui/material";
import { getAds } from "../../services/user.service";
import { makeStyles } from "@mui/styles";

interface AdData {
    header: string;
    content: string;
}

const AdsPage: React.FC = () => {
    const [content, setContent] = useState<AdData[]>([]);

    const useStyles = makeStyles({
        root: {
            minWidth: 275,
            marginBottom: 16,
        },
        header: {
            fontSize: 18,
            fontWeight: "bold",
        },
        content: {
            fontSize: 14,
        },
    });

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
        const classes = useStyles();

        return (
            <Card className={classes.root}>
                <CardContent>
                    <Typography className={classes.header} gutterBottom>
                        {header}
                    </Typography>
                    <Typography className={classes.content} color="textSecondary">
                        {content}
                    </Typography>
                </CardContent>
            </Card>
        );
    };

    return (
        <Container>
            <Box marginTop={4}>
                {content.map((ad, index) => (
                    <Ad key={index} {...ad} />
                ))}
            </Box>
        </Container>
    );
};

export default AdsPage;

