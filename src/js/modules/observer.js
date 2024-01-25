export const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const intersecting = entry.isIntersecting;
        entry.target.style.animation = intersecting ? `zoomIn 1s ease ${entry.target.dataset.delay} forwards` : `none`;
    });
});