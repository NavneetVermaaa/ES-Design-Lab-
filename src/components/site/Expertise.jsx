import { Reveal } from '@/components/Reveal'
import { motion } from 'framer-motion'

const services = [
  {
    title: 'Branding',
    href: '/branding',
    headline: 'One identity. Endless reach.',
    tagline: 'We build identities that live beyond the logo - in every interaction, every surface, every touchpoint.',
    body: 'From building identities for new startups to reshaping established brands. We make sure your brand communicates clearly, connects with the right audience, and leaves a lasting impression.',
  },
  {
    title: 'Communication Design',
    href: '/communication-design',
    headline: 'Make it inevitable.',
    tagline: "Every pixel earns its place. Visual systems that feel like they've always belonged.",
    body: 'Editorial layouts, packaging, social systems and digital surfaces - designed to feel inevitable. Every pixel earns its place in your visual language.',
  },
  {
    title: 'Video Editing',
    href: '/video-editing',
    headline: 'Motion that moves.',
    tagline: 'Story-driven, rhythm-built, scroll-stopping. Cut for emotion and built for the feed.',
    body: 'Story-driven motion for the platforms people actually scroll. From reels to brand films, we cut for emotion, rhythm and the algorithm - in that order.',
  },
]

const radii = [
  '[border-radius:80px_0px_80px_0px]',
  '[border-radius:0px_80px_0px_80px]',
  '[border-radius:80px_0px_80px_0px]',
]

export default function Expertise() {

  return (
    <section id="expertise" className="px-6 md:px-10 py-28 md:py-40 bg-background">
      <div className="grid md:grid-cols-12 gap-10 md:gap-12 items-end mb-16 md:mb-24">
        <Reveal className="md:col-span-4">         <p className="text-xs uppercase tracking-[0.3em] text-bone/50"></p>      </Reveal>
        <div className="md:col-span-8">
          <Reveal>
            <h2 className="font-display uppercase text-bone text-5xl md:text-7xl lg:text-8xl leading-[0.9]">
              Our Expertise
            </h2>
          </Reveal>
          <div className="mt-6">
            <Reveal delay={0.1}>
              <p className="text-bone/60 max-w-xl text-lg">
                Three crafts. One studio. We bring strong, end-to-end experience across the visual layer of your brand - so everything you publish feels like it came from the same mind.
              </p>
            </Reveal>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        {services.map((service, i) => (
          <Reveal key={service.title} delay={i * 0.08}>
            <motion.a
              href={service.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className={`
                group relative block overflow-hidden border border-yellow/10 bg-ink
                transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
                hover:border-yellow/35 hover:bg-gradient-to-br hover:from-[#8f65fb]/18 hover:via-[#8f65fb]/6 hover:to-transparent
                ${i > 0 ? '-mt-px' : ''}
                ${radii[i]}
              `}
            >
              <div className="relative z-10 p-6 md:p-10 lg:p-12">
                <div className="grid md:grid-cols-12 gap-4 md:gap-6 items-center">
                  <div className="md:col-span-1">
                    <span className="font-mono text-xs text-bone/30">0{i + 1}</span>
                  </div>
                  <div className="md:col-span-4">
                    <h3 className="font-display uppercase text-bone text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-none">
                      {service.title}
                    </h3>
                  </div>
                  <div className="md:col-span-5">
                    <p className="text-bone/70 text-sm md:text-base leading-relaxed">
                      <span className="block text-yellow font-medium mb-2">{service.headline}</span>
                      {service.tagline}
                    </p>
                    <p className="mt-4 text-bone/40 text-sm leading-relaxed line-clamp-2">
                      {service.body}
                    </p>
                  </div>
                  <div className="md:col-span-2 flex justify-end">
                    <span className="text-3xl md:text-4xl text-yellow inline-block transition-transform duration-500 group-hover:translate-x-2 drop-shadow-[0_0_8px_rgba(254,241,2,0.25)]">
                      {'->'}
                    </span>
                  </div>
                </div>
              </div>
            </motion.a>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
