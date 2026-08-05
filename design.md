# Drip Perfect Pasig — Landing Page Design

## 1. Global Specifications & Palette

### Color Palette
- **Soft Pink (Backgrounds & Banners):** #FEE4F5 (Airy Bubblegum Pink)
- **Accent Pink (Decorative Icons & Logo):** #F7AFCF (Sweet Rose Pink)
- **Deep Rose (Text Highlights — Natural, Loves, Stats):** #D96A97 (Readable rose for large accent text on pink backgrounds)
- **Deep Pink (Tags, Badges & Small Accents):** #E27AA8 (Orchid Pink — adds contrast where #F7AFCF is too light)
- **Deep Plum (Text & Buttons):** #4A2438 (Deep Plum / Wine)
- **Pure White:** #FFFFFF
- **Card Pink Tint:** #FFF9FC (Off-white with pink warmth, hairline #F3D8E6 border)
- **Muted Text / Subtitles:** #76626C (Mauve Gray — readable on white and blush)
- **Border / Divider Tint:** #F3D8E6 (Rose Tint)
- **Strikethrough / Faded:** #B998A8 (Soft Mauve)
- **Star Rating / Highlight Gold:** #EAA844 (pops against pink)

### Gradients
- **Hero:** #FEE4F5 (Top Left) → #FAD0E4 (Bottom Right)
- **Promo Banner:** #F9D7E9 → #FDEDF8 (Left to Right)

---

## 2. Navigation Bar (Header)

