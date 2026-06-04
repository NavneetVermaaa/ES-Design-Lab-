import { Reveal } from '@/components/Reveal'
import { Footer } from '@/components/site/Contact.jsx'
import { motion } from 'framer-motion'
import { useRef, useState } from 'react'
import brHeading from '@/assets/Br-heading.svg'

const cardFill = {
  violet: 'bg-violet text-bone border-yellow',
  yellow: 'bg-yellow text-ink border-yellow',
  'yellow-violet': 'bg-yellow text-violet border-yellow',
  'yellow-orange': 'bg-yellow text-[#f04a2a] border-yellow',
  orange: 'bg-[#f04a2a] text-bone border-yellow',
}

function VideoPlaceholder({ tone }) {
  const isBranding = tone === 'leaves'
  const leafGradient =
    isBranding
      ? 'from-[#06140d] via-[#0c3f28] to-[#051009]'
      : 'from-[#1b3526] via-[#386844] to-[#102217]'

  return (
    <Reveal instant={isBranding} className={isBranding ? 'mx-auto mt-12 max-w-[42rem] md:mt-14' : 'mt-16 md:mt-20'}>
      <div className={`relative overflow-hidden bg-gradient-to-br ${leafGradient} ${isBranding ? 'aspect-[2.31/1]' : 'aspect-[16/7]'}`}>
        {isBranding ? (
          <>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_8%,rgba(75,188,119,.95)_0_6%,transparent_16%),radial-gradient(circle_at_34%_18%,rgba(18,115,61,.95)_0_12%,transparent_30%),radial-gradient(circle_at_58%_5%,rgba(31,145,82,.85)_0_7%,transparent_19%),radial-gradient(circle_at_79%_42%,rgba(68,186,98,.9)_0_11%,transparent_26%),radial-gradient(circle_at_92%_23%,rgba(19,101,53,.82)_0_12%,transparent_29%),linear-gradient(115deg,rgba(3,22,14,.8),rgba(3,18,12,.25)_42%,rgba(4,12,9,.9))]" />
            <div className="absolute inset-0 opacity-75 [background-image:linear-gradient(112deg,transparent_0_11%,rgba(117,219,151,.38)_11.3%,transparent_13.5%,transparent_28%,rgba(90,190,126,.33)_29%,transparent_31%,transparent_48%,rgba(110,210,139,.3)_49%,transparent_51%,transparent_68%,rgba(93,190,130,.32)_69%,transparent_71%)]" />
            <div className="absolute inset-0 bg-black/35" />
          </>
        ) : (
          <>
            <div className="absolute inset-0 opacity-45 [background-image:radial-gradient(circle_at_20%_20%,rgba(255,255,255,.22)_0_2px,transparent_3px),radial-gradient(circle_at_70%_55%,rgba(255,255,255,.18)_0_2px,transparent_3px)] [background-size:36px_28px,48px_44px]" />
            <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_0_28%,rgba(255,255,255,.12)_28%_29%,transparent_30%_100%)] bg-[length:180px_100%]" />
          </>
        )}
        <button
          type="button"
          aria-label="Video placeholder"
          className="absolute left-1/2 top-1/2 grid h-20 w-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-[4px] border-bone/90 text-bone/95 md:h-24 md:w-24"
        >
          <span className="ml-1 h-0 w-0 border-y-[15px] border-l-[24px] border-y-transparent border-l-bone md:border-y-[18px] md:border-l-[29px]" />
        </button>
      </div>
    </Reveal>
  )
}

