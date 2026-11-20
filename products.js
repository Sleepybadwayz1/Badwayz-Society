/*
  BADWAYZ SOCIETY — PRODUCT LIST
  ------------------------------------------------------------------
  This is the ONLY place product info lives. To change the site:

  • Change a price ...... edit "price" (must match Printify EXACTLY)
  • Hide a product ...... set  show: false
  • Add a product ....... copy one block, paste it, change the values
                          (id = the number at the end of its Printify URL)
  • Product photo ....... "img" is the Printify mockup photo. Copy it from the
                          product page on badwayzsociety.printify.me
                          (right-click main photo → Copy image address).

  SYNC RULE: never change a price here unless it was changed in Printify first.
  Prices verified against badwayzsociety.printify.me on Nov 20, 2026.
*/

const PRINTIFY_STORE = 'https://badwayzsociety.printify.me';
const MOCKUP = 'https://images-api.printify.com/mockup/';

const CAPSULES = [
  { key: 'skull',     name: 'Skull Emblem',              tag: 'Drop 01' },
  { key: 'script',    name: 'Script & Graffiti',         tag: 'Drop 02' },
  { key: 'livin',     name: "Livin' Dead Society",       tag: 'Drop 03' },
  { key: 'outerwear', name: 'Outerwear & Gear',          tag: 'Drop 04' },
  { key: 'extras',    name: 'Stickers, Car & Home',      tag: 'Extras'  },
];

