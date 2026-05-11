import { createFileRoute } from "@tanstack/react-router";
import { Phone, Clock, MapPin, MessageSquare, Mail } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — The Crack Guys" },
      { name: "description", content: "Get a free estimate. Call (256) 448-2018 or send us a message. Open 24 hours, family-owned." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <section className="border-b border-border bg-surface py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-xs font-semibold uppercase tracking-wider text-primary">Contact</div>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">Get a free estimate.</h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">Tell us what's going on. We'll come take a look — no pressure, no cost.</p>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-5">
          <div className="space-y-5 md:col-span-2">
            {[
              { icon: Phone, label: "Call us", value: "(256) 448-2018", href: "tel:2564482018" },
              { icon: Clock, label: "Hours", value: "Open 24 hours · 7 days a week" },
              { icon: MapPin, label: "Service area", value: "Quinton, AL & surrounding areas" },
              { icon: MessageSquare, label: "Response time", value: "Typically within 1 day" },
              { icon: Mail, label: "Email", value: "hello@thecrackguys.com", href: "mailto:hello@thecrackguys.com" },
            ].map((it, i) => (
              <div key={i} className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <it.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{it.label}</div>
                  {it.href ? (
                    <a href={it.href} className="text-base font-semibold hover:text-primary">{it.value}</a>
                  ) : (
                    <div className="text-base font-semibold">{it.value}</div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="rounded-2xl border border-border bg-card p-7 md:col-span-3"
          >
            {sent ? (
              <div className="py-12 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">✓</div>
                <h2 className="mt-4 text-2xl font-bold">Thanks — message received.</h2>
                <p className="mt-2 text-muted-foreground">We'll be in touch shortly. For urgent issues, call (256) 448-2018.</p>
              </div>
            ) : (
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Request a free estimate</h2>
                <p className="text-sm text-muted-foreground">We'll get back to you within one business day.</p>
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    { name: "name", label: "Name", type: "text" },
                    { name: "phone", label: "Phone", type: "tel" },
                  ].map(f => (
                    <div key={f.name}>
                      <label className="mb-1.5 block text-sm font-medium">{f.label}</label>
                      <input required name={f.name} type={f.type} className="w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20" />
                    </div>
                  ))}
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium">Email</label>
                  <input required name="email" type="email" className="w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium">How can we help?</label>
                  <textarea required name="message" rows={5} className="w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
                </div>
                <button className="w-full rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
                  Send Message
                </button>
              </div>
            )}
          </form>
        </div>
      </section>
    </>
  );
}
