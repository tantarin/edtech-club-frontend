import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { yellow } from '@mui/material/colors';
import Box from '@mui/material/Box';
import Radio from '@mui/material/Radio';
import { FormEventHandler, useState } from 'react';

const LikesPannel = () => {
    const [value, setValue] = useState<string | null>(null)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue((e.target as HTMLInputElement).value);
    };

    const handleSubmit: FormEventHandler = (e) => {
        e.stopPropagation();
        e.preventDefault();
    }


    return (
        <form onSubmit={handleSubmit}>
            <Box display='flex' flex={0} alignItems='center'>
                <Radio
                    checked={value === 'like'}
                    onChange={handleChange}
                    value="like"
                    name="radio-buttons"
                    inputProps={{ 'aria-label': 'like' }}
                    icon={<ThumbUpIcon fontSize="small" />}
                    checkedIcon={<ThumbUpIcon fontSize="small" sx={{ color: yellow[800] }} />}
                />
                <Radio
                    checked={value === 'dislike'}
                    onChange={handleChange}
                    value="dislike"
                    name="radio-buttons"
                    inputProps={{ 'aria-label': 'dislike' }}
                    icon={<ThumbDownIcon fontSize="small" />}
                    checkedIcon={<ThumbDownIcon fontSize="small" sx={{ color: yellow[800] }} />}
                />
            </Box>
        </form>
    )
}

export default LikesPannel;