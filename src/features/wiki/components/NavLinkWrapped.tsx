import { forwardRef, MouseEvent } from "react";
import { LinkProps, NavLink } from "react-router-dom";
import cn from 'classnames';

import styles from './NavLinkWrapped.module.css';
import { ExtendedCSSProperties } from "../types";

export interface NavLinkWrappedProps extends LinkProps {
    lvl: number;
}

const NavLinkWrapped = forwardRef<HTMLAnchorElement, NavLinkWrappedProps>(({ color, lvl, to, ...props }, ref) => {
    const muiClassName = props.className;

    const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
        const url = typeof to === 'string' ? to : to.pathname;

        if (url && url.endsWith('/llc')) {
            console.log("Hi");
        }

        if (props.onClick) {
            props.onClick(event);
        }
    };

    return (
        <NavLink
            ref={ref}
            {...props}
            to={to}
            onClick={handleClick}
            className={({ isActive, isPending }) =>
                cn(muiClassName, {
                    [styles.paddingLvl]: true,
                    [styles.link]: true,
                    [styles.linkActive]: isActive,
                    [styles.linkLoading]: isPending,
                })
            }
            style={{ '--list-deep-lvl': lvl } as ExtendedCSSProperties}
        />
    );
});

export default NavLinkWrapped;
