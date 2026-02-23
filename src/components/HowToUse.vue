<script setup>
import { useI18n } from 'vue-i18n'
import ContentBox from '@/components/ContentBox.vue'

const { t } = useI18n()
</script>

<template>
    <!-- How to Use Panel -->
    <ContentBox color="grey" show-top-tab>
        <div class="max-h-[520px] overflow-y-auto">
            <h2 class="text-4xl font-bold text-[#05319B] mb-4">{{ t('howToUse.welcome') }}</h2>

            <p class="text-gray-600 mb-6">{{ t('howToUse.intro') }}</p>

            <h3 class="text-xl font-bold text-[#05319B] mb-4">
                {{ t('howToUse.howToUseTitle') }}
            </h3>

            <p class="text-gray-600 mb-4" v-html="t('howToUse.step1')"></p>

            <p class="text-gray-600 mb-4" v-html="t('howToUse.step2')"></p>

            <p class="text-gray-600" v-html="t('howToUse.step3')"></p>
        </div>
    </ContentBox>
</template>
