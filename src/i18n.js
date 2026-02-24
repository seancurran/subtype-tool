import { createI18n } from 'vue-i18n'
import en from '@/locales/en.js'
import ar from '@/locales/ar.js'
import es from '@/locales/es.js'
import fr from '@/locales/fr.js'
import zh from '@/locales/zh.js'

export const SUPPORTED_LOCALES = [
    { code: 'en', label: 'English', dir: 'ltr' },
    { code: 'ar', label: 'عربي', dir: 'rtl' },
    { code: 'es', label: 'Español', dir: 'ltr' },
    { code: 'fr', label: 'Français', dir: 'ltr' },
    { code: 'zh', label: '中文', dir: 'ltr' },
]

const RTL_LOCALES = ['ar']
const STORAGE_KEY = 'subtypeTool_locale'

const savedLocale = localStorage.getItem(STORAGE_KEY) || 'en'

export const i18n = createI18n({
    legacy: false,
    locale: savedLocale,
    fallbackLocale: 'en',
    messages: { en, ar, es, fr, zh },
})

export function setLocale(code) {
    i18n.global.locale.value = code
    localStorage.setItem(STORAGE_KEY, code)

    const isRTL = RTL_LOCALES.includes(code)
    document.documentElement.lang = code
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr'

    // Lazy-load Arabic font on first use
    if (isRTL && !document.getElementById('arabic-font')) {
        const link = document.createElement('link')
        link.id = 'arabic-font'
        link.rel = 'stylesheet'
        link.href = 'https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@400;500;600;700&display=swap'
        document.head.appendChild(link)
        document.body.style.fontFamily = "'Noto Sans Arabic', sans-serif"
    } else if (isRTL && document.getElementById('arabic-font')) {
        document.body.style.fontFamily = "'Noto Sans Arabic', sans-serif"
    } else {
        document.body.style.fontFamily = "'Euclid Circular A', sans-serif"
    }
}

// Apply on initial load (handles localStorage-restored locale)
setLocale(savedLocale)
