import { Reveal } from '@/components/Reveal'

export default function Testimonial() {
  return (
    <section id="about" className="bg-violet text-ink px-6 md:px-10 py-28 md:py-40 grain relative">
      <Reveal>
        <div className="font-display text-ink text-8xl md:text-[12rem] leading-none mb-10">"</div>
      </Reveal>
      <Reveal delay={0.1}>
        <blockquote className="max-w-5xl font-serif-i text-3xl md:text-5xl lg:text-6xl leading-[1.1] text-ink">
          ES Design Lab has been the creative force behind our brand's visual identity designing
          our logos with exceptional clarity, creativity, and a deep understanding of what our brand
          stands for. She goes beyond delivering designs; she listens, understands the vision, and
          puts her heart into every detail.
        </blockquote>
      </Reveal>
      <Reveal delay={0.3} className="mt-12 flex items-center gap-4">
        <div className="h-12 w-12 rounded-full bg-ink text-bone grid place-items-center font-display text-lg">
          PK
        </div>
        <div>
          <div className="font-medium">Preeti Kohar</div>
          <div className="text-sm text-ink/70">Co-Founder, Hozo</div>
        </div>
      </Reveal>
    </section>
  )
}
