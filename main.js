/* ============================================================
   THE BROWN PRINT — shared site logic
   Data, nav behaviour, grid + story rendering, video hookup,
   and the multi-step "Start a Project" requirements modal.
   Loads on every page; reads data-* attributes to know what to render.
   ============================================================ */

/* ---------- ICONS (lucide-style inline SVG) ---------- */
const I = {
  play:  '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>',
  arrow: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>',
  arrowR:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>',
  chevron:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>',
  check: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',
  checkBig:'<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0c0a09" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',
  close: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>',
  menu:  '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 12h18M3 6h18M3 18h18"/></svg>',
  heart: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z"/></svg>',
  disc:  '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/></svg>',
  mic:   '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v3"/></svg>',
};

/* ---------- DATA ----------
   Swap media: replace `src` (photos) or `videoSrc`/`poster` (videos)
   with the client's hosted URLs. Leave "" to fall back to gradient. */
const WEDDING_PHOTOS = [
  { id:1, title:"Harleen & Arjun", sub:"Anand Karaj · Toronto", hue:"from-rose-200 to-amber-100", tall:true, src:"https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=80" },
  { id:2, title:"Simran & Jai", sub:"Lakeside Vows", hue:"from-amber-200 to-rose-100", src:"https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80" },
  { id:3, title:"Noor & Kabir", sub:"Golden Hour Portraits", hue:"from-orange-200 to-pink-100", src:"https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80" },
  { id:4, title:"Gurleen & Veer", sub:"Mehndi Morning", hue:"from-rose-200 to-orange-100", tall:true, src:"https://images.unsplash.com/photo-1604017011826-d3b4c23f8914?w=800&q=80" },
  { id:5, title:"Anaya & Rohan", sub:"Reception Glow", hue:"from-amber-200 to-rose-200", src:"https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&q=80" },
  { id:6, title:"Pavneet & Sahil", sub:"First Look", hue:"from-pink-200 to-amber-100", src:"https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=800&q=80" },
];

const WEDDING_VIDEOS = [
  { id:1, title:"The Anand Karaj Film", sub:"Cinematic Feature · 5:20", poster:"https://images.unsplash.com/photo-1610234198916-583af5beb27e?w=800&q=80", videoSrc:"https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4" },
  { id:2, title:"Simran + Jai Teaser", sub:"Wedding Teaser · 1:45", poster:"https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=80", videoSrc:"https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" },
  { id:3, title:"A Punjabi Celebration", sub:"Highlights · 3:30", poster:"https://images.unsplash.com/photo-1622842934240-eb3d886abdec?w=800&q=80", videoSrc:"https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4" },
];

const WEDDING_STORIES = [
  { id:1, couple:"Harleen & Arjun", place:"Toronto, Ontario", date:"August 2025",
    excerpt:"Two families, two cities, one unforgettable Anand Karaj by the lake.",
    src:"https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80",
    body:"When Harleen and Arjun first reached out, they told us they wanted their wedding to feel like a warm embrace — not a production. Their Anand Karaj unfolded on a misty August morning by Lake Ontario, the Guru Granth Sahib framed by marigold and ivory roses. We followed the laughter through the Milni, the quiet tears during the laavan, and the riot of colour as the dhol kicked in. What stayed with us most was the moment Harleen's grandmother pressed her hand to Arjun's cheek — unscripted, unrepeatable, exactly the kind of frame we live for." },
  { id:2, couple:"Simran & Jai", place:"Vancouver, BC", date:"June 2025",
    excerpt:"A lakeside ceremony where the light did half our work for us.",
    src:"https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
    body:"Simran and Jai are golden-hour people. They planned their entire day around the light — a late-afternoon ceremony so the sun would sit low and amber over the water during their vows. The result was a film that almost grades itself. Between the heartfelt speeches and a surprise choreographed entrance from the bridal party, their celebration reminded us why we do this: the best weddings aren't perfect, they're alive." },
  { id:3, couple:"Noor & Kabir", place:"Calgary, Alberta", date:"September 2025",
    excerpt:"Mountain backdrops, mehndi nights, and a love story years in the making.",
    src:"https://images.unsplash.com/photo-1604017011826-d3b4c23f8914?w=800&q=80",
    body:"College sweethearts turned partners for life, Noor and Kabir wanted their story told honestly — the in-jokes, the comfortable silences, the way they finish each other's sentences. We spent three days with them across mehndi, sangeet, and the ceremony itself, with the Rockies standing guard in the distance. Their wedding film is less a highlight reel and more a love letter." },
];

