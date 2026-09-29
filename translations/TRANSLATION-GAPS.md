# Translation gap report — Dutch, Czech, Hungarian, Ukrainian, Malay

For sign-off before deploying. This covers every string in `nl.js`, `cs.js`, `hu.js`, `uk.js`, and
`ms.js` that was **not** copied directly from the translator's spreadsheet: either because no source
cell exists for that key anywhere in the workbook (**Table A**, same ~20 keys in every language), or
because the delivered copy for that specific cell was missing/incomplete (**Table B**, different per
language). Everything not listed here came straight from the workbook, and no `// MANUAL` or other
marker was left in the code — this file is the only record.

All five locale files pass the automated structural check: matching leaf key structure, matching
array lengths, matching `null` placement, all `{year}`/`{email}`/`{ref}` placeholders intact, and no
stray markers.

> **Note (2026-09-30):** this file was recreated after being lost from git history (it only ever
> existed as an uncommitted file from an earlier session, before the project moved off the
> `translations` branch). Content below is reconstructed from that earlier session plus a fresh
> audit of Czech against the translator's final `202609` workbook — see the "Czech — re-verified
> against 202609" section for what changed since the original build.

---

## Resolved: the "Bahasa" workbook is registered as Malay (`ms`), not Indonesian

The delivered copy in `Dry Eye Management Map Translation (Bahasa) 202605.xlsx` is written in Malay,
not Indonesian — concrete tells included "Majlis Optometri Dunia" (World Council of Optometry),
"boleh" (can/able to), "pesakit" (patient), "filem" (film), "keupayaan" (capability), and
"Seterusnya / Sebelumnya" (Next/Previous), all Malay rather than Indonesian usage. This was
originally registered as locale `id` (Indonesian) and has since been corrected: the file is now
`src/locales/ms.js`, registered in `src/i18n.js` as `{ code: 'ms', label: 'Bahasa Melayu', flagCode:
'my' }`. No locale content changed — only the code, label, and flag.

## ⚠️ Worth a heads-up: stale English content in one shared cell

Hungarian and Ukrainian independently hit the same problem in `Management!AB7/AC7`
(`aqueous` → Pharmacological Tear Stimulation/Restoration): the English source cell in **both**
workbooks reads `Selenium sulfide` / `Pharmacological neuromodulation # Topical secretagogues` —
content that doesn't match the current `en.js` text for that key. That's because commit `4259d10`
("fix: removed selenium sulfide and added secretagogues") already corrected `en.js` (and
`ar`/`es`/`fr`/`zh`) to `Pharmacological neurostimulation\nTopical neurostimulation`, but these two
translator workbooks were evidently built from the pre-fix English source. Both agents used the
delivered Hungarian/Ukrainian text as written rather than inventing a translation of the stale
English wording — worth flagging to whoever hands off workbooks to translators in case the same
stale cell is sitting in other in-flight files.

---

## Czech — re-verified against final workbook `202609` (2026-09-30)

