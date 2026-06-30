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
        body: 'Every strong brand starts with understanding.\n\nWe explore your audience, positioning, and visual direction to build a foundation rooted in clarity.',
        fill: 'violet',
        meta: 'Brand direction · Positioning · Moodboards · Inspiration',
      },
      {
        title: 'Creation',
        body: 'This is where strategy becomes visual.\n\nWe design identities that feel clear, distinctive, and built to last — not just look good.',
        meta: 'Logo system · Visual direction · Colour palette · Brand assets',
      },
      {
        title: 'Roll-out',
        body: "A brand only works when it's used properly.\n\nWe apply your identity across essential touchpoints, so your brand feels familiar, professional, and aligned online and offline.",
        meta: 'Social templates · Stationery · Marketing assets · Website visuals · Campaign creatives',
      },
      {
        title: 'Building',
        body: 'We create systems that help your brand stay strong as you grow.\n\nClear guidelines mean fewer mistakes, faster execution, and better brand recognition.',
        fill: 'yellow',
        meta: 'Brand guidelines · Templates · Internal handover documents · Asset libraries',
      },
    ],
    contactBg: '#9270f4',
    contactText: 'text-yellow',
    contactButton: 'bg-yellow',
    formText: 'text-bone',
  },
  '/communication-design': {
    key: 'communication-design',
    label: 'Communication Design',
    route: '/communication-design',
    heroBg: '#D8EF58',
    heroText: ['Design That Makes', 'People Pause and', 'Feel Something.'],
    heroAccentLines: [0, 1, 2],
    heroTextClass: 'text-[#9B6DFF]',
    heroSecondaryClass: 'text-[#9B6DFF]',
    shapeClass: 'bg-[#c5dd45]/60',
    circleClass: 'bg-[#d8e84a]/60',
    intro: {
      eyebrow: 'At ES Design Lab',
      eyebrowClass: 'text-bone',
      lead: "communication design isn't about getting approval. It's about getting a reaction.",
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
        title: 'PRINT & EDITORIAL',
        body: 'Clear, structured design that transforms information into engaging printed experiences.',
        meta: 'Brochures / Reports / Catalogues / Magazines / Company Profiles / Annual Reports / Booklets / Manuals / User Guides / Newsletters',
      },
      {
        title: 'MARKETING & DIGITAL',
        body: 'Digital and marketing assets designed to capture attention and drive engagement.',
        meta: 'Social Media Posts / Reel Covers / Web Banners / Display Ads / Email Graphics / Presentations / Infographics / Pitch Decks',
      },
      {
        title: 'PACKAGING & RETAIL',
        body: 'Packaging and retail experiences that build value, attract attention, and influence decisions.',
        meta: 'Product Packaging / Labels / Boxes / Retail Graphics / Gift Packaging',
      },
      {
        title: 'EXHIBITION & ENVIRONMENTAL',
        body: 'Large-scale visual systems that guide, inform, and create memorable brand experiences.',
        meta: 'Exhibition Stands / Pop-up Banners / POS Materials / Store Signage / Window Graphics / Event Graphics',
      },
    ],
    contactBg: '#D8EF58',
    contactText: 'text-[#9B6DFF]',
    contactButton: 'bg-[#9B6DFF]',
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
