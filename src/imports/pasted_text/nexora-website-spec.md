# NEXORA SYSTEMS LIMITED

## Website Design + Frontend Framework Specification

You are designing and structurally building a polished temporary corporate website for **Nexora Systems Limited**, an emerging African technology group building a connected ecosystem of technology-driven ventures.

This is not a generic "AI technology company" landing page.

The website must communicate:

**Premium. Intelligent. Technical. Connected. Professional. Ambitious. Trustworthy. Restrained. African in context, global in execution.**

The attached reference website image is the primary visual reference for the overall visual language.

The attached animation-flow image is the reference for the ecosystem animation and interaction concept.

Do not copy the reference image pixel-for-pixel. Interpret its visual language and create an original website specifically for Nexora Systems Limited.

---

# 1. MOST IMPORTANT BRAND PRINCIPLE

Nexora Systems Limited is the **parent company / technology group**.

Four ventures operate beneath it:

1. **Nexora Systems**
   Technology & Digital Solutions

2. **Nexora SkillNet**
   Digital Skills & Talent

3. **Enyigo Logistics**
   Logistics & Fulfilment

4. **Nexora Marketplace**
   Digital Commerce

The hierarchy must always be visually and conceptually clear.

Do NOT present the four ventures as four unrelated companies.

Do NOT present them as equal-level entities to Nexora Systems Limited.

The parent company is the dominant corporate identity.

The website's central narrative is:

**One parent company. Four connected ventures. One ecosystem.**

---

# 2. WEBSITE SIZE / INFORMATION ARCHITECTURE

Build four primary pages:

1. Home
2. About Us
3. Services
4. Contact

Do not create separate pages for:

* Our Companies
* Innovation
* Careers
* Individual ventures

Those may be added in a future expansion when there is enough content to justify them.

The four ventures should be explained within the **About Us** page and introduced prominently on the **Home** page.

The website must be structured so additional pages can easily be added later without rebuilding the entire application.

---

# 3. TECHNOLOGY / PROJECT STRUCTURE

Build this as a production-ready, GitHub-pushable frontend.

Preferred stack:

* React
* TypeScript
* Vite
* Tailwind CSS
* component-based architecture
* responsive design
* semantic HTML
* accessible interactive elements

Use a clean reusable component architecture.

Suggested structure:

```text
src/
  assets/
    images/
    logos/
    animation/
    icons/

  components/
    layout/
      Navbar
      Footer
      PageTransition
    ui/
      Button
      SectionHeading
      Card
      Container
    home/
      Hero
      EcosystemIntro
      EcosystemAnimation
      EcosystemPrinciples
      HomeCTA
    about/
      AboutHero
      MissionVision
      CompanyStructure
      EcosystemStory
      Principles
      CEOSection
    services/
      ServicesHero
      CapabilityAreas
      SolutionBlock
      ProcessSection
      ServicesCTA
    contact/
      ContactHero
      ContactDetails
      ContactForm
      MapSection

  pages/
    Home
    About
    Services
    Contact

  data/
    ventures.ts
    services.ts
    site.ts

  hooks/
  utils/
  styles/
```

Keep content data-driven where practical.

For example, the four ventures should preferably come from a reusable data structure rather than four hardcoded unrelated components.

This will make future venture expansion easier.

---

# 4. GENERAL DESIGN LANGUAGE

Use the attached reference image as visual inspiration.

The design should feel like a serious technology group, not:

* a cryptocurrency website
* a gaming website
* a cyberpunk website
* an AI-generated landing page
* a generic IT agency
* a SaaS template
* a government website
* an e-commerce template

Prioritize:

* legibility
* hierarchy
* whitespace
* grid discipline
* restrained motion
* premium typography
* subtle technology cues
* sophisticated interface details

Do not over-design.

The visual quality should come from composition, typography, spacing, imagery and interaction rather than excessive effects.

---

# 5. COLOUR SYSTEM

Primary background:

`#07111F`

Use a near-black/deep navy base.

However, do not make the entire website blue.

The dominant interface should feel like:

**matte grey-blue + deep navy + restrained blue accents**

Primary Nexora blue:

`#1769FF`

