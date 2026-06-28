/* ============================================================
   THE BROWN PRINT — CONTENT FILE
   ────────────────────────────────────────────────────────────
   THIS IS THE ONLY FILE YOU NEED TO EDIT TO UPDATE THE WEBSITE.

   HOW TO REPLACE A PHOTO OR VIDEO (drag & drop):
   1. Open the "media" folder.
   2. Drop your new photo/video into the matching subfolder
      (media/wedding, media/music, media/concerts).
   3. Name it EXACTLY like the file it replaces — e.g. to change
      the first wedding photo, name your file  photo-1.jpg
      To change the first wedding film, name it  film-1.mp4
   4. Re-upload the media folder to your host. Done.

   HOW TO CHANGE A TITLE OR CAPTION:
   - Just edit the text between the quotes below. Keep the quotes
     and the commas exactly where they are.

   TIPS:
   - Photos: use .jpg  (landscape works best, ~1200px wide)
   - Videos: use .mp4
   - "poster" is the thumbnail image shown before a video plays.
   ============================================================ */

const CONTENT = {

  /* ---------- WEDDING PHOTOS ---------- */
  weddingPhotos: [
    { src: "media/wedding/photo-1.jpg", title: "Harleen & Arjun", sub: "Anand Karaj · Toronto", tall: true },
    { src: "media/wedding/photo-2.jpg", title: "Simran & Jai",    sub: "Lakeside Vows" },
    { src: "media/wedding/photo-3.jpg", title: "Noor & Kabir",    sub: "Golden Hour Portraits" },
    { src: "media/wedding/photo-4.jpg", title: "Gurleen & Veer",  sub: "Mehndi Morning", tall: true },
    { src: "media/wedding/photo-5.jpg", title: "Anaya & Rohan",   sub: "Reception Glow" },
    { src: "media/wedding/photo-6.jpg", title: "Pavneet & Sahil", sub: "First Look" },
  ],

  /* ---------- WEDDING FILMS (videos) ---------- */
  weddingVideos: [
    { videoSrc: "media/wedding/film-1.mp4", poster: "media/wedding/film-1.jpg", title: "The Anand Karaj Film", sub: "Cinematic Feature · 5:20" },
    { videoSrc: "media/wedding/film-2.mp4", poster: "media/wedding/film-2.jpg", title: "Simran + Jai Teaser",   sub: "Wedding Teaser · 1:45" },
    { videoSrc: "media/wedding/film-3.mp4", poster: "media/wedding/film-3.jpg", title: "A Punjabi Celebration", sub: "Highlights · 3:30" },
  ],

  /* ---------- WEDDING STORIES (read-more text) ---------- */
  weddingStories: [
    {
      src: "media/wedding/story-1.jpg",
      couple: "Harleen & Arjun", place: "Toronto, Ontario", date: "August 2025",
      excerpt: "Two families, two cities, one unforgettable Anand Karaj by the lake.",
      body: "When Harleen and Arjun first reached out, they told us they wanted their wedding to feel like a warm embrace — not a production. Their Anand Karaj unfolded on a misty August morning by Lake Ontario, the Guru Granth Sahib framed by marigold and ivory roses. We followed the laughter through the Milni, the quiet tears during the laavan, and the riot of colour as the dhol kicked in. What stayed with us most was the moment Harleen's grandmother pressed her hand to Arjun's cheek — unscripted, unrepeatable, exactly the kind of frame we live for."
    },
    {
      src: "media/wedding/story-2.jpg",
      couple: "Simran & Jai", place: "Vancouver, BC", date: "June 2025",
      excerpt: "A lakeside ceremony where the light did half our work for us.",
      body: "Simran and Jai are golden-hour people. They planned their entire day around the light — a late-afternoon ceremony so the sun would sit low and amber over the water during their vows. The result was a film that almost grades itself. Between the heartfelt speeches and a surprise choreographed entrance from the bridal party, their celebration reminded us why we do this: the best weddings aren't perfect, they're alive."
    },
    {
      src: "media/wedding/story-3.jpg",
      couple: "Noor & Kabir", place: "Calgary, Alberta", date: "September 2025",
      excerpt: "Mountain backdrops, mehndi nights, and a love story years in the making.",
      body: "College sweethearts turned partners for life, Noor and Kabir wanted their story told honestly — the in-jokes, the comfortable silences, the way they finish each other's sentences. We spent three days with them across mehndi, sangeet, and the ceremony itself, with the Rockies standing guard in the distance. Their wedding film is less a highlight reel and more a love letter."
    },
  ],

  /* ---------- MUSIC ALBUMS (videos) ---------- */
  music: [
    { videoSrc: "media/music/music-1.mp4", poster: "media/music/music-1.jpg", title: "Echoes — Full Album", sub: "Album Visuals · 4:10", artist: "Maninder Gill", tall: true },
    { videoSrc: "media/music/music-2.mp4", poster: "media/music/music-2.jpg", title: "Midnight City",       sub: "Music Video · 3:48",  artist: "The Nightingales" },
    { videoSrc: "media/music/music-3.mp4", poster: "media/music/music-3.jpg", title: "Roots",               sub: "Acoustic Session · 5:02", artist: "Simar Kaur" },
    { videoSrc: "media/music/music-4.mp4", poster: "media/music/music-4.jpg", title: "Neon Heart",          sub: "Single Visual · 2:55", artist: "Ravi & Co", tall: true },
    { videoSrc: "media/music/music-5.mp4", poster: "media/music/music-5.jpg", title: "Sundown",             sub: "Lyric Video · 3:20",   artist: "Aman Dhillon" },
    { videoSrc: "media/music/music-6.mp4", poster: "media/music/music-6.jpg", title: "Velvet",              sub: "Studio Film · 4:33",   artist: "Noor Project" },
  ],

  /* ---------- CONCERTS (videos) ---------- */
  concerts: [
    { videoSrc: "media/concerts/concert-1.mp4", poster: "media/concerts/concert-1.jpg", title: "Arena Live",         sub: "Full Concert Film · 8:40", venue: "Rogers Arena", tall: true },
    { videoSrc: "media/concerts/concert-2.mp4", poster: "media/concerts/concert-2.jpg", title: "Festival Mainstage", sub: "Highlights · 3:15",        venue: "Toronto Fest" },
    { videoSrc: "media/concerts/concert-3.mp4", poster: "media/concerts/concert-3.jpg", title: "Acoustic Night",     sub: "Live Session · 4:50",      venue: "The Vault" },
    { videoSrc: "media/concerts/concert-4.mp4", poster: "media/concerts/concert-4.jpg", title: "Bhangra Beats Live", sub: "Crowd Reel · 2:30",        venue: "Surrey Live", tall: true },
    { videoSrc: "media/concerts/concert-5.mp4", poster: "media/concerts/concert-5.jpg", title: "Encore",             sub: "Multi-cam Edit · 6:12",    venue: "Scotiabank" },
    { videoSrc: "media/concerts/concert-6.mp4", poster: "media/concerts/concert-6.jpg", title: "Under Lights",       sub: "Tour Aftermovie · 5:45",   venue: "Cross-Canada Tour" },
  ],

  /* ---------- SOCIAL EVENTS (videos + photos) ----------
     Birthdays, anniversaries, parties and family celebrations.
     Drop files in media/social/ named social-1.mp4 / social-1.jpg, etc. */
  social: [
    { videoSrc: "media/social/social-1.mp4", poster: "media/social/social-1.jpg", title: "Sweet Sixteen",      sub: "Birthday Film · 2:40",   event: "Birthday", tall: true },
    { videoSrc: "media/social/social-2.mp4", poster: "media/social/social-2.jpg", title: "Golden Anniversary", sub: "Highlights · 3:10",      event: "50th Anniversary" },
    { videoSrc: "media/social/social-3.mp4", poster: "media/social/social-3.jpg", title: "First Birthday",     sub: "Family Film · 2:05",     event: "Birthday" },
    { videoSrc: "media/social/social-4.mp4", poster: "media/social/social-4.jpg", title: "Engagement Party",   sub: "Celebration Reel · 1:50", event: "Engagement", tall: true },
    { videoSrc: "media/social/social-5.mp4", poster: "media/social/social-5.jpg", title: "Retirement Bash",    sub: "Event Recap · 3:25",     event: "Retirement" },
    { videoSrc: "media/social/social-6.mp4", poster: "media/social/social-6.jpg", title: "Graduation Day",     sub: "Highlights · 2:30",      event: "Graduation" },
  ],

  /* ---------- BRANDS (commercial work) ----------
     Clubs, restaurants, real estate and brand campaigns.
     Drop files in media/brands/ named brand-1.mp4 / brand-1.jpg, etc. */
  brands: [
    { videoSrc: "media/brands/brand-1.mp4", poster: "media/brands/brand-1.jpg", title: "Rooftop Lounge",     sub: "Brand Film · 1:30",      client: "Altitude Club", tall: true },
    { videoSrc: "media/brands/brand-2.mp4", poster: "media/brands/brand-2.jpg", title: "Plated",             sub: "Restaurant Promo · 1:15", client: "Saffron Kitchen" },
    { videoSrc: "media/brands/brand-3.mp4", poster: "media/brands/brand-3.jpg", title: "The Penthouse",      sub: "Real Estate Tour · 2:20", client: "Skyline Realty" },
    { videoSrc: "media/brands/brand-4.mp4", poster: "media/brands/brand-4.jpg", title: "Night Shift",        sub: "Club Aftermovie · 2:00",  client: "Pulse Nightclub", tall: true },
    { videoSrc: "media/brands/brand-5.mp4", poster: "media/brands/brand-5.jpg", title: "Farm to Table",      sub: "Food Reel · 1:05",        client: "Maple & Oak" },
    { videoSrc: "media/brands/brand-6.mp4", poster: "media/brands/brand-6.jpg", title: "Modern Living",      sub: "Property Showcase · 3:00", client: "Urban Estates" },
  ],

};
