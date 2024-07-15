# [reasonable.diet](https://reasonable.diet)

a curated list of budget-friendly recipes for university students (or anyone out there)! an initative taken by [peacefulfoundation.org](https://peacefulfoundation.org).

## ways to contribute

- adding a recipe.
- adding an image of the finished dish to a recipe that doesn't have one.
- fixing errors in recipes or adding minor improvements.

## rules for submission

- files should be modelled after [`TEMPLATE.md`](/TEMPLATE.md) and stored in [`src/content/recipes`](/src/content/recipes/).
- files should be named after the dish name with words separated by hyphens (`-`). do **not** use spaces or underscores for separation.
- the recipe should be "reasonable" - meaning that it should (1) be nutritious/healthy, and (2) be easy to prepare with a short-to-moderate cooking time.
- don't include ubiquitous ingredients like salt and pepper in the list.
- don't include images that weren't taken by you. moreover, make sure the images look good! and are meaningful to the recipe. any images you want to add should be in the [`src/assets`](/src/assets/) folder, with filenames relevant to the dish.
- all files should be in LF line-endings (done on Linux by default, but we've included `.editorconfig` and `.prettierrc` files for the same reason).

**following these rules is a must for a speedy review of submissions. if not followed, the merge request will be closed for resubmission.**

as an author of a recipe, you can include a JSON file at [`src/content/authors`](/src/content/authors/) with your name and a website - this can include your portfolio, social media, or a donation link. see [`abhigyan-trips.json`](/src/content/authors/abhigyan-trips.json) as an example.

## tags

here's a list of tags we stick to for recipes.

| tag                    | description                                          |
| ---------------------- | ---------------------------------------------------- |
| very cheap             | potatoes and various others, with various seasonings |
| meal prep              | making in bulk for lunch                             |
| reasonable!            | "turns out it's already reasonable"                  |
| foods you know already | remixing foods slightly to be reasonable             |
| experiments            | the next big thing&trade;                            |

for cuisines, add the originating regions of the dish for easy filtering (for example, 'Mexican' or 'Indian').

## development

this site is built with [Astro](https://astro.build) and uses their Content Collections functionality. for more information, read their [documentation](https://docs.astro.build).

## license

this website and all its content are in the public domain. by submitting text or images or anything else to this repository, you waive any pretence of ownership to it, although you are welcome and recommended to give yourself credit on the page you've submitted (including personal or donation links).
