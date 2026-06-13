# Diwan-web


## Phase 1 — Tech Stack

All decisions finalized. No debate needed.

| Layer | Choice | Reason |
| --- | --- | --- |
| **Framework** | Next.js 14 (App Router) | Handles both the marketing site and docs in one codebase. Static export for docs, server components for landing page dynamic elements. |
| **Docs engine** | Nextra (nextra-theme-docs) | Drop-in docs layout: sidebar, pagination, dark mode, MDX support — no need to build from scratch. |
| **Styling** | Tailwind CSS v4 | Utility-first, no runtime cost, easy to enforce Diwan's cyan/magenta/dark color palette across all pages. |
| **Content format** | MDX (Markdown + JSX) | Write docs in plain Markdown. Embed interactive components (tabs, callouts, key badges) where needed without breaking the writing flow. |
| **Syntax highlighting** | Shiki | VS Code-quality highlighting baked into static HTML at build time — zero client-side JS for code blocks. Supports all tree-sitter grammars. |
| **Search** | Pagefind | Runs entirely offline (no Algolia account, no API keys). Generates a search index at build time from static HTML. Free forever. |
| **UI components** | shadcn/ui | Accessible, copy-paste components. Used for: OS install tabs, key binding accordion, copy-to-clipboard buttons on code blocks. |
| **Deployment** | Vercel | Zero-config CI/CD from GitHub. Automatic previews on PRs. Global CDN. Free tier is sufficient for launch. |
| **Analytics** | Plausible (self-hosted or cloud) | Privacy-first, GDPR-compliant. Shows page views, referrers, and popular doc pages without tracking users. |
- [x]  Framework decision: Next.js App Router
- [x]  Docs engine: Nextra
- [x]  Deployment target: Vercel
- [x]  GitHub repo initialized: `Diwan-editor/diwan-web`

---

## Phase 2 — Site Structure

### URL Map

```
/                    → Landing page (marketing)
/docs                → Docs home (redirect to /docs/getting-started)
/docs/getting-started/installation
/docs/getting-started/first-launch
/docs/getting-started/uninstalling
/docs/concepts/modal-editing
/docs/concepts/buffers-windows-tabs
/docs/concepts/command-palette
/docs/configuration/config-file
/docs/configuration/keybindings
/docs/configuration/themes
/docs/lsp/overview
/docs/lsp/supported-servers
/docs/plugins/installing
/docs/plugins/api-reference
/docs/faq
/changelog           → Release notes per version
```

---

### Landing Page Sections

#### 1. Hero

**Goal:** Communicate the value proposition in under 5 seconds.

- **Headline:** `Diwan` — typed in the editor's own font, large
- **Subheadline:** "A Rust terminal editor built for speed, built to last."
- **Primary CTA:** `Install` — shows OS-specific command on click (Linux / macOS / Windows)
- **Secondary CTA:** `View on GitHub` — opens repo
- **Visual:** A looping terminal recording (`.gif` or `<video>` with autoplay + muted) showing: open a Rust file → navigate with motions → trigger completion → save. Keep it under 10 seconds.

**Copy notes:**

- Avoid buzzwords like "blazingly fast" — say specifically what makes it fast (Rust + rope buffer + tree-sitter incremental parse)
- Don't mention Neovim/Helix as competitors — position as a fresh take

---

#### 2. Feature Grid

**Goal:** Show 4–6 concrete capabilities with a short description and a visual.

| Feature | Headline | Description |
| --- | --- | --- |
| ⚡ Speed | "Opens in milliseconds" | Rope buffer + tree-sitter. No Electron, no JVM. Pure Rust. |
| ⌨️ Modal editing | "Edit at the speed of thought" | Normal, Insert, Visual modes. Operators + motions. Fully remappable. |
| 🔌 LSP | "IDE features, terminal simplicity" | Autocompletion, diagnostics, go-to-definition — for any language with an LSP server. |
| 🎨 Themes | "Looks the way you want" | Tree-sitter syntax highlighting with a TOML theme system. Dark mode by default. |
| ⚙️ Configurable | "Your editor, your rules" | One TOML file controls everything: keymaps, tab width, LSP servers, theme. |
| 🧩 Extensible | "Grow with your workflow" | Plugin API (Lua or WASM) — add features without forking. *(Coming in 1.0)* |

Each feature card: icon, headline, 1–2 sentences, and optionally a mini code snippet or screenshot.

---

#### 3. Social Proof

**Goal:** Build trust with early adopters.

