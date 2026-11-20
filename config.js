/*
  BADWAYZ SOCIETY — SITE SETTINGS
  ------------------------------------------------------------------
  SALE BANNER
  Printify Pop-Up only supports automatic store-wide % discounts and
  shipping discounts. No typed promo codes.
  Only set enabled: true when the SAME promotion is live in Printify
  (Pop-Up Store dashboard → Promotions). The banner hides itself
  automatically after endDate.
*/
const SITE_CONFIG = {
  sale: {
    enabled: false,                 // ← flip to true only when Printify promo is live
    message: 'LAUNCH WEEK — 10% OFF EVERYTHING',
    detail: 'Discount applies automatically at checkout. No code needed.',
    startDate: '2026-12-01',        // YYYY-MM-DD (Mountain Time)
    endDate: '2026-12-07',
  },

  // MJ mixdown play button — keep false until Sleepy approves it going public
  audio: {
    enabled: false,
    src: 'audio/mj-mixdown.mp3',
    label: 'MJ Mixdown (Rough)',
  },

  links: {
    store: 'https://badwayzsociety.printify.me',
    instagram: 'https://instagram.com/badwayssociety',
    linktree: 'https://linktr.ee/sleepybadwayz',
    appleMusic: 'https://music.apple.com/ng/song/not-kidding/1760086171',
    songstats: 'https://songstats.com/artist/vyw71c94/sleepybadwayz',
    email: 'that.boss.sleepybw@gmail.com',
  },
};
