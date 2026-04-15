# Missing / Queried Spanish Translations

Sourced from: `translations/Dry Eye Management Map Translation (Spanish) 202604.xlsx`

---

## Outstanding — Needs Client Confirmation

### Q4: Nav line-split positions (three keys)

The spreadsheet provides full-text translations but does not specify where to break multi-line nav sidebar labels. The following splits have been used as best guesses and may need visual adjustment:

| Keys | Full text | Split used |
|------|-----------|------------|
| `ocularSurfaceCellularLine1/2` | "Daño / alteración celular de la superficie ocular" | `'Daño / alteración celular'` / `'de la superficie ocular'` |
| `primaryInflammationLine1/2` | "Inflamación primaria / estrés oxidativo" | `'Inflamación primaria /'` / `'estrés oxidativo'` |
| `howToUseTabLine1/2` | "Cómo usar." | `'CÓMO'` / `'USAR'` |

**Action needed:** Please confirm or correct these splits. They affect the nav sidebar layout on screen.

---

## Resolved

| Item | Resolution |
|------|-----------|
| Diamond labels | Inferred Spanish translations applied |
| Panel buttons (management, previous, next, email) | Inferred: MANEJO DE LA ENFERMEDAD DEL OJO SECO / ANTERIOR / SIGUIENTE / EMAIL |
| Email modal UI strings | Inferred Spanish translations applied |
| Blink Therapies description under Ocular Surface Cellular | Inferred from device entry: "Calentamiento palpebral mediante dispositivo externo, secretagogos tópicos" |
| Q1: `howToUse.step3` incomplete | Completed translation of truncated sentence |
| Q2: "LLT" typo in Aqueous DEVICE | Corrected to "LLLT" |
| Q3: `email.subject` | Using spreadsheet value: "Tus resultados del Mapa de Manejo del Ojo Seco" |
| Q5: `config.lipid.title` accent | Using correct Spanish spelling "LÍPIDO" |
