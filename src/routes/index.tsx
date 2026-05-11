import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, Star, ShieldCheck, Clock, Heart, BadgeCheck, ArrowRight, Hammer, Droplets, Home, CheckCircle2 } from "lucide-react";
import { PHOTOS } from "@/lib/photos";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Crack Guys — Foundation Repair & Waterproofing in Quinton" },
      { name: "description", content: "Family-owned foundation, crawlspace and waterproofing experts. 12+ years, 1,081+ five-star Google reviews. Free estimates. Open 24 hours." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-surface">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 md:items-center md:py-24">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-muted-foreground">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500" /> Open 24 hours · Free estimates
            </div>
            <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Foundation problems? <span className="text-primary">We've got you covered.</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-muted-foreground">
              The Crack Guys are a family-owned team fixing foundations, crawlspaces, and water issues for homeowners across Quinton — for over 12 years.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a href="tel:2564482018" className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md">
                <Phone className="h-4 w-4" /> Call (256) 448-2018
              </a>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-5 py-3 text-sm font-semibold transition-colors hover:bg-secondary">
                Get Free Estimate <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              <div className="flex items-center gap-2">
                <div className="flex">{[...Array(5)].map((_,i)=>(<Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400"/>))}</div>
                <span className="text-sm font-semibold">4.9</span>
                <span className="text-sm text-muted-foreground">· 1,081 Google reviews</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl border border-border shadow-xl">
              <img src={PHOTOS.hero} alt="Beautiful suburban home" width={1200} height={800} className="aspect-[4/3] w-full object-cover" />
            </div>
            <div className="absolute -bottom-5 -left-5 hidden rounded-xl border border-border bg-background p-4 shadow-lg sm:block">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold">Google Verified</div>
                  <div className="text-xs text-muted-foreground">Background checked</div>
                </div>
              </div>
            </div>
            <div className="absolute -right-4 -top-4 hidden rounded-xl border border-border bg-background p-4 shadow-lg sm:block">
              <div className="text-2xl font-bold">12+</div>
              <div className="text-xs text-muted-foreground">Years in business</div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-y border-border bg-background">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-border md:grid-cols-4">
          {[
            { n: "12+", l: "Years experience" },
            { n: "1,081", l: "5-star reviews" },
            { n: "24/7", l: "Always available" },
            { n: "100%", l: "Family owned" },
          ].map((s, i) => (
            <div key={i} className="bg-background px-6 py-8 text-center">
              <div className="text-3xl font-bold tracking-tight md:text-4xl">{s.n}</div>
              <div className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-xs font-semibold uppercase tracking-wider text-primary">Our Services</div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Everything to keep your home safe and dry</h2>
            <p className="mt-4 text-muted-foreground">From cracks to crawlspaces, we deliver lasting fixes that protect your biggest investment.</p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { img: PHOTOS.foundation, icon: Hammer, title: "Foundation Repair", desc: "Wall cracks, settling, bowing walls, pier installation and stabilization." },
              { img: PHOTOS.crawlspace, icon: Home, title: "Crawlspace Encapsulation", desc: "Vapor barriers, dehumidifiers and structural reinforcement for cleaner air." },
              { img: PHOTOS.waterproofing, icon: Droplets, title: "Waterproofing & Sump Pumps", desc: "Interior and exterior systems plus pump installs that keep water out." },
            ].map((s, i) => (
              <div key={i} className="group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-lg">
                <div className="aspect-[4/3] overflow-hidden bg-secondary">
                  <img src={s.img} alt={s.title} loading="lazy" width={1200} height={900} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                  <Link to="/services" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all">
                    Learn more <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-surface py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 md:grid-cols-2 md:items-center">
          <div className="overflow-hidden rounded-2xl border border-border">
            <img src={PHOTOS.family} alt="Family-owned local team" loading="lazy" width={1200} height={900} className="aspect-[4/3] w-full object-cover" />
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-primary">Why The Crack Guys</div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">A family business you can actually trust.</h2>
            <p className="mt-4 text-muted-foreground">
              For 12+ years we've treated every home like it's our own. No high-pressure sales. No surprise charges. Just honest work, done right the first time.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Free, no-pressure estimates",
                "Background-checked, Google-verified team",
                "Open 24 hours for emergencies",
                "Transparent pricing — no hidden fees",
              ].map((t, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-600" />
                  <span className="text-sm">{t}</span>
                </li>
              ))}
            </ul>
            <Link to="/about" className="mt-7 inline-flex items-center gap-2 rounded-lg border border-border bg-background px-5 py-3 text-sm font-semibold hover:bg-secondary">
              About our family <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-xs font-semibold uppercase tracking-wider text-primary">How it works</div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Simple, straightforward, stress-free</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { n: "01", t: "Free Inspection", d: "Call or message us. We'll come out, take a look, and give you an honest assessment." },
              { n: "02", t: "Clear Estimate", d: "You get a detailed quote with no surprises. We'll explain every line." },
              { n: "03", t: "Quality Repair", d: "Our team gets the job done right — and stands behind the work for the long haul." },
            ].map((s, i) => (
              <div key={i} className="rounded-2xl border border-border bg-card p-7">
                <div className="text-sm font-bold text-primary">{s.n}</div>
                <div className="mt-3 text-lg font-bold">{s.t}</div>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col items-center text-center">
            <div className="text-xs font-semibold uppercase tracking-wider text-primary">Loved by homeowners</div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">1,081 neighbors and counting</h2>
            <div className="mt-4 flex items-center gap-3">
              <div className="text-3xl font-bold">4.9</div>
              <div>
                <div className="flex">{[...Array(5)].map((_,i)=>(<Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400"/>))}</div>
                <div className="text-xs text-muted-foreground">Google Verified</div>
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { q: "Thanks so much Clay for taking care of my house and foundation issues!", n: "Sarah M." },
              { q: "My crawl space looks so nice now! The team was thorough and respectful.", n: "Mike R." },
              { q: "Thank you for sending Austin and Ryan to check our sump pump. Top notch.", n: "Jennifer T." },
            ].map((r, i) => (
              <figure key={i} className="rounded-2xl border border-border bg-background p-6">
                <div className="flex">{[...Array(5)].map((_,j)=>(<Star key={j} className="h-4 w-4 fill-amber-400 text-amber-400"/>))}</div>
                <blockquote className="mt-4 text-base leading-relaxed">"{r.q}"</blockquote>
                <figcaption className="mt-5 flex items-center gap-2 text-sm">
                  <span className="font-semibold">{r.n}</span>
                  <span className="text-muted-foreground">· Verified</span>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/reviews" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all">
              Read more reviews <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-3xl bg-primary px-8 py-14 text-center text-primary-foreground sm:px-16">
            <Heart className="mx-auto h-8 w-8 opacity-80" />
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">See a crack? Call the guys.</h2>
            <p className="mx-auto mt-3 max-w-xl text-primary-foreground/80">
              Free estimates. Honest answers. Open 24 hours. We'll treat your home like it's ours.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <a href="tel:2564482018" className="inline-flex items-center gap-2 rounded-lg bg-background px-6 py-3 text-sm font-semibold text-foreground hover:bg-background/90">
                <Phone className="h-4 w-4" /> (256) 448-2018
              </a>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg border border-primary-foreground/30 px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/10">
                Get Free Estimate <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-primary-foreground/80">
              <span className="inline-flex items-center gap-1.5"><BadgeCheck className="h-4 w-4" /> Family-owned</span>
              <span className="inline-flex items-center gap-1.5"><Clock className="h-4 w-4" /> Open 24/7</span>
              <span className="inline-flex items-center gap-1.5"><ShieldCheck className="h-4 w-4" /> Background checked</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
