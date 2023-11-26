import React from "react";
import {makeStyles} from "@mui/styles";
import {Card, CardContent, Typography} from "@mui/material";

interface AdProps {
    title: string;
    description: string;
}

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        marginBottom: 16,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
    },
    description: {
        fontSize: 14,
    },
});

const Ad: React.FC<AdProps> = ({ title, description }) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} gutterBottom>
                    {title}
                </Typography>
                <Typography className={classes.description} color="textSecondary">
                    {description}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default Ad;
