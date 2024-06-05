import * as AuthService from "../../../services/auth.service";
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Box from '@mui/material/Box';

import styles from './SendCommentForm.module.css'
import { Grid } from '@mui/material';
import SubmitButton from '../../SubmitButton';
import { useComments } from './context';

const SendCommentFormSchema = Yup.object().shape({
    message: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
});

const SendCommentForm = () => {
    const { addComment } = useComments();
    const userName = AuthService.getCurrentUser();

    const formik = useFormik({
        initialValues: {
            message: '',
        },
        validationSchema: SendCommentFormSchema,
        onSubmit: async (val, { setStatus, resetForm }) => {
            setStatus('pending')
            await addComment({
                author: userName,
                text: val.message,
                time: new Date(Date.now()).toISOString(),
                id: Date.now()
            })
            setStatus('success');
            resetForm();
        },
    });

    return (
        <form onSubmit={formik.handleSubmit} noValidate>
            <Grid container spacing={2}>
                <Grid display="flex" item xs={9}>
                    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="flex-start" p={2} width='100%'>
                        <label
                            className="block uppercase text-gray-700 text-xs font-bold mb-2"
                            htmlFor="commentMessage"
                        >
                            Message
                        </label>
                        <TextareaAutosize
                            id="commentMessage"
                            name="message"
                            className={styles.commentField}
                            minRows={4}
                            placeholder="Место для вашего сообщения"
                            onChange={formik.handleChange}
                            value={formik.values.message}
                        />
                    </Box>
                </Grid>
                <Grid display="flex" item xs={3}>
                    <Box display="flex" justifyContent="center" alignItems="center" p={1}>
                        <SubmitButton status={formik.status} />
                    </Box>
                </Grid>
            </Grid>
        </form>
    )
}

export default SendCommentForm;

