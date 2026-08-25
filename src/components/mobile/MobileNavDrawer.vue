<script setup>
import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import MainNav from '@/components/MainNav.vue'
import { useNavigationStore } from '@/stores/navigation'

const { t } = useI18n()
const navigationStore = useNavigationStore()

const isOpen = ref(false)
const open = () => {
    isOpen.value = true
}
const close = () => {
    isOpen.value = false
}

// Auto-close once a subcategory is picked from the drawer's MainNav
watch(
    () => navigationStore.activeMenuItem,
    () => {
        if (isOpen.value) close()
    },
)
</script>

<template>
    <button
        type="button"
        @click="open"
        class="flex items-center justify-center w-10 h-10 rounded-lg border border-gray-200 text-gray-600 cursor-pointer"
        :aria-label="t('nav.menu')"
    >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
            />
        </svg>
    </button>

    <Teleport to="body">
        <div class="fixed inset-0 z-50" :class="{ 'pointer-events-none': !isOpen }">
            <Transition
                enter-active-class="transition-opacity duration-200 ease-out"
                leave-active-class="transition-opacity duration-150 ease-in"
                enter-from-class="opacity-0"
                enter-to-class="opacity-100"
                leave-from-class="opacity-100"
                leave-to-class="opacity-0"
            >
                <div v-if="isOpen" class="absolute inset-0 bg-black/50" @click="close"></div>
            </Transition>

            <Transition
                enter-active-class="transition-transform duration-250 ease-out"
                leave-active-class="transition-transform duration-200 ease-in"
                enter-from-class="-translate-x-full rtl:translate-x-full"
                enter-to-class="translate-x-0"
                leave-from-class="translate-x-0"
                leave-to-class="-translate-x-full rtl:translate-x-full"
            >
                <div
                    v-if="isOpen"
                    class="absolute inset-y-0 left-0 rtl:left-auto rtl:right-0 h-full w-[85%] max-w-[320px] bg-white shadow-2xl overflow-y-auto p-6"
                >
                    <button
                        type="button"
                        @click="close"
                        class="flex items-center justify-center w-9 h-9 rounded-lg border border-gray-200 text-gray-500 cursor-pointer ms-auto mb-4"
                        :aria-label="t('email.close')"
                    >
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                    <MainNav />
                </div>
            </Transition>
        </div>
    </Teleport>
</template>
