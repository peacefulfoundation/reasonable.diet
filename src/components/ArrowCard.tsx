import type { CollectionEntry } from 'astro:content';

type Props = {
  entry: CollectionEntry<'recipes'>;
};

export default function ArrowCard({ entry }: Props) {
  return (
    <a
      href={`/cook/${entry.slug}`}
      class="bg-card group flex items-center gap-3 rounded-lg border border-black/15 bg-scrim p-4 transition-colors duration-300 ease-in-out hover:bg-sheer/10 hover:dark:bg-scrim/10"
    >
      <div class="blend flex w-full flex-row items-center">
        <div class="flex w-full flex-col items-start gap-1">
          <ul class="mt-2 flex flex-wrap gap-1">
            {entry.data.cuisine.map((item: string) => (
              <li class="rounded bg-black/5 px-1 py-0.5 text-xs uppercase text-black/75 dark:bg-white/20 dark:text-white/75">
                {item}
              </li>
            ))}
          </ul>

          <div class="mt-2 font-semibold">{entry.data.title}</div>

          <div class="line-clamp-1 text-sm">{entry.data.description}</div>

          <ul class="mt-2 flex flex-wrap gap-1">
            {entry.data.tags.map((tag: string) => (
              <li class="rounded-full bg-sheer px-2 py-1 text-xs capitalize text-foreground">
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="stroke-current group-hover:stroke-black group-hover:dark:stroke-white"
        >
          <line
            x1="5"
            y1="12"
            x2="19"
            y2="12"
            class="translate-x-4 scale-x-0 transition-all duration-300 ease-in-out group-hover:translate-x-1 group-hover:scale-x-100"
          ></line>
          <polyline
            points="12 5 19 12 12 19"
            class="translate-x-0 transition-all duration-300 ease-in-out group-hover:translate-x-1"
          ></polyline>
        </svg>
      </div>
    </a>
  );
}
