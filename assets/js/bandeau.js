
(function () {
    const mediaMobile = window.matchMedia('(max-width: 980px)');

    function gererBandeau() {
        const bandeau = document.getElementById('titleBar');
        if (!bandeau) return false;

        const visible = mediaMobile.matches && window.scrollY > 180;

        bandeau.classList.toggle('bandeau-visible', visible);

        return true;
    }

    function initialiser() {
        if (gererBandeau()) {
            window.addEventListener('scroll', gererBandeau, { passive: true });
            window.addEventListener('resize', gererBandeau);
        } else {
            setTimeout(initialiser, 100);
        }
    }

    initialiser();
})();