Secondary electric cyan:

`#21D4FD`

Neutral:

`#FFFFFF`
`#F5F7FA`
`#E8ECF2`
`#1B2430`

Use cyan sparingly.

Do not cover the page in neon gradients.

Avoid excessive glow.

Avoid huge radial gradients.

Avoid floating glowing blobs.

Avoid "AI aesthetic" visual tricks.

The reference image has more glow and gradient than the final website should.

The final design should be more mature and restrained.

---

# 6. VENTURE ACCENT COLOURS

Use controlled accent colours to distinguish the four ventures.

Nexora Systems:
Blue

Nexora SkillNet:
Green

Enyigo Logistics:
Orange

Nexora Marketplace:
Purple

These colours should appear primarily in:

* venture cards
* small accent lines
* subtle interface highlights
* ecosystem animation
* venture-specific media

The parent Nexora identity must remain visually dominant.

Do not let the four colours turn the website into a rainbow dashboard.

---

# 7. TYPOGRAPHY

Use one primary modern sans-serif family.

Preferred:

**Inter**

Alternative:

**Manrope**

Use large, strong, clean headings.

Body copy should be:

* readable
* moderate width
* comfortable line height
* short paragraphs
* medium/regular weight

Do not use decorative fonts.

Do not use excessive font weights.

Do not animate large blocks of text unnecessarily.

---

# 8. NAVIGATION

Desktop navigation:

Logo on left.

Navigation:

Home
About Us
Services
Contact

Primary CTA on right:

**Partner With Us →**

The CTA should navigate to Contact.

Active page should have a subtle blue/cyan indicator.

Navigation should be clean and minimal.

Use a transparent or semi-transparent dark treatment initially, transitioning subtly into a darker/navy surface when appropriate.

Mobile:

Logo

Menu button

Full-screen or clean slide-down navigation.

The mobile menu must remain simple and accessible.

---

# 9. GLOBAL UI STYLE

Use:

* generous spacing
* strong grid
* subtle borders
* controlled corner radius
* matte surfaces
* restrained shadows
* high contrast
* premium cards
* subtle hover states

Cards may use translucent surfaces where appropriate, especially in the ecosystem animation.

Avoid excessive rounded rectangles.

Avoid meaningless glassmorphism.

Avoid excessive blur.

Avoid excessive shadows.

Avoid visual clutter.

---

# 10. HOME PAGE

The homepage should answer:

**Who is Nexora?**

**What is Nexora building?**

**How does the ecosystem connect?**

The homepage should NOT attempt to explain everything.

---

## HOME — SECTION 01: HERO

Desktop layout:

Two-column composition.

Left:

Small eyebrow/kicker.

Large headline.

Short supporting paragraph.

Primary CTA.

Right:

Large connected-world / digital-network visual inspired by the supplied reference image.

The visual can contain:

* connected nodes
* digital pathways
* subtle geographic/world imagery
* Nexora logo
* subtle illumination
* abstract infrastructure

Do not copy the exact globe image.

Create an original visual treatment.

The hero should feel premium and technical without becoming cyberpunk.

### Hero requirements

Strong headline.

Short supporting statement.

Primary CTA:

**Discover Our Ecosystem →**

Secondary CTA may be:

**Partner With Us →**

The primary CTA should scroll to the ecosystem section.

Do not include the statistics bar from the reference image.

Do not include:

20+ Countries
500+ Clients
1000+ Projects

or any other unsupported statistics.

Do not invent statistics.

Do not claim global operations or achievements that have not been verified.

---

# 11. HOME — SECTION 02: WHAT NEXORA DOES

Introduce the parent company.

Heading concept:

**Building connected technology-driven businesses.**

Explain Nexora Systems Limited at a high level.

Keep the copy concise.

Then introduce four areas:

**Technology**

Digital solutions, software, systems and technology infrastructure.

**Commerce**

Digital marketplaces and digital commerce.

**Logistics**

Technology-enabled movement, delivery and fulfilment.

**Skills**

Digital learning, professional development and talent development.

This is a conceptual overview, not a service catalogue.

Use a clean four-part grid.

Avoid making this section visually heavier than the ecosystem animation.

