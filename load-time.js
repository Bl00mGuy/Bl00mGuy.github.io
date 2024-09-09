(function() {
    function calculateLoadTime() {
        const loadTime = performance.now();
        return loadTime.toFixed(2);
    }

    document.addEventListener('DOMContentLoaded', function() {
        const loadTime = calculateLoadTime();
        const loadingTimeElement = document.getElementById('loading-time');
        if (loadingTimeElement) {
            loadingTimeElement.textContent = `Page load time: ${loadTime}ms`;
        }
    });
})();