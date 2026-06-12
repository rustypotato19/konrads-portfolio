import type { LucideIcon } from "lucide-react";

export type DropdownType = {
    items?: DropdownItem[];
}

export type DropdownItem = {
    Icon: LucideIcon;
    text: string;
    link: string;
};