---

# 12. HOME — SECTION 03: SIGNATURE ECOSYSTEM ANIMATION

This is the most important interactive section after the hero.

Use the attached animation-flow reference image.

The animation must communicate:

**One parent company → four ventures → connected ecosystem**

The section should begin with:

**Imagine a business...**

Then introduce the parent company:

**NEXORA SYSTEMS LIMITED**

Parent Company / Technology Group

Then visually branch downward to the four ventures:

Nexora Systems
Nexora SkillNet
Enyigo Logistics
Nexora Marketplace

---

# 13. ECOSYSTEM ANIMATION — INITIAL STATE

At the beginning of the section:

Display the parent company as the top-level card.

Below it, display the four venture cards in an initial grouped arrangement.

The parent card should be visually dominant.

Use branching connection lines/arrows.

The animation should visually establish:

```text
NEXORA SYSTEMS LIMITED
Parent Company / Technology Group
             |
     -------------------
     |   |   |   |
     N   NS  E   M
```

Do not make the diagram look like a traditional corporate org chart.

It should feel like a living connected technology ecosystem.

---

# 14. ECOSYSTEM ANIMATION — STACK TRANSITION

When the user scrolls into the animation section:

The four venture cards should smoothly separate and rearrange themselves into a vertical stack on the left side.

The cards should feel like physical layers moving into place.

The currently focused card becomes larger.

The focused card partially overlaps the card beneath/above it.

The remaining cards remain visible behind it.

The cards should have approximately 60% opacity or another visually appropriate semi-transparent treatment so that the animation/media behind them remains visible.

Do not make the cards completely opaque.

---

# 15. DESKTOP ECOSYSTEM LAYOUT

Only use the two-column experience when there is enough screen width to comfortably support it.

Left:

Stacked venture cards.

Right:

Large animated media frame.

Do NOT put a large paragraph of explanatory text on the right.

The right side is primarily visual.

The explanatory phrase belongs inside the focused card.

This is an important design decision.

---

# 16. FOCUSED VENTURE CARD

When a venture becomes the focus, the card expands.

The card should contain:

### First:

A contextual sentence.

Example:

**Manages its operations through**

Then:

[VENTURE LOGO]

**Nexora Systems**

Technology & Digital Solutions

The contextual sentence should appear above the logo/name within the focused card.

The card should become visually dominant while remaining connected to the other cards.

---

# 17. VENTURE FOCUS STATES

Use these ecosystem relationships:

### Nexora Systems

**Manages its operations through**

Nexora Systems

Technology & Digital Solutions

### Nexora SkillNet

**Develops its people through**

Nexora SkillNet

Digital Skills & Talent

### Nexora Marketplace

**Reaches customers through**

Nexora Marketplace

Digital Commerce

### Enyigo Logistics

**Moves products through**

Enyigo Logistics

Logistics & Fulfilment

These phrases are part of the storytelling system.

Do not turn them into long descriptions.

---

# 18. ECOSYSTEM ANIMATION — MEDIA FRAME

Create a large media placeholder on the right.

Label it clearly in the development/design layer:

`ECOSYSTEM ANIMATION PLACEHOLDER`

Do not leave it looking like a broken image.

Use a deliberate placeholder treatment that communicates where the final animation belongs.

The final animation will be a single continuous 2D vector-style motion sequence.

Preferred style:

* flat vector illustration
* premium corporate motion graphics
* subtle depth
* matte grey-blue base
* Nexora blue
* controlled venture accent colours
* connected systems
* business activity
* digital infrastructure
* people/business context
* clean geometric shapes

Avoid:

* cyberpunk
* excessive particles
* cartoonish illustration
* childish motion
* 3D gaming aesthetics
* excessive neon

---

# 19. ANIMATION STORYBOARD

The final animation should visually support this story:

**Imagine a business...**

1. It manages its operations through Nexora Systems.
2. It develops its people through Nexora SkillNet.
3. It reaches customers through Nexora Marketplace.
4. It moves products through Enyigo Logistics.

Then the ecosystem resolves.

Closing text:

**That's the system.**

The animation should not simply show four logos.

It should visually communicate the business journey.

