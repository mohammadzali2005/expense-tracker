---
name: Fiscal Precision
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#45474c'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#75777d'
  outline-variant: '#c5c6cd'
  surface-tint: '#545f73'
  primary: '#091426'
  on-primary: '#ffffff'
  primary-container: '#1e293b'
  on-primary-container: '#8590a6'
  inverse-primary: '#bcc7de'
  secondary: '#006c49'
  on-secondary: '#ffffff'
  secondary-container: '#6cf8bb'
  on-secondary-container: '#00714d'
  tertiary: '#330009'
  on-tertiary: '#ffffff'
  tertiary-container: '#590016'
  on-tertiary-container: '#ff4e69'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d8e3fb'
  primary-fixed-dim: '#bcc7de'
  on-primary-fixed: '#111c2d'
  on-primary-fixed-variant: '#3c475a'
  secondary-fixed: '#6ffbbe'
  secondary-fixed-dim: '#4edea3'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005236'
  tertiary-fixed: '#ffdadb'
  tertiary-fixed-dim: '#ffb2b7'
  on-tertiary-fixed: '#40000d'
  on-tertiary-fixed-variant: '#92002a'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-sm:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  numeric-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  container-margin: 40px
  gutter: 24px
---

## Brand & Style

The design system is engineered for high-stakes financial environments where clarity, precision, and trust are paramount. It adopts a **Corporate Minimalist** aesthetic, prioritizing data density without sacrificing legibility. 

The target audience consists of professionals and individual investors who require immediate insights into fiscal health. The UI evokes a sense of calm authority through generous whitespace, a restricted color palette, and a rigorous adherence to a systematic grid. Every element serves a functional purpose, eliminating decorative flourish in favor of "quiet" utility.

## Colors

The color strategy centers on semantic clarity. **Deep Navy (#1E293B)** acts as the primary anchor for text, iconography, and structural elements, providing the highest contrast against the **Slate (#F8FAFC)** canvas.

**Emerald (#10B981)** is reserved exclusively for positive financial growth, income, and success states. Conversely, **Rose (#F43F5E)** is utilized for expenses, deficits, and critical errors. Neutral grays from the Slate family should be used for secondary information and borders to maintain a soft hierarchy.

## Typography

This design system utilizes **Inter** for its exceptional legibility and neutral, systematic tone. To ensure data is easily comparable, all numerical displays must use `tnum` (tabular figures) and `lnum` (lining figures) OpenType features.

- **Headlines:** Use Bold or SemiBold weights to create a strong vertical rhythm.
- **Body:** Standardize on 16px for primary reading experiences to reduce eye strain.
- **Labels:** Use uppercase with slight letter spacing (0.05em) for category headers and table columns.
- **Mobile:** Scale large display type down by approximately 15% to maintain balance on smaller viewports.

## Layout & Spacing

The layout follows a **Fixed-Fluid Hybrid Grid**. On desktop, content is contained within a 1440px max-width container using a 12-column grid. On mobile and tablet, the grid transitions to 4 and 8 columns respectively.

A strict 4px/8px baseline rhythm governs all vertical and horizontal spacing. 
- **Margins:** Standard page margins are set to 40px for desktop to provide a "premium" airy feel.
- **Gaps:** Use 24px (lg) spacing between major card components and 16px (md) for internal element grouping.
- **Alignment:** All data points in tables must be top-aligned; numerical values should be right-aligned for easy comparison.

## Elevation & Depth

Visual hierarchy is established through **Tonal Layers** supplemented by **Ambient Shadows**. 

1. **Base Layer:** The Slate (#F8FAFC) background provides a soft foundation.
2. **Surface Layer:** White (#FFFFFF) cards represent the primary workspace.
3. **Shadows:** Cards utilize a dual-shadow approach: a soft, highly diffused 15% opacity shadow (Blur 12px, Y 4px) tinted with the Primary Navy color to anchor the element without creating a "floating" effect.
4. **Interactive States:** On hover, elevation should subtly increase by shifting the shadow Y-offset and increasing blur, signaling interactivity without visual noise.

## Shapes

The design system employs a **Rounded** shape language to soften the industrial nature of financial data. 

- **Primary Components:** Buttons, input fields, and small cards use a 0.5rem (8px) radius.
- **Large Containers:** Dashboard widgets and main content blocks use a 1rem (16px) radius.
- **Status Indicators:** Chips and progress bars utilize the `rounded-full` (pill) style to distinguish them from structural layout elements.

## Components

- **Buttons:** Primary buttons use the Deep Navy background with White text. Secondary buttons use a Slate-100 background. Success/Danger actions must use Emerald and Rose respectively, but only for final destructive or affirmative actions.
- **Input Fields:** Use an 8px radius with a 1px border in Slate-200. On focus, the border transitions to Deep Navy with a 2px outer glow of 10% opacity.
- **Cards:** White backgrounds with 16px corner radius. Include a subtle border (1px Slate-100) to ensure definition on low-quality displays.
- **Data Tables:** Remove vertical borders. Use 1px Slate-50 horizontal dividers. Hover states on rows should use a Slate-50 background tint.
- **Chips/Badges:** Use low-saturation background tints of the semantic colors (e.g., Emerald-50 background with Emerald-700 text) for readability.
- **Progress Bars:** Thin 4px height with rounded-full caps. Use the semantic Emerald/Rose for track colors to indicate budget status at a glance.