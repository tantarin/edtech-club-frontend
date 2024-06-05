import * as AuthService from "../../../services/auth.service";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Box from '@mui/material/Box';

import styles from './MessageSendForm.module.css'
import { Input } from '@mui/material';
import SubmitButton from '../../SubmitButton';
import { useChat } from "./context";

const SendCommentFormSchema = Yup.object().shape({
    message: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
});

const MessageSendForm = () => {
    const { addMessage } = useChat();
    const userName = AuthService.getCurrentUser();

    const formik = useFormik({
        initialValues: {
            message: '',
        },
        validationSchema: SendCommentFormSchema,
        onSubmit: async (val, { setStatus, resetForm }) => {
            setStatus('pending')
            await addMessage({
                from: userName || 'user',
                message: val.message,
                datetime: new Date(Date.now()).toISOString(),
                id: Date.now()
            })
            setStatus('success');
            resetForm();
        },
    });
    
    return (
        <form onSubmit={formik.handleSubmit} noValidate>
            <Box display="flex" flexDirection="column" justifyContent="center" alignItems="flex-start" p={2} width='100%'>
                <label
                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="commentMessage"
                >
                    Отправить сообщение
                </label>
                <Input
                    multiline
                    id="commentMessage"
                    name="message"
                    className={styles.textarea}
                    minRows={4}
                    placeholder="Место для вашего сообщения"
                    onChange={formik.handleChange}
                    value={formik.values.message}
                />
            </Box>
            <Box display="flex" justifyContent="center" alignItems="center" p={1}>
                <SubmitButton className={styles.submitButton} status={formik.status} />
            </Box>
        </form>
    )
}

export default MessageSendForm;

