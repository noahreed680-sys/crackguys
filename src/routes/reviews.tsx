import { createFileRoute } from "@tanstack/react-router";
import { Star } from "lucide-react";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews — The Crack Guys" },
      { name: "description", content: "1,081+ five-star Google reviews for The Crack Guys foundation, crawlspace and waterproofing experts." },
    ],
  }),
  component: ReviewsPage,
});

const reviews = [
  { name: "Sarah M.", text: "Thanks so much Clay for taking care of my house and foundation issues! The whole crew was professional from start to finish." },
  { name: "Mike R.", text: "My crawl space looks so nice now! Vapor barrier installed perfectly and they cleaned up better than they found it." },
  { name: "Jennifer T.", text: "Thank you for sending Austin and Ryan to check our sump pump. Quick, courteous, and totally fixed the issue." },
  { name: "David L.", text: "Honest pricing and no high-pressure sales. They explained everything in plain English. Highly recommend." },
  { name: "Emily P.", text: "Family-owned and it shows. They treated our home like it was their own. The cracks in our basement walls are gone for good." },
  { name: "Tom K.", text: "Called late on a Saturday and they were out the next day. 24-hour service is no joke with these folks." },
  { name: "Linda B.", text: "Outstanding work on our foundation piers. The house feels solid again and the warranty gives us peace of mind." },
  { name: "Greg H.", text: "Best contractor experience I've had. Showed up on time, finished early, and stayed on budget. What more could you ask for?" },
  { name: "Amanda S.", text: "After three other quotes, The Crack Guys were the only ones who actually explained what was wrong. Saved us thousands." },
];

function ReviewsPage() {
  return (
    <>
      <section className="border-b border-border bg-surface py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-xs font-semibold uppercase tracking-wider text-primary">Reviews</div>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">1,081 reasons to trust us.</h1>
          <div className="mt-6 flex items-center gap-4">
            <div className="text-5xl font-bold">4.9</div>
            <div>
              <div className="flex">{[...Array(5)].map((_,i)=>(<Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400"/>))}</div>
              <div className="mt-1 text-xs text-muted-foreground">Google Verified · 1,081 reviews</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <figure key={i} className="rounded-2xl border border-border bg-card p-6">
              <div className="flex">{[...Array(5)].map((_,j)=>(<Star key={j} className="h-4 w-4 fill-amber-400 text-amber-400"/>))}</div>
              <blockquote className="mt-4 text-base leading-relaxed">"{r.text}"</blockquote>
              <figcaption className="mt-5 flex items-center gap-2 text-sm">
                <span className="font-semibold">{r.name}</span>
                <span className="text-muted-foreground">· Verified Google Review</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