const MUSIC_WORKS = [
  { id:1, title:"Echoes — Full Album", sub:"Album Visuals · 4:10", artist:"Maninder Gill", tall:true, poster:"https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80", videoSrc:"https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4" },
  { id:2, title:"Midnight City", sub:"Music Video · 3:48", artist:"The Nightingales", poster:"https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=80", videoSrc:"https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4" },
  { id:3, title:"Roots", sub:"Acoustic Session · 5:02", artist:"Simar Kaur", poster:"https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=800&q=80", videoSrc:"https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4" },
  { id:4, title:"Neon Heart", sub:"Single Visual · 2:55", artist:"Ravi & Co", tall:true, poster:"https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80", videoSrc:"https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" },
  { id:5, title:"Sundown", sub:"Lyric Video · 3:20", artist:"Aman Dhillon", poster:"https://images.unsplash.com/photo-1483393458019-411bc6bd104e?w=800&q=80", videoSrc:"https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4" },
  { id:6, title:"Velvet", sub:"Studio Film · 4:33", artist:"Noor Project", poster:"https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=800&q=80", videoSrc:"https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4" },
];

const CONCERT_WORKS = [
  { id:1, title:"Arena Live", sub:"Full Concert Film · 8:40", venue:"Rogers Arena", tall:true, poster:"https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=800&q=80", videoSrc:"https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4" },
  { id:2, title:"Festival Mainstage", sub:"Highlights · 3:15", venue:"Toronto Fest", poster:"https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&q=80", videoSrc:"https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" },
  { id:3, title:"Acoustic Night", sub:"Live Session · 4:50", venue:"The Vault", poster:"https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=800&q=80", videoSrc:"https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4" },
  { id:4, title:"Bhangra Beats Live", sub:"Crowd Reel · 2:30", venue:"Surrey Live", tall:true, poster:"https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=800&q=80", videoSrc:"https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4" },
  { id:5, title:"Encore", sub:"Multi-cam Edit · 6:12", venue:"Scotiabank", poster:"https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&q=80", videoSrc:"https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4" },
  { id:6, title:"Under Lights", sub:"Tour Aftermovie · 5:45", venue:"Cross-Canada Tour", poster:"https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80", videoSrc:"https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4" },
];

const DATASETS = {
  weddingPhotos: WEDDING_PHOTOS,
  weddingVideos: WEDDING_VIDEOS,
  music: MUSIC_WORKS,
  concerts: CONCERT_WORKS,
};

const SERVICES = [
  { id:"wedding", label:"Wedding", icon:I.heart },
  { id:"music", label:"Music Album", icon:I.disc },
  { id:"concert", label:"Concert", icon:I.mic },
];
const BUDGETS = ["Under $3,000", "$3,000 – $6,000", "$6,000 – $10,000", "$10,000+"];
const SCALES = ["Intimate (under 50)", "Mid-size (50–150)", "Large (150–300)", "Grand (300+)"];

/* gradient lookup: maps the simple "from-x to-y" token to a CSS gradient
   (used as a fallback background behind images) */
