import ToggleButton from "@mui/material/ToggleButton";
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { useState } from "react";
import AuthorChat from "./AuthorChat";
import { ChatProvider } from "./context";

interface Props {
    adInfo: any
}

const OpenChatButton = ({adInfo}: Props) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleDrawer =
    (open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setIsOpen(open);
    };


    return (
        <ChatProvider>
            <ToggleButton
                value="check"
                selected={isOpen}
                onChange={() => setIsOpen((prev) => !prev)}
            >
                Открыть чат
            </ToggleButton>
            <SwipeableDrawer
                anchor='right'
                open={isOpen}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
            >
                <AuthorChat />
            </SwipeableDrawer>
        </ChatProvider>
    )
}

export default OpenChatButton;