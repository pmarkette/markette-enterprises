const points = [
  {
    num: '01',
    title: 'Start with What Works',
    body: 'Our current focus is the disciplined operation of an established retail business. We treat it as both a revenue-generating enterprise and a proving ground — developing the management practices, financial rigor, and team culture that will carry us into future ventures.',
  },
  {
    num: '02',
    title: 'Build for the Long Term',
    body: 'Markette Enterprises is not a single-business company. Our structure, our mindset, and our planning are all oriented toward growth. We expect to develop or acquire additional businesses over time — in retail or beyond — guided by sound judgment and the right opportunities.',
  },
  {
    num: '03',
    title: 'Operate with Integrity',
    body: 'Regardless of the industry or venture, our approach never changes: transparent operations, accountable leadership, and a commitment to doing right by our customers, our team, and our community.',
  },
]

const profile = [
  { label: 'Company Type',    value: 'Business Development & Operations', badge: 'Active'     },
  { label: 'Ownership',       value: 'Privately Held'                                         },
  { label: 'Current Business',value: 'Retail Operations',                 badge: 'Operating'  },
  { label: 'Future Ventures', value: 'In Development'                                         },
  { label: 'General Inquiry', value: 'info@markette.net'                                      },
  { label: 'Leadership',      value: 'Local Management Team'                                  },
]

export default function Operate() {
  return (
    <section id="operate" className="bg-white px-[5vw] py-[100px]">
      <p className="text-xs font-semibold tracking-[0.12em] uppercase text-teal-400 mb-3">
        Our Approach
      </p>
      <h2 className="font-serif-display text-[clamp(1.9rem,3.5vw,2.8rem)] leading-[1.15] tracking-tight text-[#121c19] mb-4">
        How We Build &amp; Operate
      </h2>
      <p className="text-[1.05rem] text-[#617870] max-w-[560px] leading-[1.75] font-light">
        Markette Enterprises is in the business of building businesses — starting with a strong operational foundation and growing from there.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-16 lg:gap-24 mt-14 items-start">
        {/* Numbered points */}
        <div className="flex flex-col gap-8">
          {points.map(({ num, title, body }) => (
            <div key={num} className="flex gap-5">
              <div className="font-serif-display text-[2rem] text-teal-100 leading-none flex-shrink-0 w-9">
                {num}
              </div>
              <div>
                <h4 className="text-base font-semibold text-[#121c19] mb-1.5">{title}</h4>
                <p className="text-sm text-[#617870] font-light leading-[1.7]">{body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Profile card */}
        <div className="bg-[#f7f9f8] border border-[rgba(15,110,86,0.14)] rounded-[20px] p-10">
          {profile.map(({ label, value, badge }, i) => (
            <div
              key={label}
              className={`flex justify-between items-center py-4 text-sm ${
                i < profile.length - 1 ? 'border-b border-[rgba(15,110,86,0.14)]' : ''
              }`}
            >
              <span className="text-[#617870] font-light">{label}</span>
              <span className="font-medium text-[#121c19] flex items-center gap-2">
                {value}
                {badge && (
                  <span className="bg-teal-50 text-teal-600 text-[0.75rem] font-semibold px-2 py-0.5 rounded-full">
                    {badge}
                  </span>
                )}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
