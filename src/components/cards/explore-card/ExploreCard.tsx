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
            icon={item.icon}
          />
        ))}
      </div>
    </div>
  );
}

function ExploreCard({ title, link, isMobile, icon: Icon }: ExploreCardItem) {
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

        {/* Background icon */}
        <Icon
          className="
            absolute z-10 -top-10 -right-10
            text-8xl
            text-(--s-green)/20
            group-hover:text-(--p-green)/20
            group-hover:rotate-12
            transition-all duration-300
          "
        />

        <div className="flex items-center gap-2 relative z-10">
          <Icon
            className="
              text-2xl
              text-(--s-h-green)
              group-hover:text-(--p-green)
              transition-colors duration-300
            "
          />

          <h3
            className="
              font-semibold text-lg
              text-(--s-h-green)
              group-hover:text-(--p-green)
              transition-colors duration-300
            "
          >
            {title}
          </h3>
        </div>
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

      {/* Background icon */}
      <Icon
        className="
          absolute z-10 -top-6 -right-6
          text-5xl
          text-(--s-green)/15
          group-hover:text-(--p-green)/15
          group-hover:rotate-12
          transition-all duration-300
          sm:text-8xl
          sm:-top-10
          sm:-right-10
          sm:text-(--s-green)/20
        "
      />

      <div
        className="
          flex items-center gap-1.5
          relative z-10
          sm:gap-2
        "
      >
        {/* Small icon */}
        <Icon
          className="
            text-lg
            text-(--s-h-green)
            group-hover:text-(--p-green)
            transition-colors duration-300
            sm:text-2xl
          "
        />

        {/* Title */}
        <h3
          className="
            font-semibold text-sm
            text-(--s-h-green)
            group-hover:text-(--p-green)
            transition-colors duration-300
            sm:text-lg
          "
        >
          {title}
        </h3>
      </div>
    </button>
  );
}
