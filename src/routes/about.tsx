import { createFileRoute } from "@tanstack/react-router";
import { Users, BadgeCheck, Heart, MapPin } from "lucide-react";
import hero from "@/assets/hero-foundation.jpg";

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
      <section className="bg-secondary py-20 text-secondary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">About</div>
          <h1 className="mt-4 text-5xl sm:text-7xl">A family business.<br/><span className="text-primary">A neighbor's promise.</span></h1>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 md:grid-cols-2 md:items-center">
          <img src={hero} alt="Our team at work" loading="lazy" width={1600} height={1100} className="aspect-[4/3] w-full object-cover" />
          <div>
            <h2 className="text-3xl sm:text-4xl">12+ years protecting homes.</h2>
            <p className="mt-4 text-muted-foreground">
              The Crack Guys started with a simple idea: do the job right, treat people fair, and never cut corners. Over a decade later, we've earned the trust of more than 1,000 families across Quinton and the surrounding region — one foundation, one crawlspace, one sump pump at a time.
            </p>
            <p className="mt-4 text-muted-foreground">
              We're a family-owned and operated team. When you call, you talk to people who actually care about your home — not a call center. That's why our reviews read like thank-you notes.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-concrete py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-3xl sm:text-5xl">What we stand for</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {[
              { icon: Heart, title: "Family First", desc: "Owned and operated by people who answer to their name, not a corporation." },
              { icon: BadgeCheck, title: "Honest Work", desc: "Free estimates, fair pricing, no upsells. Ever." },
              { icon: Users, title: "Trusted Crew", desc: "Background checked, Google verified, and proud of it." },
              { icon: MapPin, title: "Local Roots", desc: "Born and raised in Alabama. Proud to serve our neighbors." },
            ].map((v, i) => (
              <div key={i} className="border border-border bg-card p-6">
                <v.icon className="h-7 w-7 text-primary" />
                <div className="mt-3 font-display text-xl uppercase">{v.title}</div>
                <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