Possible visual concepts:

Nexora Systems:
business operations, software interface, systems, digital workflow.

SkillNet:
learning, people, skills, training, professional development.

Marketplace:
merchant/product/customer connection, digital commerce.

Enyigo:
goods, movement, delivery, logistics network.

The animation should feel like one continuous story rather than four unrelated clips.

---

# 20. ANIMATION ASSET SPECIFICATION

Design the site to support ONE continuous animation asset rather than four separate videos.

Preferred production format:

**WebM or MP4**

Fallback:

**GIF**

Fallback fallback:

**Static poster image**

Recommended target:

16:9

Working resolution:

1920 × 1080

Minimum acceptable:

1280 × 720

Frame rate:

30 FPS

Target duration:

Approximately 8–15 seconds for the complete visual loop/story.

Keep file size aggressively optimized.

Do not make the website dependent on an enormous uncompressed animation.

The animation should loop smoothly where possible.

The implementation should support:

```text
desktop animation
mobile animation/fallback
poster image
reduced-motion fallback
loading state
```

If Figma cannot implement the real animation, create the complete layout, media container, states and placeholder system so the actual animation can be inserted later without redesigning the section.

---

# 21. ECOSYSTEM SCROLL BEHAVIOUR

The animation should be scroll-driven or scroll-synchronised where practical.

Desired sequence:

1. Section enters viewport.
2. "Imagine a business..." appears.
3. Parent company establishes hierarchy.
4. Four venture cards appear.
5. Cards rearrange into vertical stack.
6. First venture becomes dominant.
7. Media visual changes/supports first venture.
8. Continued scrolling transitions focus to second venture.
9. Second becomes dominant.
10. Third becomes dominant.
11. Fourth becomes dominant.
12. Closing statement appears:
    **That's the system.**
13. Ecosystem section exits.
14. Normal page scrolling resumes.

Do not make the animation trap the user indefinitely.

Do not require an excessive scroll distance.

Do not use pinned/sticky behaviour if it makes navigation or reading uncomfortable.

The interaction must remain usable with normal scrolling.

---

# 22. MOBILE ECOSYSTEM BEHAVIOUR

On mobile or any viewport where a comfortable two-column layout is not possible:

Do NOT force:

left cards + right media.

Instead:

The media animation becomes centered and sits behind/within the card stack.

The cards remain semi-transparent.

The visual can still be seen through/around the cards.

The focused card remains the primary readable element.

Use a simplified scroll sequence.

Avoid excessive pinned viewport behaviour.

The animation can become a normal sequential vertical storytelling component.

If necessary, reduce animation complexity on mobile.

The content must remain understandable even if animation is disabled.

---

# 23. HOME — SECTION 04: ECOSYSTEM PRINCIPLE

After the animation, explain the idea more plainly.

Use the conceptual progression:

**Operate better.**

**Develop better.**

**Reach customers better.**

**Deliver better.**

**Grow.**

The section should explain that Nexora is developing complementary businesses that work together rather than isolated platforms.

Keep this concise.

---

# 24. HOME — SECTION 05: FOUR AREAS

Present:

Technology
Commerce
Logistics
Skills

Use restrained visual cards or blocks.

Each should have:

* name
* one-line description
* associated venture
* subtle visual treatment

Do not create detailed product catalogues.

Do not invent specific products.

---

# 25. HOME — FINAL CTA

Create a strong but restrained closing section.

Concept:

**Build with Nexora.**

Short supporting text.

CTA:

**Partner With Us →**

Then footer.

---

# 26. ABOUT US PAGE

Purpose:

Explain the company behind the ecosystem.

This page should provide more context than the homepage.

---

## ABOUT — HERO

Large heading.

Short introduction to:

Nexora Systems Limited

Parent Company / Technology Group

Explain that the company is developing a portfolio of technology-driven ventures designed to address practical problems across technology, commerce, logistics and digital skills.

Keep the language ambitious but honest.

---

# 27. ABOUT — MISSION + VISION

Create a sophisticated two-column or stacked section.

**Vision**

Use the approved company vision content.

**Mission**

Use the approved company mission content.

Do not overanimate this section.

Typography and spacing should carry it.

