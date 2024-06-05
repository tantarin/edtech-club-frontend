import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import { useComments } from "./context";

const CommentsList = () => {
    const { comments, status } = useComments();
    const commentsCount = comments?.length;

    return (
        <Paper>
            <Box px={6} pt={3} pb={1}>
                <Typography variant="overline" component='p'>
                    Комментарии {commentsCount ? commentsCount : null}
                </Typography>
            </Box>
            <Box px={4} py={2} sx={{ transition: 'all 0.4s ease-in-out' }}>
                {status === "pending" ?
                    <div>loading...</div>
                    : status === "resolved" ?
                        <Grid container spacing={1} >
                            {comments!.map(({ author, text, time, id }, idx, arr) => (
                                <Grid key={id} item xs={12}>
                                    <Grid container spacing={1}>
                                        <Grid item xs={2}>
                                            <Box pl={2} pr={1} py={1}>
                                                <Box><Typography variant="overline">From: </Typography></Box>
                                                <Box><Typography variant="subtitle2">{author}</Typography></Box>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={10}>
                                            <Box pl={1} pr={2} py={1}>
                                                <Typography variant="body1">
                                                    {text}
                                                </Typography>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                    {idx + 1 !== arr.length ? <Divider /> : null}
                                </Grid>
                            ))}
                        </Grid>
                        : status === "rejected" ? <div>Error. Service is unavailable now. Please try later</div>
                            : null}
                {status === "resolved" && !commentsCount ? <Typography variant="body1">Пока нет комментариев. Стеньте первым!</Typography> : null}
            </Box>
        </Paper>
    )
}

export default CommentsList;