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
        <Paper className="shadow-lg rounded-lg p-6 bg-white">
            <Box className="px-6 pt-3 pb-1">
                <Typography variant="overline" component='p' className="text-gray-700 text-xs uppercase">
                    Комментарии {commentsCount ? commentsCount : null}
                </Typography>
            </Box>
            <Box className="px-4 py-2 transition-all duration-400 ease-in-out">
                {status === "pending" ?
                    <div className="text-center text-gray-500">loading...</div>
                    : status === "resolved" ?
                        <Grid container spacing={1} >
                            {comments!.map(({ author, text, time, id }, idx, arr) => (
                                <Grid key={id} item xs={12}>
                                    <Grid container spacing={1}>
                                        <Grid item xs={2}>
                                            <Box className="pl-2 pr-1 py-1">
                                                <Box><Typography variant="overline" className="text-gray-600">От кого: </Typography></Box>
                                                <Box><Typography variant="subtitle2" className="text-gray-800">{author}</Typography></Box>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={10}>
                                            <Box className="pl-1 pr-2 py-1">
                                                <Typography variant="body1" className="text-gray-900">
                                                    {text}
                                                </Typography>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                    {idx + 1 !== arr.length ? <Divider className="my-2" /> : null}
                                </Grid>
                            ))}
                        </Grid>
                        : status === "rejected" ? <div className="text-center text-red-500">Error. Service is unavailable now. Please try later</div>
                            : null}
                {status === "resolved" && !commentsCount ? <Typography variant="body1" className="text-center text-gray-500">Пока нет комментариев. Стеньте первым!</Typography> : null}
            </Box>
        </Paper>
    )
}

export default CommentsList;
