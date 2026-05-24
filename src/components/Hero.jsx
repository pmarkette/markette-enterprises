export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-[5vw] pt-[100px] pb-[80px] bg-[#f7f9f8] overflow-hidden"
    >
      {/* Radial gradient overlays */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 55% at 80% 50%, rgba(29,158,117,0.10) 0%, transparent 70%), ' +
            'radial-gradient(ellipse 40% 40% at 10% 80%, rgba(15,110,86,0.07) 0%, transparent 65%)',
        }}
      />
      {/* Grid */}
      <div className="absolute inset-0 hero-grid-bg opacity-60 pointer-events-none" />

      {/* Content */}
      <div className="relative max-w-[680px]">
        {/* Badge */}
        <div className="animate-fade-up-1 inline-flex items-center gap-2 bg-teal-50 border border-teal-100 rounded-full px-4 py-1.5 text-[0.8rem] font-medium text-teal-600 tracking-widest uppercase mb-8">
          <span className="w-[7px] h-[7px] rounded-full bg-teal-400 flex-shrink-0" />
          Business Development &amp; Operations
        </div>

        {/* Headline */}
        <h1 className="animate-fade-up-2 font-serif-display text-[clamp(2.6rem,5.5vw,4.2rem)] leading-[1.1] tracking-tight text-[#121c19] mb-6">
          Built to Last.<br />
          <em className="not-italic text-teal-600">Designed</em> to Grow.
        </h1>

        {/* Sub */}
        <p className="animate-fade-up-3 text-[1.125rem] text-[#617870] max-w-[520px] leading-[1.7] mb-10 font-light">
          Markette Enterprises develops and operates businesses with purpose, combining disciplined
          management, a long-term vision, and an unwavering commitment to doing things the right way.
        </p>

        {/* Actions */}
        <div className="animate-fade-up-4 flex gap-4 flex-wrap">
          <a
            href="#about"
            className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-800 text-white no-underline px-7 py-3.5 rounded-full font-medium text-[0.9375rem] tracking-wide transition-all hover:-translate-y-px"
          >
            Learn About Us &nbsp;→
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-transparent text-teal-600 border border-teal-200 hover:border-teal-400 hover:bg-teal-50 no-underline px-7 py-3.5 rounded-full font-medium text-[0.9375rem] transition-all"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Floater card */}
      <div className="animate-fade-up-5 hidden lg:flex absolute right-[5vw] bottom-[12%] bg-white border border-[rgba(15,110,86,0.14)] rounded-[20px] p-5 items-center gap-4 shadow-[0_8px_40px_rgba(15,110,86,0.10)] max-w-[280px]">
        <div className="w-11 h-11 bg-teal-50 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
          📈
        </div>
        <div className="text-[0.825rem] leading-snug">
          <strong className="block font-semibold text-[#121c19]">Growth-Oriented</strong>
          <span className="text-[#617870]">Building businesses today with tomorrow's potential in mind.</span>
        </div>
      </div>
    </section>
  )
}