---

# 28. ABOUT — OUR ECOSYSTEM

This is where the four ventures are formally introduced.

Display the parent company first.

Then the four ventures beneath it.

Use the same visual language as the homepage ecosystem animation, but this page does NOT need the full complex scroll animation.

A clean structural diagram is preferred.

Hierarchy:

NEXORA SYSTEMS LIMITED

Parent Company / Technology Group

↓

Nexora Systems
Technology & Digital Solutions

Nexora SkillNet
Digital Skills & Talent

Enyigo Logistics
Logistics & Fulfilment

Nexora Marketplace
Digital Commerce

---

# 29. ABOUT — HOW THE ECOSYSTEM CONNECTS

Explain:

A business manages operations through Nexora Systems.

It develops its people through Nexora SkillNet.

It reaches customers through Nexora Marketplace.

It moves products through Enyigo Logistics.

The ecosystem supports growth through complementary capabilities.

Use a visual flow.

Do not turn this into a long essay.

---

# 30. ABOUT — PRINCIPLES

Create a concise principles section.

Possible principles:

Practical

Scalable

Accessible

Connected

Technology-driven

Human-centred

Use clean typography and restrained cards/blocks.

---

# 31. ABOUT — CEO PLACEHOLDER

Create an intentionally structured placeholder for:

**About the CEO**

Include:

* portrait placeholder
* name placeholder
* biography placeholder
* title placeholder

Clearly label development placeholders.

Example internal placeholder:

`CEO PHOTO — TO BE PROVIDED`

`APPROVED CEO BIOGRAPHY — TO BE PROVIDED`

Do NOT invent the biography.

Do NOT generate a fake photograph.

The section must be easy to remove entirely if the client chooses not to include it.

---

# 32. ABOUT — CTA

Close with:

**Partner With Nexora**

CTA:

**Get in Touch →**

---

# 33. SERVICES PAGE

This page should be called:

**Services**

But it should behave conceptually as:

**Solutions & Capabilities**

Do not create a huge catalogue.

The source information is intentionally broad.

Keep services abstract and high-level.

---

# 34. SERVICES — HERO

Headline.

Short description explaining that Nexora is building technology-driven capabilities across:

Technology
Commerce
Logistics
Skills

CTA:

**Discuss a Partnership →**

---

# 35. SERVICES — FOUR CORE AREAS

Create four major capability sections.

### Technology

Digital solutions
Business technology
Software solutions
Business management technology
Digital transformation

### Commerce

Digital marketplace services
Merchant enablement
Digital commerce
Product discovery
Business-to-consumer commerce

### Logistics

Logistics
Delivery
Fulfilment
Business logistics support
Technology-enabled movement of goods

### Skills

Digital skills development
Professional learning
Business skills
Digital literacy
Talent development

Do not invent specific products, packages, prices or service guarantees.

The site should communicate what Nexora is building rather than pretending every listed capability is already a fully launched commercial product.

---

# 36. SERVICES — BENEFITS / OUTCOMES

Create a restrained section explaining outcomes conceptually.

Examples:

Operate better.

Connect better.

Sell better.

Deliver better.

Learn better.

Grow.

Avoid fake statistics.

Avoid fake case studies.

Avoid fake testimonials.

---

# 37. SERVICES — PROCESS

Create a simple process:

**Understand**

**Design**

**Build**

**Connect**

**Grow**

Use subtle numbered progression.

This is a communication device, not a claim that Nexora follows a certified methodology.

---

# 38. SERVICES — CTA

Closing CTA:

**Have a business challenge worth solving?**

**Partner With Us →**

---

# 39. CONTACT PAGE

Keep this page straightforward and trustworthy.

---

## CONTACT — HERO

Headline:

**Let's Build Something Useful.**

Short supporting text.

---

# 40. CONTACT — INFORMATION

Use the supplied corporate details:

Nexora Systems Limited

Parent Company / Technology Group

176 Azikiwe Road
Aba, Abia State
Nigeria

Email:

[info@nexorasys.ng](mailto:info@nexorasys.ng)

Phone:

+234 803 7960 751

Do not invent social media accounts.

Use placeholders for social links if official accounts have not been supplied.

