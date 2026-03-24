<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import GradientButton from '@/components/GradientButton.vue'
import LanguageSelector from '@/components/LanguageSelector.vue'
import { useNavigationStore } from '@/stores/navigation'
import { useClinicalDataStore } from '@/stores/clinicalData'

const { t } = useI18n()
const navigationStore = useNavigationStore()
const clinicalDataStore = useClinicalDataStore()

const currentYear = new Date().getFullYear()

// Compute variants for main category buttons based on checked state
const tearFilmVariant = computed(() => (clinicalDataStore.hasTearFilmChecked ? 'blue' : 'gray'))
const eyelidVariant = computed(() => (clinicalDataStore.hasEyelidChecked ? 'blue' : 'gray'))
const ocularSurfaceVariant = computed(() =>
    clinicalDataStore.hasOcularSurfaceChecked ? 'blue' : 'gray',
)

// Define parent-child relationships
const tearFilmItems = ['tear-film-deficiencies', 'lipid', 'aqueous', 'mucin-glycocalyx']
const eyelidItems = ['eyelid-anomalies', 'blink-lid-closure', 'lid-margin']
const ocularSurfaceItems = [
    'ocular-surface-abnormalities',
    'anatomical-misalignment',
    'neural-dysfunction',
    'ocular-surface-cellular',
    'primary-inflammation',
]

const handleNavClick = (menuId) => {
    // Determine which diamond category this belongs to
    let diamondType = null
    if (tearFilmItems.includes(menuId)) {
        diamondType = 'tear'
    } else if (eyelidItems.includes(menuId)) {
        diamondType = 'eyelid'
    } else if (ocularSurfaceItems.includes(menuId)) {
        diamondType = 'ocular'
    }

    navigationStore.setSelectedDiamond(diamondType)
    navigationStore.setActiveMenuItem(menuId)
}
</script>

<template>
    <!-- Left Navigation - Menu System -->
    <div class="space-y-6">
        <!-- Language Selector -->
        <div class="mb-4">
            <LanguageSelector />
        </div>

        <!-- Tear Film Deficiencies Section -->
        <div class="space-y-3">
            <GradientButton
                :variant="tearFilmVariant"
                :active="navigationStore.activeMenuItem === 'tear-film-deficiencies'"
                @click="handleNavClick('tear-film-deficiencies')"
            >
                {{ t('nav.tearFilmDeficiencies') }}
            </GradientButton>
            <GradientButton
                variant="cyan"
                :active="navigationStore.activeMenuItem === 'lipid'"
                @click="handleNavClick('lipid')"
            >
                {{ t('nav.lipid') }}
            </GradientButton>
            <GradientButton
                variant="cyan"
                :active="navigationStore.activeMenuItem === 'aqueous'"
                @click="handleNavClick('aqueous')"
            >
                {{ t('nav.aqueous') }}
            </GradientButton>
            <GradientButton
                variant="cyan"
                :active="navigationStore.activeMenuItem === 'mucin-glycocalyx'"
                @click="handleNavClick('mucin-glycocalyx')"
            >
                <span class="whitespace-pre-line leading-tight text-center">{{ t('nav.mucinGlycocalyx') }}</span>
            </GradientButton>
        </div>

        <!-- Eyelid Anomalies Section -->
        <div class="space-y-3">
            <GradientButton
                :variant="eyelidVariant"
                :active="navigationStore.activeMenuItem === 'eyelid-anomalies'"
                @click="handleNavClick('eyelid-anomalies')"
            >
                {{ t('nav.eyelidAnomalies') }}
            </GradientButton>
            <GradientButton
                variant="teal"
                :active="navigationStore.activeMenuItem === 'blink-lid-closure'"
                @click="handleNavClick('blink-lid-closure')"
            >
                {{ t('nav.blinkLidClosure') }}
            </GradientButton>
            <GradientButton
                variant="teal"
                :active="navigationStore.activeMenuItem === 'lid-margin'"
                @click="handleNavClick('lid-margin')"
            >
                {{ t('nav.lidMargin') }}
            </GradientButton>
        </div>

        <!-- Ocular Surface Abnormalities Section -->
        <div class="space-y-3">
            <GradientButton
                :variant="ocularSurfaceVariant"
                :active="navigationStore.activeMenuItem === 'ocular-surface-abnormalities'"
                @click="handleNavClick('ocular-surface-abnormalities')"
            >
                {{ t('nav.ocularSurfaceAbnormalities') }}
            </GradientButton>
            <GradientButton
                variant="purple"
                :active="navigationStore.activeMenuItem === 'anatomical-misalignment'"
                @click="handleNavClick('anatomical-misalignment')"
            >
                {{ t('nav.anatomicalMisalignment') }}
            </GradientButton>
            <GradientButton
                variant="purple"
                :active="navigationStore.activeMenuItem === 'neural-dysfunction'"
                @click="handleNavClick('neural-dysfunction')"
            >
                {{ t('nav.neuralDysfunction') }}
            </GradientButton>
            <GradientButton
                variant="purple"
                :active="navigationStore.activeMenuItem === 'ocular-surface-cellular'"
                @click="handleNavClick('ocular-surface-cellular')"
            >
                <div class="text-center leading-3">
                    <div>{{ t('nav.ocularSurfaceCellularLine1') }}</div>
                    <div>{{ t('nav.ocularSurfaceCellularLine2') }}</div>
                </div>
            </GradientButton>
            <GradientButton
                variant="purple"
                :active="navigationStore.activeMenuItem === 'primary-inflammation'"
                @click="handleNavClick('primary-inflammation')"
            >
                <div class="text-center leading-3">
                    <div>{{ t('nav.primaryInflammationLine1') }}</div>
                    <div>{{ t('nav.primaryInflammationLine2') }}</div>
                </div>
            </GradientButton>
        </div>

        <!-- Copyright -->
        <div class="text-xs text-gray-500 mt-16">
            {{ t('nav.copyright', { year: currentYear }) }}
        </div>
    </div>
</template>
