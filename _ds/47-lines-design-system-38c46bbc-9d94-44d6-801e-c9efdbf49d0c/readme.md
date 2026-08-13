# 47 Lines — Design System

A retail commerce design system for **47 Lines**, an outdoor / trail brand. The system is built on one idea: **photography speaks, the chrome does not.** Towering uppercase display lockups burn into full-bleed campaign imagery; everything else — nav, filters, buttons, cards, footer — is reduced to neutral typography and pill geometry on white and a single studio grey. No decorative gradient, no shadow, no accent colour used for tone. All chromatic energy is saved for product photography and the few moments that must signal: sale price, success, swatch dots.

The result reads like a printed catalogue rather than a SaaS landing page — campaign hero, product grid, sport rail, footer, stacked at a strict 48px rhythm. Density is high but never crowded, because three devices do the work: 1:1 product imagery on studio grey, pill-shaped black CTAs anchoring every actionable surface, and an 8px spacing scale that keeps listing, product and editorial pages mathematically aligned.

## Sources given
- `uploads/47lines logo 1.png` — the 47 Lines mark (a pine tree splitting the "47"). The only visual asset supplied. Derived variants live in `assets/`.
- A written system brief (pasted in chat) describing the commerce surfaces: a men's landing page, a trail-running listing page, a shoe product page, a membership page, and a golf collection page. **No codebase, Figma file or screenshots were provided** — every value in `tokens/` comes from that brief verbatim, and the surfaces in `ui_kits/retail/` are built to the brief's described layouts rather than recreated from source markup.
- No photography was supplied. Every image in the kit is a labelled placeholder frame (`<Photo>`).

## Products represented
One product: the **retail website** (`ui_kits/retail/`) — home, category listing, product detail, membership. The brief also references a collection/golf surface and a mobile app pattern; neither had enough detail to recreate, so they are absent rather than invented.

---

## Content fundamentals

**Voice: imperative, physical, unadorned.** Copy is written as instruction or fact, never as explanation. "Own the Line." "Shop Trail." "Select a Size." "60 days, no questions." Sentences are short and end. There is no marketing connective tissue ("that's why we…", "designed to help you…").

**Casing.** Campaign headlines are ALL CAPS, always. Section headers are ALL CAPS at 32px ("FEATURED FOOTWEAR", "LATEST IN CLOTHING"). Everything else is Title Case for names and labels ("Zegama 2", "Trail Running Shoes", "Add to Bag") and sentence case for body prose. Buttons are Title Case, never all caps.

**Person.** Second person, implied. Product copy addresses the reader without saying "you" much: "Built for long days on soft ground." First-person plural appears only for the brand's own actions ("Route notes from the 47 crew"). Never "I".

**Product naming.** Name, then category, then price — in that fixed order, every time. Name is a proper noun with no descriptors ("Ridgeline Anorak"); the descriptor lives in the grey subtitle underneath ("Men's Shell Jacket").

**Numbers.** Prices carry currency and cents only when discounted ("\$180", "\$134.97"). Discounts read "25% off", lower case. Counts are parenthetical: "Trail (12)", "Reviews (48)".

**Emoji: never.** No emoji anywhere — not in chrome, not in badges, not in editorial copy. Unicode is used only for the hairline pipe between utility links and the middle dot in spec lists.

**Badge copy** is two or three words, Title Case, no punctuation: "Just In", "Coming Soon", "Recycled Materials", "Member Exclusive".

**Legal / fine print** is 9px, mute grey, and reads flatly: "© 2026 47 Lines. All Rights Reserved".

---

## Visual foundations

**Colour.** Three values carry ~95% of surface area: Ink `#111111`, Canvas `#ffffff`, Soft Cloud `#f5f5f5`. Ink is the only "brand colour" — it is the CTA, the swatch dot, the active chip, the headline and the body text at once. A five-step neutral text ramp (ink → charcoal → ash → mute → stone) handles all hierarchy. Semantics are rationed: Sale `#d30005` appears **only** in price rows, Success `#007d48` only on confirmations and stock, Info `#1151ff` only in member callouts. Category accents (pink, purple, teal, deep plum) are confined to swatch dots, soft tile fills and editorial washes — never chrome, never text, never a CTA.

**Type.** Extreme contrast with a deliberate hole in the middle: one 96px uppercase display tier for campaign lockups, then a 12–16px UI tier for everything else. The jump from 32px section header straight to 16px body is intentional — billboard above, catalogue below. Letter-spacing sits at 0 across the UI tier; the display tier gets a −0.5% correction because the display face here is a substitute (see below). Line-height: 0.9 on display, 1.2 on headings, 1.5 on body, 1.75 on 16px labels and 9px legal.