const COLORS = {
  "rose-200":"#fecdd3","rose-100":"#ffe4e6","amber-200":"#fde68a","amber-100":"#fef3c7",
  "orange-200":"#fed7aa","pink-100":"#fce7f3","orange-100":"#ffedd5","pink-200":"#fbcfe8",
};
function gradientStyle(hue) {
  if (!hue) return "";
  const m = hue.match(/from-([\w-]+)\s+to-([\w-]+)/);
  if (!m) return "";
  const a = COLORS[m[1]] || "#44403c", b = COLORS[m[2]] || "#1c1917";
  return `background:linear-gradient(135deg, ${a}, ${b});`;
}

/* ---------- WORK GRID RENDER ---------- */
function renderGrid(containerId, items, kind) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = items.map(w => {
    const media = w.src || w.poster;
    const meta = w.artist || w.venue || w.sub;
    const subLine = (w.artist || w.venue) ? `<p class="sub">${w.sub}</p>` : "";
    return `
      <div class="work-card ${w.tall ? "tall" : ""}" style="${gradientStyle(w.hue)}"
           data-kind="${kind}" data-id="${w.id}">
        ${media ? `<img src="${media}" alt="${w.title}" loading="lazy">` : ""}
        <div class="work-card-shade"></div>
        ${kind === "video" ? `<div class="work-card-play"><div class="play-btn">${I.play}</div></div>` : ""}
        <div class="work-card-caption">
          <h3 class="serif">${w.title}</h3>
          <p class="meta">${meta}</p>
          ${subLine}
        </div>
      </div>`;
  }).join("");

  // video tiles open the protected player
  if (kind === "video") {
    el.querySelectorAll(".work-card").forEach(card => {
      card.addEventListener("click", () => {
        const item = items.find(x => x.id == card.dataset.id);
        VideoPlayer.open(item);
      });
    });
  }
}

/* ---------- WEDDING STORIES RENDER ---------- */
function renderStories(containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = WEDDING_STORIES.map((s, i) => `
    <button class="story ${i % 2 ? "rev" : ""}" data-id="${s.id}">
      <div class="story-img">${s.src ? `<img src="${s.src}" alt="${s.couple}" loading="lazy">` : ""}</div>
      <div class="story-body">
        <span class="place">${s.place} · ${s.date}</span>
        <h3 class="serif">${s.couple}</h3>
        <p>${s.excerpt}</p>
        <span class="story-read">Read their story ${I.arrow}</span>
      </div>
    </button>`).join("");

  el.querySelectorAll(".story").forEach(b => {
    b.addEventListener("click", () => openStory(WEDDING_STORIES.find(x => x.id == b.dataset.id)));
  });
}

/* ---------- STORY MODAL ---------- */
function openStory(s) {
  let ov = document.getElementById("storyModal");
  if (!ov) {
    ov = document.createElement("div");
    ov.id = "storyModal";
    ov.className = "modal-overlay";
    document.body.appendChild(ov);
    ov.addEventListener("click", e => { if (e.target === ov) ov.classList.remove("open"); });
  }
  ov.innerHTML = `
    <div class="modal story-modal" onclick="event.stopPropagation()">
      <button class="modal-close" onclick="document.getElementById('storyModal').classList.remove('open')">${I.close}</button>
      <div class="story-modal-img" style="${gradientStyle(s.hue)}">
        ${s.src ? `<img src="${s.src}" alt="${s.couple}">` : ""}
      </div>
      <div class="modal-pad">
        <span class="place">${s.place} · ${s.date}</span>
        <h3 class="serif">${s.couple}</h3>
        <p class="story-text">${s.body}</p>
      </div>
    </div>`;
  ov.classList.add("open");
}

/* ---------- NAV: scroll state + mobile toggle ---------- */
function initNav() {
  const nav = document.querySelector(".nav");
  const isHome = document.body.dataset.theme === "home";
  const onScroll = () => {
    if (window.scrollY > 50 || !isHome) nav.classList.add("solid");
    else nav.classList.remove("solid");
  };
  window.addEventListener("scroll", onScroll);
  onScroll();

  const burger = document.querySelector(".nav-burger");
  const mobile = document.querySelector(".nav-mobile");
  if (burger && mobile) {
    burger.addEventListener("click", () => mobile.classList.toggle("open"));
    mobile.querySelectorAll("a, button").forEach(l =>
      l.addEventListener("click", () => mobile.classList.remove("open")));
  }
}

