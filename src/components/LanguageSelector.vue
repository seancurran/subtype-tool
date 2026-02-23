<script setup>
import { useI18n } from 'vue-i18n'
import { SUPPORTED_LOCALES, setLocale } from '@/i18n'

const { locale } = useI18n()

const handleChange = (event) => {
    setLocale(event.target.value)
}
</script>

<template>
    <div class="flex items-center gap-1">
        <select
            :value="locale"
            @change="handleChange"
            class="text-xs font-semibold bg-white border border-gray-300 rounded px-2 py-1 cursor-pointer hover:border-gray-400 focus:outline-none focus:ring-1 focus:ring-[#3AADE1] text-gray-600"
        >
            <option
                v-for="loc in SUPPORTED_LOCALES"
                :key="loc.code"
                :value="loc.code"
            >
                {{ loc.label }}
            </option>
        </select>
    </div>
</template>
