# Language Selector Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the floating top-right language selector with a custom flag+text dropdown integrated at the top of the left `MainNav` column.

**Architecture:** Add `flag` emoji to `SUPPORTED_LOCALES` in `i18n.js`, rewrite `LanguageSelector.vue` as a custom popover dropdown, mount it at the top of `MainNav.vue`, and remove the old standalone header wrapper from `App.vue`.

**Tech Stack:** Vue 3 `<script setup>`, Tailwind CSS v4, vue-i18n 11.x. No test framework — verify manually with `bun dev`.

---

## File Map

| File | Action | What changes |
|------|--------|--------------|
| `src/i18n.js` | Modify | Add `flag` emoji field to each entry in `SUPPORTED_LOCALES` |
| `src/components/LanguageSelector.vue` | Rewrite | Custom popover dropdown (trigger + list), RTL-isolated, with flags |
| `src/components/MainNav.vue` | Modify | Import + render `<LanguageSelector />` at top with spacer |
| `src/App.vue` | Modify | Remove `LanguageSelector` import and its `justify-end` header wrapper div |

---

## Task 1: Add flag data to `SUPPORTED_LOCALES`

**Files:**
- Modify: `src/i18n.js`

- [ ] **Step 1: Open `src/i18n.js` and update `SUPPORTED_LOCALES`**

  Replace the existing array with:

  ```js
  export const SUPPORTED_LOCALES = [
      { code: 'en', label: 'English', dir: 'ltr', flag: '🇬🇧' },
      { code: 'ar', label: 'عربي',    dir: 'rtl', flag: '🇸🇦' },
      { code: 'es', label: 'Español', dir: 'ltr', flag: '🇪🇸' },
      { code: 'fr', label: 'Français',dir: 'ltr', flag: '🇫🇷' },
      { code: 'zh', label: '中文',    dir: 'ltr', flag: '🇨🇳' },
  ]
  ```

- [ ] **Step 2: Verify dev server still starts cleanly**

  Run: `bun dev`
  Expected: no console errors, app loads, existing language selector still works (it will be replaced in Task 2).

---

## Task 2: Rewrite `LanguageSelector.vue`

**Files:**
- Rewrite: `src/components/LanguageSelector.vue`

- [ ] **Step 1: Replace the entire file content**

  ```vue
  <script setup>
  import { ref, onUnmounted } from 'vue'
  import { useI18n } from 'vue-i18n'
  import { SUPPORTED_LOCALES, setLocale } from '@/i18n'

  const { locale } = useI18n()

  const open = ref(false)

  const currentLocale = () => SUPPORTED_LOCALES.find(l => l.code === locale.value)

  const select = (code) => {
      setLocale(code)
      close()
  }

  const close = () => {
      open.value = false
      document.removeEventListener('mousedown', onOutsideClick)
  }

  const toggle = () => {
      if (open.value) {
          close()
      } else {
          open.value = true
          document.addEventListener('mousedown', onOutsideClick)
      }
  }

  const rootEl = ref(null)

  const onOutsideClick = (e) => {
      if (rootEl.value && !rootEl.value.contains(e.target)) {
          close()
      }
  }

  onUnmounted(() => {
      document.removeEventListener('mousedown', onOutsideClick)
  })
  </script>

  <template>
      <div ref="rootEl" class="relative" dir="ltr">
          <!-- Trigger button -->
          <button
              @click="toggle"
              class="flex items-center gap-1.5 text-xs text-gray-500 border border-gray-200 rounded-md px-2.5 py-1.5 bg-white hover:border-gray-300 focus:outline-none cursor-pointer"
              type="button"
          >
              <span>{{ currentLocale()?.flag }}</span>
              <span>{{ currentLocale()?.label }}</span>
              <span class="text-gray-400">▾</span>
          </button>

          <!-- Popover list -->
          <ul
              v-if="open"
              class="absolute top-full mt-1 left-0 z-50 bg-white border border-gray-200 rounded-md shadow-sm min-w-full"
          >
              <li
                  v-for="loc in SUPPORTED_LOCALES"
                  :key="loc.code"
                  @click="select(loc.code)"
                  class="flex items-center justify-between px-3 py-1.5 text-xs cursor-pointer hover:bg-gray-50"
                  :class="loc.code === locale ? 'text-gray-800' : 'text-gray-500'"
              >
                  <span class="flex items-center gap-1.5">
                      <span>{{ loc.flag }}</span>
                      <span>{{ loc.label }}</span>
                  </span>
                  <span v-if="loc.code === locale" class="ml-3 text-gray-400">✓</span>
              </li>
          </ul>
      </div>
  </template>
  ```

- [ ] **Step 2: Verify in browser**

  Run: `bun dev` (if not already running)

  Check:
  - The old top-right selector still renders (it's still in `App.vue` — will be removed in Task 4)
  - No console errors from the rewritten component

---

## Task 3: Add `LanguageSelector` to the top of `MainNav.vue`

**Files:**
- Modify: `src/components/MainNav.vue`

- [ ] **Step 1: Add import at top of `<script setup>`**

  In `src/components/MainNav.vue`, inside the `<script setup>` block, add the import after the existing imports:

  ```js
  import LanguageSelector from '@/components/LanguageSelector.vue'
  ```

- [ ] **Step 2: Add component at the top of the template**

  In the template, insert before the `<!-- Tear Film Deficiencies Section -->` comment:

  ```html
  <!-- Language Selector -->
  <div class="mb-4">
      <LanguageSelector />
  </div>
  ```

- [ ] **Step 3: Verify in browser**

  Check:
  - The new custom dropdown appears at the top of the left nav column
  - Clicking the trigger opens the popover with all 5 languages and their flags
  - Selecting a language changes the UI language correctly
  - Switching to Arabic (عربي) flips the layout to RTL — the dropdown itself stays left-to-right
  - Clicking outside the popover closes it

---

## Task 4: Remove the old `LanguageSelector` from `App.vue`

**Files:**
- Modify: `src/App.vue`

- [ ] **Step 1: Remove the import line**

  In `src/App.vue`, delete this line from `<script setup>`:

  ```js
  import LanguageSelector from '@/components/LanguageSelector.vue'
  ```

- [ ] **Step 2: Remove the header wrapper div**

  In `src/App.vue` template, delete this entire block (lines 65–67 in the current file):

  ```html
  <!-- Language selector header — dir="ltr" keeps dropdown on the physical right in all locales -->
  <div class="flex justify-end mb-2 shrink-0" dir="ltr">
      <LanguageSelector />
  </div>
  ```

- [ ] **Step 3: Final verification**

  Check:
  - No floating selector in the top-right — only the nav-integrated one exists
  - No console errors or Vue warnings
  - All 5 languages switch correctly
  - RTL (Arabic) still works: layout flips, text is correct, the dropdown itself stays LTR
  - English restores LTR layout when switched back
  - Refresh the page — the previously selected language is restored from `localStorage`
