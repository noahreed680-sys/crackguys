import { createFileRoute } from "@tanstack/react-router";
import { Phone, Clock, MapPin, MessageSquare } from "lucide-react";
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
      <section className="bg-secondary py-20 text-secondary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Contact</div>
          <h1 className="mt-4 text-5xl sm:text-7xl">Free estimate.<br/><span className="text-primary">Honest answer.</span></h1>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 md:grid-cols-5">
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-start gap-4">
              <Phone className="mt-1 h-6 w-6 text-primary" />
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Call us</div>
                <a href="tel:2564482018" className="font-display text-2xl">(256) 448-2018</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="mt-1 h-6 w-6 text-primary" />
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Hours</div>
                <div className="font-bold">Open 24 hours · 7 days a week</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="mt-1 h-6 w-6 text-primary" />
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Service area</div>
                <div className="font-bold">Quinton, AL & surrounding areas</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MessageSquare className="mt-1 h-6 w-6 text-primary" />
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Response time</div>
                <div className="font-bold">Typically within 1 day</div>
              </div>
            </div>
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="md:col-span-3 border border-border bg-card p-8"
          >
            {sent ? (
              <div className="py-12 text-center">
                <h2 className="text-3xl">Thanks!</h2>
                <p className="mt-3 text-muted-foreground">We'll be in touch shortly. For urgent issues, call (256) 448-2018.</p>
              </div>
            ) : (
              <div className="space-y-5">
                <h2 className="text-3xl">Request a free estimate</h2>
                {[
                  { name: "name", label: "Name", type: "text" },
                  { name: "phone", label: "Phone", type: "tel" },
                  { name: "email", label: "Email", type: "email" },
                ].map(f => (
                  <div key={f.name}>
                    <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">{f.label}</label>
                    <input required name={f.name} type={f.type} className="w-full border border-border bg-background px-4 py-3 outline-none focus:border-primary" />
                  </div>
                ))}
                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">How can we help?</label>
                  <textarea required name="message" rows={4} className="w-full border border-border bg-background px-4 py-3 outline-none focus:border-primary" />
                </div>
                <button className="w-full bg-primary px-6 py-4 font-bold uppercase tracking-wider text-primary-foreground transition-transform hover:scale-[1.01]">
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
