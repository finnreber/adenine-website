// Gentle floating hearts / petals background
(function () {
  const canvas = document.getElementById('petal-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let W, H, particles = [];

  const SHAPES = ['heart', 'circle', 'petal'];
  const COLORS = [
    'rgba(149,222,252,',
    'rgba(255,181,201,',
    'rgba(255,139,171,',
    'rgba(107,206,247,',
  ];

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function heartPath(ctx, x, y, size) {
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(size / 10, size / 10);
    ctx.beginPath();
    ctx.moveTo(0, -3);
    ctx.bezierCurveTo(5, -8, 10, -3, 0, 5);
    ctx.bezierCurveTo(-10, -3, -5, -8, 0, -3);
    ctx.restore();
  }

  function Particle() {
    this.reset(true);
  }

  Particle.prototype.reset = function (initial) {
    this.x    = Math.random() * W;
    this.y    = initial ? Math.random() * H : H + 20;
    this.size = 3 + Math.random() * 6;
    this.speed = 0.3 + Math.random() * 0.6;
    this.drift = (Math.random() - 0.5) * 0.4;
    this.rot   = Math.random() * Math.PI * 2;
    this.rotSpeed = (Math.random() - 0.5) * 0.015;
    this.alpha = 0.12 + Math.random() * 0.22;
    this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
    this.shape = SHAPES[Math.floor(Math.random() * SHAPES.length)];
  };

  Particle.prototype.update = function () {
    this.y   -= this.speed;
    this.x   += this.drift;
    this.rot += this.rotSpeed;
    if (this.y < -20) this.reset(false);
  };

  Particle.prototype.draw = function () {
    ctx.save();
    ctx.globalAlpha = this.alpha;
    ctx.fillStyle = this.color + '1)';
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rot);

    if (this.shape === 'heart') {
      heartPath(ctx, 0, 0, this.size);
      ctx.fill();
    } else if (this.shape === 'circle') {
      ctx.beginPath();
      ctx.arc(0, 0, this.size * 0.5, 0, Math.PI * 2);
      ctx.fill();
    } else {
      // petal — simple ellipse
      ctx.beginPath();
      ctx.ellipse(0, 0, this.size * 0.4, this.size * 0.9, 0, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.restore();
  };

  function init() {
    particles = [];
    const count = Math.min(Math.floor(W * H / 14000), 55);
    for (let i = 0; i < count; i++) {
      particles.push(new Particle());
    }
  }

  function loop() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(loop);
  }

  resize();
  init();
  loop();

  window.addEventListener('resize', () => { resize(); init(); });
})();