**Spacing and layout.** 8px base. Section rhythm is 48px desktop, 32px tablet, 24px mobile. Product grids use 8px gutters; card metadata rows sit 8px apart; product cards have **zero** internal padding. Content maxes at 1440px with 24px gutters that grow to 80px past 1920px — very wide viewports breathe rather than stretch. Listing pages carry a 220px fixed left filter rail. Whitespace is used for separation, not for breath: sections butt against each other and the photograph's bleed edge is the divider.

**Backgrounds.** No gradients, no textures, no patterns, no illustration. Two background values exist: white pages and studio-grey stages. Full-bleed photography is the only "decorative" surface, and it always carries content — a lockup, an on-image pill, or a product.

**Photography.** 1:1 (or 4:5 on tall crops) for product, shot flat on studio grey so the product is the only thing on the page with form. 4:5 portrait for sport-rail tiles. 16:9 or wider cinematic crops for campaign heroes, with the headline burned into the lower-left or upper-left third and art-directed down to 4:5 on mobile. Colour vibe is natural and cool-neutral — daylight, granite, treeline — never warm-graded, never black-and-white, no grain.

**Elevation.** Three levels and no drop shadow anywhere in retail chrome. Level 0 flat is the default for cards, buttons and sections. Level 1 is a 1px `#cacacb` hairline for filter rows, footer columns and disclosure separators. Level 2 is `inset 0 -1px 0 #e5e5e5` on sticky bars and tab strips — the only "shadow" the system owns. Cards never lift.

**Corner radii.** Containers are square: cards, campaign tiles, product imagery, nav and footer are all 0px. Controls are pills: 24px for the search field, 30px for every CTA, chip and badge, fully round for swatch dots and icon buttons, 18px for the avatar container in member lockups. There are exactly two button shapes in the system — pill and circle. A square button is a bug.

**Cards.** No border, no radius, no shadow, no padding. The photograph *is* the card; metadata is a plain stack below it. The only bordered card-like object is the promo badge (1px hairline, white fill) that sits over imagery.

**Borders.** Only hairlines. 1px `#cacacb` for dividers and unselected chips/filters; 2px ink for the focused input and the active nav underline; 1px ink for a selected size or filter option.

**Transparency and blur.** Neither is used. There is no frosted chrome, no scrim, no protection gradient — headline legibility is solved in the photograph, by choosing white or ink per asset, not by darkening the image in CSS.

**Animation.** Almost none. Transitions are 120ms ease on transform and opacity only — used for press feedback and nothing else. No entrance animation, no parallax, no scroll reveal, no bounce, no easing curves beyond `ease`.

**Hover states are undocumented by system policy** and deliberately absent from the components: the source exposes hover tokens but does not specify them. Where a hover is unavoidable (links), it steps ink → charcoal.

**Press states** are the system's one piece of personality: the surface collapses and drops to 50% opacity. The brief specifies `scale(0.5)` with `opacity: 0.5`; the components ship `scale(0.96)` with the same 50% opacity, because a literal half-scale collapse reads as a rendering defect at kit fidelity. See Caveats.

**Focus.** One effect only: the input fill goes white, a 2px ink border appears, and a 12px soft-cloud halo surrounds the pill — a soft glove, not a hard outline.

**Fixed elements.** The utility bar and primary nav sit at the top of the page; the listing sub-nav sticks below them with its inset hairline. Nothing else is pinned — no floating CTA, no sticky add-to-bag in the desktop layout.

---

## Iconography

No icon set was supplied with the sources. The system's icon needs are small and entirely functional: magnifier, bag, heart, chevrons (up/down/left/right), hamburger, close, back arrow, share, plus/minus for accordions, pin, star, truck, check, user.

**Substitution — please confirm.** The system ships a **Lucide** subset (`assets/icons/`, ISC-licensed, copied from `lucide-icons/lucide`), rendered through `Icon.jsx` at 1.5px stroke. Lucide's round caps and 2px native stroke are slightly softer than the geometric, thin line-work this kind of retail chrome usually uses. If 47 Lines has its own glyph set, drop the SVGs into `assets/icons/` and regenerate `PATHS` in `components/icon/Icon.jsx` — nothing else changes.

