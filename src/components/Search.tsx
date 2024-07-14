import ArrowCard from '@/components/ArrowCard';
import type { CollectionEntry } from 'astro:content';
import Fuse from 'fuse.js';
import { createEffect, createSignal } from 'solid-js';

type Props = {
  data: CollectionEntry<'recipes'>[];
};

export default function Search({ data }: Props) {
  const [query, setQuery] = createSignal('');
  const [results, setResults] = createSignal<CollectionEntry<'recipes'>[]>([]);

  const fuse = new Fuse(data, {
    keys: [
      'slug',
      'data.title',
      'data.description',
      'data.cuisine',
      'data.tags',
    ],
    includeMatches: true,
    minMatchCharLength: 2,
    threshold: 0.4,
  });

  createEffect(() => {
    if (query().length < 2) {
      setResults([]);
    } else {
      setResults(fuse.search(query()).map((result) => result.item));
    }
  });

  function onInput(e: Event) {
    const target = e.target as HTMLInputElement;
    setQuery(target.value);
  }

  return (
    <div class="flex flex-col">
      <div class="relative">
        <input
          name="search"
          type="text"
          value={query()}
          onInput={onInput}
          autocomplete="off"
          spellcheck={false}
          placeholder="What are you looking for?"
          class="w-full rounded border border-black/10 bg-black/5 px-2.5 py-1.5 pl-10 text-black outline-none focus:border-black dark:border-white/20 dark:bg-white/15 dark:text-white focus:dark:border-white"
        />
        <svg class="absolute left-1.5 top-1/2 size-6 -translate-y-1/2 stroke-current">
          <use href={`/ui.svg#search`} />
        </svg>
      </div>
      {query().length >= 2 && results().length ? (
        <div class="mt-12">
          <div class="mb-2 text-sm uppercase">
            Found {results().length} results for {`'${query()}'`}
          </div>
          <ul class="flex flex-col gap-3">
            {results().map((result) => (
              <li>
                <ArrowCard entry={result} />
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div class="mt-12">
          <ul class="flex flex-col gap-3">
            {data.slice(0, 5).map((entry) => (
              <li>
                <ArrowCard entry={entry} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
