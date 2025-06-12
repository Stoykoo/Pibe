// Simulate loading
window.addEventListener('load', function () {
    setTimeout(function () {
        document.querySelector('.loading').style.opacity = '0';
        setTimeout(function () {
            document.querySelector('.loading').style.display = 'none';
        }, 500);
    }, 1500);

    // Create particles
    createParticles();

    // Navigation buttons
    document.getElementById('showExamples').addEventListener('click', function () {
        document.querySelector('header').style.display = 'none';
        document.getElementById('gallery').style.display = 'block';
        document.getElementById('twitterContact').style.display = 'none';
    });

    document.getElementById('showContact').addEventListener('click', function () {
        document.querySelector('header').style.display = 'none';
        document.getElementById('gallery').style.display = 'none';
        document.getElementById('twitterContact').style.display = 'block';
    });

    document.getElementById('backToHome').addEventListener('click', function () {
        document.querySelector('header').style.display = 'block';
        document.getElementById('gallery').style.display = 'none';
        document.getElementById('twitterContact').style.display = 'none';
    });

    document.getElementById('backToHome2').addEventListener('click', function () {
        document.querySelector('header').style.display = 'block';
        document.getElementById('gallery').style.display = 'none';
        document.getElementById('twitterContact').style.display = 'none';
    });
});

function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 30;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        const size = Math.random() * 3 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.top = `${Math.random() * 100}vh`;
        particle.style.opacity = Math.random() * 0.3 + 0.1;
        particle.style.animationDuration = `${Math.random() * 8 + 4}s`;
        particle.style.animationDelay = `${Math.random() * 4}s`;

        particlesContainer.appendChild(particle);
    }
}