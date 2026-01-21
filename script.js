const canvas = document.getElementById('fireCanvas');
const ctx = canvas.getContext('2d');

let particles = [];
let width, height;

function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
}

window.addEventListener('resize', resize);
resize();

class Particle {
    constructor() {
        this.reset();
    }

    reset() {
        // Start from bottom, spread across width
        this.x = Math.random() * width;
        this.y = height + Math.random() * 100; // Start slightly below
        
        // Upward velocity with some random drift
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = -Math.random() * 5 - 2;
        
        // Appearance
        this.size = Math.random() * 20 + 10;
        this.life = Math.random() * 100 + 50; // Life span
        this.maxLife = this.life;
        
        // Colors: Transition from White/Yellow -> Orange -> Red -> Dark Smoke
        this.hue = Math.random() * 30 + 10; // 10-40 (Orange/Yellow)
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;
        this.size *= 0.98; // Shrink
        this.life--;

        // Turbulent movement
        this.vx += (Math.random() - 0.5) * 0.2;

        if (this.life <= 0 || this.size <= 0.1) {
            this.reset();
        }
    }

    draw() {
        ctx.beginPath();
        // Create gradient for each particle for depth
        let gradient = ctx.createRadialGradient(
            this.x, this.y, 0, 
            this.x, this.y, this.size
        );
        
        // Calculate opacity based on life
        const alpha = this.life / this.maxLife;
        
        // Shift color to redder as it dies
        const currentHue = this.hue - (1 - alpha) * 20; 

        gradient.addColorStop(0, `hsla(${currentHue}, 100%, 70%, ${alpha})`);
        gradient.addColorStop(1, `hsla(${currentHue - 10}, 100%, 50%, 0)`);

        ctx.fillStyle = gradient;
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

// Intense Fire Mode
const particleCount = 400;

function initParticles() {
    particles = [];
    for (let i = 0; i < particleCount; i++) {
        let p = new Particle();
        // Pre-warm the system so it starts full
        for(let j=0; j<100; j++) p.update();
        particles.push(p);
    }
}

initParticles();

function animate() {
    // Clear with semi-transparent black for trail effect
    // Darker clearRect creates "smokier" trails, lighter makes it cleaner
    ctx.globalCompositeOperation = 'source-over';
    ctx.fillStyle = 'rgba(5, 0, 0, 0.2)';
    ctx.fillRect(0, 0, width, height);

    // Additive blending makes fire glow
    ctx.globalCompositeOperation = 'lighter';

    particles.forEach(p => {
        p.update();
        p.draw();
    });

    requestAnimationFrame(animate);
}

animate();

// Interactive: Fire follows mouse slightly
document.addEventListener('mousemove', (e) => {
    particles.forEach(p => {
        const dx = e.clientX - p.x;
        const dy = e.clientY - p.y;
        const dist = Math.sqrt(dx*dx + dy*dy);
        if(dist < 200) {
            p.vx += dx * 0.001; // Attract or Repel
        }
    })
});
