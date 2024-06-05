import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Collapse from '@mui/material/Collapse';
import React, { PropsWithChildren, useState } from 'react';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import { useFilter } from '../context/FIlterContext';

import { KnowlageItem, mockListItems } from '../constants';
import NavLinkWrapped, { NavLinkWrappedProps } from './NavLinkWrapped';


function CollapseListItemButton({ children, name, to, lvl = 0 }: PropsWithChildren<Partial<KnowlageItem> & NavLinkWrappedProps>) {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <>
            <ListItem>
                <NavLinkWrapped to={to} lvl={lvl - 1} onClick={() => setIsOpen((prev) => !prev)}>
                    {isOpen ? <KeyboardArrowDownRoundedIcon fontSize='small' /> : <KeyboardArrowRightRoundedIcon fontSize='small' />}
                    {name}
                </NavLinkWrapped>
            </ListItem>
            <Collapse in={isOpen} timeout="auto" unmountOnExit>
                {children}
            </Collapse>
        </>
    );
}


function renderList(list: KnowlageItem[] | null[], { deepLvl, parentLink }: { deepLvl?: number, parentLink?: string } = {}) {
    const lvl = deepLvl || 1;
    return list.map((item) => {
        if (!item) return null;
        const { id, name, child, link } = item;
        const target = (parentLink || '') + link;
        if (Array.isArray(child)) {
            return (<CollapseListItemButton key={`p${lvl}-${id}`} lvl={lvl} name={name} to={target}>
                <List component="div">
                    {renderList(child, { deepLvl: lvl + 1, parentLink: target })}
                </List>
            </CollapseListItemButton>)
        }

        return (
            <ListItem key={`p${lvl}-${id}`}>
                <NavLinkWrapped to={target} lvl={lvl}>
                    {name}
                </NavLinkWrapped>
            </ListItem>
        )
    })
}

function filterItems(items: typeof mockListItems, filter: string) {
    return items.map((item) => {
        const isItemFits = item.name.toLowerCase().includes(filter);
        if (Array.isArray(item.child)) {
            const filtredChildren = filterItems(item.child, filter).filter((i) => i != null);
            const isChildFits = !!filtredChildren.length;

            if (!isChildFits && !isItemFits) {
                return null;
            }

            const newItem = { ...item };
            // @ts-ignore
            newItem.child = !isChildFits ? item.child : filtredChildren
            return newItem
        }

        return isItemFits ? item : null;
    })
}

const WikiNav = () => {
    const { filter } = useFilter();
    const items = React.useMemo(() => filterItems(mockListItems, filter.toLowerCase()).filter((i) => i != null), [filter])

    return (
        <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            disablePadding
        >
            {/* @ts-ignore */}
            {renderList(items, { parentLink: '/wiki' })}
        </List>
    );
}

export default WikiNav