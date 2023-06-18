import { MouseEvent, MouseEventHandler } from "react";

export interface ButtonProps {
    content: string;
    mailIcon?: Boolean;
    arrowIcon?: Boolean;
    animateOnLoad?: Boolean;
}

export interface SubmenuType {
    id: number;
    title: string;
    path: string;
}

export interface navListTypes {
    id: number;
    title: string;
    path: string;
    submenu?: SubmenuType[];
}


export interface DropdownTypes {
    menuItems: SubmenuType[];
}
