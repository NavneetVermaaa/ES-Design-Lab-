import { useEffect } from 'react'

export default function ScrollToTop({ path }) {
  useEffect(() => {
    window.history.scrollRestoration = 'manual'

    const scrollToTop = () => {
      window.scrollTo(0, 0)
      const lenis = window.__lenis
      if (lenis) {
        lenis.scrollTo(0, { immediate: true, duration: 0 })
      }
    }

    requestAnimationFrame(() => {
      requestAnimationFrame(scrollToTop)
    })
  }, [path])

  return null
}
