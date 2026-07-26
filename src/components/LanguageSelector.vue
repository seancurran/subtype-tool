<script setup>
import { useI18n } from 'vue-i18n'
import { SUPPORTED_LOCALES, setLocale } from '@/i18n'

const { locale } = useI18n()
</script>

<template>
    <div dir="ltr" class="grid grid-cols-5 gap-1">
        <button
            v-for="loc in SUPPORTED_LOCALES"
            :key="loc.code"
            @click="setLocale(loc.code)"
            type="button"
            :title="loc.label"
            class="flex items-center gap-1 px-1.5 py-1 rounded text-[11px] font-medium border transition-colors cursor-pointer"
            :class="loc.code === locale
                ? 'border-gray-400 bg-gray-100 text-gray-800'
                : 'border-gray-200 bg-white text-gray-400 hover:border-gray-300 hover:text-gray-600'"
        >
            <span class="fi" :class="`fi-${loc.flagCode}`"></span>
            <span>{{ loc.code.toUpperCase() }}</span>
        </button>
    </div>
</template>
