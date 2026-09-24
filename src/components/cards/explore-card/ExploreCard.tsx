import { useNavigate } from "react-router";
import type { ExploreCardItem, ExploreCardType } from "../../../types/types";

export default function ExploreCards({ items }: ExploreCardType) {
  return (
    <div className="mt-4 w-full">
      <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-row sm:flex-wrap sm:gap-4">
        {items.map((item) => (
          <ExploreCard
            key={item.title}
            title={item.title}
            link={item.link}
            isMobile={item.isMobile}
          />
        ))}
      </div>
    </div>
  );
}

function ExploreCard({ title, link, isMobile }: ExploreCardItem) {
  const navigate = useNavigate();

  if (!isMobile) {
    return (
      <button
        type="button"
        onClick={() => navigate(link)}
        className="
          w-fit p-4 rounded-xl
          border border-(--s-green)
          relative overflow-hidden
          group
          bg-(--p-green)
          transition-all duration-300
          hover:border-(--s-h-green)
          text-left
          cursor-pointer
        "
      >
        {/* Hover background */}
        <div
          className="
            absolute inset-0
            bg-linear-to-r
            from-(--s-green)
            to-(--s-h-green)
            translate-y-full
            group-hover:translate-y-0
            transition-transform duration-300
          "
        />

        <h3
          className="
            relative z-10
            font-semibold text-lg
            text-(--s-h-green)
            group-hover:text-(--p-green)
            transition-colors duration-300
          "
        >
          {title}
        </h3>
      </button>
    );
  }

  /* Mobile */
  return (
    <button
      type="button"
      onClick={() => navigate(link)}
      className="
        w-full
        p-2 rounded-lg
        border border-(--s-green)
        relative overflow-hidden
        group
        bg-(--p-green)
        transition-all duration-300
        hover:border-(--s-h-green)
        text-left
        cursor-pointer
        sm:w-fit
        sm:p-4
        sm:rounded-xl
      "
    >
      {/* Hover background */}
      <div
        className="
          absolute inset-0
          bg-linear-to-r
          from-(--s-green)
          to-(--s-h-green)
          translate-y-full
          group-hover:translate-y-0
          transition-transform duration-300
        "
      />

      <h3
        className="
          relative z-10
          font-semibold text-sm
          text-(--s-h-green)
          group-hover:text-(--p-green)
          transition-colors duration-300
          sm:text-lg
        "
      >
        {title}
      </h3>
    </button>
  );
}
