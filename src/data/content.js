export const services = [
  {
    title: 'UI/UX Design',
    desc: 'Crafting intuitive, user-centered interfaces that balance beauty and usability.',
    icon: '🎨',
  },
  {
    title: 'Web Development',
    desc: 'Building fast, responsive and accessible websites with clean, scalable code.',
    icon: '💻',
  },
  {
    title: 'Branding',
    desc: 'Designing memorable visual identities that tell your story with clarity.',
    icon: '🏷️',
  },
  {
    title: 'Mobile App Design',
    desc: 'Designing delightful mobile experiences for iOS and Android products.',
    icon: '📱',
  },
]

export const processSteps = [
  {
    step: '01',
    title: 'Discovery',
    desc: "I'll start with a discovery call to understand your goals, audience, and overall direction.",
    icon: '🔍',
  },
  {
    step: '02',
    title: 'Wireframe',
    desc: "I'll whip up some wireframes to make sure we're all on the same page about where we're headed.",
    icon: '🧩',
  },
  {
    step: '03',
    title: 'Design',
    desc: "I'll check out the art direction and animation for the experience, making sure it fits well with your target.",
    icon: '✏️',
  },
  {
    step: '04',
    title: 'Deliver',
    desc: "Finally, I'll put together and send you the project assets and guidelines right on schedule.",
    icon: '✅',
  },
]

export const portfolioItems = [
  {
    slug: 'voltgear-ev-tracker',
    title: 'Voltgear EV Tracker',
    tag: 'UI/UX',
    client: 'Voltgear Inc.',
    year: '2024',
    duration: '6 weeks',
    services: ['UI/UX Design', 'Web Development'],
    img: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80',
    ],
    overview:
      'Voltgear needed a dashboard that made electric-motorcycle diagnostics feel as exciting as the ride itself. We designed a real-time tracker that surfaces battery health, range and ride analytics at a glance.',
    challenge:
      'Riders were relying on a cluttered manufacturer app that buried the numbers that mattered most behind three levels of navigation.',
    solution:
      'We rebuilt the information hierarchy around three live metrics, added a dark, high-contrast theme for outdoor visibility, and shipped a component library the internal team could keep extending.',
    result:
      'Support tickets related to "where do I find X" dropped by 64% in the first month post-launch, and average session time in the app nearly doubled.',
  },
  {
    slug: 'commerce-mobile-app',
    title: 'Commerce Mobile App',
    tag: 'Mobile',
    client: 'Loomi Studio',
    year: '2024',
    duration: '8 weeks',
    services: ['Mobile App Design', 'Branding'],
    img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80',
    ],
    overview:
      'A from-scratch mobile shopping experience for a fast-growing homeware brand, designed to make browsing feel editorial rather than transactional.',
    challenge:
      'The brand had strong photography but no cohesive mobile experience — checkout drop-off was over 70%.',
    solution:
      'We introduced a streamlined three-step checkout, a save-for-later wishlist, and a visual merchandising system that let the marketing team build shoppable stories without engineering help.',
    result:
      'Checkout completion improved by 31% and average order value rose 18% within the first quarter.',
  },
  {
    slug: 'studio-website-design',
    title: 'Studio Website Design',
    tag: 'Web Design',
    client: 'Fernway Studio',
    year: '2023',
    duration: '4 weeks',
    services: ['Web Development', 'UI/UX Design'],
    img: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80',
    ],
    overview:
      'A portfolio site for a small architecture studio that needed to feel as considered and quiet as the buildings it showcases.',
    challenge:
      'Previous site loaded slowly and treated every project the same, regardless of scale or ambition.',
    solution:
      'We built a lightweight Vite-based site with a flexible case-study template, letting the studio spotlight flagship projects with full-bleed imagery while keeping smaller projects lightweight.',
    result:
      'Page load time dropped from 4.2s to 0.9s and time-on-site increased by 45%.',
  },
  {
    slug: 'minimal-branding-animation',
    title: 'Minimal Branding & Animation',
    tag: 'Branding',
    client: 'Northwind Labs',
    year: '2023',
    duration: '5 weeks',
    services: ['Branding', 'Motion Design'],
    img: 'https://images.unsplash.com/photo-1494869042583-f6c911f04b4c?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1494869042583-f6c911f04b4c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1622737133809-d95047b9e673?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600508773949-3d6bf4a1f30f?auto=format&fit=crop&w=1200&q=80',
    ],
    overview:
      'A ground-up rebrand for a data infrastructure startup moving from a generic tech look to something distinct and ownable.',
    challenge:
      'The existing mark didn\'t scale down to a favicon or up to a conference banner without falling apart.',
    solution:
      'We designed a modular logomark built from a single repeating shape, paired with a restrained two-color palette and a short library of signature motion loops for product and marketing use.',
    result:
      'The new identity shipped across web, product and investor materials within three weeks of handoff.',
  },
  {
    slug: 'woodge-mobile-platform',
    title: 'Woodge Mobile Platform',
    tag: 'UI/UX',
    client: 'Woodge',
    year: '2022',
    duration: '10 weeks',
    services: ['UI/UX Design', 'Mobile App Design'],
    img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80',
    ],
    overview:
      'An end-to-end platform redesign for a field-services marketplace connecting independent contractors with homeowners.',
    challenge:
      'Two very different audiences — contractors and homeowners — were forced through the same generic flows.',
    solution:
      'We split the experience into two tailored apps sharing one design system, simplifying job posting for homeowners and job discovery for contractors.',
    result:
      'Contractor sign-ups grew 2.3x and average time-to-first-job dropped from 9 days to 3.',
  },
  {
    slug: 'motorcycle-landing-page',
    title: 'Motorcycle Landing Page',
    tag: 'Web Design',
    client: 'Ridgeback Moto',
    year: '2022',
    duration: '3 weeks',
    services: ['Web Development'],
    img: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=80',
    ],
    overview:
      'A high-impact single-page launch site for a limited-run motorcycle model, built to convert enthusiasts on pre-orders.',
    challenge:
      'The launch date was fixed and non-negotiable, leaving very little runway for design and build.',
    solution:
      'We used a bold full-bleed layout with scroll-triggered reveals to keep the page feeling cinematic despite the tight timeline, and pre-built modular sections for fast iteration.',
    result:
      'The page shipped two days ahead of schedule and the full pre-order allocation sold out in 48 hours.',
  },
]

