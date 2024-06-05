import { Box, Grid, Link } from "@mui/material"
import { NavLink } from "react-router-dom"

const HaveToLogin = () => {
    return (
        <Box px={2} py={1}>
            Чтобы оставить комментарий,{' '}
            <Link to='/login' component={NavLink}>
                войдите
            </Link> в аккаунт
        </Box>
    )

}

export default HaveToLogin