/* ---------- PROJECT (requirements) MODAL ---------- */
const Project = (() => {
  let ov, step = 1, data = {};
  const reset = () => { step = 1; data = { service:"", date:"", location:"", budget:"", scale:"", style:"", name:"", email:"", phone:"", notes:"" }; };

  function build() {
    ov = document.createElement("div");
    ov.id = "projectModal";
    ov.className = "modal-overlay";
    document.body.appendChild(ov);
    ov.addEventListener("click", e => { if (e.target === ov) closeIt(); });
  }

  function open(service) {
    if (!ov) build();
    reset();
    if (service) data.service = service;
    render();
    ov.classList.add("open");
    document.body.style.overflow = "hidden";
  }
  function closeIt() { ov.classList.remove("open"); document.body.style.overflow = ""; }

  const set = (k, v) => { data[k] = v; render(); };
  const canNext = () =>
    step === 1 ? data.service :
    step === 2 ? data.date && data.location && data.budget && data.scale :
    data.name && data.email && data.phone;

  function next() {
    if (step === 3) { console.log("PROJECT REQUEST:", data); step = 4; render(); return; }
    if (canNext()) { step++; render(); }
  }
  function back() { if (step > 1) { step--; render(); } }

  const today = new Date().toISOString().split("T")[0];

  function render() {
    const bars = [1,2,3].map(s => `<div class="progress-bar ${s <= step ? "active" : ""}"></div>`).join("");
    let inner = "";

    if (step === 1) {
      inner = `
        <span class="modal-step-label">Start a Project</span>
        <div class="progress">${bars}</div>
        <h3 class="serif">What can we create for you?</h3>
        <p style="color:var(--stone-500);font-size:.875rem;margin:-1rem 0 1.5rem;">Choose the type of project you'd like to discuss.</p>
        ${SERVICES.map(s => `
          <button class="service-row ${data.service === s.id ? "sel" : ""}" data-svc="${s.id}">
            <span class="service-ico">${s.icon}</span>
            <span style="font-weight:500;">${s.label}</span>
            ${data.service === s.id ? `<span style="margin-left:auto;color:var(--amber-400);">${I.check}</span>` : ""}
          </button>`).join("")}`;
    } else if (step === 2) {
      inner = `
        <span class="modal-step-label">Start a Project</span>
        <div class="progress">${bars}</div>
        <h3 class="serif">Tell us about your event</h3>
        <label class="field-label">Event Date</label>
        <input type="date" class="field" id="f-date" min="${today}" value="${data.date}" style="color-scheme:dark;">
        <label class="field-label">Location / City</label>
        <input class="field" id="f-loc" placeholder="e.g. Toronto, ON" value="${data.location}">
        <label class="field-label">Budget Range</label>
        <div class="chip-grid">${BUDGETS.map(b => `<button class="chip-sm ${data.budget === b ? "sel" : ""}" data-budget="${b}">${b}</button>`).join("")}</div>
        <label class="field-label">Scale / Guest Count</label>
        <div class="chip-grid">${SCALES.map(s => `<button class="chip-sm ${data.scale === s ? "sel" : ""}" data-scale="${s}">${s}</button>`).join("")}</div>
        <label class="field-label">Style / Mood References</label>
        <textarea class="field" id="f-style" rows="2" placeholder="Describe the vibe you're after, links to references, themes...">${data.style}</textarea>`;
    } else if (step === 3) {
      inner = `
        <span class="modal-step-label">Start a Project</span>
        <div class="progress">${bars}</div>
        <h3 class="serif">How do we reach you?</h3>
        <input class="field" id="f-name" placeholder="Full name" value="${data.name}">
        <input class="field" id="f-email" type="email" placeholder="Email address" value="${data.email}">
        <input class="field" id="f-phone" placeholder="Phone number" value="${data.phone}">
        <textarea class="field" id="f-notes" rows="3" placeholder="Anything else we should know? (optional)">${data.notes}</textarea>
        <div class="summary">
          <div class="summary-row"><span>Project</span><span style="text-transform:capitalize;">${data.service || "—"}</span></div>
          <div class="summary-row"><span>Date</span><span>${data.date || "—"}</span></div>
          <div class="summary-row"><span>Location</span><span>${data.location || "—"}</span></div>
          <div class="summary-row"><span>Budget</span><span>${data.budget || "—"}</span></div>
        </div>`;
    } else {
      inner = `
        <div style="text-align:center;padding:2rem 0;">
          <div class="success-check">${I.checkBig}</div>
          <h3 class="serif">Request sent!</h3>
          <p style="color:var(--stone-400);font-size:.875rem;margin-bottom:.5rem;">Thanks, ${data.name}. We've received your ${data.service} project details.</p>
          <p style="color:var(--stone-500);font-size:.75rem;margin-bottom:2rem;">The Brown Print team will reach out within 24–48 hours to discuss your vision.</p>
          <button class="btn btn-amber" id="p-done">Done</button>
        </div>`;
    }

    const actions = step < 4 ? `
      <div class="modal-actions">
        ${step > 1 ? `<button class="modal-btn modal-btn-back" id="p-back">Back</button>` : ""}
        <button class="modal-btn modal-btn-next" id="p-next" ${canNext() ? "" : "disabled"}>
          ${step === 3 ? "Send Request" : "Continue"} ${I.chevron}
        </button>
      </div>` : "";

    ov.innerHTML = `
      <div class="modal" onclick="event.stopPropagation()">
        <button class="modal-close" id="p-close">${I.close}</button>
        <div class="modal-pad">${inner}${actions}</div>
      </div>`;

    wire();
  }

  function wire() {
    const q = sel => ov.querySelector(sel);
    q("#p-close")?.addEventListener("click", closeIt);
    q("#p-done")?.addEventListener("click", closeIt);
    q("#p-next")?.addEventListener("click", next);
    q("#p-back")?.addEventListener("click", back);
    ov.querySelectorAll("[data-svc]").forEach(b => b.addEventListener("click", () => set("service", b.dataset.svc)));
    ov.querySelectorAll("[data-budget]").forEach(b => b.addEventListener("click", () => set("budget", b.dataset.budget)));
    ov.querySelectorAll("[data-scale]").forEach(b => b.addEventListener("click", () => set("scale", b.dataset.scale)));
    // text inputs: store on input without full re-render (keeps focus)
    const bind = (id, key) => { const f = q(id); if (f) f.addEventListener("input", e => { data[key] = e.target.value; const n = q("#p-next"); if (n) n.disabled = !canNext(); }); };
    bind("#f-date","date"); bind("#f-loc","location"); bind("#f-style","style");
    bind("#f-name","name"); bind("#f-email","email"); bind("#f-phone","phone"); bind("#f-notes","notes");
  }

  return { open };
})();

/* expose for inline onclick handlers in the HTML */
window.openProject = (service) => Project.open(service || null);

/* ---------- BOOT ---------- */
document.addEventListener("DOMContentLoaded", () => {
  initNav();

  // render whichever grids exist on this page
  if (document.getElementById("weddingPhotos")) renderGrid("weddingPhotos", WEDDING_PHOTOS, "photo");
  if (document.getElementById("weddingVideos")) renderGrid("weddingVideos", WEDDING_VIDEOS, "video");
  if (document.getElementById("musicGrid"))     renderGrid("musicGrid", MUSIC_WORKS, "video");
  if (document.getElementById("concertGrid"))   renderGrid("concertGrid", CONCERT_WORKS, "video");
  if (document.getElementById("storyList"))     renderStories("storyList");
});