---

# 41. CONTACT — FORM

Build a fully structured contact form.

Fields:

* Full Name
* Company / Organisation
* Email Address
* Phone Number
* Subject / Reason for Contact
* Message

CTA:

**Send Message**

Include:

* client-side validation
* required fields
* email validation
* loading state
* success state
* error state
* disabled submit state
* accessible labels
* keyboard navigation
* clear error messages
* spam protection placeholder
* honeypot field

IMPORTANT:

The frontend must NOT contain private API keys.

Do not place email service API keys directly into React code.

Create a clearly labelled integration point for the eventual backend/webhook.

Example:

```text
CONTACT_FORM_ENDPOINT_PLACEHOLDER
```

Use environment variables for any eventual public configuration.

---

# 42. CONTACT FORM AUTOMATION ARCHITECTURE

Build the frontend so it is ready for:

Frontend contact form
↓
Secure serverless endpoint / webhook
↓
Automation service
↓
Corporate inbox
↓
Automatic acknowledgement to sender
↓
Optional lead logging

The first practical implementation can use a Make.com custom webhook.

The Make scenario should eventually:

1. Receive the form submission.
2. Validate the submitted fields.
3. Send an internal notification email to the official corporate inbox.
4. Include the sender's name, company, email, phone, subject and message.
5. Send an acknowledgement email to the person who submitted the form.
6. Optionally log the enquiry in a spreadsheet/database.
7. Return a success response to the website.

The frontend must be prepared for this architecture without requiring the API integration to be completed inside Figma.

Create a clearly documented TODO:

`TODO: CONNECT CONTACT FORM TO MAKE WEBHOOK`

Do not hardcode credentials.

---

# 43. CONTACT FORM SUCCESS STATE

After successful submission:

Display something like:

**Message received.**

Thank the visitor and explain that their enquiry has been received.

Do not redirect them to a random page.

Allow them to continue browsing.

---

# 44. CONTACT FORM ERROR STATE

If submission fails:

Display a human-readable error.

Do not expose API errors, stack traces or technical information.

Example:

**Something went wrong while sending your message. Please try again or contact us directly at [info@nexorasys.ng](mailto:info@nexorasys.ng).**

---

# 45. MAP

Create a responsive map section.

Desktop:

Contact information + form + map in a balanced grid.

Mobile:

Contact information
Form
Map

Use the supplied address.

If a live map integration cannot be completed in Figma, create a labelled map placeholder:

`MAP INTEGRATION — CONNECT AFTER EXPORT`

Prefer an implementation that does not require unnecessary API complexity.

---

# 46. FOOTER

Footer should contain:

Nexora Systems Limited

Parent Company / Technology Group

Navigation:

Home
About Us
Services
Contact

Utility:

Privacy Policy
Terms of Use

Contact:

[info@nexorasys.ng](mailto:info@nexorasys.ng)
+234 803 7960 751
176 Azikiwe Road, Aba, Abia State, Nigeria

Social links:

Use placeholders until official accounts are supplied.

Copyright:

© 2026 Nexora Systems Limited. All rights reserved.

---

# 47. LEGAL PAGE PLACEHOLDERS

Create the routing/structure for:

`/privacy`

`/terms`

They do not need final legal content.

Use clearly labelled placeholder content:

`LEGAL CONTENT TO BE PROVIDED BY CLIENT`

Do not generate legal advice or pretend the placeholder is an approved policy.

The pages should visually match the website.

---

# 48. IMAGE SYSTEM

Create a central asset system.

Use clear placeholder filenames.

Examples:

```text
/assets/images/hero-world-placeholder.webp
/assets/images/hero-world-mobile-placeholder.webp
/assets/images/ceo-placeholder.webp
/assets/images/about-company-placeholder.webp
/assets/images/contact-map-placeholder.webp
```

For venture media:

```text
/assets/animation/ecosystem-animation-placeholder.webm
/assets/animation/ecosystem-animation-placeholder.mp4
/assets/animation/ecosystem-animation-placeholder.gif
/assets/animation/ecosystem-poster.webp
```

Do not bury image URLs randomly throughout components.

Keep assets centralized.

