import { createFileRoute, Link } from "@tanstack/react-router";
import { Hammer, Droplets, Home, Wrench, Shield, Wind, ArrowRight, Phone, CheckCircle2 } from "lucide-react";
import { PHOTOS } from "@/lib/photos";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — The Crack Guys" },
      { name: "description", content: "Foundation repair, crawlspace encapsulation, waterproofing, sump pumps and concrete work in Quinton and surrounding areas." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    img: PHOTOS.foundation, icon: Hammer, title: "Foundation Repair",
    desc: "We diagnose and repair foundation issues before they get worse — from hairline wall cracks to major settling.",
    bullets: ["Wall crack repair & sealing", "Pier and beam stabilization", "Settling and bowing walls", "Free structural inspection"],
  },
  {
    img: PHOTOS.crawlspace, icon: Home, title: "Crawlspace Encapsulation",
    desc: "Turn a damp, drafty crawlspace into a clean, sealed space that improves air quality and energy efficiency.",
    bullets: ["Heavy-duty vapor barriers", "Dehumidifier installation", "Insulation upgrades", "Mold and moisture control"],
  },
  {
    img: PHOTOS.waterproofing, icon: Droplets, title: "Waterproofing & Sump Pumps",
    desc: "Stop water before it stops you. Complete interior and exterior waterproofing systems built to last.",
    bullets: ["Sump pump install & service", "Battery backup systems", "Interior drainage", "Exterior membrane waterproofing"],
  },
];

const more = [
  { icon: Shield, title: "Basement Waterproofing", desc: "Keep your lower level dry, year after year." },
  { icon: Wrench, title: "Concrete Repair", desc: "Slab repair, leveling and new pours done right." },
  { icon: Wind, title: "Mold & Air Quality", desc: "Healthier air starts beneath your floorboards." },
];

function ServicesPage() {
  return (
    <>
      <section className="border-b border-border bg-surface py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-xs font-semibold uppercase tracking-wider text-primary">Services</div>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">Foundations to finishes — we handle it all.</h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">Honest work. Fair pricing. A team that shows up. Here's what we do best.</p>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="mx-auto max-w-6xl space-y-16 px-4 sm:px-6">
          {services.map((s, i) => (
            <div key={i} className={`grid gap-10 md:grid-cols-2 md:items-center ${i%2 ? "md:[&>*:first-child]:order-2" : ""}`}>
              <div className="overflow-hidden rounded-2xl border border-border">
                <img src={s.img} alt={s.title} loading="lazy" width={1200} height={900} className="aspect-[4/3] w-full object-cover" />
              </div>
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <s.icon className="h-5 w-5" />
                </div>
                <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">{s.title}</h2>
                <p className="mt-3 text-muted-foreground">{s.desc}</p>
                <ul className="mt-5 space-y-2.5">
                  {s.bullets.map(b => (
                    <li key={b} className="flex items-start gap-2.5 text-sm">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-600" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
                  Get a free estimate <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-surface py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold tracking-tight">Even more we do</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {more.map((m, i) => (
              <div key={i} className="rounded-2xl border border-border bg-background p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <m.icon className="h-5 w-5" />
                </div>
                <div className="mt-4 text-lg font-bold">{m.title}</div>
                <p className="mt-2 text-sm text-muted-foreground">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-14 text-primary-foreground">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-5 px-4 sm:px-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">Ready to fix it for good?</h2>
            <p className="mt-2 text-primary-foreground/80">Free estimates. No pressure. Open 24 hours.</p>
          </div>
          <a href="tel:2564482018" className="inline-flex items-center gap-2 rounded-lg bg-background px-5 py-3 text-sm font-semibold text-foreground hover:bg-background/90">
            <Phone className="h-4 w-4" /> (256) 448-2018
          </a>
        </div>
      </section>
    </>
  );
}