### Layout & Spacing
- **Height:** 80px
- **Padding:** 0px 80px
- **Alignment:** Flexbox (space-between, align-items: center)
- **Background:** Transparent — the hero gradient (#FEE4F5 → #FAD0E4) wraps the header + hero together, so the navbar blends seamlessly into the hero.

### Elements
- **Logo (Left):**
  - Text: Drip Perfect with leaf icon prefix (icon in #F7AFCF).
  - Font: Serif (e.g., Playfair Display or Cormorant Garamond), Bold, 24px, Color: #4A2438.
- **Navigation Links (Center):**
  - Items: Home, Services, About Us, Contact
  - Font: Sans-serif (e.g., Plus Jakarta Sans or Inter), Medium, 14px, Color: #4A2438.
  - Gap between items: 32px
  - Active State (Home): Underlined with #4A2438 border-bottom (2px, padding-bottom: 4px).
- **Utility Icons (Right):**
  - Icons: Search, User Profile, Shopping Bag (with badge 1). Color: #4A2438.
  - Icon Size: 20px x 20px
  - Gap: 20px
  - Badge: Floating circle (16px x 16px), Background: #4A2438, Text: White, 10px font size.

---

## 3. Hero Section

### Layout Structure
- **Height:** 600px
- **Grid:** 2 Columns (50% Text / Content, 50% Image)
- **Background:** Gradient #FEE4F5 (Top Left) to #FAD0E4 (Bottom Right)
- **Padding Left:** 100px

### Content (Left Column)
- **Tagline / Tag:**
  - Text: IV DRIPS · FACE & BODY TREATMENTS
  - Font: Sans-serif, Bold, 12px, Uppercase, Letter Spacing: 1.5px, Color: #E27AA8.
  - Margin Bottom: 16px
- **Main Headline:**
  - Text: Reveal Your *Natural* Glow (Natural in #D96A97)
  - Font: Serif, Semi-Bold, 56px, Line Height: 1.15, Color: #4A2438.
  - Margin Bottom: 20px
- **Subheadline / Body:**
  - Text: Premium IV drips and face & body treatments that build strong immunity and reveal your natural glow — safe, effective, and tailored just for you.
  - Font: Sans-serif, Regular, 15px, Line Height: 1.6, Color: #76626C.
  - Max Width: 420px
  - Margin Bottom: 32px
- **CTAs (Buttons Row):**
  - Primary Button (Book Now →): Width auto, Height 48px, Padding 0px 28px, Border Radius: 24px (Pill shape), Background: #4A2438, Text: White, Sans-serif, Semi-Bold, 14px.
- **Value Proposition Bar (Bottom of Hero Text):**
  - Margin Top: 48px
  - Items (3 Columns):
    - Medical Grade (Safe & Sterile)
    - Licensed Physicians (Clinically Proven)
    - Personalized Care (Tailored Drips)
  - Icons: Minimal line art icons (24px x 24px), Color: #D96A97.
  - Typography: Title: Bold 12px, #4A2438; Subtitle: Regular 11px (#8E7B85).

### Imagery (Right Column & Badge)
- **Hero Image:** Transparent-background woman PNG, upscaled 2× (Lanczos) to 1918×2048 (`/images/hero-image/woman-transparentbg-2x.png`), rendered `object-contain` with `object-right-bottom` in the wider 55% column so the cutout sits at the right-bottom of the hero, sharp (downscaled from 2× source).
- **Floating Badge (Top Right):**
  - Shape: Circle (90px x 90px), White background (#FFFFFF), Box Shadow: 0px 10px 20px rgba(0,0,0,0.05).
  - Text: 20% OFF (Bold 14px, #4A2438), For New Patients (Regular 10px, #8E7B85).

---

## 4. Section 2: "Our Services"

### Layout Structure
- **Margin Top/Bottom:** 60px 0px
- **Padding Horizontal:** 80px
- **Header:** Centered Headline (Our Services), Serif, 32px, #4A2438, Margin Bottom: 40px.

### Grid & Cards
- **Grid:** 5 Columns equal width (flex or grid-template-columns: repeat(5, 1fr)), Gap: 20px.
- **Card Specs:**
  - Background: #FFF9FC
  - Border: 1px #F3D8E6 (hairline)
  - Border Radius: 16px
  - Padding: 16px 16px 20px 16px
  - Alignment: Text aligned center.
  - Image Container: Aspect ratio 1:1, subtle background cutout of clinic/wellness imagery.
- **Card Items Content:**
  - Hydration Drips (8 Packages)
  - Glow & Whitening (6 Packages)
  - Immunity Boost (5 Packages)
  - Recovery Drips (6 Packages)
  - Detox & Slim (4 Packages)
- **Card Typography:**
  - Title: Sans-serif, Bold, 15px, #4A2438.
  - Subtext: Sans-serif, Regular, 12px, #8E7B85.

---

## 5. Section 3: Promotional Banner

### Layout & Dimensions
- **Dimensions:** Width 100%, Height 280px
- **Border Radius:** 20px
- **Margin Horizontal:** 80px
- **Background:** Soft Pink Gradient (#F9D7E9 to #FDEDF8)
- **Display:** Flexbox (Left Text, Center Image, Right Social Proof Stats)

### Content Breakdown
- **Left Side (Offer Text):**
  - Badge: Glow Every Day ✦ (Text: #E27AA8, Font Size: 12px, Semi-Bold)
  - Headline: Wellness That *Loves* You Back (Loves in #D96A97) (Serif, 28px, Bold, #4A2438)
  - Subtext: Flat 20% off on first-time IV sessions. Limited time offer! (Sans-serif, 13px, #76626C)
  - CTA Button: Book Now → (Plum pill button #4A2438, White text, 40px height)
- **Center Side:** High-res image display of skin product bottles sitting on a marble/stone pedestal surrounded by pink flowers.
- **Right Side (Social Proof Stats):**
  - Stat 1: 10K+ (Serif, Bold, 24px, #D96A97) / Happy Patients (Sans-serif, 11px, #76626C)
  - Stat 2: 4.8 (Serif, Bold, 24px, #4A2438) / Average Rating (Sans-serif, 11px, #8E7B85)
  - Rating Display: 5 Gold Stars (★ ★ ★ ★ ★), Color: #EAA844, Size: 14px.
  - Divider: 1px #F3D8E6.

---

## 6. Section 4: "Popular Treatments"

### Layout Structure
- **Padding Horizontal:** 80px
- **Margin Top:** 60px
- **Header Bar:** Flexbox (space-between, align-items: center), Margin Bottom: 32px
  - Title: Popular Treatments (Serif, 32px, #4A2438)
  - CTA Link: View All button (Outline pill style, Border: 1px solid #F3D8E6, Radius: 20px, Height: 32px, Padding: 0px 16px, Text: 12px, #4A2438).

### Treatment Grid
- **Grid Layout:** 4 Columns (repeat(4, 1fr)), Gap: 24px
- **Card Container:**
  - Background: #FFF9FC
  - Border: 1px #F3D8E6 (hairline)
  - Border Radius: 16px
  - Padding: 12px
  - Position: relative

### Individual Card Anatomy
- **Top Actions:**
  - Wishlist Icon (Heart): Top-right floating circle icon button (28px x 28px), White background, #4A2438 outline icon, hover #F7AFCF.
- **Image:**
  - Centered bottle/IV mockup on neutral soft-pink lighting backdrop (#FCEAF3). Height ~180px.
- **Details Section (Below Image):**
  - Treatment Name: Bold, 14px, #4A2438
  - Rating Row: 5 Stars (#EAA844) + Count, Font Size: 11px, Color: #8E7B85
  - Price Row:
    - Current Price: ₱1,899 (Bold, 15px, #4A2438)
    - Original Price (Strikethrough): ₱2,399 (Regular, 12px, #B998A8, Line-through)
  - Book Button: Bottom right position, square-rounded button (32px x 32px), White background, Border: 1px solid #F3D8E6, Calendar icon, hover background #4A2438.

### Treatment List Items (Left to Right):
- **Card 1:**
  - Title: Vitamin C Glow Drip
  - Rating: ★★★★★ (128)
  - Price: ₱1,899 ₱2,399
- **Card 2:**
  - Title: Hydration Drip
  - Rating: ★★★★★ (96)
  - Price: ₱1,199 ₱1,599
- **Card 3:**
  - Title: Immunity Boost Drip
  - Rating: ★★★★★ (74)
  - Price: ₱1,499 ₱1,899
- **Card 4:**
  - Title: Recovery & Detox Drip
  - Rating: ★★★★★ (64)
  - Price: ₱1,799 ₱2,299

---

## 7. Footer

### Layout & Structure
- **Background:** #FEE4F5 (Soft Pink — blends with page, matching header), 1px #F3D8E6 top divider
- **Padding:** 60px 80px 32px 80px
- **Display:** Flexbox (space-between), top row: Brand column, Quick Links, Contact, Social.
- **Brand Column:** Drip Perfect (Serif, Bold, 24px, #4A2438) + leaf icon in #D96A97 + tagline: Quality IV drips & face/body treatments. Strong immunity inside, healthy & glowing skin outside. (Sans-serif, 13px, #76626C)
- **Quick Links:** Home, Services, About Us, Contact (Sans-serif, 13px, #76626C, hover #4A2438)
- **Contact:** 108 Dr. Sixto Antonio Ave., Brgy Rosario, Pasig City (2nd Flr Unit C, same building as Infinitea Rosario), Phone: 0967 173 0781 (tap-to-call), Email: dripperfect@gmail.com (mailto link) (Sans-serif, 13px, #76626C, icons in #D96A97)
- **Social Icons:** Facebook, Instagram, TikTok (20px, #76626C, hover #D96A97)
- **Bottom Bar:** Divider (1px, #F3D8E6), Copyright: © 2026 Drip Perfect Pasig. All rights reserved. (Sans-serif, 12px, #76626C)

---

## 8. Section: "How It Works" (added)

### Layout
- Background: #FEE4F5 (soft pink band between Services and About)
- Grid: 4 columns (sm:2, lg:4), gap 20px
- Header: "How It Works" (Serif, 32px, #4A2438) + subtitle (Sans, 14px, #76626C)

### Step Cards
- Background: #FFFFFF, Border: 1px #F3D8E6, Radius: 16px, Padding: 24px 24px 24px 24px (pt-10)
- Decorative step number: Serif, 36px, #F7AFCF, top-right
- Icon circle: 44px, Background #4A2438, White icon
- Steps:
  1. Book a Session (Calendar icon) — "Reserve your slot via call, Messenger, or WhatsApp — walk-ins welcome when slots allow."
  2. Doctor Consult (Chat icon) — "A quick consult to match the right drip or face & body treatment for your goals."
  3. Relax & Drip (Droplet icon) — "Recline comfortably while our licensed team administers your session, 30–60 minutes."
  4. Glow Inside & Out (Sparkle icon) — "Walk out feeling refreshed — immunity up, skin glowing, energy restored."

---

## 9. Section: "About Us" (added)

### Layout
- id="about" (nav target)
- Grid: 2 columns (image left, content right), gap 40px
- Image: clinic/wellness stock photo, rounded 16px

### Content
- Eyebrow: ABOUT US (Sans, Bold, 12px, uppercase, tracking 1.5px, #E27AA8)
- Headline: Strong Immunity Inside, *Glowing Skin* Outside (Serif, 32px, #4A2438, highlight #D96A97)
- Body: clinic story, Sans, 15px, #76626C
- Checklist (icon chips: 32px circle #FEE4F5 bg, #D96A97 icon):
  - Medical-grade drips & products
  - Licensed physicians, certified & trained
  - Personalized treatment plans
  - Clean, sterile & cozy clinic
- CTA: Visit Our Clinic → (Plum pill, 44px height)

---

## 10. Section: "Testimonials" (added)

### Layout
- White background, grid 3 columns (md:3, mobile 1), gap 24px
- Header: "What Our Patients Say" (Serif, 32px, #4A2438) + stars + "Rated 4.8/5 by 10,000+ happy patients"

### Review Cards
- Background: #FFF9FC, Border: 1px #F3D8E6, Radius: 16px, Padding: 24px
- Quote icon (28px, #F7AFCF), quote text (Sans, 14px, #4A2438)
- Footer: 5 gold stars (#EAA844, 13px), Name (Bold, 14px, #4A2438), Service (12px, #76626C)
- Content is placeholder — replace with real reviews.

---

## 11. Section: "FAQ" (added)

### Layout
- Background: #FEE4F5, max-width 768px centered, accordion via native <details>
- Header: "Frequently Asked Questions" (Serif, 32px, #4A2438)

### Accordion Items
- Background: #FFFFFF, Border: 1px #F3D8E6 (open: #F7AFCF), Radius: 12px, Padding: 16px 20px
- Question: Sans, Semibold, 14px, #4A2438
- Toggle: 24px circle (#FEE4F5 bg, #D96A97 plus icon, rotates 45° when open)
- Answer: Sans, 13px, #76626C
- 6 placeholder Q&As (safety, duration, walk-ins, prep, which drip, how to book) — replace with real answers.

---

## 12. Section: "Booking + Map" (added)

### Layout
- id="contact" (primary nav target — hero/banner "Book Now" scroll here)
- Card: rounded 20px, gradient #F9D7E9 → #FDEDF8, padding 48px, 2 columns (content | map)
- Content: eyebrow BOOK YOUR VISIT (#E27AA8), headline "Ready to *Glow*? Let's Get You Booked." (Serif, 28–32px, highlight #D96A97), body (#76626C), contact rows (address/phone/email with #D96A97 icons), CTA row: Call to Book (plum pill, phone icon) + WhatsApp (white pill, #25D366 icon) + Messenger (white pill, #0084FF icon)
- Map: Google Maps iframe embed (q=108 Dr. Sixto Antonio Ave., Brgy Rosario, Pasig City & output=embed), rounded 16px, min-height 320px

---

## 13. Floating Chat Buttons (added)

- Fixed bottom-right (right: 20px, bottom: 20px), column stack, gap 12px, z-50
- WhatsApp bubble: 48px circle, #25D366, white icon → https://wa.me/639671730781
- Messenger bubble: 48px circle, #0084FF, white icon → https://m.me/dripperfect (placeholder — confirm username)
- Hover: scale 1.1

---

## Page Section Order

Header → Hero → Services → How It Works → About Us → Popular Treatments → Promo Banner → Testimonials → FAQ → Booking + Map → Footer (+ floating chat buttons)
