// script.js

/* =====================================================
   EDIT YOUR CONTENT HERE
   Swap text, links, videos and image paths below.
   The page rebuilds itself from this object.
   ===================================================== */
const SITE = {
  name: "Musharaf",
  role: "Content Creator & Graphic Designer",
  email: "musharafmiyad@gmail.com",

  // Rotating line in the hero: "I ____"
  typedWords: ["design bold brands", "edit scroll-stopping videos", "create with AI", "turn ideas into reality"],

  // Scrolling strip under the hero
  marquee: ["Branding", "Video Editing", "AI Creativity", "Graphic Design", "Social Media", "Photo Editing", "Content Creation"],

  // Tools: name, short note, 1–2 letter badge, badge colour
  tools: [
    { name: "Canva",     note: "Social & brand design", badge: "Cv", color: "#00C4CC" },
    { name: "KineMaster",note: "Mobile video editing",  badge: "Km", color: "#E8344E" },
    { name: "Photoshop", note: "Photo editing",         badge: "Ps", color: "#31A8FF" },
    { name: "Lightroom", note: "Photo colour grading",  badge: "Lr", color: "#3D8FD1" },
    { name: "CapCut",    note: "Short-form video",      badge: "Cc", color: "#111111" },
    { name: "PixelLab",  note: "Text & mobile design",  badge: "Pl", color: "#FF6B35" },
    { name: "Figma",     note: "UI & layout",           badge: "Fg", color: "#A259FF" },
    { name: "Notion",    note: "Content planning",      badge: "No", color: "#333333" }
  ],

  /* VIDEO PORTFOLIO
     type: "file"    -> src is a path or URL to an .mp4, e.g. "assets/videos/edit-1.mp4"
     type: "youtube" -> src is just the YouTube video ID, e.g. "dQw4w9WgXcQ"
     ratio: "wide" (16:9) or "vertical" (9:16, for reels/shorts)
     poster: thumbnail image (optional for YouTube, it uses YouTube's thumbnail) */
 videos: [
  { title: "Brand Launch",     tag: "Promo",     desc: "Motion Graphic Reel.",                     type: "youtube", src: "u8EGFElR0WQ", ratio: "vertical", poster: "brand0.jpeg" },
  { title: "Gaming Montage",   tag: "Beat Sync", desc: "Beat-synced transitions and effects.",     type: "youtube", src: "z4WC8AvroVo", ratio: "wide",     poster: "game0.jpeg" },
  { title: "Reel Caption",     tag: "Social",    desc: "Raw footage into a Ready Reel.",           type: "youtube", src: "bUNSrbQCGVI", ratio: "wide",     poster: "raw0.jpeg" },
  { title: "Color Grading",    tag: "Cinematic", desc: "Color grading into Cinema.",               type: "youtube", src: "foW5ZgPMk8k", ratio: "vertical", poster: "color0.jpeg" },
  { title: "Product Story",    tag: "Web",       desc: "Website and product launch.",              type: "youtube", src: "JIQxjMsI7S8", ratio: "wide",     poster: "gem0.png" },
  { title: "AI Concept Video", tag: "AI",        desc: "Idea turned into a visual with AI tools.", type: "youtube", src: "Dkk9aTXECKw", ratio: "wide",     poster: "ai0.jpeg" }
],

  // Social links (shown in the footer)
  socials: [
    { name: "WhatsApp",   url: "https://wa.me/94722610626" },
    { name: "TikTok",    url: "https://tiktok.com/@yourhandle" },
    { name: "Instagram", url: "https://instagram.com/yourhandle" }
  ],

  // Gallery: size can be "" or "tall" (keep 2 tall + 8 normal for a gap-free grid)
  gallery: [
    { src: "flyer.png", alt: "Colorful poster design",       title: "Poster Design",  size: "tall" },
    { src: "Shoes.png", alt: "Brand identity ",       title: "Brand Identity", size: "" },
    { src: "Furniture.png", alt: "Promotions",   title: "Social Flyer",   size: "" },
    { src: "Headset.png",   alt: "Product Advertismnet",     title: "Product Ads",    size: "tall" },
    { src: "Cart.png", alt: "Invitation Poster",       title: "Invitations",  size: "" },
    { src: "Webservice.png", alt: "Service Poster",           title: "Service Poster",     size: "" },
    { src: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=800&q=80", alt: "Packaging design",            title: "Packaging",      size: "" },
    { src: "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=800&q=80",   alt: "Event flyer design",           title: "Event Flyer",    size: "" },
    { src: "click.png",   alt: "Photography",    title: "Photography",     size: "" },
    { src: "art.png", alt: "Fashion and Design",       title: "Fashion Art",   size: "" }
  ],

  // Projects: image shows inside a phone frame
  projects: [
    { tag: "Video Campaign", title: "Brand Launch Reels",   text: "A 6-part short-form video series that boosted launch-week reach.",  link: "#", image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&q=80" },
    { tag: "Branding",       title: "Cafe Identity System", text: "Logo, colour palette, menus and social templates for a local cafe.", link: "#", image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80" },
    { tag: "Social Media",   title: "30-Day Content Plan",  text: "Carousel designs and a content calendar for a fitness coach.",       link: "#", image: "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=600&q=80" },
    { tag: "AI + Design",    title: "AI Concept Series",    text: "Ideas explored with AI, then refined by hand into final visuals.",   link: "#", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80" }
  ]
};

/* =====================================================
   HELPERS (no need to edit below unless you want to)
   ===================================================== */
const $ = (sel) => document.querySelector(sel);
const REDUCE = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const esc = (str) => String(str).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

function bindSiteText() {
  document.querySelectorAll('[data-site="name"]').forEach((el) => (el.textContent = SITE.name));
  document.querySelectorAll('[data-site="role"]').forEach((el) => (el.textContent = SITE.role));
  const emailBtn = $("#emailBtn");
  emailBtn.textContent = SITE.email;
  emailBtn.href = `mailto:${SITE.email}`;
  $("#year").textContent = new Date().getFullYear();
  document.title = `${SITE.name} | ${SITE.role}`;
}

/* =====================================================
   RENDERERS
   ===================================================== */
function renderMarquee() {
  const items = SITE.marquee.map((m) => `<span>${esc(m)} ✦</span>`).join("");
  $("#marqueeTrack").innerHTML = items + items; // duplicated for a seamless loop
}

function renderTools() {
  $("#toolsGrid").innerHTML = SITE.tools.map((t) => `
    <article class="tool-card reveal">
      <div class="tool-icon" style="background:${esc(t.color)}">${esc(t.badge)}</div>
      <h3>${esc(t.name)}</h3>
      <p>${esc(t.note)}</p>
    </article>`).join("");
}

function renderVideos() {
  $("#videosGrid").innerHTML = SITE.videos.map((v, i) => {
    const poster = v.poster || (v.type === "youtube" ? `https://img.youtube.com/vi/${v.src}/hqdefault.jpg` : "");
    return `
    <article class="video-card reveal" data-index="${i}" tabindex="0" role="button" aria-label="Play video: ${esc(v.title)}">
      <div class="video-thumb">
        ${poster ? `<img src="${esc(poster)}" alt="${esc(v.title)} thumbnail" loading="lazy" />` : ""}
        <span class="video-badge">${v.ratio === "vertical" ? "9:16 Reel" : "16:9"}</span>
        <span class="play-btn" aria-hidden="true">▶</span>
      </div>
      <div class="video-info">
        <span class="video-tag">${esc(v.tag)}</span>
        <h3>${esc(v.title)}</h3>
        <p>${esc(v.desc || "")}</p>
      </div>
    </article>`;
  }).join("");
}

function renderFooterSocials() {
  $("#footerSocials").innerHTML = SITE.socials.map((s) => `
    <a href="${esc(s.url)}" target="_blank" rel="noopener noreferrer">${esc(s.name)}</a>`).join("");
}

function renderGallery() {
  $("#galleryGrid").innerHTML = SITE.gallery.map((g, i) => `
    <figure class="gallery-item ${g.size === "tall" ? "tall" : ""} reveal" data-index="${i}" tabindex="0">
      <img src="${esc(g.src)}" alt="${esc(g.alt)}" loading="lazy" />
      <figcaption>${esc(g.title)}</figcaption>
    </figure>`).join("");
}

function renderProjects() {
  $("#projectsTrack").innerHTML = SITE.projects.map((p) => `
    <article class="project-card">
      <div>
        <span class="project-tag">${esc(p.tag)}</span>
        <h3>${esc(p.title)}</h3>
        <p>${esc(p.text)}</p>
        <a class="project-link" href="${esc(p.link)}">View case study →</a>
      </div>
      <div class="phone-frame">
        <img src="${esc(p.image)}" alt="${esc(p.title)} mockup preview" loading="lazy" />
      </div>
    </article>`).join("");
}

/* =====================================================
   LIVE NEON BACKGROUND
   Glowing light streaks run along an invisible grid and
   turn at the crossings, like current through a circuit.
   ===================================================== */
function initNeon() {
  const canvas = $("#neonCanvas");
  const ctx = canvas.getContext("2d");
  const COLORS = [[255, 222, 89], [56, 240, 255], [255, 79, 216], [140, 255, 152]];
  const DIRS = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  const rnd = (a, b) => a + Math.random() * (b - a);
  let w = 0, h = 0, lastW = 0, CELL = 64, runners = [], raf = 0;

  function makeRunner() {
    const [dx, dy] = DIRS[Math.floor(Math.random() * 4)];
    return {
      x: Math.round(rnd(0, w) / CELL) * CELL,
      y: Math.round(rnd(0, h) / CELL) * CELL,
      dx, dy, dist: 0,
      speed: rnd(1.2, 3.2),
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      max: Math.round(rnd(40, 110)),
      trail: []
    };
  }

  function step(r) {
    r.x += r.dx * r.speed; r.y += r.dy * r.speed; r.dist += r.speed;
    if (r.dist >= CELL) { // reached a grid crossing
      r.dist = 0;
      r.x = Math.round(r.x / CELL) * CELL;
      r.y = Math.round(r.y / CELL) * CELL;
      if (Math.random() < 0.35) { // turn left or right
        [r.dx, r.dy] = Math.random() < 0.5 ? [r.dy, -r.dx] : [-r.dy, r.dx];
      }
    }
    r.trail.push([r.x, r.y]);
    if (r.trail.length > r.max) r.trail.shift();
    if (r.x < -CELL || r.x > w + CELL || r.y < -CELL || r.y > h + CELL) Object.assign(r, makeRunner());
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);
    ctx.globalCompositeOperation = "lighter";
    ctx.lineWidth = 2; ctx.lineJoin = "round"; ctx.lineCap = "round";
    for (const r of runners) {
      const t = r.trail;
      if (t.length < 2) continue;
      const a = t[0], b = t[t.length - 1];
      const g = ctx.createLinearGradient(a[0], a[1], b[0], b[1]);
      g.addColorStop(0, `rgba(${r.color},0)`);
      g.addColorStop(1, `rgb(${r.color})`);
      ctx.strokeStyle = g;
      ctx.shadowColor = `rgb(${r.color})`;
      ctx.shadowBlur = 14;
      ctx.beginPath();
      ctx.moveTo(a[0], a[1]);
      for (let i = 1; i < t.length; i++) ctx.lineTo(t[i][0], t[i][1]);
      ctx.stroke();
      ctx.fillStyle = "#fff";
      ctx.beginPath(); ctx.arc(b[0], b[1], 2.4, 0, Math.PI * 2); ctx.fill();
    }
    ctx.shadowBlur = 0;
    ctx.globalCompositeOperation = "source-over";
  }

  function loop() { runners.forEach(step); draw(); raf = requestAnimationFrame(loop); }

  function resize() {
    if (window.innerWidth === lastW && runners.length) return; // ignore mobile address-bar resizes
    lastW = w = window.innerWidth; h = window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = w * dpr; canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    CELL = w < 640 ? 48 : 64; // keep in sync with --cell in style.css
    const count = Math.round(Math.min(26, Math.max(10, w / 70)));
    runners = Array.from({ length: count }, makeRunner);
    if (REDUCE) { for (let i = 0; i < 120; i++) runners.forEach(step); draw(); }
  }

  resize();
  let timer;
  window.addEventListener("resize", () => { clearTimeout(timer); timer = setTimeout(resize, 150); });
  if (!REDUCE) {
    loop();
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) cancelAnimationFrame(raf); else { cancelAnimationFrame(raf); loop(); }
    });
  }
}

