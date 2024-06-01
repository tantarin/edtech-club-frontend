import { PropsWithChildren, useRef, useState } from "react"
import Slide from '@mui/material/Slide';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import { ClickAwayListener } from '@mui/base';
import Grid from "@mui/material/Grid";
import LikesPannel from "./LikesPannel";


const baseBtnClasses = `inline-flex items-center text-white text-xs font-bold uppercase px-2 py-1 rounded shadow outline-none focus:outline-none mr-2`;
const primaryBtnClasses = `bg-blue-700 active:bg-blue-900 hover:shadow-lg`
const btnClasses = `${baseBtnClasses} ${primaryBtnClasses}`

const StartupCard: React.FC<PropsWithChildren> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(() => false)
    const containerRef = useRef(null);

    const handleCardClick = () => {
        setIsOpen((state) => !state)
    }

    const handleAwayClick: (event: MouseEvent | TouchEvent) => void = (e) => {
        e.stopPropagation();
        setIsOpen(false)
    }

    return (
        <div onClick={!isOpen ? handleCardClick : undefined} className="h-full transform rounded-xl bg-white shadow-xl transition duration-300">
            <div className="overflow-hidden h-full rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
                <div ref={containerRef} className='flex flex-column h-full'>
                    {children}
                    <Backdrop
                        open={isOpen}
                        sx={{
                            borderRadius: '0.75rem',
                        }}
                    >
                        <Slide
                            in={isOpen}
                            direction="up"
                            container={containerRef.current}
                        >
                            <Box
                                sx={{
                                    marginTop: 'auto',
                                    width: '100%',
                                    borderTopLeftRadius: 0,
                                    borderTopRightRadius: 0,
                                    borderBottomLeftRadius: '0.75rem',
                                    borderBottomRightRadius: '0.75rem',
                                    padding: '0',
                                    overflow: 'hidden'
                                }}
                            >
                                {isOpen ? <ClickAwayListener
                                    onClickAway={handleAwayClick}>
                                    <Paper
                                        sx={{
                                            width: '100%',
                                            borderTopLeftRadius: 0,
                                            borderTopRightRadius: 0,
                                            borderBottomLeftRadius: '0.75rem',
                                            borderBottomRightRadius: '0.75rem',
                                            padding: '0.4rem 0.2rem'
                                        }}
                                    >
                                        <Grid container spacing={0}>
                                            <Grid item display="flex" flex="1">
                                                <LikesPannel />
                                            </Grid>
                                            <Grid item display="flex">
                                                <button
                                                    className={btnClasses}
                                                    type="submit"
                                                    style={{ transition: "all .15s ease", marginLeft: 'auto' }}
                                                >
                                                    Стать инвестором
                                                </button>
                                            </Grid>
                                        </Grid>
                                    </Paper>
                                </ClickAwayListener> : null}
                            </Box>
                        </Slide>
                    </Backdrop>
                </div>
            </div>
        </div >
    )
}

export default StartupCard;