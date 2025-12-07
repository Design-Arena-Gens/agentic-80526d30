import { useState } from 'react'
import Head from 'next/head'

export default function Home() {
  const [activeDemo, setActiveDemo] = useState(null)
  const [copiedIndex, setCopiedIndex] = useState(null)

  const transitions = [
    {
      id: 1,
      name: "Morphing Blob Transition",
      description: "Ultra-smooth SVG morphing with liquid blob effects. Perfect for hero sections and page transitions.",
      demo: "blob",
      css: `.blob-container {
  position: relative;
  width: 300px;
  height: 300px;
  overflow: hidden;
  border-radius: 20px;
}

.blob {
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, #667eea 0%, #764ba2 100%);
  filter: url(#goo);
  animation: morphBlob 8s ease-in-out infinite;
}

@keyframes morphBlob {
  0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
  25% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
  50% { border-radius: 50% 50% 30% 70% / 30% 30% 70% 70%; }
  75% { border-radius: 70% 30% 50% 50% / 60% 70% 40% 30%; }
}`,
      html: `<div class="blob-container">
  <div class="blob"></div>
  <svg style="position: absolute; width: 0; height: 0;">
    <defs>
      <filter id="goo">
        <feGaussianBlur in="SourceGraphic" stdDeviation="10" />
        <feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10"/>
      </filter>
    </defs>
  </svg>
</div>`
    },
    {
      id: 2,
      name: "Liquid Wave Navigation",
      description: "Mesmerizing wave effect for navigation hovers. Creates a premium, fluid feel for menu interactions.",
      demo: "wave",
      css: `.wave-nav {
  position: relative;
  padding: 20px 40px;
  background: transparent;
  border: none;
  color: white;
  font-size: 18px;
  cursor: pointer;
  overflow: hidden;
}

.wave-nav::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #00d2ff 0%, #3a47d5 100%);
  transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  clip-path: ellipse(100% 55% at 50% 50%);
}

.wave-nav:hover::before {
  left: 0;
  clip-path: ellipse(150% 100% at 50% 50%);
}

.wave-nav span {
  position: relative;
  z-index: 1;
}`,
      html: `<button class="wave-nav">
  <span>Hover Me</span>
</button>`
    },
    {
      id: 3,
      name: "Gooey Card Flip",
      description: "3D card flip with gooey transition effect. Combines perspective transforms with liquid animations.",
      demo: "card",
      css: `.card-flip-container {
  perspective: 1000px;
  width: 300px;
  height: 400px;
}

.card-flip {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transform-style: preserve-3d;
}

.card-flip-container:hover .card-flip {
  transform: rotateY(180deg);
}

.card-face {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  filter: url(#goo-card);
}

.card-back {
  transform: rotateY(180deg);
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
}`,
      html: `<div class="card-flip-container">
  <div class="card-flip">
    <div class="card-face card-front">Front</div>
    <div class="card-face card-back">Back</div>
  </div>
  <svg style="position: absolute; width: 0; height: 0;">
    <defs>
      <filter id="goo-card">
        <feGaussianBlur in="SourceGraphic" stdDeviation="8" />
        <feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"/>
      </filter>
    </defs>
  </svg>
</div>`
    },
    {
      id: 4,
      name: "Elastic Loader",
      description: "Eye-catching loading animation with elastic liquid properties. Perfect for loading states.",
      demo: "loader",
      css: `.elastic-loader {
  display: flex;
  gap: 10px;
}

.elastic-dot {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: linear-gradient(45deg, #ff6b6b, #ee5a6f);
  animation: elasticBounce 1.4s ease-in-out infinite;
  filter: url(#goo-loader);
}

.elastic-dot:nth-child(2) {
  animation-delay: 0.2s;
  background: linear-gradient(45deg, #4ecdc4, #44a08d);
}

.elastic-dot:nth-child(3) {
  animation-delay: 0.4s;
  background: linear-gradient(45deg, #f7b731, #f39c12);
}

@keyframes elasticBounce {
  0%, 80%, 100% { transform: scale(0.8); opacity: 0.5; }
  40% { transform: scale(1.5); opacity: 1; }
}`,
      html: `<div class="elastic-loader">
  <div class="elastic-dot"></div>
  <div class="elastic-dot"></div>
  <div class="elastic-dot"></div>
  <svg style="position: absolute; width: 0; height: 0;">
    <defs>
      <filter id="goo-loader">
        <feGaussianBlur in="SourceGraphic" stdDeviation="6" />
        <feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"/>
      </filter>
    </defs>
  </svg>
</div>`
    },
    {
      id: 5,
      name: "Liquid Button Spread",
      description: "Button hover with liquid spread effect from center. Creates an organic, flowing interaction.",
      demo: "button",
      css: `.liquid-button {
  position: relative;
  padding: 18px 45px;
  border: 2px solid #fff;
  background: transparent;
  color: white;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  overflow: hidden;
  border-radius: 50px;
}

.liquid-button::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: linear-gradient(45deg, #fa709a 0%, #fee140 100%);
  transform: translate(-50%, -50%);
  transition: width 0.6s ease, height 0.6s ease;
  filter: url(#goo-button);
}

.liquid-button:hover::before {
  width: 400px;
  height: 400px;
}

.liquid-button span {
  position: relative;
  z-index: 1;
}`,
      html: `<button class="liquid-button">
  <span>Click Me</span>
  <svg style="position: absolute; width: 0; height: 0;">
    <defs>
      <filter id="goo-button">
        <feGaussianBlur in="SourceGraphic" stdDeviation="10" />
        <feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10"/>
      </filter>
    </defs>
  </svg>
</button>`
    },
    {
      id: 6,
      name: "Ripple Splash Effect",
      description: "Multi-layered ripple effect with liquid dynamics. Great for interactive elements and CTAs.",
      demo: "ripple",
      css: `.ripple-container {
  position: relative;
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.ripple {
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(99, 102, 241, 0.8) 0%, rgba(139, 92, 246, 0) 70%);
  animation: rippleEffect 2s ease-out infinite;
  filter: url(#goo-ripple);
}

.ripple:nth-child(2) {
  animation-delay: 0.5s;
  background: radial-gradient(circle, rgba(236, 72, 153, 0.8) 0%, rgba(249, 115, 22, 0) 70%);
}

.ripple:nth-child(3) {
  animation-delay: 1s;
  background: radial-gradient(circle, rgba(14, 165, 233, 0.8) 0%, rgba(34, 197, 94, 0) 70%);
}

@keyframes rippleEffect {
  0% { width: 0; height: 0; opacity: 1; }
  100% { width: 300px; height: 300px; opacity: 0; }
}`,
      html: `<div class="ripple-container">
  <div class="ripple"></div>
  <div class="ripple"></div>
  <div class="ripple"></div>
  <div style="position: relative; z-index: 10; color: white;">Click</div>
  <svg style="position: absolute; width: 0; height: 0;">
    <defs>
      <filter id="goo-ripple">
        <feGaussianBlur in="SourceGraphic" stdDeviation="12" />
        <feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"/>
      </filter>
    </defs>
  </svg>
</div>`
    },
    {
      id: 7,
      name: "Magnetic Liquid Hover",
      description: "Advanced magnetic tracking effect with liquid deformation. Creates premium interactive experiences.",
      demo: "magnetic",
      css: `.magnetic-container {
  position: relative;
  width: 300px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.magnetic-element {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  filter: url(#goo-magnetic);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
}

.magnetic-container:hover .magnetic-element {
  transform: scale(1.1);
}`,
      html: `<div class="magnetic-container">
  <div class="magnetic-element">Magnetic</div>
  <svg style="position: absolute; width: 0; height: 0;">
    <defs>
      <filter id="goo-magnetic">
        <feGaussianBlur in="SourceGraphic" stdDeviation="10" />
        <feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"/>
      </filter>
    </defs>
  </svg>
</div>`
    },
    {
      id: 8,
      name: "Flowing Text Reveal",
      description: "Text reveal with flowing liquid background. Perfect for hero sections and headlines.",
      demo: "text",
      css: `.text-reveal {
  position: relative;
  font-size: 48px;
  font-weight: 900;
  color: transparent;
  background: linear-gradient(90deg, #667eea, #764ba2, #f093fb, #667eea);
  background-size: 200% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  animation: flowingGradient 3s ease infinite;
  filter: url(#goo-text);
}

@keyframes flowingGradient {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}`,
      html: `<h1 class="text-reveal">LIQUID</h1>
<svg style="position: absolute; width: 0; height: 0;">
  <defs>
    <filter id="goo-text">
      <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
      <feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10"/>
    </filter>
  </defs>
</svg>`
    },
    {
      id: 9,
      name: "Bubble Merge Menu",
      description: "Navigation menu where items merge like bubbles. Creates playful, engaging interactions.",
      demo: "menu",
      css: `.bubble-menu {
  display: flex;
  gap: 20px;
  filter: url(#goo-menu);
}

.bubble-item {
  padding: 15px 30px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50px;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.bubble-item:hover {
  transform: scale(1.15);
  margin: 0 10px;
}

.bubble-item:hover + .bubble-item {
  transform: translateX(-5px);
}`,
      html: `<div class="bubble-menu">
  <div class="bubble-item">Home</div>
  <div class="bubble-item">About</div>
  <div class="bubble-item">Contact</div>
  <svg style="position: absolute; width: 0; height: 0;">
    <defs>
      <filter id="goo-menu">
        <feGaussianBlur in="SourceGraphic" stdDeviation="8" />
        <feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"/>
      </filter>
    </defs>
  </svg>
</div>`
    },
    {
      id: 10,
      name: "Viscous Page Transition",
      description: "Full-page transition with viscous liquid effect. Creates memorable page-to-page experiences.",
      demo: "page",
      css: `.page-transition {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  transform: scaleY(0);
  transform-origin: top;
  transition: transform 0.8s cubic-bezier(0.86, 0, 0.07, 1);
  filter: url(#goo-page);
  z-index: 1000;
}

.page-transition.active {
  transform: scaleY(1);
}

.page-transition.exit {
  transform-origin: bottom;
  transform: scaleY(0);
}`,
      html: `<div class="page-transition"></div>
<button onclick="document.querySelector('.page-transition').classList.add('active')">
  Trigger Transition
</button>
<svg style="position: absolute; width: 0; height: 0;">
  <defs>
    <filter id="goo-page">
      <feGaussianBlur in="SourceGraphic" stdDeviation="15" />
      <feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10"/>
    </filter>
  </defs>
</svg>`
    },
    {
      id: 11,
      name: "Lava Lamp Background",
      description: "Mesmerizing lava lamp effect for backgrounds. Multiple blobs floating and merging organically.",
      demo: "lava",
      css: `.lava-container {
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
  background: linear-gradient(180deg, #1a1a2e 0%, #16213e 100%);
  border-radius: 20px;
}

.lava-blob {
  position: absolute;
  border-radius: 50%;
  filter: url(#goo-lava);
  animation: float 10s ease-in-out infinite;
}

.lava-blob:nth-child(1) {
  width: 150px;
  height: 150px;
  background: linear-gradient(45deg, #ff6b6b, #ee5a6f);
  left: 20%;
  animation-duration: 8s;
}

.lava-blob:nth-child(2) {
  width: 200px;
  height: 200px;
  background: linear-gradient(45deg, #4ecdc4, #44a08d);
  right: 20%;
  animation-duration: 12s;
  animation-delay: 2s;
}

.lava-blob:nth-child(3) {
  width: 120px;
  height: 120px;
  background: linear-gradient(45deg, #f7b731, #f39c12);
  left: 50%;
  animation-duration: 10s;
  animation-delay: 4s;
}

@keyframes float {
  0%, 100% { transform: translate(0, 0) scale(1); }
  25% { transform: translate(30px, -50px) scale(1.1); }
  50% { transform: translate(-20px, -100px) scale(0.9); }
  75% { transform: translate(-40px, -50px) scale(1.05); }
}`,
      html: `<div class="lava-container">
  <div class="lava-blob"></div>
  <div class="lava-blob"></div>
  <div class="lava-blob"></div>
  <svg style="position: absolute; width: 0; height: 0;">
    <defs>
      <filter id="goo-lava">
        <feGaussianBlur in="SourceGraphic" stdDeviation="20" />
        <feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10"/>
      </filter>
    </defs>
  </svg>
</div>`
    },
    {
      id: 12,
      name: "Liquid Progress Bar",
      description: "Progress indicator with flowing liquid animation. Adds visual interest to loading states.",
      demo: "progress",
      css: `.liquid-progress {
  position: relative;
  width: 100%;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  overflow: hidden;
}

.liquid-fill {
  position: relative;
  height: 100%;
  width: 70%;
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  filter: url(#goo-progress);
  transition: width 0.5s ease;
}

.liquid-fill::before,
.liquid-fill::after {
  content: '';
  position: absolute;
  width: 200%;
  height: 200%;
  top: -50%;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 40%;
  animation: wave 3s linear infinite;
}

.liquid-fill::after {
  animation-delay: 1.5s;
  opacity: 0.5;
}

@keyframes wave {
  0% { transform: translateX(-50%) rotate(0deg); }
  100% { transform: translateX(-50%) rotate(360deg); }
}`,
      html: `<div class="liquid-progress">
  <div class="liquid-fill"></div>
  <svg style="position: absolute; width: 0; height: 0;">
    <defs>
      <filter id="goo-progress">
        <feGaussianBlur in="SourceGraphic" stdDeviation="8" />
        <feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"/>
      </filter>
    </defs>
  </svg>
</div>`
    }
  ]

  const copyToClipboard = (text, index) => {
    navigator.clipboard.writeText(text)
    setCopiedIndex(index)
    setTimeout(() => setCopiedIndex(null), 2000)
  }

  return (
    <>
      <Head>
        <title>Premium Liquid Transitions - CSS Effects Showcase</title>
        <meta name="description" content="Top-class liquid transition effects for modern websites" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="container">
        <header className="header">
          <h1 className="title">💧 Premium Liquid Transitions</h1>
          <p className="subtitle">
            Top-class CSS liquid effects that make websites feel alive and premium
          </p>
        </header>

        <div className="grid">
          {transitions.map((transition, index) => (
            <div key={transition.id} className="card">
              <div className="card-header">
                <h2 className="card-title">{transition.name}</h2>
                <p className="card-description">{transition.description}</p>
              </div>

              <div className="demo-container">
                <div className={`demo demo-${transition.demo}`}>
                  {transition.demo === 'blob' && (
                    <div className="blob-container">
                      <div className="blob"></div>
                    </div>
                  )}
                  {transition.demo === 'wave' && (
                    <button className="wave-nav">
                      <span>Hover Me</span>
                    </button>
                  )}
                  {transition.demo === 'card' && (
                    <div className="card-flip-container">
                      <div className="card-flip">
                        <div className="card-face card-front">Front</div>
                        <div className="card-face card-back">Back</div>
                      </div>
                    </div>
                  )}
                  {transition.demo === 'loader' && (
                    <div className="elastic-loader">
                      <div className="elastic-dot"></div>
                      <div className="elastic-dot"></div>
                      <div className="elastic-dot"></div>
                    </div>
                  )}
                  {transition.demo === 'button' && (
                    <button className="liquid-button">
                      <span>Click Me</span>
                    </button>
                  )}
                  {transition.demo === 'ripple' && (
                    <div className="ripple-container">
                      <div className="ripple"></div>
                      <div className="ripple"></div>
                      <div className="ripple"></div>
                      <div style={{ position: 'relative', zIndex: 10, color: 'white' }}>Click</div>
                    </div>
                  )}
                  {transition.demo === 'magnetic' && (
                    <div className="magnetic-container">
                      <div className="magnetic-element">Magnetic</div>
                    </div>
                  )}
                  {transition.demo === 'text' && (
                    <h1 className="text-reveal">LIQUID</h1>
                  )}
                  {transition.demo === 'menu' && (
                    <div className="bubble-menu">
                      <div className="bubble-item">Home</div>
                      <div className="bubble-item">About</div>
                      <div className="bubble-item">Contact</div>
                    </div>
                  )}
                  {transition.demo === 'page' && (
                    <div className="page-demo">
                      <button className="trigger-btn">Trigger Transition</button>
                      <div className="page-transition"></div>
                    </div>
                  )}
                  {transition.demo === 'lava' && (
                    <div className="lava-container">
                      <div className="lava-blob"></div>
                      <div className="lava-blob"></div>
                      <div className="lava-blob"></div>
                    </div>
                  )}
                  {transition.demo === 'progress' && (
                    <div className="liquid-progress">
                      <div className="liquid-fill"></div>
                    </div>
                  )}
                </div>
              </div>

              <div className="code-section">
                <div className="code-header">
                  <span className="code-label">CSS</span>
                  <button
                    className="copy-btn"
                    onClick={() => copyToClipboard(transition.css, `css-${index}`)}
                  >
                    {copiedIndex === `css-${index}` ? '✓ Copied' : 'Copy'}
                  </button>
                </div>
                <pre className="code-block">{transition.css}</pre>

                <div className="code-header">
                  <span className="code-label">HTML</span>
                  <button
                    className="copy-btn"
                    onClick={() => copyToClipboard(transition.html, `html-${index}`)}
                  >
                    {copiedIndex === `html-${index}` ? '✓ Copied' : 'Copy'}
                  </button>
                </div>
                <pre className="code-block">{transition.html}</pre>
              </div>
            </div>
          ))}
        </div>

        <svg style={{ position: 'absolute', width: 0, height: 0 }}>
          <defs>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" />
              <feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10"/>
            </filter>
            <filter id="goo-card">
              <feGaussianBlur in="SourceGraphic" stdDeviation="8" />
              <feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"/>
            </filter>
            <filter id="goo-loader">
              <feGaussianBlur in="SourceGraphic" stdDeviation="6" />
              <feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"/>
            </filter>
            <filter id="goo-button">
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" />
              <feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10"/>
            </filter>
            <filter id="goo-ripple">
              <feGaussianBlur in="SourceGraphic" stdDeviation="12" />
              <feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"/>
            </filter>
            <filter id="goo-magnetic">
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" />
              <feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"/>
            </filter>
            <filter id="goo-text">
              <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
              <feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10"/>
            </filter>
            <filter id="goo-menu">
              <feGaussianBlur in="SourceGraphic" stdDeviation="8" />
              <feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"/>
            </filter>
            <filter id="goo-page">
              <feGaussianBlur in="SourceGraphic" stdDeviation="15" />
              <feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10"/>
            </filter>
            <filter id="goo-lava">
              <feGaussianBlur in="SourceGraphic" stdDeviation="20" />
              <feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10"/>
            </filter>
            <filter id="goo-progress">
              <feGaussianBlur in="SourceGraphic" stdDeviation="8" />
              <feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"/>
            </filter>
          </defs>
        </svg>

        <footer className="footer">
          <p>✨ All effects use pure CSS with SVG filters for the gooey liquid effect</p>
        </footer>
      </div>
    </>
  )
}
