# Language Selector Redesign

**Date:** 2026-03-25
**Branch:** translations
**Status:** Approved

## Context

The tool will be iframed into another website. The current `LanguageSelector` sits in a standalone `div` above all content in `App.vue` (a floating top-right header bar), which looks out of place in an iframe context. It needs to be integrated into the main app UI.

## Goal

Move and redesign the language selector so it lives at the top of the left `MainNav` column, above the category buttons, with a style that fits naturally within the nav rather than floating above the page.

## Design

### Component: `LanguageSelector.vue` (full redesign)

Replace the native `<select>` with a custom dropdown consisting of a trigger button and a conditionally rendered popover list.

**Trigger button:**
- Displays: `[flag emoji] [native language name] ▾`
- Styling: `text-xs text-gray-500`, `border border-gray-200 rounded-md px-2.5 py-1.5`, transparent/white background
- Hover: border lightens to `gray-300`
- No gradient styling — sits as a secondary/subtle control above the nav
- Wrapper uses `dir="ltr"` so flag + text always renders left-to-right regardless of active locale

**Popover list:**
- Absolutely positioned below the trigger (`top-full mt-1`), left-aligned
- `z-50`, white background, `border border-gray-200 rounded-md shadow-sm`
- Each row: flag emoji + native language name, `text-xs px-3 py-1.5 hover:bg-gray-50 cursor-pointer`
- Active language: `✓` checkmark on the right, text in `text-gray-800` (vs `text-gray-500` for inactive)
- Closes on: option selected, outside click (via `mousedown` listener on `document`)

**Flag mapping:**

| code | flag | label   |
|------|------|---------|
| en   | 🇬🇧  | English |
| ar   | 🇸🇦  | عربي    |
| es   | 🇪🇸  | Español |
| fr   | 🇫🇷  | Français|
| zh   | 🇨🇳  | 中文    |

Flags are emoji — no extra library dependencies required.

### Placement: `MainNav.vue`

- Import and render `<LanguageSelector />` at the top of the template, before the first category section
- Add a small `mb-4` spacer below it to separate it from the nav buttons

### Cleanup: `App.vue`

- Remove the `LanguageSelector` import and the standalone header `div` (`flex justify-end mb-2 shrink-0`) that currently wraps it
- No other changes to `App.vue`

### Data: `i18n.js`

- Add a `flag` field to each entry in `SUPPORTED_LOCALES` (e.g. `{ code: 'en', label: 'English', dir: 'ltr', flag: '🇬🇧' }`)
- `LanguageSelector` reads `flag` from `SUPPORTED_LOCALES` — no flag data duplicated in the component

## Files Changed

| File | Change |
|------|--------|
| `src/components/LanguageSelector.vue` | Full rewrite — custom dropdown with flags |
| `src/components/MainNav.vue` | Import + render `LanguageSelector` at top; add spacer |
| `src/App.vue` | Remove `LanguageSelector` import and its wrapper div |
| `src/i18n.js` | Add `flag` field to each `SUPPORTED_LOCALES` entry |

## Out of Scope

- No changes to locale data files (`en.js`, `ar.js`, etc.)
- No changes to stores
- No changes to RTL layout logic (already handled by `setLocale`)
- No new language codes
