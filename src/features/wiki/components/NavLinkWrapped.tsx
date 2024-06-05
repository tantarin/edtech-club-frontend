import { forwardRef } from "react";
import { LinkProps, NavLink } from "react-router-dom";
import cn from 'classnames';

import styles from './NavLinkWrapped.module.css';
import { ExtendedCSSProperties } from "../types";

export interface NavLinkWrappedProps extends LinkProps {
    lvl: number;
}

const NavLinkWrapped = forwardRef<HTMLAnchorElement, NavLinkWrappedProps>(({ color, lvl, ...props }, ref) => {
    const muiClassName = props.className;
    return <NavLink ref={ref} {...props} className={({ isActive, isPending }) =>
        cn(muiClassName, {
            [styles.paddingLvl]: true,
            [styles.link]: true,
            [styles.linkActive]: isActive,
            [styles.linkLoading]: isPending,

        })
    }
        style={{'--list-deep-lvl': lvl} as ExtendedCSSProperties}
    />
})

export default NavLinkWrapped;