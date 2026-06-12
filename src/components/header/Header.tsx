import DropdownMenu from "../dropdown-menu/DropdownMenu";
import { useDisplayContext } from "../../contexts/display/displayContext";

export default function Header() {
  const { isSmallScreen } = useDisplayContext();

  // mobile
  if (isSmallScreen) {
    return (
      <header className="w-full h-20 flex flex-row gap-3 p-4">
        <div className="h-full flex items-center justify-between">
          <div className="text-2xl font-bold flex">
            <span className="text-(--s-green)">aboutkonrad</span>
            <span className="text-(--p-green)">.com</span>
          </div>
        </div>

        <div className="w-full h-full flex items-center justify-end text-white">
          <DropdownMenu />
        </div>
      </header>
    );
  }

  // desktop
  return (
    <header className="w-2/3 h-fit flex justify-between items-end p-10 mx-auto">
      <div className="text-5xl font-bold flex">
        <span className="text-(--s-green)">aboutkonrad</span>
        <span className="text-(--p-green)">.com</span>
      </div>

      <div className="text-white">
        <DropdownMenu />
      </div>
    </header>
  );
}
