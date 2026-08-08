# CLS Bible TV Design System

## About

CLS Bible TV is a CCM (Contemporary Christian Music) music-video channel built around the parables of Jesus and figures from the Bible. This design system covers the **mobile app** and **website** that host the channel's video library.

No codebase, Figma file, or existing brand assets were provided. This system was built from a single written brief (see below) — colors, type, spacing, and components are original work following that brief's direction, not extracted from an existing product. There is currently **no logo**; see Iconography.

### Source brief (verbatim, provided by the user)

> CLS Bible TV: 예수님의 비유와 성경 인물을 다루는 은혜로운 CCM 뮤직비디오 채널을 위한 모바일 앱 및 웹사이트 디자인.
> 분위기: 따뜻하고 평안하며 신뢰감을 주는 깔끔한 톤앤매너
> 메인/포인트 컬러: 차분한 네이비 블루 또는 따뜻한 올리브 그린
> 배경 컬러: 눈이 편안한 깨끗한 화이트 및 옅은 웜그레이
> UI 디자인: 시청자들이 편안하게 볼 수 있도록 메뉴와 버튼을 직관적이고 큼직하게 배치

Translation for reference: a warm, peaceful, trustworthy tone; navy blue or warm olive green as the main color; clean white and pale warm gray backgrounds; large, intuitive menus and buttons for comfortable viewing.

**Decision made:** the brief offered navy blue *or* olive green as the main color — this system uses **navy blue as primary** (trust, calm, editorial authority) and **olive green as the secondary accent** (warmth, growth, used for highlights/tags/secondary actions), so both directions from the brief are represented rather than dropped.

## Index

- `styles.css` — root stylesheet, import-only. Link this from any consuming page.
- `tokens/` — color, type, spacing/radius/shadow, base resets, font-face declarations.
- `guidelines/` — foundation specimen cards shown in the Design System tab.
- `assets/` — icons (Lucide, see Iconography).
- `components/core/` — Button, IconButton, Tag/Badge, Input, Select, Checkbox, Radio, Switch, Card, Tabs, Dialog, Toast, Tooltip.
- `ui_kits/app/` — mobile app screens (home/browse, video player, series detail, search).
- `ui_kits/website/` — marketing website screens (home, video/watch page, series/collection page).
- `SKILL.md` — portable skill definition for use in Claude Code.

## Content fundamentals

Written for a Korean Christian audience; primary language is Korean.

