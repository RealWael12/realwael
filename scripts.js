// JavaScript for adding interactive effects

document.addEventListener('DOMContentLoaded', () => {
    // Example of adding a bounce effect on scroll
    const elements = document.querySelectorAll('.profile-container, .cta-button, .profile-image');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('bounce');
            } else {
                entry.target.classList.remove('bounce');
            }
        });
    }, {
        threshold: 0.5
    });

    elements.forEach(el => observer.observe(el));

    // Example of adding a wave effect to skill icons
    const skillIcons = document.querySelectorAll('.skill-icons i');
    skillIcons.forEach(icon => {
        icon.addEventListener('mouseover', () => {
            icon.style.animation = 'wave 1s infinite';
        });
        icon.addEventListener('mouseout', () => {
            icon.style.animation = 'none';
        });
    });
});