Every placeholder must be clearly identifiable so it can be replaced later.

---

# 49. LOGO SYSTEM

Create reusable logo components for:

Nexora Systems Limited

Nexora Systems

Nexora SkillNet

Enyigo Logistics

Nexora Marketplace

Use SVG assets where available.

Do not distort logos.

Do not rotate them.

Do not stretch them.

Do not apply unnecessary effects.

Preserve their proportions.

Create dark-background and light-background variants only if needed.

---

# 50. IMAGE PLACEHOLDERS

Where final imagery is not available, create visually appropriate placeholders that match the final design.

Do NOT use random stock photos simply to fill empty space.

Do NOT use generic AI-generated people unless specifically approved.

Prefer abstract/technology visual placeholders where real photography is unavailable.

Every placeholder should be obvious in development.

---

# 51. MOTION SYSTEM

Use motion sparingly.

Global motion:

* subtle page transitions
* fade/slide entrance
* hover states
* navigation transitions

Section motion:

* scroll reveal
* subtle parallax
* network movement

Signature motion:

* ecosystem animation

Do not animate every element.

Do not use:

* flashing
* bouncing
* excessive spinning
* particle storms
* constant floating objects
* giant animated words
* aggressive parallax
* excessive blur
* slow transitions

Animation should improve understanding, not prove that JavaScript exists.

---

# 52. ACCESSIBILITY

Implement:

* semantic HTML
* keyboard navigation
* visible focus states
* proper labels
* alt text placeholders
* sufficient colour contrast
* reduced-motion support
* accessible mobile navigation
* accessible form errors
* logical heading hierarchy

If the user enables reduced motion:

Disable or simplify the ecosystem scroll animation.

The website must remain understandable without motion.

---

# 53. PERFORMANCE

This is a major priority.

The homepage should load quickly.

Do not sacrifice performance for visual effects.

Use:

* lazy-loaded images
* compressed images
* modern image formats
* responsive images
* lazy-loaded animation/media where appropriate
* minimal JavaScript
* code splitting where appropriate
* no unnecessary libraries
* no giant dependencies for tiny effects

The hero should load before secondary media.

The ecosystem animation should not block initial page rendering.

Do not preload huge animation assets unnecessarily.

---

# 54. RESPONSIVE DESIGN

Design for:

* large desktop
* desktop
* tablet
* mobile

Do not simply shrink the desktop layout.

Recompose sections where necessary.

The ecosystem animation is especially important:

Large desktop:
two-column experience.

Smaller desktop/tablet:
only retain two columns if readable.

Mobile:
single-column experience with animation behind/around the focused card.

---

# 55. PLACEHOLDER / TODO SYSTEM

Whenever Figma cannot actually complete something, DO NOT fake completion.

Instead create:

1. The correct visual structure.
2. A functional placeholder.
3. A clearly labelled TODO.
4. A clean integration point in the code.

Examples:

`TODO: INSERT APPROVED CEO PHOTO`

`TODO: INSERT APPROVED CEO BIO`

`TODO: REPLACE HERO WORLD VISUAL`

`TODO: INSERT FINAL ECOSYSTEM ANIMATION`

`TODO: CONNECT CONTACT FORM`

`TODO: CONFIGURE EMAIL AUTOMATION`

`TODO: ADD OFFICIAL SOCIAL LINKS`

`TODO: ADD CLIENT-APPROVED PRIVACY POLICY`

`TODO: ADD CLIENT-APPROVED TERMS`

`TODO: CONFIGURE MAP`

Do not silently fabricate missing information.

---

# 56. GITHUB READINESS

The project must be exportable/pushable to GitHub.

Include:

* package.json
* source files
* public/assets
* proper build configuration
* README
* environment variable example
* deployment instructions
* GitHub Actions workflow if appropriate

Create:

`.env.example`

Do NOT include real secrets.

Example:

```text
VITE_CONTACT_FORM_ENDPOINT=
VITE_MAP_CONFIG=
```

Only expose genuinely public frontend configuration through Vite environment variables.

Private API keys must never be stored in frontend environment variables that are bundled into the client.

If a secret is required, create a server-side/serverless integration point instead.

