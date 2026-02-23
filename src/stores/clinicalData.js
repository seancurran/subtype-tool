import { reactive, computed } from 'vue'
import { defineStore } from 'pinia'
import { i18n } from '@/i18n'

// Static base config — color and diamond type never change with locale
const subcategoryBase = {
    lipid: { color: 'blue', diamond: 'tear' },
    aqueous: { color: 'blue', diamond: 'tear' },
    'mucin-glycocalyx': { color: 'blue', diamond: 'tear' },
    'blink-lid-closure': { color: 'teal', diamond: 'eyelid' },
    'lid-margin': { color: 'teal', diamond: 'eyelid' },
    'anatomical-misalignment': { color: 'purple', diamond: 'ocular' },
    'neural-dysfunction': { color: 'purple', diamond: 'ocular' },
    'ocular-surface-cellular': { color: 'purple', diamond: 'ocular' },
    'primary-inflammation': { color: 'purple', diamond: 'ocular' },
}

export const useClinicalDataStore = defineStore('clinicalData', () => {
    // Pure boolean checkbox state — no text, shape mirrors management locale data
    const checkState = reactive({
        lipid: [
            { checked: false },
            { checked: false },
            { checked: false },
            { checked: false },
            { checked: false },
            { checked: false },
            { checked: false },
        ],
        aqueous: [
            { checked: false },
            { checked: false },
            { checked: false },
            { checked: false },
            { checked: false },
            { checked: false },
            { checked: false },
            { checked: false },
            { checked: false },
        ],
        'mucin-glycocalyx': [
            { checked: false },
            { checked: false },
            { checked: false },
            { checked: false },
        ],
        'blink-lid-closure': [
            { checked: false },
            { checked: false },
            { checked: false },
            { checked: false },
        ],
        'lid-margin': [
            {
                checked: false,
                subOptions: [{ checked: false }, { checked: false }, { checked: false }],
            },
            {
                checked: false,
                subOptions: [
                    { checked: false },
                    { checked: false },
                    { checked: false },
                    { checked: false },
                    { checked: false },
                    { checked: false },
                    { checked: false },
                    { checked: false },
                    { checked: false },
                ],
            },
        ],
        'anatomical-misalignment': [{ checked: false }, { checked: false }],
        'neural-dysfunction': [
            { checked: false },
            { checked: false },
            { checked: false },
            { checked: false },
        ],
        'ocular-surface-cellular': [
            { checked: false },
            { checked: false },
            { checked: false },
            { checked: false },
            { checked: false },
            { checked: false },
            { checked: false },
            { checked: false },
            { checked: false },
            { checked: false },
        ],
        'primary-inflammation': [
            {
                checked: false,
                subOptions: [{ checked: false }, { checked: false }, { checked: false }],
            },
            {
                checked: false,
                subOptions: [
                    { checked: false },
                    { checked: false },
                    { checked: false },
                    { checked: false },
                    { checked: false },
                    { checked: false },
                    { checked: false },
                    { checked: false },
                    { checked: false },
                    { checked: false },
                    { checked: false },
                    { checked: false },
                ],
            },
        ],
    })

    // Helper to get locale messages safely with fallback to English
    function getMessages() {
        const locale = i18n.global.locale.value
        return i18n.global.messages.value[locale] || i18n.global.messages.value['en']
    }

    // Getters — merge locale text with checkbox state at read time

    function getTestingData(subcategoryId) {
        // Access locale to make this reactive when called inside a computed
        const messages = getMessages()
        return messages?.testing?.[subcategoryId] || { standard: [], advanced: null }
    }

    function getManagementItems(subcategoryId) {
        const messages = getMessages()
        const items = messages?.management?.[subcategoryId] || []
        const states = checkState[subcategoryId] || []

        return states.map((state, i) => ({
            checked: state.checked,
            label: items[i]?.label ?? '',
            description: items[i]?.description ?? '',
            ...(state.subOptions
                ? {
                      subOptions: state.subOptions.map((sub, j) => ({
                          checked: sub.checked,
                          label: items[i]?.subOptions?.[j]?.label ?? '',
                          description: items[i]?.subOptions?.[j]?.description ?? '',
                      })),
                  }
                : {}),
        }))
    }

    function getSubcategoryConfig(subcategoryId) {
        const messages = getMessages()
        const base = subcategoryBase[subcategoryId]
        if (!base) return null
        const textConfig = messages?.config?.[subcategoryId]
        return {
            ...base,
            category: textConfig?.category ?? '',
            title: textConfig?.title ?? '',
        }
    }

    // Write only checked booleans back to checkState
    function updateManagementItems(subcategoryId, newItems) {
        const states = checkState[subcategoryId]
        if (!states) return
        newItems.forEach((item, i) => {
            if (states[i]) {
                states[i].checked = item.checked
                if (item.subOptions && states[i].subOptions) {
                    item.subOptions.forEach((sub, j) => {
                        if (states[i].subOptions[j]) {
                            states[i].subOptions[j].checked = sub.checked
                        }
                    })
                }
            }
        })
    }

    // Get all subcategory IDs
    function getAllSubcategoryIds() {
        return Object.keys(subcategoryBase)
    }

    // Helper to check if a subcategory has any checked items (uses checkState only)
    function hasCheckedItemsInSubcategory(subcategoryId) {
        const states = checkState[subcategoryId]
        if (!states) return false
        for (const state of states) {
            if (state.checked) return true
            if (state.subOptions) {
                for (const sub of state.subOptions) {
                    if (sub.checked) return true
                }
            }
        }
        return false
    }

    // Check if any checkbox is checked across all management items
    const hasAnyCheckboxChecked = computed(() => {
        for (const subcategoryId of Object.keys(checkState)) {
            if (hasCheckedItemsInSubcategory(subcategoryId)) return true
        }
        return false
    })

    // Check if TEAR FILM DEFICIENCIES category has any checked items
    const hasTearFilmChecked = computed(() => {
        return (
            hasCheckedItemsInSubcategory('lipid') ||
            hasCheckedItemsInSubcategory('aqueous') ||
            hasCheckedItemsInSubcategory('mucin-glycocalyx')
        )
    })

    // Check if EYELID ANOMALIES category has any checked items
    const hasEyelidChecked = computed(() => {
        return (
            hasCheckedItemsInSubcategory('blink-lid-closure') ||
            hasCheckedItemsInSubcategory('lid-margin')
        )
    })

    // Check if OCULAR SURFACE ABNORMALITIES category has any checked items
    const hasOcularSurfaceChecked = computed(() => {
        return (
            hasCheckedItemsInSubcategory('anatomical-misalignment') ||
            hasCheckedItemsInSubcategory('neural-dysfunction') ||
            hasCheckedItemsInSubcategory('ocular-surface-cellular') ||
            hasCheckedItemsInSubcategory('primary-inflammation')
        )
    })

    // Get all checked items organized by category (translated labels via getManagementItems)
    function getAllCheckedItems() {
        const result = {
            tearFilmDeficiencies: [],
            eyelidAnomalies: [],
            ocularSurfaceAbnormalities: [],
        }

        const extractCheckedItems = (subcategoryId) => {
            const items = getManagementItems(subcategoryId)
            const config = getSubcategoryConfig(subcategoryId)
            if (!items || !config) return []

            const checkedItems = []
            for (const item of items) {
                if (item.checked) {
                    checkedItems.push({
                        subcategory: config.title,
                        label: item.label,
                        description: item.description || '',
                    })
                }
                if (item.subOptions) {
                    for (const subItem of item.subOptions) {
                        if (subItem.checked) {
                            checkedItems.push({
                                subcategory: config.title,
                                parentLabel: item.label,
                                label: subItem.label,
                                description: subItem.description || '',
                            })
                        }
                    }
                }
            }
            return checkedItems
        }

        result.tearFilmDeficiencies.push(...extractCheckedItems('lipid'))
        result.tearFilmDeficiencies.push(...extractCheckedItems('aqueous'))
        result.tearFilmDeficiencies.push(...extractCheckedItems('mucin-glycocalyx'))

        result.eyelidAnomalies.push(...extractCheckedItems('blink-lid-closure'))
        result.eyelidAnomalies.push(...extractCheckedItems('lid-margin'))

        result.ocularSurfaceAbnormalities.push(...extractCheckedItems('anatomical-misalignment'))
        result.ocularSurfaceAbnormalities.push(...extractCheckedItems('neural-dysfunction'))
        result.ocularSurfaceAbnormalities.push(...extractCheckedItems('ocular-surface-cellular'))
        result.ocularSurfaceAbnormalities.push(...extractCheckedItems('primary-inflammation'))

        return result
    }

    return {
        checkState,
        getTestingData,
        getManagementItems,
        getSubcategoryConfig,
        updateManagementItems,
        getAllSubcategoryIds,
        hasAnyCheckboxChecked,
        hasTearFilmChecked,
        hasEyelidChecked,
        hasOcularSurfaceChecked,
        getAllCheckedItems,
    }
})
