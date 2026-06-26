const values = [
  'Transparent and ethical business practices',
  'Rigorous operational standards across every business we run',
  'Community engagement and local investment',
  'A long-term outlook on growth and value creation',
]

const stats = [
  { strong: 'Focused',  sub: 'Leadership'  },
  { strong: 'Proven',   sub: 'Operations'  },
  { strong: 'Forward',  sub: 'Thinking'    },
]

export default function About() {
  return (
    <section id="about" className="bg-white px-[5vw] py-[100px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

        {/* Visual column */}
        <div>
          {/* Main teal card */}
          <div className="relative bg-teal-600 rounded-[20px] p-10 text-white overflow-hidden">
            {/* Decorative circle */}
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/[0.06]" />
            <h3 className="font-serif-display text-2xl text-white mb-3">Who We Are</h3>
            <p className="text-white/80 font-light leading-relaxed text-sm">
              Markette Enterprises is a privately held business development and operating company.
              We build, acquire, and manage businesses — bringing structure, discipline, and a
              long-term perspective to every venture we undertake.
            </p>
            {/* Stats row */}
            <div className="grid grid-cols-3 gap-2 mt-5">
              {stats.map(({ strong, sub }) => (
                <div key={strong} className="bg-white/[0.12] rounded-xl px-2 py-3 text-center min-w-0">
                  <strong className="block font-serif-display text-lg sm:text-2xl text-white leading-tight">{strong}</strong>
                  <span className="text-[0.7rem] sm:text-[0.75rem] text-white/65">{sub}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Accent bar */}
          <div className="flex items-center gap-3 bg-teal-50 border border-teal-100 rounded-xl px-4 py-3 mt-3">
            <span className="w-2.5 h-2.5 rounded-full bg-teal-400 flex-shrink-0" />
            <span className="text-sm font-medium text-teal-800">
              Currently operating an established retail business — with broader ventures on the horizon
            </span>
          </div>
        </div>

        {/* Body column */}
        <div>
          <p className="text-xs font-semibold tracking-[0.12em] uppercase text-teal-400 mb-3">
            About Markette Enterprises
          </p>
          <h2 className="font-serif-display text-[clamp(1.9rem,3.5vw,2.8rem)] leading-[1.15] tracking-tight text-[#121c19] mb-5">
            A Company Built on Accountability
          </h2>
          <p className="text-[#617870] font-light leading-[1.8] mb-5">
            We established Markette Enterprises with a clear philosophy: that great businesses are
            built through disciplined management, sound decision-making, and an honest commitment
            to the people they serve. Those principles guide us in everything we do today — and
            will define every venture we pursue tomorrow.
          </p>
          <p className="text-[#617870] font-light leading-[1.8] mb-6">
            Currently, we operate an established retail business, and we are actively developing
            the foundation and expertise that will support future growth into new markets and
            industries — wherever the right opportunities emerge.
          </p>
          <ul className="flex flex-col gap-3 list-none">
            {values.map((v) => (
              <li key={v} className="flex items-start gap-3 text-[0.9375rem] text-[#3a4f47]">
                <span className="w-5 h-5 rounded-full bg-teal-50 border border-teal-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="block w-[7px] h-[5px] border-l-[1.5px] border-b-[1.5px] border-teal-600" style={{ transform: 'rotate(-45deg) translateY(-1px)' }} />
                </span>
                {v}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}