// ORIGINAL SOURCE:: https://www.hover.dev/components/dropdown-menu
// Last Accessed 15th June 2026
// Modified for modularity and TypeScript friendliness

import { type Dispatch, type SetStateAction, useEffect, useState } from "react";
import {
  ChevronDown,
  Grid2X2CheckIcon,
  HomeIcon,
  InfoIcon,
  SendIcon,
  TextSelectIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import type { DropdownItem, DropdownType } from "../../types/types";
import { useLocation, useNavigate } from "react-router";
import { useDisplayContext } from "../../contexts/display/DisplayContext";

export default function DropdownMenu({ items }: DropdownType) {
  const loc = useLocation();

  const [open, setOpen] = useState<boolean>(false);

  const [actionDisabled, setActionDisabled] = useState<boolean>(false);

  const { isSmallScreen } = useDisplayContext();

  const defaultItems: DropdownType = {
    items: [
      { text: "Home", Icon: HomeIcon, link: "/" },
      { text: "About", Icon: InfoIcon, link: "/about" },
      { text: "Projects", Icon: Grid2X2CheckIcon, link: "/projects" },
      { text: "CV", Icon: TextSelectIcon, link: "/cv" },
      { text: "Requuest", Icon: SendIcon, link: "/request" },
    ],
  };

  useEffect(() => {
    console.log(loc.pathname);
  });

  return (
    <div className="flex items-center justify-center">
      <div
        className="w-screen h-screen absolute inset-0"
        onClick={() => {
          if (!actionDisabled) setOpen(false);
        }}
      />
      <motion.div animate={open ? "open" : "closed"} className="relative z-10">
        <button
          onClick={() => {
            if (!actionDisabled) setOpen((x) => !x);
            setTimeout(() => {
              setActionDisabled(true);
            }, 50);
            setTimeout(() => {
              setActionDisabled(false);
            }, 1500);
          }}
          className="flex items-center gap-2 px-3 py-2 rounded-md text-(--p-green) bg-(--s-green) hover:bg-(--s-h-green) transition-all"
          disabled={actionDisabled}
        >
          <motion.span variants={iconVariants}>
            <ChevronDown />
          </motion.span>
        </button>

        <motion.ul
          initial={wrapperVariants.closed}
          variants={wrapperVariants}
          style={{ originY: "top", translateX: "-50%" }}
          className={`flex flex-col gap-2 p-1 rounded-lg bg-(--s-green) shadow-xl absolute top-[120%] left-[50%] w-fit overflow-hidden ${isSmallScreen && "-translate-x-7.5"}`}
        >
          {items
            ? items.map((item) => (
                <Option
                  setOpen={setOpen}
                  Icon={item.Icon}
                  text={item.text}
                  link={item.link}
                  hidden={item.link === loc.pathname}
                />
              ))
            : defaultItems.items?.map((item) => (
                <Option
                  setOpen={setOpen}
                  Icon={item.Icon}
                  text={item.text}
                  link={item.link}
                  hidden={item.link === loc.pathname}
                />
              ))}
        </motion.ul>
      </motion.div>
    </div>
  );
}

const Option = ({
  text,
  Icon,
  link,
  hidden,
  setOpen,
}: DropdownItem & {
  setOpen: Dispatch<SetStateAction<boolean>>;
  hidden: boolean;
}) => {
  const navigate = useNavigate();

  return (
    <motion.li
      variants={itemVariants}
      onClick={() => {
        navigate(link);
        setOpen(false);
      }}
      hidden={hidden}
      className="flex items-center gap-2 w-full p-2 text-xs font-medium whitespace-nowrap rounded-md hover:bg-(--p-green) text-(--p-green) hover:text-(--p-h-green) transition-colors cursor-pointer"
    >
      <motion.span variants={actionIconVariants}>
        <Icon size={24} />
      </motion.span>
      <span>{text}</span>
    </motion.li>
  );
};

const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const iconVariants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
    },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: {
      when: "afterChildren",
    },
  },
};

const actionIconVariants = {
  open: { scale: 1, y: 0 },
  closed: { scale: 0, y: -7 },
};
