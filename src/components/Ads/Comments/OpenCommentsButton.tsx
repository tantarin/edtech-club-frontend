import { IconButton } from "@mui/material";
import { useComments } from "./context";
import cn from 'classnames';

import styles from './OpenCommentsButton.module.css'

interface Props {
    onClick?: () => void;
    isOpen: boolean;
}

const OpenCommentsButton = ({ onClick, isOpen }: Props) => {
    const { comments } = useComments();
    const commentsCount = comments?.length
    return (
        <IconButton onClick={onClick}>
            <div className={cn("flex items-center justify-center text-xs text-slate-500", {
                [styles.isOpen]: isOpen
            })}>
                <svg width="24" height="24" className="mr-2"
                    focusable="false" aria-hidden="true"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 4v7H5.17L4 12.17V4zm1-2H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1m5 4h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1">
                    </path>
                </svg>
                <span>{commentsCount ? commentsCount : null}</span>
            </div>
        </IconButton>
    )
}

export default OpenCommentsButton;