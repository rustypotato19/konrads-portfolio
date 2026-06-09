import {
  Grid2X2CheckIcon,
  HomeIcon,
  InfoIcon,
  TextSelectIcon,
  UsersIcon,
} from "lucide-react";
import type { DropdownType } from "../../types/types";
import DropdownMenu from "../dropdown-menu/DropdownMenu";

export default function Header() {
  const dropdownItems: DropdownType = {
    items: [
      { text: "Home", Icon: HomeIcon, link: "/" },
      { text: "About", Icon: InfoIcon, link: "/about" },
      { text: "Projects", Icon: Grid2X2CheckIcon, link: "/projects" },
      { text: "CV", Icon: TextSelectIcon, link: "/cv" },
      { text: "Socials", Icon: UsersIcon, link: "/socials" },
    ],
  };

  return (
    <div className="w-2/3 h-fit flex justify-between items-end p-10 mx-auto">
      <p className="text-5xl font-bold flex">
        <p className="text-(--s-green)">aboutkonrad</p>
        <p className="text-(--p-green)">.com</p>
      </p>
      <div className="text-white">
        <DropdownMenu items={dropdownItems.items} />
      </div>
    </div>
  );
}
