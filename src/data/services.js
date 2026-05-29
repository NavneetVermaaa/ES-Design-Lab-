export const servicePages = {
  '/branding': {
    key: 'branding',
    label: 'Branding',
    route: '/branding',
    heroBg: '#9270f4',
    heroText: ['Brands Built', 'with Intention'],
    heroAccentLines: [0],
    heroTextClass: 'text-yellow',
    heroSecondaryClass: 'text-bone',
    shapeClass: 'bg-[#7654d5]/45',
    circleClass: 'bg-[#a682ff]/45',
    intro: {
      eyebrow: 'At ES Design Lab',
      eyebrowClass: 'text-yellow',
      lead: "branding isn't about looking different it's about being understood.",
      paragraphs: [
        'We help founders and growing businesses define what they stand for, communicate it clearly, and show up consistently across every touchpoint.',
        'Because when people get your brand, they trust it. And when they trust it, they choose it and talk about it.',
      ],
      quote:
        'We design brands that feel human, intentional, and grounded in clarity not trends, noise, or guesswork.',
    },
    videoTone: 'leaves',
    cards: [
      {
        title: 'Exploration',
        body: 'Every strong brand starts with understanding. We explore your audience, positioning, and visual direction to build a foundation rooted in clarity.',
        meta: 'Brand direction · Positioning · Moodboards · Inspiration',
        fill: 'violet',
      },
      {
        title: 'Creation',
        body: 'This is where strategy becomes visual. We design identities that feel clear, distinctive, and built to last not just look good.',
        meta: 'Logo system · Visual direction · Colour palette · Brand assets',
      },
      {
        title: 'Roll-out',
        body: "A brand only works when it's used properly. We apply your identity across essential touchpoints, so your brand feels familiar, professional, and aligned online and offline.",
        meta: 'Social templates · Stationery · Marketing assets · Website visuals · Campaign creatives',
      },
      {
        title: 'Building',
        body: 'We create systems that help your brand stay strong as you grow. Clear guidelines mean fewer mistakes, faster execution, and better brand recognition.',
        meta: 'Brand guidelines · Templates · Internal handover documents · Asset libraries',
        fill: 'yellow',
      },
    ],
    contactBg: '#9270f4',
    contactText: 'text-yellow',
    contactButton: 'bg-yellow',
    formText: 'text-bone',
  },
  '/visual-design': {
    key: 'visual-design',
    label: 'Visual Design',
    route: '/visual-design',
    heroBg: '#eaff35',
    heroText: ['Design That Makes', 'People Pause and', 'Feel Something.'],
    heroAccentLines: [0, 1, 2],
    heroTextClass: 'text-violet',
    heroSecondaryClass: 'text-violet',
    shapeClass: 'bg-[#d7f128]/60',
    circleClass: 'bg-[#f2ff59]/60',
    intro: {
      eyebrow: 'At ES Design Lab',
      eyebrowClass: 'text-bone',
      lead: "visual design isn't about getting approval. It's about getting a reaction.",
      paragraphs: [
        'We design visuals that guide the eye, simplify the message, and make the experience feel effortless.',
      ],
      quote:
        'Every design decision is driven by one question: What should the viewer understand, feel, or do next?',
      closing: 'No vanity. No decoration. Just clear, intentional design built from the audience’s point of view.',
    },
    videoTone: 'forest',
    cards: [
      {
        title: 'Brochures & Reports',
        body: "Design that's structured, readable, and engaging turning information into understanding.",
        fill: 'yellow-violet',
      },
      {
        title: 'Marketing Materials',
        body: 'Visuals that stand out and communicate built to attract attention and drive action.',
      },
      {
        title: 'Retail & Packaging',
        body: 'Design that signals quality, builds desire, and creates an emotional connection at first glance.',
      },
      {
        title: 'Exhibitions & Point of Sale',
        body: 'High-impact visuals that consider the full journey from first look to final decision.',
        fill: 'violet',
      },
    ],
    contactBg: '#eaff35',
    contactText: 'text-violet',
    contactButton: 'bg-violet',
    formText: 'text-ink',
  },
  '/video-editing': {
    key: 'video-editing',
    label: 'Video Editing',
    route: '/video-editing',
    heroBg: '#f04a2a',
    heroText: ['Editing That Turns', 'Moments into Meaning.'],
    heroAccentLines: [0, 1],
    heroTextClass: 'text-yellow',
    heroSecondaryClass: 'text-yellow',
    shapeClass: 'bg-[#cf351f]/45',
    circleClass: 'bg-[#ff653f]/45',
    intro: {
      quoteFirst: 'Video isn’t about effects. It’s about timing, emotion, and flow.',
      paragraphs: [
        'At ES Design Lab, we edit videos to feel natural, intentional, and human so the message lands without feeling forced. Whether it’s short-form content or brand storytelling, we focus on how it feels to watch.',
        'Because when a video feels right, people stay.',
      ],
      afterVideo: 'We treat video like a conversation, not a performance.',
    },
    videoTone: 'forest',
    cards: [
      {
        title: 'Pacing',
        body: 'Pacing that holds attention. We craft the rhythm of your video to keep viewers engaged from start to finish.',
        fill: 'yellow-orange',
      },
      {
        title: 'Storytelling',
        body: 'Storytelling that feels effortless. Your message connects naturally with the audience without feeling forced.',
      },
      {
        title: 'Clarity',
        body: 'Clarity that keeps viewers engaged. We remove the unnecessary and highlight what matters most.',
      },
      {
        title: 'Breath',
        body: 'We let the story breathe. Giving moments space to resonate without overwhelming the viewer.',
        fill: 'orange',
      },
    ],
    bestForTitle: 'Where Video Works Best',
    bestFor: [
      'Personal brand & creator content',
      'Social media short-form videos',
      'Brand stories & explainers',
      'Promotional and campaign edits',
    ],
    contactBg: '#f04a2a',
    contactText: 'text-yellow',
    contactButton: 'bg-yellow',
    formText: 'text-bone',
  },
}

export const serviceRoutes = Object.keys(servicePages)
