import * as AuthService from "../../../services/auth.service";
import Collapse from '@mui/material/Collapse';

import styles from './Comments.module.css';
import CommentsList from './CommentsList';
import SendCommentForm from './SendCommentForm';
import HaveToLogin from './HaveToLogin';
import { CommentsProvider } from "./context";

interface Props {
    isOpen: boolean;
    comments?: any[];
}

const Comments = ({ isOpen, comments }: Props) => {
    const user = AuthService.getCurrentUser();

    return (
        <Collapse in={isOpen} timeout="auto" unmountOnExit>
            <div className={styles.container}>
                <CommentsList />
                {user ? <SendCommentForm /> : <HaveToLogin />}
            </div>
        </Collapse>
    );
}

export default Comments;