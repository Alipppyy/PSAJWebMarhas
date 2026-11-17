/* ==========================================================================
   SMK MARHAS MARGAHAYU - LIQUID GLASS INTERACTION & NAVIGATION SCRIPT
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const hamburger = document.querySelector('.lg-hamburger');
    const navLinksContainer = document.querySelector('.lg-nav-links');
    const navLinks = document.querySelectorAll('.lg-nav-links a');

    // 1. Navbar scroll state
    const updateNavbarScroll = () => {
        if (!navbar) return;
        if (window.scrollY > 36) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };
    updateNavbarScroll();
    window.addEventListener('scroll', updateNavbarScroll, { passive: true });

    // 2. Mobile hamburger menu toggle
    const setMenuOpen = (isOpen) => {
        if (!hamburger || !navLinksContainer) return;
        hamburger.classList.toggle('active', isOpen);
        navLinksContainer.classList.toggle('active', isOpen);
        hamburger.setAttribute('aria-expanded', String(isOpen));
    };

    if (hamburger && navLinksContainer) {
        hamburger.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = !navLinksContainer.classList.contains('active');
            setMenuOpen(isOpen);
        });

        navLinks.forEach((link) => {
            link.addEventListener('click', () => setMenuOpen(false));
        });

        document.addEventListener('click', (e) => {
            if (
                navLinksContainer.classList.contains('active') &&
                !navLinksContainer.contains(e.target) &&
                !hamburger.contains(e.target)
            ) {
                setMenuOpen(false);
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navLinksContainer.classList.contains('active')) {
                setMenuOpen(false);
                hamburger.focus();
            }
        });
    }

    // 3. Active navigation indicator
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    if (currentPage === 'index.html' || currentPage === '') {
        const trackedSections = [
            { id: 'hero', selector: 'a[href="index.html"], a[href="#"]' },
            { id: 'karya', selector: 'a[href*="#produk"], a[href*="#karya"]' },
            { id: 'tentang', selector: 'a[href*="#tentang"]' },
            { id: 'kontak', selector: 'a[href*="#kontak"]' }
        ];

        const setActiveLink = (selector) => {
            navLinks.forEach((link) => link.classList.remove('active'));
            const target = document.querySelector(`.lg-nav-links ${selector}`);
            if (target) target.classList.add('active');
        };

        setActiveLink('a[href="index.html"], a[href="#"]');

        const sectionObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const matched = trackedSections.find((s) => s.id === entry.target.id);
                        if (matched) setActiveLink(matched.selector);
                    }
                });
            },
            { rootMargin: '-40% 0px -45% 0px', threshold: 0 }
        );

        trackedSections.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (el) sectionObserver.observe(el);
        });
    }

    // 4. Initialize AOS safely (respecting reduced motion)
    if (typeof AOS !== 'undefined') {
        const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        AOS.init({
            once: true,
            duration: 650,
            easing: 'ease-out-cubic',
            disable: prefersReduced
        });
    }

    // 5. Share button & comment form feedback on Karya detail pages
    const shareButtons = document.querySelectorAll('.ikon-bagikan');
    shareButtons.forEach((btn) => {
        btn.setAttribute('role', 'button');
        btn.setAttribute('tabindex', '0');
        btn.setAttribute('aria-label', 'Bagikan halaman karya ini');
        const handleShare = () => {
            if (navigator.share) {
                navigator.share({ title: document.title, url: window.location.href }).catch(() => {});
            } else if (navigator.clipboard) {
                navigator.clipboard.writeText(window.location.href).then(() => {
                    btn.title = 'Tautan disalin!';
                }).catch(() => {});
            }
        };
        btn.addEventListener('click', handleShare);
        btn.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleShare();
            }
        });
    });
});