- GitHub star badge (live count via [shields.io](http://shields.io))
- "X developers have tried the alpha" (real number from download stats or GitHub clone count)
- Discord member count (once community is started)
- 2–3 short quotes from real users (Twitter/X screenshots or text with handle)

**Note:** Don't fake testimonials. If there are none yet, skip this section and add it post-launch.

---

#### 4. Install CTA

**Goal:** Remove friction — give the exact command to copy.

Tabbed by OS:

**Linux / macOS (cargo)**

```bash
cargo install diwan
```

**Linux (pre-built binary)**

```bash
curl -fsSL https://github.com/Abdogouhmad/diwan/releases/latest/download/install.sh | sh
```

**Homebrew** *(planned)*

```bash
brew install diwan
```

---

#### 5. Footer

Simple, dark background, links only.

| Column | Links |
| --- | --- |
| Project | GitHub, Changelog, Releases |
| Docs | Getting Started, Configuration, FAQ |
| Community | Discord, Twitter/X |
| Legal | MIT License, Privacy Policy |

---

### Docs Structure (detailed)

#### Getting Started

- **Installation** — tabs for: cargo, pre-built binary (Linux/macOS/Windows), Homebrew (planned). Include how to verify: `diwan --version`
- **First Launch** — open a file, the basic modes, how to exit (`:q`). Keep it to < 5 minutes reading time.
- **Uninstalling** — `cargo uninstall diwan`, remove config at `~/.config/diwan/`

#### Core Concepts

- **Modal Editing** — explain Normal / Insert / Visual / Command modes with a visual state diagram. Include a "muscle memory" table of the 20 most-used key combos.
- **Buffers, Windows, Tabs** — terminology (Diwan uses buffers, not tabs). How to open multiple files, switch buffers.
- **The Command Palette** — `:` commands, how to discover available commands.

#### Configuration *(Critical — most-visited docs page)*

- **Config File** — location (`~/.config/diwan/config.toml`), how to open it, the full annotated default config as a copy-able snippet.
- **Keybindings** — how to remap, the full default keymap as a searchable table, examples for common remaps.
- **Themes** — where themes live, how to switch, how to create a custom theme. Include the full list of highlight group names.

#### LSP

- **Overview** — what LSP does, how Diwan auto-detects language servers.
- **Supported Servers** — table of languages + server names + install commands.
- **Troubleshooting LSP** — most common issues (server not found, wrong path, slow startup).

#### Plugins *(post-1.0)*

- Installing plugins, the plugin API reference.

#### FAQ

Seed with real questions from development and early users. Examples:

- "How do I copy to system clipboard?"
- "Why does my theme look wrong in tmux?"
- "How do I set Diwan as my default `$EDITOR`?"
- "Does Diwan support Wayland clipboard?"

---

## Phase 3 — Content To-Do List

These are the writing and asset tasks that must be completed before launch. Each is a discrete unit of work:

- [ ]  Write Hero headline and subheadline (final copy, not placeholder)
- [ ]  Record terminal demo GIF using `vhs` — script committed in `docs/assets/demo.tape`
- [ ]  Write Feature Grid descriptions (6 features × 1–2 sentences each)
- [ ]  Draft Install section copy for all 3 tabs (cargo / binary / brew)
- [ ]  Write "First Launch" doc page (< 500 words, beginner-friendly)
- [ ]  Write "Modal Editing" concept page — include state diagram image
- [ ]  Create default keymap reference table (Markdown, all Normal mode keys)
- [ ]  Write annotated `config.toml` (every field commented, copy-pasteable)
- [ ]  Write "Troubleshooting / FAQ" seed with 8–10 real questions
- [ ]  Create 3 Shiki code examples for the landing page: Rust file, config.toml, shell session
- [ ]  Design Open Graph image (1200×630px) for social sharing
- [ ]  Write Privacy Policy (simple, one page — no personal data collected)

---

## Phase 4 — Implementation Checklist

Technical setup tasks. Do these in order.

- [ ]  Initialize project: `npx create-next-app@latest diwan-web --typescript --tailwind --eslint --app`
- [ ]  Install Nextra: `npm install nextra nextra-theme-docs`
- [ ]  Configure `next.config.ts` for MDX and Nextra
- [ ]  Set up Tailwind with Diwan's color tokens (cyan `#00FFFF`, magenta `#FF00FF`, dark `#0A0A0A`)
- [ ]  Configure Shiki with `diwan-dark` theme (or closest match: `tokyo-night`, `dracula`)
- [ ]  Set up root layout with dark/light mode toggle (default: dark)
- [ ]  Implement copy-to-clipboard button on all code blocks
- [ ]  Set up MDX Tabs component (shadcn/ui) for OS install tabs
- [ ]  Integrate Pagefind: add build step `npx pagefind --source out`
- [ ]  Set up Vercel project, connect GitHub repo, enable preview deployments
- [ ]  Configure Plausible analytics script in root layout

---

## Phase 5 — Polish, SEO & Launch

Final checks before going public.

**SEO**

- [ ]  `<title>` and `<meta description>` on all pages (unique per page — not the same on every doc)
- [ ]  Open Graph tags (`og:title`, `og:description`, `og:image`) — use the 1200×630 asset
- [ ]  `sitemap.xml` generated at build time (Next.js app router does this automatically)
- [ ]  `robots.txt` — allow all
- [ ]  `favicon.ico` + Apple Touch Icon (use Diwan SVG logo, export as .ico + 180×180 PNG)

**Quality**

- [ ]  Lighthouse audit on landing page: target 95+ Performance, 100 Accessibility
- [ ]  Lighthouse audit on a docs page: target same
- [ ]  Check all links (internal + external) — use `next-link-checker` or similar in CI
- [ ]  Test on mobile: docs must be readable, landing page must not break at 375px width
- [ ]  Test in Firefox and Safari (not just Chromium)

**Launch sequence**

- [ ]  Soft launch: share URL with 5–10 developers from the Rust/Neovim community, gather feedback on docs clarity
- [ ]  Address all blockers from soft launch feedback
- [ ]  Public launch posts (coordinate timing — post all on the same day):
    - Hacker News: "Show HN: Diwan — a Rust terminal editor"
    - Reddit: r/rust, r/neovim, r/vim
    - Twitter/X: thread with demo GIF
    - Discord: Rust community servers
- [ ]  Monitor Plausible for traffic, check GitHub issues for bug reports from new users