function ServiceCards({ service }) {
  const isBranding = service.key === 'branding'
  const isVisualDesign = service.key === 'visual-design'
  const isVideoEditing = service.key === 'video-editing'

  if (isBranding) {
    const borderRound = (index) => {
      if (index === 0) return 'rounded-[2rem_2rem_0_2rem]'
      if (index === 1 || index === 2) return 'rounded-[2rem_2rem_0_0]'
      if (index === 3) return 'rounded-[2rem_2rem_2rem_0]'
      return ''
    }

    return (
      <div className="-mx-4 mt-14 grid gap-2 pt-6 sm:grid-cols-2 md:grid-cols-4">
        {service.cards.map((card, index) => (
          <div key={card.title}>
            <motion.article
              className={`flex min-h-[218px] flex-col border-2 p-4 lg:min-h-[300px] lg:p-6 bg-black text-bone border-[#FFE600] ${borderRound(index)}`}
              initial={{ y: 0, backgroundColor: '#000000', boxShadow: '0px 0px 0px rgba(0,0,0,0)' }}
              whileHover={{
                y: -10,
                scale: 1.015,
                backgroundColor: '#5E4A96',
                boxShadow: '0 20px 45px rgba(255,230,0,0.18)',
              }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <h3 className="font-display text-[clamp(1rem,2.5vw,1.875rem)] uppercase leading-none tracking-normal lg:text-3xl text-[#FFE600]">
                {index + 1}. {card.title}
              </h3>
              <p className="mt-5 text-[0.64rem] font-medium leading-relaxed lg:text-sm text-bone/85">
                {card.body}
              </p>
              {card.meta ? (
                <p className="mt-auto pt-5 text-[0.58rem] font-bold leading-relaxed tracking-wide lg:text-xs text-bone/70">
                  {card.meta}
                </p>
              ) : null}
            </motion.article>
          </div>
        ))}
      </div>
    )
  }

  if (isVideoEditing) {
    return (
      <div className="mt-16 grid gap-3 md:mt-20 md:grid-cols-4 md:gap-4">
        {service.cards.map((card, index) => (
          <Reveal key={card.title} delay={index * 0.06}>
            <article
              className={`flex min-h-[230px] flex-col rounded-[2.4rem_2.4rem_0_0] border-2 p-6 md:min-h-[280px] md:p-7 bg-black text-bone border-[#FFE600] will-change-transform transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-[#f04a2a] hover:shadow-[0_20px_45px_rgba(240,74,42,0.25)] hover:-translate-y-[10px] hover:scale-[1.015] ${
                index === 0 ? 'rounded-bl-[2.4rem]' : ''
              } ${index === service.cards.length - 1 ? 'rounded-br-[2.4rem]' : ''}`}
            >
              <h3 className="font-display text-3xl uppercase leading-none md:text-4xl text-[#FFE600]">
                {index + 1}. {card.title}
              </h3>
              <p className="mt-8 text-sm font-medium leading-relaxed opacity-85">{card.body}</p>
              {card.meta ? (
                <p className="mt-auto pt-6 text-xs font-bold leading-relaxed opacity-85">{card.meta}</p>
              ) : null}
            </article>
          </Reveal>
        ))}
      </div>
    )
  }

  if (isVisualDesign) {
    return (
      <div className="mt-16 grid gap-3 md:mt-20 md:grid-cols-4 md:gap-4">
        {service.cards.map((card, index) => (
          <Reveal key={card.title} delay={index * 0.06}>
            <article
              className={`flex min-h-[230px] flex-col rounded-[2.4rem_2.4rem_0_0] border-2 p-6 md:min-h-[280px] md:p-7 bg-black text-bone border-[#FFE600] will-change-transform transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-[#D8EF58] hover:shadow-[0_20px_45px_rgba(216,239,88,0.25)] hover:-translate-y-[10px] hover:scale-[1.015] ${
                index === 0 ? 'rounded-bl-[2.4rem]' : ''
              } ${index === service.cards.length - 1 ? 'rounded-br-[2.4rem]' : ''}`}
            >
              <h3 className="font-display text-3xl uppercase leading-none md:text-4xl text-[#FFE600]">
                {index + 1}. {card.title}
              </h3>
              <p className="mt-8 text-sm font-medium leading-relaxed opacity-85">{card.body}</p>
              {card.meta ? (
                <p className="mt-auto pt-6 text-xs font-bold leading-relaxed opacity-85">{card.meta}</p>
              ) : null}
            </article>
          </Reveal>
        ))}
      </div>
    )
  }

  return (
    <div className="mt-16 grid gap-3 md:mt-20 md:grid-cols-4 md:gap-4">
      {service.cards.map((card, index) => {
        const fill = card.fill ? cardFill[card.fill] : 'bg-ink text-bone border-yellow/80'
        return (
          <Reveal key={card.title} delay={index * 0.06}>
            <article
              className={`flex min-h-[230px] flex-col rounded-[2.4rem_2.4rem_0_0] border-2 p-6 md:min-h-[280px] md:p-7 ${fill} ${
                index === 0 ? 'rounded-bl-[2.4rem]' : ''
              } ${index === service.cards.length - 1 ? 'rounded-br-[2.4rem]' : ''}`}
            >
              <h3 className="font-display text-3xl uppercase leading-none md:text-4xl">
                {index + 1}. {card.title}
              </h3>
              <p className="mt-8 text-sm font-medium leading-relaxed opacity-85">{card.body}</p>
              {card.meta ? (
                <p className="mt-auto pt-6 text-xs font-bold leading-relaxed opacity-85">{card.meta}</p>
              ) : null}
            </article>
          </Reveal>
        )
      })}
    </div>
  )
}

function ContactForm({ service }) {
  const [status, setStatus] = useState('idle')
  const formRef = useRef(null)
  const isBranding = service.key === 'branding'

  const handleSubmit = (event) => {
    event.preventDefault()
    setStatus('sending')

    const form = event.target
    const existing = document.getElementById('service-form-submit-frame')
    if (existing) document.body.removeChild(existing)

    const iframe = document.createElement('iframe')
    iframe.id = 'service-form-submit-frame'
    iframe.name = 'service-form-submit-frame'
    iframe.style.cssText = 'position:absolute;width:0;height:0;border:0;visibility:hidden'
    document.body.appendChild(iframe)

    let done = false
    const onDone = () => {
      if (done) return
      done = true
      setStatus('sent')
      form.reset()
      setTimeout(() => {
        const el = document.getElementById('service-form-submit-frame')
        if (el && el.parentNode) el.parentNode.removeChild(el)
      }, 3000)
    }

    iframe.onload = onDone
    setTimeout(onDone, 10000)

    form.target = 'service-form-submit-frame'
    form.action = 'https://formsubmit.co/d.shecreatstudio@gmail.com'
    form.method = 'POST'
    form.submit()
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className={`space-y-6 ${service.formText}`}>
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_subject" value={`New ${service.label} Service Page Enquiry`} />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="service" value={service.label} />

      {[
        { label: 'Name', name: 'name', type: 'text', placeholder: 'Your name' },
        { label: 'Email', name: 'email', type: 'email', placeholder: 'Your email' },
        { label: 'Message', name: 'message', type: 'textarea', placeholder: 'Your message' },
      ].map((field) => {
        const displayField = isBranding
          ? { ...field, label: 'Name', placeholder: 'Your name' }
          : field

        return (
        <label key={field.name} className="block border-b border-current/55 pb-5">
          <span className="block text-sm font-bold uppercase tracking-[0.08em]">{displayField.label}</span>
          {field.type === 'textarea' ? (
            <textarea
              required
              name={field.name}
              rows={3}
              disabled={status === 'sending'}
              placeholder={displayField.placeholder}
              className="mt-1 w-full resize-none bg-transparent text-lg outline-none placeholder:text-current/70 disabled:opacity-50"
            />
          ) : (
            <input
              required
              type={field.type}
              name={field.name}
              disabled={status === 'sending'}
              placeholder={displayField.placeholder}
              className="mt-1 w-full bg-transparent text-lg outline-none placeholder:text-current/70 disabled:opacity-50"
            />
          )}
        </label>
      )})}

      <div className="min-h-14 pt-4">
        {status !== 'sent' ? (
          <motion.button
            type="submit"
            disabled={status === 'sending'}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            aria-label="Send"
            className={`h-11 min-w-44 rounded-pill ${service.contactButton} ${
              isBranding ? 'text-transparent' : 'text-ink'
            } disabled:opacity-60`}
          >
            {status === 'sending' ? 'Sending' : 'Send'}
          </motion.button>
        ) : (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm font-bold"
          >
            Message sent successfully.
          </motion.p>
        )}
      </div>
    </form>
  )
}

export default function ServicePage({ service }) {
  const heroHeading = (
    <h1 className="max-w-5xl font-display text-[clamp(3rem,8vw,8.8rem)] uppercase leading-[0.95] tracking-normal">
      {service.heroText.map((line, index) => (
        <span
          key={line}
          className={`block ${
            service.heroAccentLines.includes(index)
              ? service.heroTextClass
              : service.heroSecondaryClass
          }`}
        >
          {line}
        </span>
      ))}
    </h1>
  )

  return (
    <main className="bg-ink text-bone overflow-x-hidden">
      {service.key === 'branding' ? (
        <section
          className="relative isolate flex h-[clamp(26rem,52.5vw,42rem)] max-h-[100svh] min-h-[24rem] w-full items-start justify-center md:justify-start overflow-hidden px-6 md:px-[8.5%] pt-24 md:pt-[8.1rem]"
          style={{ backgroundColor: service.heroBg }}
        >
          <img
            src={brHeading}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
            style={{ backgroundColor: '#8F65FB' }}
          />
          <motion.div
            className="relative z-10 w-full flex justify-center md:justify-start"
            initial={{ y: 22 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <h1 className="font-display text-[clamp(3rem,9vw,8.1rem)] uppercase leading-[0.94] tracking-normal text-center md:text-left">
              <span className="block text-[#FFE600]">Brands Built</span>
              <span className="block text-white">with Intention</span>
            </h1>
          </motion.div>
        </section>
      ) : (
        <section
          className="relative flex min-h-[52rem] items-center overflow-hidden px-6 pb-24 pt-28 md:min-h-[42rem] md:px-10 md:pt-20"
          style={{ backgroundColor: service.heroBg }}
        >
          <div className={`absolute left-[9%] top-[12%] h-[28rem] w-[28rem] rounded-full ${service.shapeClass}`} />
          <div className={`absolute right-[22%] top-[47%] h-56 w-56 rounded-full ${service.circleClass}`} />
          <div className={`absolute right-0 top-[47%] h-44 w-[28%] ${service.shapeClass}`} />

          <Reveal className="relative z-10 mx-auto w-full max-w-7xl">{heroHeading}</Reveal>
        </section>
      )}

      <section className={`px-6 md:px-10 ${
        service.key === 'branding' ? 'py-16 md:pb-12 md:pt-[4.35rem]' : 'py-20 md:py-28'
      }`}>
        <div className="mx-auto max-w-7xl">
          <Reveal instant={service.key === 'branding'}>
            <div className={`max-w-5xl text-xl font-semibold leading-relaxed md:text-2xl ${
              service.key === 'branding'
                ? 'text-[clamp(0.85rem,2.5vw,1rem)] leading-relaxed text-white md:max-w-[42rem]'
                : 'text-bone/85'
            }`}>
              {service.intro.quoteFirst ? (
                <p className="mb-7 font-serif-i text-4xl leading-tight text-yellow md:text-5xl">
                  {service.intro.quoteFirst}
                </p>
              ) : (
                <p>
                  <span className={service.intro.eyebrowClass}>{service.intro.eyebrow}</span>,{' '}
                  {service.intro.lead}
                </p>
              )}

              {service.intro.paragraphs.map((paragraph) => (
                <p key={paragraph} className="mt-7">
                  {paragraph}
                </p>
              ))}

              {service.intro.quote ? (
                <p className={`mt-8 font-serif-i leading-tight text-yellow ${
                  service.key === 'branding' ? 'text-[clamp(1.25rem,2.8vw,1.75rem)]' : 'text-4xl md:text-5xl'
                }`}>
                  {service.intro.quote}
                </p>
              ) : null}

              {service.intro.closing ? <p className="mt-7">{service.intro.closing}</p> : null}
            </div>
          </Reveal>

          <VideoPlaceholder tone={service.videoTone} />

          {service.intro.afterVideo ? (
            <Reveal>
              <h2 className="mt-12 font-display text-4xl uppercase leading-none text-[#f04a2a] md:text-6xl">
                {service.intro.afterVideo}
              </h2>
            </Reveal>
          ) : null}

          <ServiceCards service={service} />

          {service.bestFor ? (
            <Reveal>
              <div className="mt-20 grid gap-8 md:grid-cols-[0.55fr_1.45fr] md:items-center">
                <h2 className="font-display text-5xl uppercase leading-none text-yellow md:text-6xl">
                  {service.bestForTitle}
                </h2>
                <div className="grid gap-2 md:grid-cols-2">
                  {service.bestFor.map((item) => (
                    <div
                      key={item}
                      className="rounded-lg bg-yellow px-6 py-5 text-xl font-medium text-ink"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ) : null}
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 md:py-28" style={{ backgroundColor: service.contactBg }}>
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-start">
          <Reveal instant={service.key === 'branding'}>
            <div>
              <h2 className={`font-display text-[clamp(2.5rem,7vw,6rem)] uppercase leading-[0.88] md:text-8xl ${service.contactText}`}>
                Ready to <br />
                <span className="font-serif-i lowercase">build</span> your <br />
                brand?
              </h2>
              <p className={`mt-16 max-w-md text-lg font-medium leading-relaxed ${service.formText}`}>
                Would you rather directly get in touch? We always have the time for a call or email!
              </p>
              <p className={`mt-5 text-lg font-medium ${service.formText}`}>
                info@esdesignlab.com | +91 7668182139
              </p>
            </div>
          </Reveal>
          <Reveal instant={service.key === 'branding'} delay={0.12}>
            <ContactForm service={service} />
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  )
}
