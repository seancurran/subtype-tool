<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import ContentBox from '@/components/ContentBox.vue'
import emailIcon from '@/assets/images/email-icon.png'

const { t } = useI18n()

const props = defineProps({
    color: {
        type: String,
        default: 'blue',
        validator: (value) => ['blue', 'teal', 'purple'].includes(value),
    },
    category: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    disablePrevious: {
        type: Boolean,
        default: false,
    },
    disableNext: {
        type: Boolean,
        default: false,
    },
    disableEmail: {
        type: Boolean,
        default: true,
    },
})

const emit = defineEmits(['email', 'previous', 'next'])

const handleEmail = () => {
    if (!props.disableEmail) {
        emit('email')
    }
}

const handlePrevious = () => {
    emit('previous')
}

const handleNext = () => {
    emit('next')
}

// Use max line length (after splitting on \n) so multi-line titles scale correctly
const titleSizeClass = computed(() => {
    const maxLineLength = Math.max(...props.title.split('\n').map((l) => l.length))
    if (maxLineLength > 28) return 'text-xs'
    if (maxLineLength >= 20) return 'text-base'
    return 'text-lg'
})
</script>

<template>
    <div class="relative">
        <ContentBox :color="color" show-top-tab show-bottom-tab>
            <template #tab>
                <div class="flex flex-col items-center justify-center">
                    <span class="text-xs font-medium opacity-90 whitespace-pre-line">{{ category }}</span>
                    <span class="font-bold leading-tight whitespace-pre-line" :class="titleSizeClass">{{ title }}</span>
                </div>
            </template>
            <slot></slot>
            <template #bottomTab>
                <!-- Email button only - centered in the blue tab -->
                <button
                    @click="handleEmail"
                    :disabled="disableEmail"
                    class="flex flex-col items-center text-white transition-opacity"
                    :class="
                        disableEmail
                            ? 'opacity-40 cursor-not-allowed'
                            : 'cursor-pointer hover:opacity-80'
                    "
                >
                    <img :src="emailIcon" alt="Email" class="w-14 h-14 object-contain ml-2" />
                    <span class="text-[10px] font-bold tracking-wider">{{ t('panel.email') }}</span>
                </button>
            </template>
        </ContentBox>

        <!-- Navigation buttons - positioned to align text labels with EMAIL text -->
        <div
            class="absolute w-[310px] mx-auto -bottom-[22px] left-0 right-0 flex justify-between px-4 h-[105px] pointer-events-none"
        >
            <!-- Previous button - left side, outside blue tab -->
            <button
                @click="handlePrevious"
                :disabled="disablePrevious"
                class="min-w-[52px] flex flex-col items-center justify-center transition-colors pointer-events-auto"
                :class="
                    disablePrevious
                        ? 'text-gray-300 cursor-not-allowed'
                        : 'text-gray-500 hover:text-gray-700 cursor-pointer'
                "
            >
                <span class="text-2xl mb-1 leading-5 rtl:hidden">←</span>
                <span class="text-2xl mb-1 leading-5 hidden rtl:block">→</span>
                <span class="text-[10px] font-medium tracking-wide">{{ t('panel.previous') }}</span>
            </button>

            <!-- Spacer for the center email button area -->
            <div class="w-[233px]"></div>

            <!-- Next button - right side, outside blue tab -->
            <button
                @click="handleNext"
                :disabled="disableNext"
                class="min-w-[52px] flex flex-col items-center justify-center transition-colors pointer-events-auto"
                :class="
                    disableNext
                        ? 'text-gray-300 cursor-not-allowed'
                        : 'text-gray-500 hover:text-gray-700 cursor-pointer'
                "
            >
                <span class="text-2xl mb-1 leading-5 rtl:hidden">→</span>
                <span class="text-2xl mb-1 leading-5 hidden rtl:block">←</span>
                <span class="text-[10px] font-medium tracking-wide">{{ t('panel.next') }}</span>
            </button>
        </div>
    </div>
</template>
