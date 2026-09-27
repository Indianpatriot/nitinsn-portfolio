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

- Keep portfolio facts and project destinations in `src/lib/portfolio.ts`; one source of truth prevents conflicting claims and broken links.
- Render all recruiter-scan sections on `/` and detailed studies on `/projects/$slug`; the brief calls for one flowing portfolio plus deep project narratives.
- Serve the uploaded resume through its Lovable asset pointer rather than committing the PDF binary; this preserves the original attachment and keeps the source tree light.
