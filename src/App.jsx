export default function MarketteEnterprisesWebsite() {
  return (
    <div className="min-h-screen bg-white text-teal-900">
      {/* Header */}
      <header className="border-b border-teal-100 sticky top-0 bg-white/95 backdrop-blur z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Markette Enterprises</h1>
            <p className="text-sm text-teal-600">Building Businesses With Long-Term Vision</p>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#about" className="hover:text-slate-700 transition-colors">About</a>
            <a href="#services" className="hover:text-slate-700 transition-colors">Services</a>
            <a href="#vision" className="hover:text-slate-700 transition-colors">Vision</a>
            <a href="#contact" className="hover:text-slate-700 transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-white to-teal-100" />

        <div className="relative max-w-7xl mx-auto px-6 py-28 lg:py-36 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center rounded-full border border-teal-200 px-4 py-2 text-sm text-slate-700 mb-6 bg-white/70 backdrop-blur">
              Multi-Business Holding & Operations Company
            </div>

            <h2 className="text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              Strategic Growth.
              <br />
              Operational Excellence.
            </h2>

            <p className="mt-8 text-lg text-slate-700 leading-relaxed max-w-xl">
              Markette Enterprises develops and operates businesses focused on strong customer experiences,
              scalable systems, and sustainable long-term value creation.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-2xl bg-teal-700 px-7 py-4 text-white font-semibold shadow-lg hover:bg-teal-800 transition-colors"
              >
                Contact Us
              </a>

              <a
                href="#about"
                className="inline-flex items-center justify-center rounded-2xl border border-teal-200 px-7 py-4 font-semibold hover:bg-teal-50 transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>

          <div>
            <div className="grid grid-cols-2 gap-5">
              <div className="rounded-3xl bg-teal-700 text-white p-8 shadow-2xl">
                <p className="text-sm uppercase tracking-widest text-teal-200">Focus</p>
                <h3 className="mt-4 text-3xl font-bold">Retail</h3>
                <p className="mt-3 text-teal-100 leading-relaxed">
                  Customer-centered businesses designed around premium experiences.
                </p>
              </div>

              <div className="rounded-3xl bg-white border border-teal-100 p-8 shadow-xl mt-12">
                <p className="text-sm uppercase tracking-widest text-teal-600">Approach</p>
                <h3 className="mt-4 text-3xl font-bold">Systems</h3>
                <p className="mt-3 text-slate-700 leading-relaxed">
                  Process-driven operations that support reliable scaling and execution.
                </p>
              </div>

              <div className="rounded-3xl bg-white border border-teal-100 p-8 shadow-xl -mt-2">
                <p className="text-sm uppercase tracking-widest text-teal-600">Goal</p>
                <h3 className="mt-4 text-3xl font-bold">Growth</h3>
                <p className="mt-3 text-slate-700 leading-relaxed">
                  Long-term expansion through disciplined management and strategic investment.
                </p>
              </div>

              <div className="rounded-3xl bg-teal-50 p-8 border border-teal-100 shadow-lg mt-10">
                <p className="text-sm uppercase tracking-widest text-teal-600">Values</p>
                <h3 className="mt-4 text-3xl font-bold">Integrity</h3>
                <p className="mt-3 text-slate-700 leading-relaxed">
                  Professionalism, accountability, and exceptional service at every level.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 border-t border-teal-100 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-teal-600">
              About Markette Enterprises
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight">
              A modern company built for scalable business ownership.
            </h2>

            <p className="mt-8 text-lg text-slate-700 leading-relaxed">
              Markette Enterprises is structured to launch, acquire, and operate businesses with a focus on
              operational consistency, premium customer experience, and sustainable profitability.
            </p>

            <p className="mt-6 text-lg text-slate-700 leading-relaxed">
              Our mission is to create enduring brands supported by disciplined execution, efficient systems,
              and a long-term ownership mindset.
            </p>
          </div>

          <div className="grid gap-6">
            <div className="rounded-3xl border border-teal-100 p-8 shadow-sm hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold">Operational Excellence</h3>
              <p className="mt-4 text-slate-700 leading-relaxed">
                We emphasize process optimization, team development, and scalable operational frameworks.
              </p>
            </div>

            <div className="rounded-3xl border border-teal-100 p-8 shadow-sm hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold">Brand Development</h3>
              <p className="mt-4 text-slate-700 leading-relaxed">
                We focus on building businesses that deliver memorable customer experiences and lasting value.
              </p>
            </div>

            <div className="rounded-3xl border border-teal-100 p-8 shadow-sm hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold">Strategic Expansion</h3>
              <p className="mt-4 text-slate-700 leading-relaxed">
                Our long-term vision includes growing a diversified portfolio of successful businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 bg-teal-50 border-y border-teal-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-teal-600">
              Core Areas
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight">
              Business operations focused on sustainable growth.
            </h2>
          </div>

          <div className="mt-16 grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {[
              {
                title: 'Retail Operations',
                description:
                  'Developing and managing customer-focused retail businesses with strong operational systems.',
              },
              {
                title: 'Brand Strategy',
                description:
                  'Creating recognizable brands built on quality, consistency, and customer trust.',
              },
              {
                title: 'Process Optimization',
                description:
                  'Improving operational efficiency through scalable systems and data-driven execution.',
              },
              {
                title: 'Business Expansion',
                description:
                  'Identifying opportunities for strategic growth and long-term enterprise value creation.',
              },
            ].map((service) => (
              <div
                key={service.title}
                className="rounded-3xl bg-white border border-teal-100 p-8 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <h3 className="text-2xl font-semibold tracking-tight">{service.title}</h3>
                <p className="mt-5 text-slate-700 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section id="vision" className="py-24 bg-teal-700 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-teal-200">
            Long-Term Vision
          </p>

          <h2 className="mt-6 text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
            Building a portfolio of exceptional businesses.
          </h2>

          <p className="mt-8 text-lg text-teal-100 leading-relaxed max-w-3xl mx-auto">
            Markette Enterprises is designed with a long-term ownership mindset focused on operational discipline,
            premium customer experiences, and sustainable enterprise growth across multiple industries.
          </p>

          <div className="mt-16 grid md:grid-cols-3 gap-6 text-left">
            <div className="rounded-3xl border border-teal-700 bg-teal-900/50 p-8">
              <div className="text-4xl font-bold">01</div>
              <h3 className="mt-5 text-2xl font-semibold">Launch</h3>
              <p className="mt-4 text-teal-100 leading-relaxed">
                Build businesses with strong operational foundations from day one.
              </p>
            </div>

            <div className="rounded-3xl border border-teal-700 bg-teal-900/50 p-8">
              <div className="text-4xl font-bold">02</div>
              <h3 className="mt-5 text-2xl font-semibold">Scale</h3>
              <p className="mt-4 text-teal-100 leading-relaxed">
                Grow efficiently through systems, leadership, and customer loyalty.
              </p>
            </div>

            <div className="rounded-3xl border border-teal-700 bg-teal-900/50 p-8">
              <div className="text-4xl font-bold">03</div>
              <h3 className="mt-5 text-2xl font-semibold">Expand</h3>
              <p className="mt-4 text-teal-100 leading-relaxed">
                Continue building a diversified portfolio with long-term strategic value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-teal-600">
            Contact
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight">
            Connect with Markette Enterprises
          </h2>

          <p className="mt-6 text-lg text-slate-700 leading-relaxed max-w-2xl mx-auto">
            For partnership opportunities, business inquiries, or future collaborations, reach out to our team.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:info@markette.net"
              className="rounded-2xl bg-teal-700 px-8 py-4 text-white font-semibold shadow-lg hover:bg-teal-800 transition-colors"
            >
              info@markette.net
            </a>

            <a
              href="tel:+10000000000"
              className="rounded-2xl border border-teal-200 px-8 py-4 font-semibold hover:bg-teal-50 transition-colors"
            >
              (000) 000-0000
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-teal-100 bg-teal-50">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-semibold">Markette Enterprises</p>
            <p className="text-sm text-teal-600 mt-1">
              Professional business operations and long-term growth.
            </p>
          </div>

          <p className="text-sm text-teal-600">
            © 2026 Markette Enterprises. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
