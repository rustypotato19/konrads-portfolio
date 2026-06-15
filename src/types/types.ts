import type { LucideIcon } from "lucide-react";
import type { IconType } from "react-icons";

export type DropdownType = {
    items?: DropdownItem[];
}

export type DropdownItem = {
    Icon: LucideIcon;
    text: string;
    link: string;
};

export type CardType = {
    items: CardItem[];
}

export type CardItem = {
    title: string;
    subtitle: string;
    Icon: LucideIcon | IconType;
    link: string;
};