const PRODUCTS = [
  // ── DROP 01 · SKULL EMBLEM ──────────────────────────────────────
  { id: '32017927', capsule: 'skull', featured: true, show: true, price: 54.28,
    name: 'Skull Emblem Hoodie',
    img: '6aa9d3794a82c45c2c0030a3/68053/99231/skull-emblem-hoodie-badwayz-society-vintage-brooklyn-streetwear.jpg?camera_label=front&revision=1789514667689&s=800' },
  { id: '32028161', capsule: 'skull', featured: true, show: true, price: 53.47,
    name: 'Skull Crewneck Sweatshirt',
    img: '6aaa36c441cb19f30f0b3a18/36121/234/badwayz-society-skull-crewneck-sweatshirt-vintage-brooklyn-streetwear.jpg?camera_label=front&revision=1789540066546&s=800' },
  { id: '31474510', capsule: 'skull', featured: true, show: true, price: 73.52,
    name: 'Champion Skull Emblem Hoodie',
    img: '6a94c1e1d7028ee68d0f0cb0/68869/109444/champion-hoodie-vintage-skull-emblem-pullover.jpg?camera_label=front&revision=1788134000010&s=800' },
  { id: '32019711', capsule: 'skull', show: true, price: 62.88,
    name: '"Hood Up" Skull Crewneck',
    img: '6aa9e15dc9648770470beb8c/96921/99009/skull-hoodie-graphic-sweatshirt-hood-up-streetwear-crewneck.jpg?camera_label=person-1-front&revision=1789518213828&s=800' },
  { id: '31474329', capsule: 'skull', show: true, price: 54.08,
    name: 'Skull Emblem Crop Hoodie',
    img: '6a94bfd8714186ebc903e8ac/68297/104959/skull-emblem-crop-hoodie-badwayz-society-graphic.jpg?camera_label=front&revision=1788133610187&s=800' },
  { id: '32018713', capsule: 'skull', featured: true, show: true, price: 52.57,
    name: 'Skull Emblem Flat Bill Cap',
    img: '6aa9d9d16393326db60935e9/119150/109608/skull-emblem-flat-bill-cap-embroidered-crew-logo-snapback.jpg?camera_label=front&revision=1789516294839&s=800' },
  { id: '32019250', capsule: 'skull', show: true, price: 138.70,
    name: 'Skull Logo Comforter',
    img: '6aa9ddce5c1d70249b0ab860/61418/2645/badwayz-society-skull-logo-comforter-gothic-black-white-bedding.jpg?camera_label=front&revision=1789517298128&s=800' },

  // ── DROP 02 · SCRIPT & GRAFFITI ─────────────────────────────────
  { id: '32019538', capsule: 'script', featured: true, show: true, price: 66.12,
    name: 'Embroidered Script Joggers',
    img: '6aa9dfac6e18cba44700e9e8/111480/110437/embroidered-script-joggers-vertical-floral-script-sweatpants.jpg?camera_label=front&revision=1789547111246&s=800' },
  { id: '32091554', capsule: 'script', featured: true, show: true, price: 71.15,
    name: 'Script High-Top Sneakers',
    img: '6aac85bd7fab709a780df4f9/44250/80949/high-top-sneakers-white-script-pattern-mens-classic-sneakers.jpg?camera_label=both-angle&revision=1789691453579&s=800' },
  { id: '32028217', capsule: 'script', show: true, price: 43.78,
    name: 'Blue Script Sports Jersey',
    img: '6aaa37c32b6c25521e090a6d/101481/95988/mens-allover-graphic-sports-jersey-blue-script-pattern.jpg?camera_label=front&revision=1789540326126&s=800' },
  { id: '32020532', capsule: 'script', show: true, price: 35.58,
    name: 'Script One-Piece Swimsuit',
    img: '6aa9e6635846bef1d80e643c/44805/1055/classic-womens-one-piece-swimsuit-all-over-script-logo-print.jpg?camera_label=front&revision=1789519653127&s=800' },
  { id: '32029813', capsule: 'script', show: true, price: 34.22,
    name: 'Script Tie-Side Bikini',
    img: '6aaa541d7e9070db3f09baf6/44548/926/tie-side-triangle-bikini-with-subtle-blue-script-print.jpg?camera_label=front&revision=1789547580622&s=800' },
  { id: '20393660', capsule: 'script', show: true, price: 38.00,
    name: "Graffiti Pajama Pants (Women's)",
    img: '682b52e7ae988c4df70be814/74889/19424/chic-graffiti-womens-pajama-pants-cozy-loungewear-stylish-sleepwear-unique-gift-for-her-relaxation-essential-street-style.jpg?camera_label=front&revision=1759474255788&s=800' },
  { id: '20394183', capsule: 'script', show: true, price: 50.52,
    name: "Graffiti Pajama Pants (Men's)",
    img: '682b59ae4df44a5f920c05af/74882/19086/graphic-mens-pajama-pants-cozy-streetwear-for-relaxation-lounging.jpg?camera_label=front&revision=1747671569218&s=800' },

  // ── DROP 03 · LIVIN' DEAD SOCIETY ───────────────────────────────
  { id: '33594950', capsule: 'livin', featured: true, show: true, price: 57.99,
    name: "Champion Livin' Dead Hoodie",
    img: '6ae0567c6b3d6ea6450151fe/68876/109444/champion-hoodie-with-colorful-celebrating-mascot-design.jpg?camera_label=front&revision=1793088677855&s=800' },
  { id: '20351205', capsule: 'livin', show: true, price: 36.00,
    name: "Livin' Dead Society Baby Tee",
    img: '6828cf909bedff98e10ddc43/110395/108435/hip-hop-baby-tee-livin-dead-society-graphic-t-shirt-for-music-lovers.jpg?camera_label=front&revision=1759474609430&s=800' },
  { id: '20351867', capsule: 'livin', show: true, price: 33.00,
    name: 'Hip Hop Resurrection Youth Hoodie',
    img: '6828d86eae988c4df70b4d00/43917/107813/youth-heavy-blend-hooded-sweatshirt-livin-dead-hip-hop-resurrection-graphic.jpg?camera_label=front&revision=1762248102712&s=800' },
  { id: '20371273', capsule: 'livin', show: true, price: 2.00,
    name: 'Hip Hop Resurrection Stickers',
    img: '682a15a6c8782d21a103db10/45750/16655/hip-hop-resurrection-kiss-cut-stickers-urban-streetwear-design.jpg?camera_label=front&revision=1747588663514&s=800' },

  // ── DROP 04 · OUTERWEAR & GEAR ──────────────────────────────────
  { id: '33595186', capsule: 'outerwear', show: true, price: 163.21,
    name: 'Insulated Waterproof Tech Jacket',
    img: '6ae05b906951aa295a059176/227995/148332/insulated-waterproof-tech-jacket.jpg?camera_label=left-chest&revision=1793088548936&s=800' },
  { id: '33595119', capsule: 'outerwear', show: true, price: 194.76,
    name: 'Insulated Parka Jacket',
    img: '6ae059c01c2ff18fa10a4eb3/224960/141813/insulated-parka-jacket.jpg?camera_label=left-chest&revision=1793088628594&s=800' },
  { id: '13337956', capsule: 'outerwear', show: true, price: 60.00,
    name: 'adidas Fleece Hoodie',
    img: '66eba6667d0528bbea0e9654/106749/102832/adidas-unisex-fleece-hoodie.jpg?camera_label=front&revision=1759476193386&s=800' },
  { id: '32091339', capsule: 'outerwear', show: true, price: 63.05,
    name: "Fur-Lined Leather Boots (Men's)",
    img: '6aac841272a55875360af96b/148231/119021/mens-fur-and-leather-boots.jpg?camera_label=both-angle&revision=1789690942586&s=800' },
  { id: '32029916', capsule: 'outerwear', show: true, price: 63.05,
    name: "Fur-Lined Leather Boots (Women's)",
    img: '6aaa568d248ab968df08c5f4/148240/119020/faux-fur-lined-leather-boots-geometric-gold-white-winter-ankle-boots.jpg?camera_label=both-angle&revision=1789548207163&s=800' },
  { id: '13339312', capsule: 'outerwear', show: true, price: 44.00,
    name: 'Badwayz Backpack',
    img: '66ebb7b629e2089f1609c56f/61364/2984/backpack.jpg?camera_label=front&revision=1768087226206&s=800' },
  { id: '13338903', capsule: 'outerwear', show: true, price: 53.00,
    name: 'Black Script Duffel Bag',
    img: '66ebb21c6c49f256c2008696/45054/1292/duffel-bag.jpg?camera_label=front&revision=1759474978374&s=800' },
  { id: '20394031', capsule: 'outerwear', show: true, price: 52.65,
    name: 'Graffiti Duffel Bag',
    img: '682b57f64df44a5f920c052e/45055/1286/trendy-graphic-duffel-bag-stylish-sports-travel-bag-for-active-lifestyle.jpg?camera_label=front&revision=1747671142597&s=800' },

  // ── EXTRAS · STICKERS, CAR & HOME ───────────────────────────────
  { id: '20371369', capsule: 'extras', show: true, price: 1.95,
    name: "Livin' Dead Vinyl Decal",
    img: '682a16a58de41e64de036f9d/95743/79460/kiss-cut-vinyl-decals.jpg?camera_label=front&revision=1747588811921&s=800' },
  { id: '12989833', capsule: 'extras', show: true, price: 4.95,
    name: 'Badwayz Car Magnet',
    img: '66df699ce357e6b270054da3/105505/102251/car-magnets.jpg?camera_label=front&revision=1725917618980&s=800' },
  { id: '12597891', capsule: 'extras', show: true, price: 11.00,
    name: 'Color Morphing Mug, 11oz',
    img: '66cfe44c3713c43fa1001520/88141/58694/color-morphing-mug-11oz.jpg?camera_label=front&revision=1759478780624&s=800' },
  { id: '12738728', capsule: 'extras', show: true, price: 36.22,
    name: 'Badwayz Tumbler, 20oz',
    img: '66d731e79ed63097c7079974/44519/849/tumbler-20oz.jpg?camera_label=front&revision=1725379147569&s=800' },
  { id: '12597985', capsule: 'extras', show: true, price: 27.00,
    name: 'Arctic Fleece Blanket',
    img: '66cfe2eca4faab1cff0ec008/100926/98294/arctic-fleece-blanket.jpg?camera_label=front&revision=1759479347353&s=800' },
  { id: '12996396', capsule: 'extras', show: true, price: 52.00,
    name: 'Car Seat Covers (Set of 2)',
    img: '66df9356b6b1ef27e70a7445/78839/45643/polyester-car-seat-covers.jpg?camera_label=front&revision=1759475312836&s=800' },

  // ── HIDDEN (live in Printify, off-brand — waiting on Sleepy) ────
  { id: '33595572', capsule: 'extras', show: false, price: 38.99, name: 'Personalized Heart Necklace', img: '' },
  { id: '23683877', capsule: 'extras', show: false, price: 38.52, name: 'Funny Sloth Plush Blanket', img: '' },
  { id: '32020278', capsule: 'script', show: false, price: 109.70, name: 'Lavender Bouquet Joggers', img: '' },
];
