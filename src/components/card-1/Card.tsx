// ORIGINAL SOURCE:: https://www.hover.dev/components/cards
// Last Accessed 15th June 2026
// Modified for modularity and TypeScript friendliness

import type { CardItem, CardType } from "../../types/types";

export default function Cards({ items }: CardType) {
  return (
    <div className="p-4">
      <p className="text-xl font-semibold mb-4 text-(--s-h-green)">Socials</p>

      <div className="flex gap-4">
        {items.map((item) => (
          <Card
            key={item.title}
            title={item.title}
            subtitle={item.subtitle}
            link={item.link}
            Icon={item.Icon}
          />
        ))}
      </div>
    </div>
  );
}

function Card({ title, subtitle, Icon, link }: CardItem) {
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

      <Icon
        className="
          mb-3 text-2xl
          text-(--s-h-green)
          group-hover:text-(--p-green)
          transition-colors
          relative z-10 duration-300
        "
      />

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
}
