<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { SUPPORTED_LOCALES, setLocale } from '@/i18n'

const { locale } = useI18n()

const isOpen = ref(false)
const currentLocale = computed(
    () => SUPPORTED_LOCALES.find((loc) => loc.code === locale.value) || SUPPORTED_LOCALES[0],
)

const toggle = () => {
    isOpen.value = !isOpen.value
}
const close = () => {
    isOpen.value = false
}
const choose = (code) => {
    setLocale(code)
    close()
}
</script>

<template>
    <div dir="ltr" class="relative">
        <button
            type="button"
            @click="toggle"
            class="flex items-center gap-1.5 px-2.5 py-2 rounded-lg border border-gray-200 text-xs font-medium text-gray-700 cursor-pointer"
        >
            <span class="fi" :class="`fi-${currentLocale.flagCode}`"></span>
            <span>{{ currentLocale.label }}</span>
            <svg
                class="w-3 h-3 text-gray-400 transition-transform"
                :class="{ 'rotate-180': isOpen }"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                />
            </svg>
        </button>

        <template v-if="isOpen">
            <div class="fixed inset-0 z-40" @click="close"></div>
            <div
                class="absolute right-0 top-full mt-1 z-50 w-44 max-h-72 overflow-y-auto bg-white border border-gray-200 rounded-lg shadow-lg py-1"
            >
                <button
                    v-for="loc in SUPPORTED_LOCALES"
                    :key="loc.code"
                    type="button"
                    @click="choose(loc.code)"
                    class="w-full flex items-center gap-2 px-3 py-2 text-sm text-left cursor-pointer hover:bg-gray-50"
                    :class="loc.code === locale ? 'bg-gray-50 font-medium text-gray-900' : 'text-gray-600'"
                >
                    <span class="fi" :class="`fi-${loc.flagCode}`"></span>
                    <span>{{ loc.label }}</span>
                </button>
            </div>
        </template>
    </div>
</template>
