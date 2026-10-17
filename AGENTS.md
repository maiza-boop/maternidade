<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep category content, brand, navigation, sidebar, affiliate call and footer in typed category data, rendered through reusable category components; this supports duplication and later manual Elementor reconstruction without copying layout code.
- Define identity colors and layout spacing in global semantic CSS tokens; this keeps presentation editable without changing category content.
- Keep cross-area destinations and optional communities in the typed area registry, with a shared provisional area route and configurable links; this enables gradual expansion without duplicating unfinished pages.
- Keep product filtering and description excerpts in browser-safe pure helpers; this allows testing behavior while preserving each original full description.
