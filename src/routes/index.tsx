import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, Star, ShieldCheck, Clock, Users, BadgeCheck, ArrowRight, Hammer, Droplets, Home } from "lucide-react";
import hero from "@/assets/hero-foundation.jpg";
import crawlspace from "@/assets/crawlspace.jpg";
import crackRepair from "@/assets/crack-repair.jpg";
import sumpPump from "@/assets/sump-pump.jpg";

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
      <section className="relative overflow-hidden bg-secondary text-secondary-foreground">
        <div className="absolute inset-0">
          <img src={hero} alt="Foundation being repaired by The Crack Guys" width={1920} height={1080} className="h-full w-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/80 to-transparent" />
        </div>
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-24 sm:px-6 md:grid-cols-12 md:py-36">
          <div className="md:col-span-8">
            <div className="mb-6 inline-flex items-center gap-2 border border-primary/40 bg-primary/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              <BadgeCheck className="h-3.5 w-3.5" /> Google Verified · 12+ Years
            </div>
            <h1 className="text-5xl sm:text-7xl md:text-8xl">
              When the<br/>
              <span className="text-primary">cracks</span> show up,<br/>
              <span className="text-stroke">we show up.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg text-secondary-foreground/80">
              Family-owned foundation repair, crawlspace encapsulation, and waterproofing.
              Serving Quinton and surrounding areas — 24 hours a day, 7 days a week.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href="tel:2564482018" className="inline-flex items-center gap-3 bg-primary px-7 py-4 font-bold text-primary-foreground transition-transform hover:scale-105">
                <Phone className="h-5 w-5" /> (256) 448-2018
              </a>
              <Link to="/contact" className="inline-flex items-center gap-2 border border-secondary-foreground/30 px-7 py-4 font-bold uppercase tracking-wider text-secondary-foreground transition-colors hover:border-primary hover:text-primary">
                Free Estimate <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-8 border-t border-white/10 pt-8">
              <div className="flex items-center gap-2">
                <div className="flex">{[...Array(5)].map((_,i)=>(<Star key={i} className="h-5 w-5 fill-primary text-primary"/>))}</div>
                <div className="text-sm"><span className="font-bold">4.9</span> · 1,081 reviews</div>
              </div>
              <div className="flex items-center gap-2 text-sm"><ShieldCheck className="h-5 w-5 text-primary"/> Background Checked</div>
              <div className="flex items-center gap-2 text-sm"><Clock className="h-5 w-5 text-primary"/> Open 24 Hours</div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="border-y border-border bg-concrete">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-border md:grid-cols-4 md:divide-x">
          {[
            { n: "12+", l: "Years in Business" },
            { n: "1,081", l: "5-Star Reviews" },
            { n: "24/7", l: "Always Open" },
            { n: "100%", l: "Family Owned" },
          ].map((s, i) => (
            <div key={i} className="px-6 py-10 text-center">
              <div className="font-display text-5xl text-secondary md:text-6xl">{s.n}</div>
              <div className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <div className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary">What we do</div>
              <h2 className="max-w-2xl text-4xl sm:text-6xl">Your home,<br/>fixed from the ground up.</h2>
            </div>
            <Link to="/services" className="inline-flex items-center gap-2 font-bold uppercase tracking-wider hover:text-primary">
              All services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {[
              { img: crackRepair, icon: Hammer, title: "Foundation Repair", desc: "Wall cracks, settling, bowing walls and pier installation. We fix what's holding your home up." },
              { img: crawlspace, icon: Home, title: "Crawlspace Encapsulation", desc: "Vapor barriers, dehumidifiers and structural reinforcement. Cleaner air, drier home." },
              { img: sumpPump, icon: Droplets, title: "Waterproofing & Sump Pumps", desc: "Interior drainage, exterior membranes and sump pump installs that keep water out for good." },
            ].map((s, i) => (
              <div key={i} className="group relative overflow-hidden border border-border bg-card transition-transform hover:-translate-y-1">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={s.img} alt={s.title} loading="lazy" width={1200} height={900} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="p-6">
                  <s.icon className="h-7 w-7 text-primary" />
                  <h3 className="mt-4 text-2xl">{s.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="relative overflow-hidden bg-secondary py-24 text-secondary-foreground">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 md:grid-cols-2 md:items-center">
          <div>
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary">Why The Crack Guys</div>
            <h2 className="text-4xl sm:text-6xl">Built on family.<br/>Backed by <span className="text-primary">trust.</span></h2>
            <p className="mt-6 max-w-lg text-secondary-foreground/80">
              For over 12 years we've treated every home like it was our own. No high-pressure sales, no surprise charges — just honest work, done right the first time.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { icon: Users, title: "Family Owned", desc: "Local, independent, and proud of it." },
              { icon: BadgeCheck, title: "Free Estimates", desc: "No-cost, no-pressure consultations." },
              { icon: ShieldCheck, title: "Background Checked", desc: "Verified and trusted by Google." },
              { icon: Clock, title: "Open 24/7", desc: "Emergencies don't wait. Neither do we." },
            ].map((f, i) => (
              <div key={i} className="border border-white/10 bg-white/5 p-6">
                <f.icon className="h-8 w-8 text-primary" />
                <div className="mt-4 font-display text-xl uppercase">{f.title}</div>
                <p className="mt-1 text-sm text-secondary-foreground/70">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col items-start gap-4">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Real reviews</div>
            <h2 className="text-4xl sm:text-6xl">1,081 neighbors<br/>and counting.</h2>
            <div className="flex items-center gap-3">
              <div className="font-display text-5xl">4.9</div>
              <div>
                <div className="flex">{[...Array(5)].map((_,i)=>(<Star key={i} className="h-5 w-5 fill-primary text-primary"/>))}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Google Verified</div>
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { q: "Thanks so much Clay for taking care of my house and foundation issues!", a: "Verified Google Review" },
              { q: "My crawl space looks so nice now! The team was thorough and respectful.", a: "Verified Google Review" },
              { q: "Thank you for sending Austin and Ryan to check our sump pump. Top notch.", a: "Verified Google Review" },
            ].map((r, i) => (
              <figure key={i} className="border border-border bg-card p-8">
                <div className="flex">{[...Array(5)].map((_,j)=>(<Star key={j} className="h-4 w-4 fill-primary text-primary"/>))}</div>
                <blockquote className="mt-4 text-lg leading-relaxed">"{r.q}"</blockquote>
                <figcaption className="mt-6 text-xs uppercase tracking-wider text-muted-foreground">{r.a}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-4 py-16 sm:px-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl">See a crack? Call the guys.</h2>
            <p className="mt-3 max-w-xl text-primary-foreground/80">Free estimates. Honest answers. Open 24 hours.</p>
          </div>
          <a href="tel:2564482018" className="inline-flex items-center gap-3 bg-secondary px-7 py-4 font-bold uppercase tracking-wider text-secondary-foreground transition-transform hover:scale-105">
            <Phone className="h-5 w-5" /> (256) 448-2018
          </a>
        </div>
      </section>
    </>
  );
}
