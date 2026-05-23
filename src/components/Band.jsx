export default function Band() {
  return (
    <div className="bg-teal-600 px-[5vw] py-[70px] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
      <div>
        <h2 className="font-serif-display text-[clamp(1.9rem,3.5vw,2.8rem)] leading-[1.15] tracking-tight text-white mb-2">
          Ready to Work Together?
        </h2>
        <p className="text-white/72 font-light text-base max-w-[480px]">
          Whether you want to learn more about what we do or explore a potential partnership, we're ready to talk.
        </p>
      </div>
      <a
        href="#contact"
        className="inline-flex items-center gap-2 bg-white text-teal-700 hover:bg-teal-50 no-underline px-7 py-3.5 rounded-full font-medium text-[0.9375rem] whitespace-nowrap transition-colors"
      >
        Reach Out Today &nbsp;→
      </a>
    </div>
  )
}
