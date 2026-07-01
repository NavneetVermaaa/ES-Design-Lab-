function scrollToTop() {
  const lenis = window.__lenis
  if (lenis) {
    lenis.scrollTo(0, { immediate: true, duration: 0 })
  } else {
    window.scrollTo(0, 0)
  }
}

export function scrollToHash(hash) {
  if (!hash) return
  const id = hash.replace('#', '')
  const el = document.getElementById(id)
  if (!el) return
  const lenis = window.__lenis
  if (lenis) {
    lenis.scrollTo(el, { offset: 0, duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) })
  } else {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}

export function navigate(href) {
  if (!href || href.startsWith('http') || href.startsWith('mailto') || href.startsWith('tel')) return

  const [pathPart, hash] = href.split('#')
  const currentPath = window.location.pathname.replace(/\/$/, '') || '/'
  const targetPath = (pathPart || '/').replace(/\/$/, '') || '/'
  const targetHash = hash ? `#${hash}` : ''

  if (targetPath !== currentPath) {
    window.history.pushState({}, '', targetPath + targetHash)
    window.dispatchEvent(new Event('app-navigate'))
    if (hash) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          scrollToHash(targetHash)
        })
      })
    } else {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          scrollToTop()
        })
      })
    }
  } else if (hash) {
    scrollToHash(targetHash)
    window.history.replaceState({}, '', targetPath + targetHash)
  } else {
    scrollToTop()
    window.history.replaceState({}, '', targetPath + targetHash)
  }
}
