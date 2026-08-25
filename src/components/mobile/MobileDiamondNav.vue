<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useNavigationStore } from '@/stores/navigation'
import tearEyeIcon from '@/assets/images/eye-3.svg'
import eyelidEyeIcon from '@/assets/images/eye-2.svg'
import ocularEyeIcon from '@/assets/images/eye-1.svg'

// Sampled directly from the desktop diamond-image borders (tear/eyelid/ocular-diamond.png)
// so the box gradient matches the original artwork rather than the app's generic accent colors
const boxGradients = {
    blue: { from: '#58B1EA', to: '#3E80AB' },
    teal: { from: '#3F7E8A', to: '#2B5962' },
    purple: { from: '#55277E', to: '#3B1759' },
}

const { t } = useI18n()
const navigationStore = useNavigationStore()

const tiles = computed(() => [
    {
        diamond: 'tear',
        color: 'blue',
        icon: tearEyeIcon,
        label: t('boxes.tearFilmDeficiencies'),
    },
    {
        diamond: 'eyelid',
        color: 'teal',
        icon: eyelidEyeIcon,
        label: t('boxes.eyelidAnomalies'),
    },
    {
        diamond: 'ocular',
        color: 'purple',
        icon: ocularEyeIcon,
        label: t('boxes.ocularSurfaceAbnormalities'),
    },
])

const handleClick = (diamond) => {
    // Toggle selection like desktop, but don't auto-select a subcategory —
    // mobile reveals the sub-link list first (MobileCategoryList)
    if (navigationStore.selectedDiamond === diamond) {
        navigationStore.clearSelection()
    } else {
        navigationStore.setSelectedDiamond(diamond)
        navigationStore.setActiveMenuItem(null)
    }
}
</script>

<template>
    <div class="flex items-start justify-center gap-2 mt-3 mb-8">
        <button
            v-for="tile in tiles"
            :key="tile.diamond"
            type="button"
            @click="handleClick(tile.diamond)"
            class="flex-1 max-w-[135px] cursor-pointer transition-all duration-300"
            :class="
                navigationStore.selectedDiamond === null ||
                navigationStore.selectedDiamond === tile.diamond
                    ? ''
                    : 'grayscale opacity-60'
            "
        >
            <div
                class="aspect-square rounded-[20px] p-[8px]"
                :style="{
                    background: `linear-gradient(135deg, ${boxGradients[tile.color].from}, ${boxGradients[tile.color].to})`,
                    boxShadow: '3px 4px 8px rgba(0,0,0,0.25)',
                }"
            >
                <div
                    class="w-full h-full rounded-[15px] flex flex-col items-center justify-center gap-1.5 px-1.5"
                    style="background: linear-gradient(to right, #e0e0e0 0%, #e0e0e0 20%, #ffffff 45%)"
                >
                    <img :src="tile.icon" alt="" class="w-11 h-auto shrink-0" />
                    <span
                        class="text-[10px] font-semibold leading-[1.15] text-center text-blue-800 break-words whitespace-pre-line [hyphens:auto] [overflow-wrap:break-word]"
                    >
                        {{ tile.label }}
                    </span>
                </div>
            </div>
        </button>
    </div>
</template>
