// ORIGINAL SOURCE:: https://www.hover.dev/components/dropdown-menu
// Modified for modularity and TypeScript friendliness

import { type Dispatch, type SetStateAction, useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import type { DropdownItem, DropdownType } from "../../types/types";
import { useNavigate } from "react-router";

export default function DropdownMenu({ items }: DropdownType) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center justify-center">
      <motion.div animate={open ? "open" : "closed"} className="relative">
        <button
          onClick={() => setOpen((pv) => !pv)}
          className="flex items-center gap-2 px-3 py-2 rounded-md text-(--p-green) bg-(--s-green) hover:bg-(--s-h-green) transition-colors"
        >
          <motion.span variants={iconVariants}>
            <ChevronDown />
          </motion.span>
        </button>

        <motion.ul
          initial={wrapperVariants.closed}
          variants={wrapperVariants}
          style={{ originY: "top", translateX: "-50%" }}
          className="flex flex-col gap-2 p-1 rounded-lg bg-(--s-green) shadow-xl absolute top-[120%] left-[50%] w-fit overflow-hidden"
        >
          {items.map((item) => (
            <Option
              setOpen={setOpen}
              Icon={item.Icon}
              text={item.text}
              link={item.link}
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
  setOpen,
}: DropdownItem & { setOpen: Dispatch<SetStateAction<boolean>> }) => {
  const navigate = useNavigate();

  return (
    <motion.li
      variants={itemVariants}
      onClick={() => {
        navigate(link);
        setOpen(false);
      }}
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