export const testimonials = [
  {
    quote:
      "Thanks to the team's dedication, our new e-commerce experience feels effortless. Working with them felt like an extension of our own team.",
    name: 'Sarah Whitman',
    role: 'Founder, Loomi Studio',
  },
  {
    quote:
      'Andro brought clarity to a messy brief and delivered a product that our users genuinely love. Communication was fast and thoughtful throughout.',
    name: 'Marcus Ade',
    role: 'CEO, Northwind Labs',
  },
  {
    quote:
      'Reliable, detail-oriented and creative — exactly what we needed for our rebrand. The final assets exceeded what we imagined.',
    name: 'Priya Kapoor',
    role: 'Marketing Lead, Fernway',
  },
]

export const posts = [
  {
    slug: '14-common-design-misconceptions',
    date: 'Aug 14, 2024',
    author: 'Andro',
    readTime: '6 min read',
    title: '14 common design misconceptions',
    excerpt:
      'Security weaknesses are critical in a network security system. Fuzzing is a common and dangerous vulnerability...',
    img: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80',
    body: [
      "Good design gets misunderstood a lot, usually by people who've never had to defend a decision in front of a stakeholder deck. Here are the misconceptions I run into most often, and what I say back.",
      '"More options means more freedom." In practice, more options usually means more decision fatigue. Every extra choice you hand a user is a small tax on their attention — spend it carefully.',
      '"If it looks good, it works well." Aesthetics and usability are related but not the same skill. Some of the most beautiful interfaces I have audited were nearly unusable for anyone using a screen reader or a keyboard.',
      '"Design is a phase, not a practice." Treating design as a box to check before engineering starts is exactly how you end up rebuilding the onboarding flow three months after launch.',
      'The common thread: design misconceptions usually come from treating design as decoration instead of as a way of thinking about a problem. Fix the mental model and the rest follows.',
    ],
  },
  {
    slug: 'design-system-that-scales',
    date: 'Jul 02, 2024',
    author: 'Andro',
    readTime: '8 min read',
    title: 'How to build a design system that scales',
    excerpt:
      'A practical guide to building tokens, components and documentation that keep growing teams in sync.',
    img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80',
    body: [
      "A design system isn't a Figma file — it's an agreement between design and engineering about how a product should be built. Here's the order I build one in.",
      'Start with tokens, not components. Colors, spacing, radii and type scale should be defined and named before a single button gets drawn. This is the layer that keeps light mode, dark mode and future rebrands cheap.',
      'Build components around real screens, not a wishlist. Pull the ten most-used patterns from your actual product before inventing new ones nobody has asked for yet.',
      'Documentation is part of the deliverable. A component without usage guidance just becomes a second, slightly different component in six months.',
      'Finally, assign an owner. Design systems rot the moment nobody is responsible for saying no to one-off exceptions.',
    ],
  },
  {
    slug: 'motion-design-principles',
    date: 'Jun 18, 2024',
    author: 'Andro',
    readTime: '5 min read',
    title: 'Motion design principles every product team should know',
    excerpt:
      'Small, purposeful animations can make or break how users perceive the quality of your product.',
    img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
    body: [
      'Motion is feedback. Every animation should answer a question the user just asked, even if they did not ask it out loud: did that click register, where did this element come from, what changed?',
      'Keep durations short. Most UI transitions should land between 150–350ms — long enough to be perceived as intentional, short enough to never feel like a wait.',
      'Ease out, not linear. Motion that decelerates into its resting position reads as natural; linear motion reads as mechanical and cheap.',
      'Respect reduced motion settings. Purposeful does not mean mandatory — always provide a calmer fallback for users who need it.',
    ],
  },
]

export const faqs = [
  {
    q: 'What services do you provide?',
    a: 'I offer UI/UX design, web development, branding and mobile app design — from early discovery through to final handoff.',
  },
  {
    q: 'How long does a typical project take?',
    a: 'Most projects take 3–8 weeks depending on scope, from discovery and wireframes through to final delivery.',
  },
  {
    q: 'Do you work with startups?',
    a: "Absolutely — I love working with startups and helping shape a product's design language from the ground up.",
  },
  {
    q: 'What is your pricing like?',
    a: 'Pricing depends on project scope. Get in touch with a few details about your project and I will send a tailored quote.',
  },
]
