==================================================================
  THE BROWN PRINT — WEBSITE GUIDE
  How to run the site and update your photos, videos, and text.
==================================================================

This site is "static" — it's just files. There's nothing to install,
no database, no monthly software. To change something, you edit a file
or swap a photo, then re-upload. That's it.


------------------------------------------------------------------
  1. THE FOLDER LAYOUT
------------------------------------------------------------------

  the-brown-print/
  │
  ├── index.html        ← Home page
  ├── wedding.html      ← Weddings page
  ├── music.html        ← Music Albums page
  ├── concerts.html     ← Concerts page
  ├── social.html       ← Social Events page (birthdays, anniversaries)
  ├── brands.html       ← Brands page (clubs, restaurants, real estate)
  ├── content.js        ← ★ YOU EDIT THIS for titles & captions
  ├── README.txt        ← this guide
  │
  ├── css/
  │   └── style.css     ← design (don't need to touch)
  │
  ├── js/
  │   ├── player.js     ← video player (don't need to touch)
  │   └── main.js       ← site logic (don't need to touch)
  │
  └── media/            ← ★ YOU DROP YOUR PHOTOS & VIDEOS HERE
      ├── wedding/
      ├── music/
      ├── concerts/
      ├── social/
      └── brands/

  The two things you'll ever touch are marked with ★ :
  the "media" folder (your photos/videos) and "content.js" (the text).


------------------------------------------------------------------
  2. VIEWING THE SITE ON YOUR COMPUTER
------------------------------------------------------------------

  EASIEST: double-click "index.html". It opens in your browser.

  IF VIDEOS DON'T PLAY when opened that way, run a tiny local
  preview instead (this mimics a real web server):

    • Install Python (python.org) if you don't have it.
    • Open the project folder.
    • In the address bar of the folder, type:  cmd  and press Enter.
    • In the black window, type:
          python -m http.server 8000
    • Open your browser to:  http://localhost:8000

  (If you use VS Code, the "Live Server" extension does the same
   thing with a right-click → "Open with Live Server".)


------------------------------------------------------------------
  3. REPLACING A PHOTO OR VIDEO  (the main task)
------------------------------------------------------------------

  Every photo and video has a FIXED FILE NAME. To replace one,
  you just put your new file in the right folder and give it the
  same name. The website automatically shows whatever is there.

  EXAMPLE — change the 1st wedding photo:
    1. Open  media/wedding/
    2. Delete (or move) the old  photo-1.jpg
    3. Drag your new photo in and rename it to  photo-1.jpg
    4. Re-upload the media folder to your host. Done.

  THE FILE NAMES:

  WEDDING  (media/wedding/)
    Photos:   photo-1.jpg  to  photo-6.jpg
    Films:    film-1.mp4   to  film-3.mp4
              (each film also needs a thumbnail image:
               film-1.jpg, film-2.jpg, film-3.jpg)
    Stories:  story-1.jpg  to  story-3.jpg

  MUSIC  (media/music/)
    Videos:   music-1.mp4  to  music-6.mp4
    Thumbs:   music-1.jpg  to  music-6.jpg

  CONCERTS  (media/concerts/)
    Videos:   concert-1.mp4  to  concert-6.mp4
    Thumbs:   concert-1.jpg  to  concert-6.jpg

  SOCIAL  (media/social/)
    Videos:   social-1.mp4   to  social-6.mp4
    Thumbs:   social-1.jpg   to  social-6.jpg

  BRANDS  (media/brands/)
    Videos:   brand-1.mp4    to  brand-6.mp4
    Thumbs:   brand-1.jpg    to  brand-6.jpg

  WHAT IS A "THUMB" / POSTER?
    It's the still image shown on the tile BEFORE someone clicks
    play. Give each video a matching .jpg with the same name so
    the tile looks good while the video loads.

  FILE TIPS:
    • Photos: use .jpg, landscape, around 1200px wide. Keep each
      under ~500 KB so the site loads fast.
    • Videos: use .mp4. Compress long films — huge files are slow.
      For very large films, consider a private Vimeo/YouTube link
      instead (ask your developer to switch a tile to embed mode).
    • Always match the EXACT name, including lowercase and the
      dash. "photo-1.jpg" works; "Photo 1.JPG" will not show.


------------------------------------------------------------------
  4. CHANGING A TITLE, CAPTION, OR STORY TEXT
------------------------------------------------------------------

  Open  content.js  in any text editor (Notepad works).
  You'll see blocks like this:

    { src: "media/wedding/photo-1.jpg",
      title: "Harleen & Arjun",
      sub: "Anand Karaj · Toronto", tall: true },

  Only change the words BETWEEN the quote marks:
    title  = the big name on the tile
    sub    = the small caption under it
    artist = (music) the artist name
    venue  = (concerts) the venue name

  For wedding stories, you can also edit:
    couple, place, date, excerpt (the short teaser),
    and body (the full story shown when someone clicks "Read").

  GOLDEN RULES so you don't break it:
    • Keep every quote mark "  and every comma ,  exactly in place.
    • Only edit the text inside the quotes.
    • Save the file, re-upload, refresh the site.
  If something looks wrong, undo your change and re-save.


------------------------------------------------------------------
  5. ADDING OR REMOVING ITEMS
------------------------------------------------------------------

  In content.js, each tile is one block inside [ square brackets ],
  separated by commas. To ADD a tile, copy an existing block,
  paste it, and change its file name + text. To REMOVE one,
  delete its block (and make sure commas still separate the rest).

  If you add a 7th wedding photo, name its file  photo-7.jpg
  and point the new block's "src" to media/wedding/photo-7.jpg.


------------------------------------------------------------------
  6. PUTTING IT ONLINE
------------------------------------------------------------------

  Any static host works (most have a free tier):
    • Netlify  — drag the whole folder onto their dashboard.
    • GitHub Pages, Vercel, or your existing web hosting.

  To update later: change your files locally, then re-upload the
  changed files (or the whole folder). Visitors see the new
  version right away.


------------------------------------------------------------------
  7. ABOUT THE VIDEO PLAYER & DOWNLOADS
------------------------------------------------------------------

  The site uses a custom player that hides the download button,
  blocks right-click "Save video", and keeps the file address out
  of the page. This stops casual saving.

  Honest note: NO website can fully stop a determined person from
  capturing a video (e.g. screen recording). For stronger
  protection, host films on a PRIVATE Vimeo account and ask your
  developer to embed them. For showing work to clients, the
  current setup is more than enough.


------------------------------------------------------------------
  8. THE "START A PROJECT" FORM
------------------------------------------------------------------

  When a visitor fills out the form, the details currently print
  to the browser's developer console (a test setup). To receive
  these as emails or into a spreadsheet, ask your developer to
  connect it to a free form service or Google Sheet — it's a
  small, one-time addition.


------------------------------------------------------------------
  QUICK ANSWERS
------------------------------------------------------------------
  "A tile is blank / shows a colour, not my photo."
      → The file name doesn't match. Check spelling, lowercase,
        and the dash. It must be exactly e.g. photo-2.jpg.

  "My video won't play when I double-click index.html."
      → Use the local preview in section 2, or upload it online.

  "I edited content.js and the page broke."
      → A quote or comma was removed. Undo and re-save.

  Questions beyond this guide → contact your developer.
==================================================================
