import { useState } from 'react'

const topics = [
  'General Inquiry',
  'Customer Experience',
  'Business Partnership',
  'Media & Press',
  'Other',
]

const inputClass =
  'w-full bg-[#f7f9f8] border border-[rgba(15,110,86,0.14)] rounded-md px-3.5 py-2.5 text-[0.9375rem] text-[#121c19] outline-none focus:border-teal-400 transition-colors font-sans'

const labelClass =
  'block text-[0.75rem] font-semibold tracking-[0.05em] uppercase text-[#617870] mb-1.5'

export default function Contact() {
  const [form, setForm] = useState({ fname: '', lname: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const handleSubmit = () => {
    if (!form.fname || !form.email || !form.message) {
      alert('Please fill in your name, email, and message before sending.')
      return
    }
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-[#f7f9f8] px-[5vw] py-[100px]">
      <p className="text-xs font-semibold tracking-[0.12em] uppercase text-teal-400 mb-3">Contact</p>
      <h2 className="font-serif-display text-[clamp(1.9rem,3.5vw,2.8rem)] leading-[1.15] tracking-tight text-[#121c19] mb-4">
        Let's Connect
      </h2>
      <p className="text-[1.05rem] text-[#617870] max-w-[560px] leading-[1.75] font-light">
        Have a question or want to connect with the Markette Enterprises team? We'd love to hear from you.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 mt-14 items-start">

        {/* Info column */}
        <div>
          <div className="flex flex-col gap-6">
            {[
              { icon: '✉️', label: 'Email',         content: <a href="mailto:info@markette.net" className="text-[0.9375rem] font-medium text-[#121c19] no-underline hover:text-teal-600">info@markette.net</a> },
              { icon: '🏢', label: 'Entity',         content: <span className="text-[0.9375rem] font-medium text-[#121c19]">Markette Enterprises</span> },
              { icon: '🕐', label: 'Response Time',  content: <span className="text-[0.9375rem] font-medium text-[#121c19]">Within 1–2 business days</span> },
            ].map(({ icon, label, content }) => (
              <div key={label} className="flex items-start gap-4">
                <div className="w-[42px] h-[42px] bg-teal-50 border border-teal-100 rounded-xl flex items-center justify-center text-lg flex-shrink-0">
                  {icon}
                </div>
                <div>
                  <label className="block text-[0.75rem] font-semibold tracking-[0.08em] uppercase text-[#617870] mb-1">
                    {label}
                  </label>
                  {content}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <p className="text-[0.75rem] font-semibold tracking-[0.12em] uppercase text-teal-400 mb-2">
              A Note on Inquiries
            </p>
            <p className="text-sm text-[#617870] font-light leading-[1.8]">
              Markette Enterprises is a privately held business development and operating company.
              For questions about our current business, partnership inquiries, or anything else,
              please reach out directly — our team responds to every message personally.
            </p>
          </div>
        </div>

        {/* Form card */}
        <div className="bg-white border border-[rgba(15,110,86,0.14)] rounded-[20px] p-10">
          {submitted ? (
            <div className="flex flex-col items-center justify-center text-center py-10 gap-4">
              <div className="w-14 h-14 bg-teal-50 rounded-full flex items-center justify-center text-2xl">✅</div>
              <h3 className="font-serif-display text-xl text-[#121c19]">Message Sent</h3>
              <p className="text-sm text-[#617870] font-light max-w-xs">
                Thank you for reaching out. A member of the Markette Enterprises team will be in touch within 1–2 business days.
              </p>
              <button
                onClick={() => { setForm({ fname:'', lname:'', email:'', subject:'', message:'' }); setSubmitted(false) }}
                className="mt-2 text-sm text-teal-600 underline cursor-pointer bg-transparent border-none"
              >
                Send another message
              </button>
            </div>
          ) : (
            <>
              <h3 className="font-serif-display text-[1.4rem] text-[#121c19] mb-7">Send Us a Message</h3>

              <div className="grid grid-cols-2 gap-4 mb-5">
                <div>
                  <label className={labelClass}>First Name</label>
                  <input className={inputClass} placeholder="Jane" value={form.fname} onChange={set('fname')} />
                </div>
                <div>
                  <label className={labelClass}>Last Name</label>
                  <input className={inputClass} placeholder="Smith" value={form.lname} onChange={set('lname')} />
                </div>
              </div>

              <div className="mb-5">
                <label className={labelClass}>Email Address</label>
                <input type="email" className={inputClass} placeholder="jane@example.com" value={form.email} onChange={set('email')} />
              </div>

              <div className="mb-5">
                <label className={labelClass}>Subject</label>
                <select className={inputClass} value={form.subject} onChange={set('subject')}>
                  <option value="">Select a topic…</option>
                  {topics.map((t) => <option key={t}>{t}</option>)}
                </select>
              </div>

              <div className="mb-6">
                <label className={labelClass}>Message</label>
                <textarea
                  className={`${inputClass} resize-y min-h-[110px] leading-relaxed`}
                  placeholder="How can we help you?"
                  value={form.message}
                  onChange={set('message')}
                />
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-teal-600 hover:bg-teal-800 text-white rounded-full py-3.5 font-semibold text-[0.9375rem] tracking-wide transition-colors cursor-pointer border-none"
              >
                Send Message
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
