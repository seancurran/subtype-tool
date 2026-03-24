<script setup>
import { ref, computed, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { SUPPORTED_LOCALES, setLocale } from '@/i18n'

const { locale } = useI18n()

const open = ref(false)

const currentLocale = computed(() => SUPPORTED_LOCALES.find(l => l.code === locale.value))
const isRTL = computed(() => currentLocale.value?.dir === 'rtl')

const rootEl = ref(null)

const onOutsideClick = (e) => {
    if (rootEl.value && !rootEl.value.contains(e.target)) {
        close()
    }
}

const onKeydown = (e) => {
    if (e.key === 'Escape') close()
}

const close = () => {
    open.value = false
    document.removeEventListener('mousedown', onOutsideClick)
    document.removeEventListener('keydown', onKeydown)
}

const toggle = () => {
    if (open.value) {
        close()
    } else {
        open.value = true
        document.addEventListener('mousedown', onOutsideClick)
        document.addEventListener('keydown', onKeydown)
    }
}

const select = (code) => {
    setLocale(code)
    close()
}

onUnmounted(() => {
    document.removeEventListener('mousedown', onOutsideClick)
    document.removeEventListener('keydown', onKeydown)
})
</script>

<template>
    <div ref="rootEl" dir="ltr" class="relative w-full flex" :class="isRTL ? 'justify-end' : 'justify-start'">
        <!-- Trigger button -->
        <button
            @click="toggle"
            class="flex items-center gap-1.5 text-xs text-gray-500 border border-gray-200 rounded-md px-2.5 py-1.5 bg-white hover:border-gray-300 focus-visible:outline-none cursor-pointer"
            type="button"
        >
            <span class="fi" :class="`fi-${currentLocale?.flagCode}`"></span>
            <span>{{ currentLocale?.label }}</span>
            <span class="text-gray-400">▾</span>
        </button>

        <!-- Popover list -->
        <ul
            v-if="open"
            class="absolute top-full mt-1 z-50 bg-white border border-gray-200 rounded-md shadow-sm min-w-full"
            :class="isRTL ? 'right-0' : 'left-0'"
        >
            <li
                v-for="loc in SUPPORTED_LOCALES"
                :key="loc.code"
                @click="select(loc.code)"
                class="flex items-center justify-between px-3 py-1.5 text-xs cursor-pointer hover:bg-gray-50"
                :class="loc.code === locale ? 'text-gray-800' : 'text-gray-500'"
            >
                <span class="flex items-center gap-1.5">
                    <span class="fi" :class="`fi-${loc.flagCode}`"></span>
                    <span>{{ loc.label }}</span>
                </span>
                <span v-if="loc.code === locale" class="ml-3 text-gray-400">✓</span>
            </li>
        </ul>
    </div>
</template>