The translator delivered a final Czech workbook (`Dry Eye Management Map Translation (Czech)
202609.xlsx`, in `translations/completed/`) superseding the draft `202605.xlsx` originally used to
build `cs.js`. Audited cell-by-cell against the mapping below (same convention as every other
locale: subcategory `nav`/`boxes`/`config.title` values source from the **Testing tab's I-column**,
never the Management tab's E-column, even where both exist).

### Applied (8 edits, all in `cs.js`)

| Key(s) | Old | New | Reason |
|---|---|---|---|
| `nav.blinkLidClosure`, `boxes.blinkLidClosure` | `'Mrkání/ dovření víček'` | `'Mrkání/dovření víček'` | Testing!I12 lost a stray space around the slash in the final workbook |
| `config['blink-lid-closure'].title` | `'MRKÁNÍ/ DOVŘENÍ VÍČEK'` | `'MRKÁNÍ/DOVŘENÍ VÍČEK'` | same, uppercased variant |
| `nav.ocularSurfaceCellularLine1` | `'Buněčné poškození /'` | `'Buněčné poškození/'` | Testing!I17 lost its space around the slash |
| `boxes.ocularSurfaceCellular` | `'Buněčné poškození/ narušení povrchu oka'` | `'Buněčné poškození/narušení povrchu oka'` | same source cell, post-slash side |
| `nav.primaryInflammationLine1` | `'Primární zánět /'` | `'Primární zánět/'` | Testing!I18 lost its space around the slash |
| `howToUse.step1` | `'...- Deficity slzného filmu, Anomálie očních víček nebo Abnormality očního povrchu.'` | `'...- deficity slzného filmu, anomálie očních víček nebo abnormality očního povrchu.'` | final Intro!H7 copy lowercases the category names in running prose |
| `howToUse.step2` | `'...tlačítka Další/Předchozí.'` | `'...tlačítka další/předchozí.'` | final Intro!H7 copy lowercases the button names |

### Explicitly rejected (traced to the wrong source cell)

Two things looked like diffs but were about a **different, non-source** cell once traced back to
the actual mapping convention:

- `config['lid-margin'].title` — Management!E10 now reads `'OKRAJ VÍČEK'` (plural), but the real
  source, Testing!I13, still reads `'Okraj víčka'` (singular), unchanged. Kept as `'OKRAJ VÍČKA'`.
- `config['anatomical-misalignment'].title` — Management!E12 now reads
  `'ANATOMICKÁ MALALIGNACE (chybné postavení)'` (typo fixed), but the real source, Testing!I15,
  still has the typo (`'chybé postavení'`). Kept as `'ANATOMICKÁ MALALIGNACE (CHYBÉ POSTAVENÍ)'`
  — the earlier "preserve translator typos as delivered" call remains correct since the fix landed
  in a cell that was never the source.

Flag (not a code change): the Testing tab and Management tab of the 202609 workbook disagree with
each other on wording/spelling for `lid-margin`, `blink-lid-closure` (`dovření` vs `uzavření`),
`anatomical-misalignment`, and `ocular-surface-cellular`/`primary-inflammation` (Management has long
descriptive phrases, Testing has short ones) — internal inconsistency in their own workbook.

### Confirmed unchanged / still correct

- `howToUse.welcome`, `.intro`, `.howToUseTitle`, `email.subject`, `boxes.primaryInflammation` —
  byte-identical to the new workbook.
- `howToUse.step3` — kept the fuller `cs.js` text. Both `Intro!B7` (English) and `Intro!H7` (Czech)
  are still truncated mid-sentence in the 202609 workbook, identically to 202605 — a persistent bug
  in the translator's master template, not something to shorten `cs.js` to match.
- `config['ocular-surface-cellular'].title` (`'BUNĚČNÉ POŠKOZENÍ'`) and
  `config['primary-inflammation'].title` (`'ZÁNĚT'`) — deliberately abbreviated (matches `en.js`'s
  own short-form precedent). Not expanded to the workbook's longer phrases — a longer title here is
  exactly what caused the title-overflow bug fixed earlier for `uk.js`/`ms.js` in
  `SubOptionBox.vue`'s fixed-size tab graphic.
- The entire `management.*` matrix (all 13 item-type columns × 9 subcategory rows) and all
  remaining `testing.*` items — verified identical via exact string comparison.

### Table-B gap-fills below — all still open in 202609, resolutions unchanged

---

## Table A — keys with no source cell in any workbook (all languages)

Every language is missing the same ~20 keys: the two panel buttons `panel.management` /
`panel.email`, and the entire email-modal block (`email.title` through `email.pxReferencePrefix`,
16 keys), plus `diamonds.dryEyeReliefLine1/Line2` (the home-screen diamond tagline). None of these
appear anywhere across the four tabs of any workbook, including the Czech 202609 delivery — Table A
below is unchanged by the 202609 audit.

### Dutch (nl)

| Key | English | Dutch written |
|---|---|---|
| panel.management | DRY EYE DISEASE MANAGEMENT | BEHANDELING VAN DROGE-OOGZIEKTE |
| panel.email | EMAIL | E-MAIL |
| email.title | Email Report | E-mailrapport |
| email.emailAddressLabel | Email Address | E-mailadres |
| email.emailPlaceholder | Enter email address | Voer e-mailadres in |
| email.pxReferenceLabel | Px Reference | Patiëntreferentie |
| email.pxReferenceOptional | (optional) | (optioneel) |
| email.pxReferencePlaceholder | Enter patient reference | Voer patiëntreferentie in |
| email.pxReferenceError | Only letters, numbers, spaces, hyphens, and underscores are allowed | Alleen letters, cijfers, spaties, koppeltekens en underscores zijn toegestaan |
| email.reportPreview | Report Preview | Voorbeeld van rapport |
| email.noItems | No items selected | Geen items geselecteerd |
| email.emailSent | Email Sent! | E-mail verzonden! |
| email.emailSentConfirmation | Your report has been sent to {email} | Uw rapport is verzonden naar {email} |
| email.close | Close | Sluiten |
| email.send | Send Email | E-mail verzenden |
| email.sending | Sending... | Verzenden... |
| email.fromName | Dry Eye Disease Subtype Tool | Tool voor subtypering van droge-oogziekte |
| email.pxReferencePrefix | Px Reference: {ref} | Patiëntreferentie: {ref} |
| diamonds.dryEyeReliefLine1 | DRY EYE RELIEF | VERLICHTING DROGE OGEN |
| diamonds.dryEyeReliefLine2 | & MANAGEMENT | & BEHANDELING |

### Czech (cs)

| Key | English | Czech written |
|---|---|---|
| panel.management | DRY EYE DISEASE MANAGEMENT | MANAGEMENT ONEMOCNĚNÍ SUCHÉHO OKA |
| panel.email | EMAIL | E-MAIL |
| email.title | Email Report | E-mailová zpráva |
| email.emailAddressLabel | Email Address | E-mailová adresa |
| email.emailPlaceholder | Enter email address | Zadejte e-mailovou adresu |
| email.pxReferenceLabel | Px Reference | Reference pacienta |
| email.pxReferenceOptional | (optional) | (volitelné) |
| email.pxReferencePlaceholder | Enter patient reference | Zadejte referenci pacienta |
| email.pxReferenceError | Only letters, numbers, spaces, hyphens, and underscores are allowed | Povolena jsou pouze písmena, čísla, mezery, spojovníky a podtržítka |
| email.reportPreview | Report Preview | Náhled zprávy |
| email.noItems | No items selected | Nejsou vybrány žádné položky |
| email.emailSent | Email Sent! | E-mail byl odeslán! |
| email.emailSentConfirmation | Your report has been sent to {email} | Vaše zpráva byla odeslána na adresu {email} |
| email.close | Close | Zavřít |
| email.send | Send Email | Odeslat e-mail |
| email.sending | Sending... | Odesílání... |
| email.fromName | Dry Eye Disease Subtype Tool | Nástroj pro určení podtypu onemocnění suchého oka |
| email.pxReferencePrefix | Px Reference: {ref} | Reference pacienta: {ref} |
| diamonds.dryEyeReliefLine1 | DRY EYE RELIEF | ÚLEVA OD SUCHÉHO OKA |
| diamonds.dryEyeReliefLine2 | & MANAGEMENT | A MANAGEMENT |

### Hungarian (hu)

| Key | English | Hungarian written |
|---|---|---|
| panel.management | DRY EYE DISEASE MANAGEMENT | SZÁRAZSZEM-BETEGSÉG KEZELÉSE |
| panel.email | EMAIL | E-MAIL |
| email.title | Email Report | E-mail jelentés |
| email.emailAddressLabel | Email Address | E-mail cím |
| email.emailPlaceholder | Enter email address | Adja meg az e-mail címet |
| email.pxReferenceLabel | Px Reference | Páciens azonosító |
| email.pxReferenceOptional | (optional) | (opcionális) |
| email.pxReferencePlaceholder | Enter patient reference | Adja meg a páciens azonosítóját |
| email.pxReferenceError | Only letters, numbers, spaces, hyphens, and underscores are allowed | Csak betűk, számok, szóközök, kötőjelek és aláhúzásjelek engedélyezettek |
| email.reportPreview | Report Preview | Jelentés előnézete |
| email.noItems | No items selected | Nincs kiválasztott elem |
| email.emailSent | Email Sent! | E-mail elküldve! |
| email.emailSentConfirmation | Your report has been sent to {email} | A jelentést elküldtük a következő címre: {email} |
| email.close | Close | Bezárás |
| email.send | Send Email | E-mail küldése |
| email.sending | Sending... | Küldés... |
| email.fromName | Dry Eye Disease Subtype Tool | Szárazszem-altípus meghatározó eszköz |
| email.pxReferencePrefix | Px Reference: {ref} | Páciens azonosító: {ref} |
| diamonds.dryEyeReliefLine1 | DRY EYE RELIEF | SZÁRAZ SZEM ENYHÍTÉSE |
| diamonds.dryEyeReliefLine2 | & MANAGEMENT | ÉS KEZELÉSE |

### Ukrainian (uk)

| Key | English | Ukrainian written |
|---|---|---|
| diamonds.dryEyeReliefLine1 | DRY EYE RELIEF | ПОЛЕГШЕННЯ ТА |
| diamonds.dryEyeReliefLine2 | & MANAGEMENT | ВЕДЕННЯ СУХОСТІ ОКА |
| panel.management | DRY EYE DISEASE MANAGEMENT | ВЕДЕННЯ ЗАХВОРЮВАННЯ СУХОГО ОКА |
| panel.email | EMAIL | ПОШТА |
| email.title | Email Report | Звіт електронною поштою |
| email.emailAddressLabel | Email Address | Адреса електронної пошти |
| email.emailPlaceholder | Enter email address | Введіть адресу електронної пошти |
| email.pxReferenceLabel | Px Reference | Референс пацієнта |
| email.pxReferenceOptional | (optional) | (необов'язково) |
| email.pxReferencePlaceholder | Enter patient reference | Введіть референс пацієнта |
| email.pxReferenceError | Only letters, numbers, spaces, hyphens, and underscores are allowed | Дозволені лише літери, цифри, пробіли, дефіси та підкреслення |
| email.reportPreview | Report Preview | Попередній перегляд звіту |
| email.noItems | No items selected | Жодного елемента не вибрано |
| email.emailSent | Email Sent! | Лист надіслано! |
| email.emailSentConfirmation | Your report has been sent to {email} | Ваш звіт надіслано на {email} |
| email.close | Close | Закрити |
| email.send | Send Email | Надіслати лист |
| email.sending | Sending... | Надсилання... |
| email.fromName | Dry Eye Disease Subtype Tool | Інструмент визначення підтипу сухості ока |
| email.pxReferencePrefix | Px Reference: {ref} | Референс пацієнта: {ref} |

### Malay (ms)

| Key | English | Written |
|---|---|---|
| panel.management | DRY EYE DISEASE MANAGEMENT | *(translated, formal register matching workbook)* |
| panel.email | EMAIL | EMAIL *(kept as-is — identical to English, same choice `es.js` made)* |
| email.title, emailAddressLabel, emailPlaceholder, pxReferenceLabel, pxReferenceOptional, pxReferencePlaceholder, pxReferenceError, reportPreview, noItems, emailSent, emailSentConfirmation, close, send, sending, fromName, pxReferencePrefix | *(all 16 email-modal keys)* | Translated in the Malay register the workbook uses throughout |
| diamonds.dryEyeReliefLine1 / Line2 | DRY EYE RELIEF / & MANAGEMENT | Translated, split across the diamond's two lines |

---

## Table B — gaps in the delivered copy (per language)

### Dutch (nl) — 5 items

| Key | Cell | English | Resolution |
|---|---|---|---|
| `config['blink-lid-closure'].title` | Management!E9 blank | BLINKING / LID CLOSURE | Reused Testing!I12 (`Knipperslag/ooglidsluiting`) |
| `nav.eyelidAnomalies` (+ boxes/email.header/diamonds) | Testing!H12 blank | EYELID ANOMALIES | Reused Testing!H13 (`Ooglidafwijkingen`) — translator typed it one row down |
| Topical Anti-inflammatories label | Management!AZ4 blank | Topical Anti-inflammatories | Translated: `Topische ontstekingsremmers` |
| `management['ocular-surface-cellular'][5].description` (Blink Therapies) | Management!AP14/AQ14 blank | External device lid heating, topical secretagogues | Reused Management!AM14 |
| `management['primary-inflammation'][1].subOptions[10].description` (Secondary → Ocular Surface Regenerators) | Management!BF16/BH16 blank | Amniotic membrane | Reused Management!BH15 (`Amnionmembraan`) |

### Czech (cs) — 5 items (re-verified still open against 202609)

| Key | Cell | English | Resolution |
|---|---|---|---|
| `howToUse.step3` (tail) | Intro!H7 truncated (matches English source truncation, still truncated in 202609) | "...by selecting the Email button in the pop-up menu." | Translated the missing closing clause |
| `testing['blink-lid-closure'].standard[1]` | Testing!J12 (2nd segment has no dash-delimited description) | Lagophthalmos / inadequate lid seal - observed | Translated: reordered the translator's own words into name/description split |
| `testing['lid-margin'].advanced[1].description` | Testing!K14 (2nd segment) | Gland plugging - observed | Translated: `Pozorováno` (reused the translator's own "observed" word from J12) |
| `testing['lid-margin'].advanced[2].description` | Testing!K14 (3rd segment) | Telangiectasia - observed | Translated: `Pozorováno` |
| `management['ocular-surface-cellular'][5].description` (Blink Therapies) | Management!AQ14 blank | External device lid heating, topical secretagogues | Reused Management!AM14 |

### Hungarian (hu) — 4 items

| Key | Cell | English | Resolution |
|---|---|---|---|
| `testing['blink-lid-closure'].standard[0]` | Testing!J12 (only the lagophthalmos test was delivered) | Partial blinking observation - >40% occurrence | Translated |
| `management['mucin-glycocalyx'][1].description` | Management!AE8 blank | Secretagogues | Translated: `Szekretagóg szerek` |
| `management['ocular-surface-cellular'][5].description` (Blink Therapies) | Management!AQ14 blank | External device lid heating, topical secretagogues | Reused Management!AM14 (trimmed to the "external" half) |
| `management['primary-inflammation'][1].subOptions[10].description` (Secondary → Ocular Surface Regenerators) | Management!BH16 blank | Amniotic membrane | Reused Management!BH15 |

### Ukrainian (uk) — 13 items (this workbook's copy was noticeably more abridged than the other four)

| Key | Cell | English | Resolution |
|---|---|---|---|
| `testing['lid-margin'].advanced[1]` | Testing!K14 (only the meibography item was delivered) | Gland plugging - observed | Translated |
| `testing['lid-margin'].advanced[2]` | Testing!K14 | Telangiectasia - observed | Translated |
| `testing['lid-margin'].advanced[3]` | Testing!K14 | Gland expressibility (name only) | Translated |
| `testing['blink-lid-closure'].standard[1].description` | Testing!J12 | Observed | Translated (inferred from the parallel structure the translator used in the same cell's first sentence) |
| `management['primary-inflammation'][0].label` | Management!G15 blank | PRIMARY | Translated: `ПЕРВИННЕ` |
| `management['primary-inflammation'][1].label` | Management!G16 blank | SECONDARY | Translated: `ВТОРИННЕ` |
| `management.aqueous[4].description` | Management!AB7/AC7 stale (see flag above) | Pharmacological neurostimulation / Topical neurostimulation | Reused Management!AF7, split on the translator's "#" separator; discarded the stale AE7 cell |
| `management['mucin-glycocalyx'][1].description` | Management!AE8 blank | Secretagogues | Reused Management!AE6 (dropped the "topical" qualifier) |
| `management['ocular-surface-cellular'][5].description` | Management!AP14 blank | External device lid heating, topical secretagogues | Reused Management!AM14 |
| `management['primary-inflammation'][1].subOptions[10].description` | Management!BH16 blank | Amniotic membrane | Reused Management!BH15 |
| `howToUse.welcome` | No source (intro omits it) | Welcome. | Translated: `Ласкаво просимо.` |
| `panel.previous` | No source (intro omits button names) | PREVIOUS | Translated: `ПОПЕРЕДНІЙ` |
| `panel.next` | No source | NEXT | Translated: `НАСТУПНИЙ` |

Beyond the listed items, the Ukrainian `howToUse.step1/2/3` are shorter than the English/other
locales by design of the delivered copy — the translator condensed the three-paragraph English
instructions into a terse 3-line numbered list with no connective prose, and the three category
names were folded into step 1 as a bullet list rather than full sentences. Used as delivered rather
than expanded.

### Malay (ms) — 3 items

| Key | Cell | English | Resolution |
|---|---|---|---|
| `howToUse.step3` (tail) | Intro!H7 truncated (matches English source truncation) | "...by selecting the Email button in the pop-up menu." | Translated the missing closing clause, in the Malay register: `...dengan memilih butang EMAIL dalam menu pop timbul.` |
| `management['ocular-surface-cellular'][5].description` (Blink Therapies) | Management!AQ14 blank | External device lid heating, topical secretagogues | Reused Management!AM14 |
| `management['primary-inflammation'][1].subOptions[10].description` | Management!BH16 blank | Amniotic membrane | Reused Management!BH15 (`Membran amnion`) |

---

## Minor items noted by the extraction agents (no action needed, informational only)

- **Hungarian source typos corrected in-place** (spelling only, meaning unchanged): `Könnyfiln`→`Könnyfilm`, `szemfleszín`→`szemfelszín`, `LLT`→`LLLT`, `Nedvességmegrző`/`Nedvességmegörző`→`Nedvességmegőrző`, `Könnypopnt`→`Könnypont`, `gyógyszere`→`gyógyszeres`, `szegretagóg`→`szekretagóg`, and a missing space in `higiéné(pl.` → `higiéné (pl.`. Also dropped a stray extra "550" in the neural-dysfunction description (`≥0.8 mbar 550`) to match `en.js`'s own wording, which has no such token.
- **Category-name inconsistency present in the Czech and Hungarian source workbooks themselves** (not introduced by extraction): the Testing tab and Management tab of each workbook sometimes use slightly different wording for the same category name. Per the mapping, `nav.*`/`boxes.*`/`diamonds.*` use the Testing-tab wording and `config.*.category` uses the Management-tab wording, so this reflects the source, not an error. This inconsistency persists in the Czech 202609 workbook too — see the "Czech — re-verified against 202609" section above.
- Dutch, Hungarian: `config['ocular-surface-cellular'].title` / `config['primary-inflammation'].title` use the same abbreviated style ("CELLULAR DAMAGE" / "INFLAMMATION") that `en.js` and `es.js` already use, rather than the longer full-phrase translation, for consistency with the existing locales. Czech follows the same pattern (confirmed still correct against 202609).

---

## Unrelated structural note (found 2026-09-30, not part of any translation audit)

`en.js` now has a `nav.translationCredit` key (added since this doc was first written — an
attribution line naming the translation teams by country) that **no locale file has**, including
`cs.js`. This is uniform across all 9 non-English locales, not specific to any one language, and
`fallbackLocale: 'en'` means every locale already displays the English credit line correctly via
fallback — same pattern as `nav.copyright`, which is also kept untranslated in every locale by
design. Flagging for awareness only; not changed as part of this or any prior locale audit.

## Sign-off checklist

- [x] Bahasa workbook re-labelled `ms` (Malay) — resolved.
- [x] Czech re-verified against final workbook 202609 — 8 edits applied, 2 false leads rejected
      with reasoning, all 5 prior gap-fills reconfirmed still open. See above.
- [ ] Review Table A wording above (~20 keys × 5 languages) — this is the only copy in each locale
      that didn't come from a translator.
- [ ] Review Table B resolutions — mostly single labels/descriptions reused from an identical
      sibling phrase elsewhere in the same workbook, or translated where nothing matched.
- [ ] Flag the stale `Selenium sulfide` cell (Hungarian + Ukrainian workbooks) to whoever manages
      translator handoffs.
- [ ] Flag the Testing-tab-vs-Management-tab internal wording inconsistencies (Czech, Hungarian) to
      the translator/PM.
- [ ] Decide whether `nav.translationCredit` should be added to every locale file, or left as an
      intentional English-only fallback like `nav.copyright`.