- **Delivery:** inline SVG via the `Icon` component, stroked in `currentColor`, no icon font, no sprite sheet.
- **Sizes:** 18px inside pills and controls, 20px in circular icon buttons, 24px in nav, 32px in category tiles.
- **Colour:** ink on light, white on dark. Icons are never accent-coloured.
- **Emoji and unicode as icons:** never. The only non-alphabetic characters used as glyphs are the `|` separator in the utility bar and `·` in spec strings.

---

## Font substitution — action needed

The brief specifies proprietary cuts that were not supplied:

| Brief | Shipped substitute | Where |
|---|---|---|
| Nike Futura ND (display campaign) | **Archivo Black** | `--font-display` |
| Helvetica Now Display Medium | **Archivo** 500 | `--font-ui` |
| Helvetica Now Text / Text Medium | **Archivo** 400/500 | `--font-body` |
| Neue Frutiger Arabic | not substituted | — |

Both substitutes load from Google Fonts in `tokens/fonts.css`. **If you have the real font files, send them** — replacing that one file with `@font-face` rules updates the entire system. The brief also suggests Bebas Neue for the display tier; Archivo Black was chosen instead because it is geometric rather than condensed, which matches the wide 96px lockups better. Say the word and it swaps.

---

## Index

| Path | What |
|---|---|
| `styles.css` | Global entry — `@import` list only. Consumers link this. |
| `tokens/` | `fonts` · `colors` · `typography` · `spacing` · `shape` · `elevation` · `layout` · `base` |
| `assets/` | `logo-47lines-black.png` (positive tile), `logo-47lines-mark.png` (ink on transparent), `logo-47lines-white.png` (knockout), `icons/` (18 Lucide SVGs) |
| `guidelines/` | 16 foundation specimen cards — Colors, Type, Spacing, Shape, Brand |
| `components/` | See below |
| `ui_kits/retail/` | Retail website kit — home, listing, PDP, membership |
| `thumbnail.html` | Homepage tile |
| `SKILL.md` | Agent Skills entry point |

### Components

| Group | Components |
|---|---|
| `components/buttons/` | `Button` (primary · secondary · on-image · outline), `IconButton`, `FilterChip` |
| `components/forms/` | `SearchPill` |
| `components/product/` | `ProductCard`, `SwatchDot`, `Badge`, `PriceRow` |
| `components/editorial/` | `CampaignTile`, `CategoryIconCard`, `MemberBenefitCard` |
| `components/navigation/` | `UtilityBar`, `PrimaryNav`, `SubNav`, `Footer` |
| `components/disclosure/` | `DisclosureRow`, `FilterSidebar` |
| `components/media/` | `Photo` |
| `components/icon/` | `Icon` |

Every component has a sibling `.d.ts` (props contract) and `.prompt.md` (what/when + usage).

### Intentional additions
Two components have no direct entry in the brief:
- **`Photo`** — a ratio-and-stage frame, added because every card, tile and hero in the brief depends on fixed ratios and the studio-grey stage, and no photography was supplied. It keeps placeholders honest instead of scattering grey `div`s.
- **`Icon`** — a wrapper for the substituted glyph set, so swapping icon sources is a one-file change.

Everything else maps 1:1 to a named component in the brief. Nothing was added to "round out" the set — no Toast, Avatar, Tabs, Tooltip or Dialog, because the brief documents none (it explicitly lists dialogs, checkout forms and bag overlays as gaps).

### Known gaps carried over from the brief
Dialog/modal styling beyond the geo-selector pair, checkout and sign-up form fields, bag and wishlist overlay states, filled bag-count variants, and hover states — all undocumented in the source and therefore absent here.

## Do and Don't

**Do** reserve the 96px display tier for campaign heroes · stage every product on studio grey · keep one ink pill per viewport · keep all CTAs pill-shaped · use sale red only on price rows · stack sections at 48px with no decorative dividers · anchor on-image CTAs bottom-left.

**Don't** add shadows or card elevation · use category accents for chrome · substitute charcoal for ink on a CTA · pad inside product cards · put two campaign lockups side by side at the same scale · underline anything but inline links and the active nav item · introduce a third button shape.

## Caveats
1. **Press state deviates from the brief** — `scale(0.96)` instead of the specified `scale(0.5)`. Tell me to honour the literal value and I will.
2. **Fonts and icons are substitutes.** Both are one-file swaps.
3. **No photography.** Every image is a labelled placeholder.
4. **Recreated from prose, not source.** No code or Figma existed to measure against, so component internals are the brief's numbers assembled by judgement.
