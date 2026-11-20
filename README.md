# Badwayz Society — Official Site

Showroom site for Sleepy Badways' brand. **Printify is the cash register**: every Buy button opens the product on https://badwayzsociety.printify.me, where Printify takes payment, prints, and ships.

## Files
| File | What it does |
|---|---|
| `index.html` | The page |
| `css/styles.css` | All styling (black #0a0a0a + crimson #DC2626) |
| `js/products.js` | **Every product, price, photo, and link. Edit here.** |
| `js/config.js` | Sale banner (off), audio player (off), social links |
| `js/app.js` | Shop tabs, product cards, mobile menu |
| `images/` | Compressed brand art (WebP) |
| `netlify.toml` | Hosting settings for Netlify |

## Common edits
- **Change a price:** change it in Printify first, then `price:` in `js/products.js`.
- **Hide a product:** `show: false` in `js/products.js`.
- **Add a product:** copy a block in `js/products.js`; `id` is the number at the end of the Printify product URL; `img` is the part of the Printify photo address after `/mockup/`.
- **Run a sale:** create the promotion in Printify (Pop-Up dashboard → Promotions), then in `js/config.js` set `enabled: true` with matching message and dates. It hides itself after `endDate`.

## Sync rule
The site and Printify must always match. Never show a price, sale, or product on the site unless the same thing is live in Printify.

## Hosting
GitHub repo connected to Netlify (free). Every change gets a preview link; merging to `main` makes it live.
