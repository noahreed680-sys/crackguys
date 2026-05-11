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
  { name: "Linda B.", text: "Outstanding work on our foundation piers. The house feels solid again and the warranty gives us real peace of mind." },
  { name: "Greg H.", text: "Best contractor experience I've had. Showed up on time, finished early, and stayed on budget. What more could you ask for?" },
  { name: "Amanda S.", text: "After three other quotes, The Crack Guys were the only ones who actually explained what was wrong. Saved us thousands." },
];

function ReviewsPage() {
  return (
    <>
      <section className="bg-secondary py-20 text-secondary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Reviews</div>
          <h1 className="mt-4 text-5xl sm:text-7xl">1,081 reasons<br/>to <span className="text-primary">trust us.</span></h1>
          <div className="mt-8 flex items-center gap-4">
            <div className="font-display text-6xl">4.9</div>
            <div>
              <div className="flex">{[...Array(5)].map((_,i)=>(<Star key={i} className="h-6 w-6 fill-primary text-primary"/>))}</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-secondary-foreground/70">Google Verified</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <figure key={i} className="border border-border bg-card p-6">
              <div className="flex">{[...Array(5)].map((_,j)=>(<Star key={j} className="h-4 w-4 fill-primary text-primary"/>))}</div>
              <blockquote className="mt-4 text-base leading-relaxed">"{r.text}"</blockquote>
              <figcaption className="mt-5 text-sm font-bold uppercase tracking-wider">— {r.name}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