/* =====================================================
   INTERACTIVITY
   ===================================================== */

// Mobile hamburger menu + active link highlight
function initNav() {
  const toggle = $("#navToggle");
  const menu = $("#navMenu");
  const setOpen = (open) => {
    menu.classList.toggle("open", open);
    toggle.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", String(open));
  };
  toggle.addEventListener("click", () => setOpen(!menu.classList.contains("open")));
  menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setOpen(false)));
  window.addEventListener("resize", () => window.innerWidth >= 900 && setOpen(false));
  document.addEventListener("keydown", (e) => e.key === "Escape" && setOpen(false));

  const links = [...menu.querySelectorAll('a[href^="#"]:not(.btn)')];
  const sections = links.map((l) => document.querySelector(l.getAttribute("href"))).filter(Boolean);
  const spy = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) links.forEach((l) => l.classList.toggle("active", l.getAttribute("href") === `#${en.target.id}`));
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  sections.forEach((s) => spy.observe(s));
}

// Scroll progress bar
function initProgress() {
  const bar = $("#progress");
  const update = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = (max > 0 ? (window.scrollY / max) * 100 : 0) + "%";
  };
  window.addEventListener("scroll", update, { passive: true });
  update();
}

// Typing effect in the hero
function initTyped() {
  const el = $("#typed");
  const words = SITE.typedWords;
  if (REDUCE) { el.textContent = words[0]; return; }
  let w = 0, i = 0, deleting = false;
  (function tick() {
    const word = words[w];
    el.textContent = word.slice(0, i);
    if (!deleting && i === word.length) { deleting = true; return setTimeout(tick, 1500); }
    if (deleting && i === 0) { deleting = false; w = (w + 1) % words.length; }
    i += deleting ? -1 : 1;
    setTimeout(tick, deleting ? 40 : 80);
  })();
}

