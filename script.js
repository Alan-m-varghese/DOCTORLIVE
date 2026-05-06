document.addEventListener('DOMContentLoaded', () => {
    // Nav Scroll Effect
    const nav = document.getElementById('main-nav');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.background = 'rgba(10, 10, 12, 0.9)';
            nav.style.border = '1px solid rgba(255, 255, 255, 0.1)';
            nav.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)';
        } else {
            nav.style.background = 'rgba(10, 10, 12, 0.7)';
            nav.style.border = '1px solid rgba(255, 255, 255, 0.08)';
            nav.style.boxShadow = 'none';
        }
    });

    // Mobile Menu Toggle
    const menuBtn = document.querySelector('.menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    const navCta = document.querySelector('.nav-cta');
    
    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            const isExpanded = navMenu.style.display === 'flex';
            if (isExpanded) {
                navMenu.style.display = 'none';
                if(window.innerWidth <= 768) navCta.style.display = 'none';
                menuBtn.querySelectorAll('.menu-line')[0].style.transform = 'none';
                menuBtn.querySelectorAll('.menu-line')[1].style.transform = 'none';
            } else {
                navMenu.style.display = 'flex';
                navMenu.style.flexDirection = 'column';
                navMenu.style.position = 'absolute';
                navMenu.style.top = '100%';
                navMenu.style.left = '0';
                navMenu.style.width = '100%';
                navMenu.style.background = 'rgba(10, 10, 12, 0.95)';
                navMenu.style.padding = '20px';
                navMenu.style.borderRadius = '16px';
                navMenu.style.border = '1px solid rgba(255,255,255,0.1)';
                
                if(window.innerWidth <= 768) {
                    navCta.style.display = 'block';
                    navCta.style.textAlign = 'center';
                    navCta.style.marginTop = '15px';
                }

                menuBtn.querySelectorAll('.menu-line')[0].style.transform = 'translateY(3px) rotate(45deg)';
                menuBtn.querySelectorAll('.menu-line')[1].style.transform = 'translateY(-3px) rotate(-45deg)';
            }
        });
    }

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                if(window.innerWidth <= 768 && navMenu.style.display === 'flex') {
                    menuBtn.click(); // close menu
                }
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