- **Tone**: warm, calm, pastoral — like a trusted friend introducing you to a story, not a media company pushing content. No hype, no urgency language, no "돈벌기/트렌드" marketing tricks.
- **Address**: soft, respectful Korean politeness level (해요체/합니다체 mix), speaking to "여러분" (you-all) rather than an impersonal system voice. Avoid commanding imperatives; prefer inviting phrasing ("함께 나눠요" over "지금 시작하세요!!").
- **Casing**: sentence case throughout; no all-caps labels except very short UI chips (e.g. "NEW", "라이브") used sparingly.
- **Punctuation**: minimal exclamation points. A single "!" at most for warm emphasis ("은혜가 되었으면 좋겠어요!"), never stacked ("!!!") and no aggressive ALL CAPS + "!!!" combinations common in entertainment apps.
- **Numbers/stats**: avoid vanity metrics (view counts, subscriber counts) as a headline element — this is a devotional channel, not a growth-hacked media brand. If shown at all, keep small and secondary.
- **Emoji**: not used in UI copy or navigation. A small cross (✝) or dove motif may appear as an iconographic mark, never as inline emoji punctuation.
- **Example copy**:
  - Section header: "오늘의 말씀 영상" (today's word video) rather than "🔥 HOT 콘텐츠"
  - Empty state: "아직 시청 기록이 없어요. 첫 영상을 만나보세요." (gentle, not "Oops! Nothing here yet 😅")
  - CTA button: "이 이야기 보러가기" / "지금 보기" — short, plain, no forced urgency.
  - Category names are Bible-figure or parable names in plain Korean: "선한 사마리아인", "다윗과 골리앗", "탕자의 비유".

## Visual foundations

- **Color**: navy blue is the primary brand color — used for headers, primary buttons, active nav states, and links. Warm olive green is the secondary accent — used for tags, secondary buttons, progress indicators, and highlights, never as the dominant color on a screen. Backgrounds are clean white (`--color-bg`, near-white warm tint) and a pale warm gray (`--color-bg-subtle`) for section separation and cards. Max two accent colors on any screen; neutrals should always outweigh color.
- **Type**: Pretendard (sans) is the workhorse for all Korean UI text — body, labels, buttons, navigation. Source Serif 4 is reserved for the brand wordmark and large English/number display moments (e.g. a big "CLS Bible TV" lockup) to add warmth and a devotional, printed-page feel without compromising Korean legibility (Source Serif 4 has no Hangul glyphs). Headings default to Pretendard Semibold for full Korean support; treat Source Serif 4 as a brand accent, not a body heading font.
- **Spacing**: an 4px-based scale (`--space-1` … `--space-11`). UI touch targets are large per the brief — buttons and nav items never fall below 48px tall (`--tap-min`).
- **Backgrounds**: flat color fields, no gradients, no textures or patterns. Video thumbnails and stills are the only imagery; the chrome around them stays quiet and flat so content is what draws the eye.
- **Corner radius**: gently rounded — 10px for buttons/inputs/tags, 16px for cards and video thumbnails, pill (999px) for chip-style filters. Nothing sharp, nothing overly bubbly.
- **Shadows**: soft and low-contrast (`--shadow-sm/md/lg`), navy-tinted rather than pure black, used sparingly — mainly on floating elements (dialogs, the video player's control bar) and hover-lifted cards. Flat cards elsewhere rely on a 1px warm-gray border, not a shadow.
- **Borders**: 1px, warm gray (`--color-border`), used on cards, inputs, and dividers instead of shadows where a subtler separation is enough.
- **Motion**: minimal and calm — 120–200ms ease-out fades/opacity and small translateY(4px) lifts on hover/appear. No bounce, no spring, no spinning loaders; a gentle pulse or fade for loading states.
- **Hover state**: buttons darken one step (`-hover` token); ghost/text buttons gain a subtle tinted background (`--navy-50` / `--olive-50`).
- **Press/active state**: darken one further step (`-active` token) plus a very slight (0.98) scale-down — no color inversion.
- **Focus state**: a 3px soft navy ring (`--shadow-focus`) for keyboard accessibility, never removed.
- **Transparency/blur**: used only for overlays — a translucent scrim (dialogs, video player control bar over thumbnail) — never as a general decorative effect.
- **Imagery color vibe**: warm-neutral, natural light, no heavy filters or grain; imagery should read as calm and documentary rather than glossy/entertainment. (No source imagery was provided — screens use labeled gray placeholders.)
- **Layout**: bottom tab bar fixed on mobile (large tap targets, 5 items max); sticky top nav on desktop web. Content is video-thumbnail-first — grid or horizontal-scroll rows of large rounded thumbnails, generous spacing between rows, one primary action per screen.

## Iconography

No icon set, icon font, or SVGs were provided in the brief. This system uses **Lucide** (MIT-licensed, CDN-loaded, stroke-based) as a substitute icon system — flagged here as a substitution. Lucide was chosen for its calm, rounded-stroke geometry, which matches the brand's soft, non-aggressive tone (avoid sharp/filled icon sets, avoid duotone or gradient icon styles). Load via `<script src="https://unpkg.com/lucide@latest"></script>` and `lucide.createIcons()`, or inline `<svg>` copies for static mocks — see `components/core/icon-usage.md`. Stroke weight 1.75–2px, sized 20–24px inline / 28px for nav. No emoji is used as iconography or inline punctuation anywhere in the product. If the actual brand later ships its own icon set (or a cross/dove wordmark-adjacent mark), replace the Lucide references here.

## Caveats

- No codebase, Figma file, or brand assets were provided — everything here (colors, type, copy voice, screens) is original work built from the written brief only. Nothing was extracted from an existing CLS Bible TV product.
- No logo exists. The wordmark (Source Serif 4, "CLS Bible TV") stands in everywhere a mark would go — do not invent a cross/dove icon as a logo.
- Pretendard and Source Serif 4 load from CDN (jsdelivr / Google Fonts) rather than self-hosted files, since no font files were provided.
- Icons are Lucide (CDN), substituted in the absence of a brand icon set.
- No real video thumbnails/photography exist — UI kits show labeled gray placeholders where thumbnails belong.

## Intentional additions

No component source was provided, so a standard baseline set was authored from scratch, sized to this product's needs (video-forward media app): Button, IconButton, Badge/Tag, Input, Select, Checkbox, Radio, Switch, Card (includes a VideoThumbnailCard variant), Tabs, Dialog, Toast, Tooltip. A `ProgressBar` was added for video watch-progress, and a `BottomNav` / `TopNav` pair was added since the brief explicitly calls out large, easy navigation as a requirement.
