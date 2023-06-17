import { MouseEvent, MouseEventHandler } from 'react';

export interface ButtonProps {
    content: string;
    mailIcon?: Boolean;
    arrowIcon?: Boolean;
    animateOnLoad?: Boolean;
}

export interface childrenProps {
    id: number,
    path: string,
    title: string,
}

export interface navListTypes {
    id: number,
    path: string,
    title: string,
    children: childrenProps[]
}

export interface  DropdownTypes {
    menuItems: childrenProps[],
    hideSubMenu: MouseEventHandler<HTMLUListElement>
}