import { ref, onMounted, onUnmounted } from 'vue'

const MOBILE_QUERY = '(max-width: 959px)'

export function useIsMobile() {
    const isMobile = ref(
        typeof window !== 'undefined' ? window.matchMedia(MOBILE_QUERY).matches : false,
    )

    let mql = null
    const handleChange = (event) => {
        isMobile.value = event.matches
    }
    // Fallback for environments where MediaQueryList's `change` event doesn't
    // fire on viewport resize (some embedded webviews / automated test harnesses)
    const handleResize = () => {
        if (mql) isMobile.value = mql.matches
    }

    onMounted(() => {
        mql = window.matchMedia(MOBILE_QUERY)
        isMobile.value = mql.matches
        mql.addEventListener('change', handleChange)
        window.addEventListener('resize', handleResize)
    })

    onUnmounted(() => {
        mql?.removeEventListener('change', handleChange)
        window.removeEventListener('resize', handleResize)
    })

    return { isMobile }
}
