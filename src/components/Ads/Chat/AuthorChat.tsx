import { Box, Paper, Stack, Typography } from "@mui/material";

import styles from './AuthorChat.module.css'
import MessageSendForm from "./MessageSendForm";
import { useChat } from "./context";
import ChatMessage from "./ChatMessage";


const AuthorChat = () => {
    const { msgList } = useChat()

    return (
        <Paper className={styles.container} component='section'>
            <Box display='flex' flexDirection='column' px={2} py={2} width='100%' height='100%'>
                <Box textAlign='center' mt={1} mb={.5}>
                    <Typography>
                        Чат с автором проекта
                    </Typography>
                    <Box mb={.5}>Инфомация о проекте</Box>
                    <Box mb={.5}>Инфомация из профиля автора</Box>
                </Box>
                <Box className={styles.chatFrame}>
                    <Stack spacing={2} component='ul'>
                        {msgList != null ?
                            msgList.map((message) => <ChatMessage key={message.id} data={message} />)
                            : null

                        }
                    </Stack>
                </Box>
                <Box display='flex' flexDirection='column' flexBasis='25%'>
                    <MessageSendForm />
                </Box>
            </Box>
        </Paper>)
}

export default AuthorChat;