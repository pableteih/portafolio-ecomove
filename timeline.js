// Reveal effect for timeline items
function revealTimelineItems() {
  const items = document.querySelectorAll('.timeline-item');
  const trigger = window.innerHeight * 0.85;
  items.forEach((item, i) => {
    const rect = item.getBoundingClientRect();
    if (rect.top < trigger && rect.bottom > 80) {
      setTimeout(() => item.classList.add('reveal'), i * 180);
    } else {
      item.classList.remove('reveal');
    }
  });
}
window.addEventListener('scroll', revealTimelineItems);
window.addEventListener('DOMContentLoaded', revealTimelineItems);
