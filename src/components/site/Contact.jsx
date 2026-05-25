import { Reveal } from '@/components/Reveal'
import { motion } from 'framer-motion'
import { useState, useRef } from 'react'
import logoSrc from '../../assets/logo.png'

export function Contact() {
  const [status, setStatus] = useState('idle')
  const formRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')

    const form = e.target

    const existing = document.getElementById('form-submit-frame')
    if (existing) document.body.removeChild(existing)

    const iframe = document.createElement('iframe')
    iframe.id = 'form-submit-frame'
    iframe.name = 'form-submit-frame'
    iframe.style.cssText = 'position:absolute;width:0;height:0;border:0;visibility:hidden'
    document.body.appendChild(iframe)

    let done = false

    const onDone = () => {
      if (done) return
      done = true
      setStatus('sent')
      form.reset()
      setTimeout(() => {
        const el = document.getElementById('form-submit-frame')
        if (el && el.parentNode) el.parentNode.removeChild(el)
      }, 3000)
    }

    iframe.onload = onDone
    setTimeout(onDone, 10000)

    form.target = 'form-submit-frame'
    form.action = 'https://formsubmit.co/d.shecreatstudio@gmail.com'
    form.method = 'POST'
    form.submit()
  }

  return (
    <section id="contact" className="bg-yellow text-ink px-6 md:px-10 pt-28 md:pt-40 pb-20">
      <div className="grid md:grid-cols-12 gap-10 md:gap-16">
        <div className="md:col-span-6">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-ink/60 mb-6">[ 05 — Contact ]</p>
          </Reveal>
          <h2 className="font-display uppercase text-ink text-6xl md:text-8xl lg:text-9xl leading-[1.02] md:leading-[0.85]">
            Ready to <br />
            <span className="font-serif-i lowercase">build</span> your <br />
            brand?
          </h2>
          <div className="mt-12 space-y-2 text-ink/80">
            <a href="mailto:info@esdesignlab.com" className="block text-lg hover:underline">
              info@esdesignlab.com
            </a>
            <a href="tel:+917668182139" className="block text-lg hover:underline">
              +91 76681 82139
            </a>
          </div>
        </div>

        <div className="md:col-span-6">
          <Reveal delay={0.15}>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-2">
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="New ES Design Lab Contact Form Submission" />
              <input type="hidden" name="_template" value="table" />

              {[
                { label: 'Name', type: 'text', name: 'name' },
                { label: 'Email', type: 'email', name: 'email' },
              ].map((f) => (
                <div key={f.name} className="border-b border-ink/30 py-4">
                  <label className="block text-xs uppercase tracking-[0.2em] text-ink/60 mb-2">
                    {f.label}
                  </label>
                  <input
                    required
                    type={f.type}
                    name={f.name}
                    disabled={status === 'sending'}
                    className="w-full bg-transparent outline-none text-ink text-xl placeholder:text-ink/30 disabled:opacity-40 transition-opacity"
                    placeholder={`Your ${f.label.toLowerCase()}`}
                  />
                </div>
              ))}
              <div className="border-b border-ink/30 py-4">
                <label className="block text-xs uppercase tracking-[0.2em] text-ink/60 mb-2">
                  Message
                </label>
                <textarea
                  required
                  name="message"
                  rows={3}
                  disabled={status === 'sending'}
                  className="w-full bg-transparent outline-none text-ink text-xl placeholder:text-ink/30 resize-none disabled:opacity-40 transition-opacity"
                  placeholder="Tell us about your project"
                />
              </div>

              <div className="mt-8 min-h-[56px]">
                {status === 'idle' || status === 'sending' ? (
                  <motion.button
                    type="submit"
                    disabled={status === 'sending'}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-3 rounded-pill bg-ink text-bone px-8 py-5 text-sm uppercase tracking-[0.2em] disabled:opacity-60"
                  >
                    {status === 'sending' ? (
                      <>
                        <span className="inline-block w-4 h-4 border-2 border-bone/30 border-t-bone rounded-full animate-spin" />
                        Sending
                      </>
                    ) : (
                      'Send message →'
                    )}
                  </motion.button>
                ) : null}

                {status === 'sent' && (
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="flex items-center gap-3 text-ink"
                  >
                    <span className="grid h-12 w-12 place-items-center rounded-full bg-ink">
                      <svg className="w-5 h-5 text-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-sm font-medium">Message sent successfully</p>
                      <p className="text-xs text-ink/60">We'll be in touch within 24 hours</p>
                    </div>
                  </motion.div>
                )}

                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="flex items-center gap-3"
                  >
                    <span className="grid h-12 w-12 place-items-center rounded-full border border-ink/30">
                      <svg className="w-5 h-5 text-ink" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-sm font-medium">Something went wrong</p>
                      <button
                        onClick={() => setStatus('idle')}
                        className="text-xs text-ink/60 hover:text-ink underline underline-offset-2 transition-colors"
                      >
                        Try again
                      </button>
                    </div>
                  </motion.div>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="bg-ink text-bone px-6 md:px-10 py-12 md:py-16 border-t border-bone/10">
      <div className="grid md:grid-cols-12 gap-8">
        <div className="md:col-span-6">
          <Reveal>
            <img
              src={logoSrc}
              alt="ES Design Lab"
              className="h-[68px] md:h-[84px] w-auto object-contain image-rendering-auto
                         transition-opacity duration-700 ease-out
                         drop-shadow-[0_0_6px_rgba(251,191,36,0.12)]"
            />
          </Reveal>
          <div className="mt-6 space-y-1 text-sm text-bone/70">
            <a href="mailto:info@esdesignlab.com" className="block hover:text-yellow transition-colors">
              info@esdesignlab.com
            </a>
            <a href="tel:7668182139" className="block hover:text-yellow transition-colors">
              7668182139
            </a>
          </div>
        </div>
        <div className="md:col-span-3">
          <p className="text-xs uppercase tracking-[0.2em] text-bone/40 mb-3">Navigate</p>
          <ul className="space-y-1.5 text-bone/80">
            <li><a href="#about" className="group inline-flex items-center gap-1.5 hover:text-yellow transition-colors">About</a></li>
            <li><a href="#work" className="group inline-flex items-center gap-1.5 hover:text-yellow transition-colors">Work</a></li>
            <li><a href="#expertise" className="group inline-flex items-center gap-1.5 hover:text-yellow transition-colors">Services</a></li>
            <li><a href="#contact" className="group inline-flex items-center gap-1.5 hover:text-yellow transition-colors">Contact</a></li>
          </ul>
        </div>
        <div className="md:col-span-3">
          <p className="text-xs uppercase tracking-[0.2em] text-bone/40 mb-3">Elsewhere</p>
          <ul className="space-y-1.5 text-bone/80">
            <li>
              <a
                href="https://www.instagram.com/esdesignlabs/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 hover:text-yellow transition-all duration-300"
              >
                <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <span className="relative">
                  Instagram
                  <span className="absolute -bottom-px left-0 w-0 h-px bg-yellow transition-all duration-300 group-hover:w-full" />
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/es-design-lab/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 hover:text-yellow transition-all duration-300"
              >
                <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <span className="relative">
                  LinkedIn
                  <span className="absolute -bottom-px left-0 w-0 h-px bg-yellow transition-all duration-300 group-hover:w-full" />
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-16 flex flex-col md:flex-row justify-between gap-4 text-xs text-bone/40 uppercase tracking-[0.2em]">
        <span>© {new Date().getFullYear()} ES Design Lab</span>
        <span>All rights reserved.</span>
      </div>
    </footer>
  )
}
