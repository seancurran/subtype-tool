<script setup>
import { computed, inject } from 'vue'
import { useI18n } from 'vue-i18n'
import SubOptionBox from './SubOptionBox.vue'
import TestingSection from './TestingSection.vue'
import ManagementSection from './ManagementSection.vue'
import { useNavigationStore } from '@/stores/navigation'
import { useClinicalDataStore } from '@/stores/clinicalData'
import { useLayoutStore } from '@/stores/layout'

const { t } = useI18n()

const props = defineProps({
    subcategoryId: {
        type: String,
        required: true,
    },
})

const navigationStore = useNavigationStore()
const clinicalDataStore = useClinicalDataStore()
const layoutStore = useLayoutStore()

// Get the email modal opener from parent
const openEmailModal = inject('openEmailModal')

// Get configuration for this subcategory
const config = computed(() => clinicalDataStore.getSubcategoryConfig(props.subcategoryId))

// Get testing data (reactive to locale changes via i18n.global.locale dependency)
const testingData = computed(() => clinicalDataStore.getTestingData(props.subcategoryId))

// Get management items (reactive to locale changes)
const managementItems = computed(() => clinicalDataStore.getManagementItems(props.subcategoryId))

// Check if email button should be disabled (no checkboxes checked anywhere)
const isEmailDisabled = computed(() => !clinicalDataStore.hasAnyCheckboxChecked)

// Check visibility
const isVisible = computed(() => {
    if (!config.value) return false
    return layoutStore.isSubcategoryVisible(props.subcategoryId, config.value.diamond)
})

// Handle management items update
function handleManagementUpdate(newItems) {
    clinicalDataStore.updateManagementItems(props.subcategoryId, newItems)
}

// Handle email button click - opens the email modal
function handleEmail() {
    if (openEmailModal) {
        openEmailModal()
    }
}
</script>

<template>
    <div
        class="absolute top-1/2 -translate-y-1/2 left-0 w-full z-10"
        :class="{ invisible: !isVisible }"
    >
        <SubOptionBox
            v-if="config"
            :color="config.color"
            :category="config.category"
            :title="config.title"
            :disable-previous="navigationStore.isFirstSubcategory"
            :disable-next="navigationStore.isLastSubcategory"
            :disable-email="isEmailDisabled"
            @previous="navigationStore.navigatePrevious"
            @next="navigationStore.navigateNext"
            @email="handleEmail"
        >
            <TestingSection
                v-if="testingData.standard && testingData.standard.length > 0"
                :title="t('panel.standardTesting')"
                :color="config.color"
                :items="testingData.standard"
            />
            <TestingSection
                v-if="testingData.advanced && testingData.advanced.length > 0"
                :title="t('panel.advancedTesting')"
                :color="config.color"
                :items="testingData.advanced"
            />
            <ManagementSection
                :color="config.color"
                :items="managementItems"
                @update:items="handleManagementUpdate"
            />
        </SubOptionBox>
    </div>
</template>