// Projects carousel buttons
function initCarousel() {
  const track = $("#projectsTrack");
  const step = () => (track.querySelector(".project-card")?.offsetWidth || 300) + 20;
  $("#prevBtn").addEventListener("click", () => track.scrollBy({ left: -step(), behavior: "smooth" }));
  $("#nextBtn").addEventListener("click", () => track.scrollBy({ left: step(), behavior: "smooth" }));
}

// One shared pop-up used by the gallery (images) and videos (player)
function initModal() {
  const box = document.createElement("div");
  box.className = "modal";
  box.innerHTML = `<button class="modal-close" aria-label="Close">×</button><div class="modal-body"></div>`;
  document.body.appendChild(box);
  const body = box.querySelector(".modal-body");

  const open = (html) => { body.innerHTML = html; box.classList.add("open"); document.body.style.overflow = "hidden"; };
  const close = () => { box.classList.remove("open"); body.innerHTML = ""; document.body.style.overflow = ""; }; // clearing stops the video
  box.addEventListener("click", (e) => (e.target === box || e.target.classList.contains("modal-close")) && close());
  document.addEventListener("keydown", (e) => e.key === "Escape" && box.classList.contains("open") && close());

  const activate = (item, handler) => item && handler(item);
  const onSelect = (container, handler) => {
    container.addEventListener("click", (e) => activate(e.target.closest("[data-index]"), handler));
    container.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        const item = e.target.closest("[data-index]");
        if (item) { e.preventDefault(); handler(item); }
      }
    });
  };

  // Gallery
  onSelect($("#galleryGrid"), (item) => {
    const g = SITE.gallery[item.dataset.index];
    open(`<img class="modal-img" src="${esc(g.src)}" alt="${esc(g.alt)}" />`);
  });

  // Videos
onSelect($("#videosGrid"), (item) => {
  const v = SITE.videos[item.dataset.index];
  const player = v.type === "youtube"
    ? `<iframe src="https://www.youtube.com/embed/${esc(v.src)}?autoplay=1&rel=0&playsinline=1&modestbranding=1" title="${esc(v.title)}" referrerpolicy="strict-origin-when-cross-origin" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe>`
    : `<video src="${esc(v.src)}" ${v.poster ? `poster="${esc(v.poster)}"` : ""} controls autoplay playsinline></video>`;
  open(`<div class="video-frame ${v.ratio === "vertical" ? "vertical" : ""}">${player}</div>`);
});
}

// Fade-in on scroll
function initReveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add("visible"); io.unobserve(en.target); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
}

/* ============ INIT ============ */
document.addEventListener("DOMContentLoaded", () => {
  bindSiteText();
  renderMarquee();
  renderTools();
  renderVideos();
  renderFooterSocials();
  renderGallery();
  renderProjects();
  initNeon();
  initNav();
  initProgress();
  initTyped();
  initCarousel();
  initModal();
  initReveal();
});