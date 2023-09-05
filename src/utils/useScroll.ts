export function useScroll() {
  const scrollX = ref(0)
  const scrollY = ref(0)

  function updateScrollPosition() {
    scrollX.value = window.scrollX
    scrollY.value = window.scrollY
  }

  onMounted(() => {
    window.addEventListener('scroll', updateScrollPosition)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', updateScrollPosition)
  })

  return { scrollX, scrollY }
}

export function toScrollTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}
