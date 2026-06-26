const pillars = [
  {
    icon: '🏗️',
    title: 'Business Development',
    body: 'We identify, evaluate, and develop business opportunities with care — assessing each venture through the lens of long-term viability, operational fit, and community value.',
  },
  {
    icon: '📋',
    title: 'Operational Discipline',
    body: 'Behind every well-run business is a foundation of strong process and consistent oversight. We invest in the systems and people that keep daily operations performing at their best.',
  },
  {
    icon: '🤝',
    title: 'Relationship-Driven',
    body: 'Our customers, partners, and community are central to how we operate. We prioritize long-term trust over short-term wins — building a reputation one interaction at a time.',
  },
  {
    icon: '✅',
    title: 'Standards & Compliance',
    body: 'Operating responsibly is foundational, not optional. We hold every business we run to the highest applicable standards — legal, ethical, and operational.',
  },
  {
    icon: '📈',
    title: 'Growth Mindset',
    body: 'Our current business is one chapter. We are deliberately building the leadership capacity, financial discipline, and market knowledge to grow into new ventures over time.',
  },
  {
    icon: '🌱',
    title: 'Community Commitment',
    body: 'Every business we operate is embedded in a community. We hire locally, invest thoughtfully, and measure success not just in revenue — but in the impact we create around us.',
  },
]

export default function Pillars() {
  return (
    <section id="pillars" className="bg-[#f7f9f8] px-[5vw] py-[100px]">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-8 mb-14">
        <div>
          <p className="text-xs font-semibold tracking-[0.12em] uppercase text-teal-400 mb-3">
            What We Bring
          </p>
          <h2 className="font-serif-display text-[clamp(1.9rem,3.5vw,2.8rem)] leading-[1.15] tracking-tight text-[#121c19]">
            Our Operating Principles
          </h2>
        </div>
        <p className="text-[1.05rem] text-[#617870] max-w-[560px] leading-[1.75] font-light lg:text-right">
          Whether managing our current business or building the next one, these are the standards we hold ourselves to.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {pillars.map(({ icon, title, body }) => (
          <div
            key={title}
            className="pillar-card relative bg-white border border-[rgba(15,110,86,0.14)] rounded-[20px] p-8 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_48px_rgba(15,110,86,0.10)] overflow-hidden"
          >
            <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center text-2xl mb-5">
              {icon}
            </div>
            <h3 className="text-[1.1rem] font-semibold text-[#121c19] mb-2">{title}</h3>
            <p className="text-sm text-[#617870] leading-[1.75] font-light">{body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