---

# 57. GITHUB PAGES COMPATIBILITY

Structure the project so it can be deployed as a static frontend.

Prefer a GitHub Actions deployment workflow.

The site should build successfully using:

```text
npm install
npm run build
```

and produce the expected deployment output.

Ensure client-side routing does not break on direct navigation.

If necessary, use a routing strategy compatible with static hosting.

Do not create unnecessary backend infrastructure for the frontend itself.

---

# 58. CUSTOM DOMAIN READINESS

Do not hardcode the temporary GitHub Pages URL throughout the application.

Use relative asset paths.

Keep the project compatible with a future custom domain.

Create a clearly documented deployment section in the README.

If a custom domain is later connected, it should not require redesigning the application.

---

# 59. SEO FOUNDATION

Implement basic SEO:

* unique title per page
* meta description
* Open Graph metadata
* favicon
* semantic headings
* descriptive image alt text
* canonical URL placeholder
* robots.txt
* sitemap placeholder if appropriate

Use:

**Nexora Systems Limited**

as the primary corporate identity.

Do not use unsupported claims in metadata.

---

# 60. CONTENT RULES

The website should communicate ambition without exaggeration.

Use language such as:

* building
* developing
* creating
* enabling
* designed to
* our ecosystem
* our solutions
* coming soon
* launching soon

where appropriate.

Do not invent:

* clients
* statistics
* awards
* partnerships
* certifications
* countries served
* revenue
* team members
* customer testimonials
* market leadership claims

Do not turn planned services into fake operational products.

Keep the content concise.

---

# 61. IMPORTANT DESIGN RESTRICTIONS

DO NOT:

* copy the reference image exactly
* use excessive gradients
* create neon cyberpunk visuals
* create crypto aesthetics
* use excessive glassmorphism
* use floating blobs
* use giant glowing circles everywhere
* use excessive 3D
* overcrowd pages
* use excessive stock photography
* use fake statistics
* use fake testimonials
* invent team members
* invent partnerships
* use unverified certifications
* create unsupported claims
* make the company look larger than it currently is
* use generic African stereotypes

The site should look like a world-class technology group originating from Africa, not a website trying desperately to prove that it is African.

---

# 62. FINAL QUALITY TEST

Before considering the design complete, check:

Does a visitor understand Nexora's identity within 3–5 seconds?

Can they tell Nexora Systems Limited is the parent company?

Can they understand that there are four ventures?

Can they understand why the four ventures are connected?

Does the ecosystem animation communicate something meaningful?

Does the site still work if the animation is removed?

Does the mobile experience remain usable?

Does the website feel premium without excessive effects?

Does every page have a clear purpose?

Are all missing assets clearly marked?

Are all future integrations clearly marked?

Can the project be exported and pushed to GitHub?

Can the contact form later be connected without rebuilding the UI?

Are there any unsupported claims?

Are there any fake placeholders presented as real information?

Does the design remain visually strong without the reference image's unsupported statistics?

If any answer is no, fix the structure before adding decorative details.

---

# 63. WHAT FIGMA SHOULD BUILD NOW

Build the complete visual and frontend framework for:

* all four pages
* navigation
* footer
* responsive layouts
* reusable components
* typography system
* colour system
* venture cards
* ecosystem structure
* ecosystem animation container
* animation states
* animation placeholders
* hero visual placeholder
* CEO placeholder
* contact form UI
* contact form states
* map placeholder
* legal page placeholders
* responsive mobile behavior
* accessibility states
* reduced-motion behavior
* GitHub-ready project structure
* environment-variable placeholders
* README/deployment notes
* clear TODO markers for incomplete integrations

Where Figma cannot actually perform the final technical integration, build everything around it so that I can implement it after exporting the project.

Do not stop at a static visual mockup.

Create a coherent, reusable frontend structure that can become the actual production website.

The result should be visually polished enough for the client's first revision while remaining technically clean enough for continued development.

The priority order is:

**1. Structure**

**2. Hierarchy**

**3. Usability**

**4. Responsive behavior**

**5. Visual quality**

**6. Animation**

**7. Decorative effects**

Never sacrifice the first five for the last two.
