<script setup>
import { computed, inject } from 'vue'
import { useI18n } from 'vue-i18n'
import TestingSection from '@/components/TestingSection.vue'
import ManagementSection from '@/components/ManagementSection.vue'
import { useNavigationStore } from '@/stores/navigation'
import { useClinicalDataStore } from '@/stores/clinicalData'

const { t } = useI18n()

const props = defineProps({
    subcategoryId: {
        type: String,
        required: true,
    },
})

const navigationStore = useNavigationStore()
const clinicalDataStore = useClinicalDataStore()

const openEmailModal = inject('openEmailModal')

const config = computed(() => clinicalDataStore.getSubcategoryConfig(props.subcategoryId))
const testingData = computed(() => clinicalDataStore.getTestingData(props.subcategoryId))
const managementItems = computed(() => clinicalDataStore.getManagementItems(props.subcategoryId))
const isEmailDisabled = computed(() => !clinicalDataStore.hasAnyCheckboxChecked)

function handleManagementUpdate(newItems) {
    clinicalDataStore.updateManagementItems(props.subcategoryId, newItems)
}

function handleEmail() {
    if (openEmailModal) {
        openEmailModal()
    }
}
</script>

<template>
    <div v-if="config" class="bg-white px-4 py-4 border-t border-gray-100">
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

        <div class="flex items-center justify-between gap-2 mt-4 pt-4 border-t border-gray-100">
            <button
                type="button"
                @click="navigationStore.navigatePrevious"
                :disabled="navigationStore.isFirstSubcategory"
                class="flex items-center gap-1 text-sm font-medium transition-colors"
                :class="
                    navigationStore.isFirstSubcategory
                        ? 'text-gray-300 cursor-not-allowed'
                        : 'text-gray-600 cursor-pointer'
                "
            >
                <span class="rtl:hidden">←</span><span class="hidden rtl:inline">→</span>
                {{ t('panel.previous') }}
            </button>

            <button
                type="button"
                @click="handleEmail"
                :disabled="isEmailDisabled"
                class="text-sm font-bold px-4 py-2 rounded-full transition-opacity"
                :class="
                    isEmailDisabled
                        ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        : 'bg-[#05319B] text-white cursor-pointer hover:opacity-90'
                "
            >
                {{ t('panel.email') }}
            </button>

            <button
                type="button"
                @click="navigationStore.navigateNext"
                :disabled="navigationStore.isLastSubcategory"
                class="flex items-center gap-1 text-sm font-medium transition-colors"
                :class="
                    navigationStore.isLastSubcategory
                        ? 'text-gray-300 cursor-not-allowed'
                        : 'text-gray-600 cursor-pointer'
                "
            >
                {{ t('panel.next') }}
                <span class="rtl:hidden">→</span><span class="hidden rtl:inline">←</span>
            </button>
        </div>
    </div>
</template>
