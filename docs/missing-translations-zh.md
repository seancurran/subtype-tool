# Chinese (Simplified) Translations — Status

Source spreadsheet: `translations/Dry Eye Management Map Translation (Chinese) 202603.xlsx`

All translations have been implemented in `src/locales/zh.js`.

## Inferred Translations

The following keys had no translation in the spreadsheet. Translations were inferred from context within the spreadsheet and the app, and are marked with an inline comment in `zh.js`. Please review and correct if needed.

### Diamond Button Labels (`diamonds.*`)

| Key | Inferred Chinese | English |
|---|---|---|
| `diamonds.dryEyeReliefLine1` | 干眼 | DRY EYE RELIEF |
| `diamonds.dryEyeReliefLine2` | 缓解与管理 | & MANAGEMENT |
| `diamonds.tearFilmLine1` | 泪液 | TEAR FILM |
| `diamonds.tearFilmLine2` | 分泌不足 | DEFICIENCIES |
| `diamonds.eyelidLine1` | 眼睑 | EYELID |
| `diamonds.eyelidLine2` | 异常 | ANOMALIES |
| `diamonds.ocularLine1` | 眼表 | OCULAR SURFACE |
| `diamonds.ocularLine2` | 异常 | ABNORMALITIES |

### Panel Buttons (`panel.*`)

| Key | Inferred Chinese | English | Source |
|---|---|---|---|
| `panel.management` | 干眼病管理方案 | DRY EYE DISEASE MANAGEMENT | Used verbatim in `howToUse.step3` |
| `panel.previous` | 上一页 | PREVIOUS | Used verbatim in `howToUse.step2` |
| `panel.next` | 下一页 | NEXT | Used verbatim in `howToUse.step2` |
| `panel.email` | 邮件 | EMAIL | Standard Chinese |

### Email Modal UI (`email.*`)

| Key | Inferred Chinese | English |
|---|---|---|
| `email.title` | 邮件报告 | Email Report |
| `email.emailAddressLabel` | 邮箱地址 | Email Address |
| `email.emailPlaceholder` | 请输入邮箱地址 | Enter email address |
| `email.pxReferenceLabel` | 患者编号 | Px Reference |
| `email.pxReferenceOptional` | （选填） | (optional) |
| `email.pxReferencePlaceholder` | 请输入患者编号 | Enter patient reference |
| `email.pxReferenceError` | 仅允许使用字母、数字、空格、连字符及下划线 | Only letters, numbers, spaces, hyphens, and underscores are allowed |
| `email.reportPreview` | 报告预览 | Report Preview |
| `email.noItems` | 未选择任何项目 | No items selected |
| `email.emailSent` | 邮件已发送！ | Email Sent! |
| `email.emailSentConfirmation` | 您的报告已发送至 {email} | Your report has been sent to {email} |
| `email.close` | 关闭 | Close |
| `email.send` | 发送邮件 | Send Email |
| `email.sending` | 发送中... | Sending... |
| `email.fromName` | 干眼病亚型分类工具 | Dry Eye Disease Subtype Tool |
| `email.subject` | 干眼病管理报告 | Dry Eye Disease Management Report |
| `email.pxReferencePrefix` | 患者编号：{ref} | Px Reference: {ref} |
| `email.header.tearFilm` | 泪液分泌不足： | TEAR FILM DEFICIENCIES: |
| `email.header.eyelid` | 眼睑异常： | EYELID ANOMALIES: |
| `email.header.ocular` | 眼表异常： | OCULAR SURFACE ABNORMALITIES: |

## Notes

- `nav.copyright` is intentionally kept in English (legal text).
- The email *body/subject* translation in the spreadsheet (Email Translation sheet) applies to the EmailJS template, not the in-app form UI above.
