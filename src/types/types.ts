import type { LucideIcon } from "lucide-react";

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
    Icon: LucideIcon;
    link: string;
};