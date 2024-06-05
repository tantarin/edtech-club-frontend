import { Box, Typography } from "@mui/material";
import styles from './ChatMessage.module.css'
import cn from 'classnames';
import { IChatMessage } from "./context";


const ChatMessage = ({ data }: { data: IChatMessage }) => {
    const { id, from, message, datetime } = data;
    const isRight = from === 'user';
    return (
        <Box display='flex' flexDirection='column' alignItems={isRight ? 'flex-end' : 'flex-start'} component='li'>
            <Box className={styles.userInfo} component='div'>
                <Typography variant="caption" align={isRight ? 'right' : 'left'} component='span' sx={{ fontWeight: 700 }} >{from} :</Typography>
            </Box>
            <Box className={styles.message}>
                <Typography variant="body1" align={isRight ? 'right' : 'left'} paragraph>{message}</Typography>
            </Box>
        </Box>
    )
}

export default ChatMessage;