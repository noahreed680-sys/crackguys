import { createFileRoute, Link } from "@tanstack/react-router";
import { Hammer, Droplets, Home, Wrench, Shield, Wind, ArrowRight, Phone } from "lucide-react";
import crackRepair from "@/assets/crack-repair.jpg";
import crawlspace from "@/assets/crawlspace.jpg";
import sumpPump from "@/assets/sump-pump.jpg";

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
  { img: crackRepair, icon: Hammer, title: "Foundation Repair", desc: "Wall crack repair, pier and beam stabilization, settling correction, and bowing wall solutions." },
  { img: crawlspace, icon: Home, title: "Crawlspace Encapsulation", desc: "Heavy-duty vapor barriers, dehumidifiers, insulation and structural reinforcement." },
  { img: sumpPump, icon: Droplets, title: "Sump Pump Installation", desc: "Primary and backup pump systems with battery backup for peace of mind." },
];

const more = [
  { icon: Shield, title: "Waterproofing", desc: "Interior and exterior systems to keep your home dry, year after year." },
  { icon: Wrench, title: "Concrete Work", desc: "Slab repair, leveling and new pours for foundations, walks and driveways." },
  { icon: Wind, title: "Mold & Moisture Control", desc: "Dehumidification and air quality solutions for healthier homes." },
];

function ServicesPage() {
  return (
    <>
      <section className="bg-secondary py-20 text-secondary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Services</div>
          <h1 className="mt-4 text-5xl sm:text-7xl">Foundations to finishes.<br/><span className="text-stroke">We handle it all.</span></h1>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl space-y-16 px-4 sm:px-6">
          {services.map((s, i) => (
            <div key={i} className={`grid gap-10 md:grid-cols-2 md:items-center ${i%2 ? "md:[&>*:first-child]:order-2" : ""}`}>
              <img src={s.img} alt={s.title} loading="lazy" width={1200} height={900} className="aspect-[4/3] w-full object-cover" />
              <div>
                <s.icon className="h-10 w-10 text-primary" />
                <h2 className="mt-4 text-4xl sm:text-5xl">{s.title}</h2>
                <p className="mt-4 max-w-md text-muted-foreground">{s.desc}</p>
                <Link to="/contact" className="mt-6 inline-flex items-center gap-2 font-bold uppercase tracking-wider hover:text-primary">
                  Get a free estimate <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-concrete py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-4xl sm:text-5xl">More we do</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {more.map((m, i) => (
              <div key={i} className="border border-border bg-card p-8">
                <m.icon className="h-8 w-8 text-primary" />
                <div className="mt-4 font-display text-2xl uppercase">{m.title}</div>
                <p className="mt-2 text-sm text-muted-foreground">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-12 sm:px-6 md:flex-row md:items-center">
          <h2 className="text-3xl sm:text-4xl">Ready to fix it for good?</h2>
          <a href="tel:2564482018" className="inline-flex items-center gap-2 bg-secondary px-6 py-3 font-bold uppercase tracking-wider text-secondary-foreground">
            <Phone className="h-5 w-5" /> (256) 448-2018
          </a>
        </div>
      </section>
    </>
  );
}
