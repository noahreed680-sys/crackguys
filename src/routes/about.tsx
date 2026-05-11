import { createFileRoute, Link } from "@tanstack/react-router";
import { Users, BadgeCheck, Heart, MapPin, ArrowRight, Phone } from "lucide-react";
import { PHOTOS } from "@/lib/photos";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — The Crack Guys" },
      { name: "description", content: "A family-owned foundation, crawlspace and waterproofing company serving Quinton, AL for over 12 years." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="border-b border-border bg-surface py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-xs font-semibold uppercase tracking-wider text-primary">About us</div>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">A family business. A neighbor's promise.</h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            We're a small, proud, family-owned crew that's protected over 1,000 homes around Quinton — one foundation at a time.
          </p>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 md:grid-cols-2 md:items-center">
          <div className="overflow-hidden rounded-2xl border border-border">
            <img src={PHOTOS.worker} alt="Our team at work" loading="lazy" width={1200} height={900} className="aspect-[4/3] w-full object-cover" />
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">12+ years protecting homes.</h2>
            <p className="mt-4 text-muted-foreground">
              The Crack Guys started with a simple idea: do the job right, treat people fair, and never cut corners. Over a decade later, we've earned the trust of more than 1,000 families across Quinton and the surrounding region.
            </p>
            <p className="mt-3 text-muted-foreground">
              When you call, you talk to people who actually care about your home — not a call center. That's why our reviews read like thank-you notes.
            </p>
            <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
              Talk to our team <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-surface py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold tracking-tight">What we stand for</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
            {[
              { icon: Heart, title: "Family First", desc: "Owned and operated by people who answer to their name." },
              { icon: BadgeCheck, title: "Honest Work", desc: "Free estimates, fair pricing, no upsells. Ever." },
              { icon: Users, title: "Trusted Crew", desc: "Background checked, Google verified." },
              { icon: MapPin, title: "Local Roots", desc: "Born and raised in Alabama. Proud of it." },
            ].map((v, i) => (
              <div key={i} className="rounded-2xl border border-border bg-background p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <v.icon className="h-5 w-5" />
                </div>
                <div className="mt-4 text-lg font-bold">{v.title}</div>
                <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-14 text-primary-foreground">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-5 px-4 sm:px-6 md:flex-row md:items-center">
          <h2 className="text-2xl font-bold sm:text-3xl">Let's take a look at your home.</h2>
          <a href="tel:2564482018" className="inline-flex items-center gap-2 rounded-lg bg-background px-5 py-3 text-sm font-semibold text-foreground hover:bg-background/90">
            <Phone className="h-4 w-4" /> (256) 448-2018
          </a>
        </div>
      </section>
    </>
  );
}
