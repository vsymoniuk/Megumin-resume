
    const colors = [ '#ffc000', '#ff3b3b', '#ff8400' ];
    const bubbles = 25;

    const explode = (x, y) => {
        let particles = [];
        let ratio = window.devicePixelRatio;
        let canvas = document.createElement('canvas');
        let ctx = canvas.getContext('2d');

        canvas.style.position = 'absolute';
        canvas.style.left = (x - 100) + 'px';
        canvas.style.top = (y - 100) + 'px';
        canvas.style.pointerEvents = 'none';
        canvas.style.width = 200 + 'px';
        canvas.style.height = 200 + 'px';
        canvas.style.zIndex = 100;
        canvas.width = 200 * ratio;
        canvas.height = 200 * ratio;
        document.body.appendChild(canvas);

        for(var i = 0; i < bubbles; i++) {
            particles.push({
                x: canvas.width / 2,
                y: canvas.height / 2,
                radius: r(20, 30),
                color: colors[Math.floor(Math.random() * colors.length)],
                rotation: r(0, 360, true),
                speed: r(8, 12),
                friction: 0.9,
                opacity: r(0, 0.5, true),
                yVel: 0,
                gravity: 0.1
            });
        }

        render(particles, ctx, canvas.width, canvas.height);
        setTimeout(() => document.body.removeChild(canvas), 1000);
    }

    const render = (particles, ctx, width, height) => {
        requestAnimationFrame(() => render(particles, ctx, width, height));
        ctx.clearRect(0, 0, width, height);

        particles.forEach((particle) => {
            particle.x += particle.speed * Math.cos(particle.rotation * Math.PI / 180);
            particle.y += particle.speed * Math.sin(particle.rotation * Math.PI / 180);

            particle.opacity -= 0.01;
            particle.speed *= particle.friction;
            particle.radius *= particle.friction;
            particle.yVel += particle.gravity;
            particle.y += particle.yVel;

            if(particle.opacity < 0 || particle.radius < 0) return;

            ctx.beginPath();
            ctx.globalAlpha =particle.opacity;
            ctx.fillStyle = particle.color;
            ctx.arc(particle.x, particle.y, particle.radius, 0, 2 * Math.PI, false);
            ctx.fill();
        });

        return ctx;
    }

    const r = (a, b, c) => parseFloat((Math.random() * ((a ? a : 1) - (b ? b : 0)) + (b ? b : 0)).toFixed(c ? c : 0));
    const explosiveElements =  Array.from( document.querySelectorAll('.explosion'))
    
    explosiveElements.forEach(element => element.addEventListener('mouseout', event => explode(event.pageX, event.pageY))) 
    
