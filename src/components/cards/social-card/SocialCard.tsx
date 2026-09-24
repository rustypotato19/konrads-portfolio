import type { CardItem, CardType } from "../../../types/types";

export default function SocialCards({ items }: CardType) {
  return (
    <div className="mt-4 w-full">
      {/* Mobile: 2-col grid. Desktop: Flex row. */}
      <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-row sm:flex-wrap sm:gap-4">
        {items.map((item) => (
          <SocialCard
            key={item.title}
            title={item.title}
            subtitle={item.subtitle}
            link={item.link}
            Icon={item.Icon}
            isMobile={item.isMobile}
          />
        ))}
      </div>
    </div>
  );
}

function SocialCard({ title, subtitle, Icon, link, isMobile }: CardItem) {
  if (!isMobile)
    return (
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="
          w-fit p-4 rounded-xl
          border border-(--s-green)
          relative overflow-hidden
          group
          bg-(--p-green)
          transition-all duration-300
          hover:border-(--s-h-green)
        "
      >
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

        {/* BG ICON */}
        <Icon
          className="
            absolute z-10 -top-12 -right-12
            text-9xl
            text-(--s-green)/20
            group-hover:text-(--p-green)/20
            group-hover:rotate-12
            transition-all duration-300
          "
        />

        <div className="flex gap-2 justify-start">
          {/* Small Icon */}
          <Icon
            className="
              mb-3 text-2xl
              text-(--s-h-green)
              group-hover:text-(--p-green)
              transition-colors
              relative z-10 duration-300
            "
          />

          {/* Title */}
          <h3
            className="
              font-semibold text-lg
              text-(--s-h-green)
              group-hover:text-(--p-green)
              relative z-10
              duration-300
            "
          >
            {title}
          </h3>
        </div>

        {/* Subtitle */}
        <p
          className="
            text-(--t-h-green)/40
            group-hover:text-(--p-green)/80
            relative z-10
            duration-300
          "
        >
          {subtitle}
        </p>
      </a>
    );

  /* Mobile Styling: Smaller, 2-column grid, truncated text */
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="
        /* Mobile: Compact padding */
        p-2 rounded-lg
        /* Desktop: Larger padding */
        sm:p-4 sm:rounded-xl
        /* Border & Background */
        border border-(--s-green)
        relative overflow-hidden
        group
        bg-(--p-green)
        transition-all duration-300
        hover:border-(--s-h-green)
      "
    >
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

      {/* BG ICON: Smaller on mobile */}
      <Icon
        className="
          absolute z-10 -top-8 -right-8
          text-5xl
          text-(--s-green)/15
          group-hover:text-(--p-green)/15
          group-hover:rotate-12
          transition-all duration-300
          /* Desktop: Larger background icon */
          sm:text-9xl sm:-top-12 sm:-right-12 sm:text-(--s-green)/20
        "
      />

      <div className="flex gap-1.5 justify-start items-center sm:gap-2">
        {/* Small Icon: Smaller on mobile */}
        <Icon
          className="
            text-lg
            text-(--s-h-green)
            group-hover:text-(--p-green)
            transition-colors
            relative z-10 duration-300
            /* Desktop: Larger icon */
            sm:text-2xl sm:mb-3
          "
        />

        {/* Title: Smaller font on mobile */}
        <h3
          className="
            font-semibold text-sm
            text-(--s-h-green)
            group-hover:text-(--p-green)
            relative z-10
            duration-300
            /* Desktop: Larger text */
            sm:text-lg sm:mb-0
          "
        >
          {title}
        </h3>
      </div>

      {/* Subtitle: Truncated and smaller on mobile */}
      <p
        className="
          truncate
          text-xs
          text-(--t-h-green)/40
          group-hover:text-(--p-green)/80
          relative z-10
          duration-300
          /* Desktop: Larger text, no truncation */
          sm:text-base sm:mt-1 sm:truncate-none
        "
      >
        {subtitle}
      </p>
    </a>
  );
}
