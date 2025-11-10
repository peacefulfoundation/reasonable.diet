import { createSignal, For, onMount, Show } from 'solid-js';

interface Recipe {
  slug: string;
  title: string;
  description: string;
  cuisine: string[];
  tags: string[];
}

export default function RecentRecipes() {
  const [recentRecipes, setRecentRecipes] = createSignal<Recipe[]>([]);

  onMount(() => {
    // Get recently visited recipes from localStorage
    const stored = localStorage.getItem('recentRecipes');
    if (stored) {
      try {
        const recipes = JSON.parse(stored);
        setRecentRecipes(recipes.slice(0, 6)); // Only show 6 most recent
      } catch (e) {
        console.error('Failed to parse recent recipes:', e);
      }
    }
  });

  return (
    <Show
      when={recentRecipes().length > 0}
      fallback={
        <div class="py-16 text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            viewBox="0 0 24 24"
            fill="none"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="mx-auto mb-6 stroke-muted-foreground opacity-50"
          >
            <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path>
            <path d="M7 2v20"></path>
            <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"></path>
          </svg>
          <h2 class="mb-3 text-2xl font-semibold text-muted-foreground">
            No recently visited recipes yet
          </h2>
          <p class="mb-6 text-muted-foreground">
            Start exploring our recipe collection to see your recent visits
            here!
          </p>
          <a
            href="/search"
            class="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-md"
          >
            Browse Recipes
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="stroke-current"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </a>
        </div>
      }
    >
      <div>
        <h2 class="mb-8 text-3xl font-bold">Recently Visited</h2>
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <For each={recentRecipes()}>
            {(recipe) => (
              <a
                href={`/cook/${recipe.slug}`}
                class="group flex flex-col gap-3 rounded-xl border border-black/15 bg-scrim p-5 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-sheer/10 hover:shadow-lg hover:dark:bg-scrim/10"
              >
                <div class="flex flex-col gap-3">
                  {/* Cuisine Tags */}
                  <ul class="flex flex-wrap gap-1">
                    <For each={recipe.cuisine}>
                      {(item) => (
                        <li class="rounded bg-black/5 px-2 py-1 text-xs uppercase text-black/75 dark:bg-white/20 dark:text-white/75">
                          {item}
                        </li>
                      )}
                    </For>
                  </ul>

                  {/* Title */}
                  <h3 class="text-xl font-semibold transition-colors group-hover:text-primary">
                    {recipe.title}
                  </h3>

                  {/* Description */}
                  <p class="line-clamp-2 text-sm text-muted-foreground">
                    {recipe.description}
                  </p>

                  {/* Tags */}
                  <ul class="flex flex-wrap gap-1">
                    <For each={recipe.tags}>
                      {(tag) => (
                        <li class="rounded-full bg-sheer px-2 py-1 text-xs capitalize text-foreground">
                          {tag}
                        </li>
                      )}
                    </For>
                  </ul>
                </div>

                {/* Arrow Icon */}
                <div class="flex justify-end">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="stroke-current transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </a>
            )}
          </For>
        </div>
      </div>
    </Show>
  );
}
