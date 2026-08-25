<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useNavigationStore } from '@/stores/navigation'
import { categoryColors } from '@/constants/categoryColors'
import MobileSubOptionPanel from './MobileSubOptionPanel.vue'

const { t } = useI18n()
const navigationStore = useNavigationStore()

const categoryMeta = {
    tear: {
        color: 'blue',
        title: 'boxes.tearFilmDeficiencies',
        links: [
            { id: 'lipid', label: 'boxes.lipid' },
            { id: 'aqueous', label: 'boxes.aqueous' },
            { id: 'mucin-glycocalyx', label: 'boxes.mucinGlycocalyx' },
        ],
    },
    eyelid: {
        color: 'teal',
        title: 'boxes.eyelidAnomalies',
        links: [
            { id: 'blink-lid-closure', label: 'boxes.blinkLidClosure' },
            { id: 'lid-margin', label: 'boxes.lidMargin' },
        ],
    },
    ocular: {
        color: 'purple',
        title: 'boxes.ocularSurfaceAbnormalities',
        links: [
            { id: 'anatomical-misalignment', label: 'boxes.anatomicalMisalignment' },
            { id: 'neural-dysfunction', label: 'boxes.neuralDysfunction' },
            { id: 'ocular-surface-cellular', label: 'boxes.ocularSurfaceCellular' },
            { id: 'primary-inflammation', label: 'boxes.primaryInflammation' },
        ],
    },
}

const meta = computed(() => categoryMeta[navigationStore.selectedDiamond])
const accentColor = computed(() => (meta.value ? categoryColors[meta.value.color].line : '#ABABAB'))

const handleLinkClick = (id) => {
    // Toggle: tapping the already-active link collapses it back
    if (navigationStore.activeMenuItem === id) {
        navigationStore.setActiveMenuItem(null)
    } else {
        navigationStore.setActiveMenuItem(id)
    }
}
</script>

<template>
    <div v-if="meta" class="mt-4 flex flex-col gap-2">
        <h2 class="text-sm font-bold" :style="{ color: accentColor }">{{ t(meta.title) }}</h2>

        <div
            v-for="link in meta.links"
            :key="link.id"
            class="rounded-lg overflow-hidden border-l-4 rtl:border-l-0 rtl:border-r-4"
            :style="{ borderColor: accentColor }"
        >
            <button
                type="button"
                @click="handleLinkClick(link.id)"
                class="w-full flex items-center justify-between gap-2 bg-gray-50 px-4 py-3 text-start text-sm font-semibold text-gray-700 cursor-pointer"
            >
                <span>{{ t(link.label) }}</span>
                <svg
                    class="w-4 h-4 shrink-0 transition-transform"
                    :class="{ 'rotate-180': navigationStore.activeMenuItem === link.id }"
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

            <MobileSubOptionPanel
                v-if="navigationStore.activeMenuItem === link.id"
                :subcategory-id="link.id"
            />
        </div>
    </div>
</template>
