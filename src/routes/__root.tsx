import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { Phone, Menu } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.png";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl">404</h1>
        <p className="mt-4 text-muted-foreground">This page is on shaky ground.</p>
        <Link to="/" className="mt-6 inline-block bg-primary px-6 py-3 font-bold text-primary-foreground">
          Back home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 text-center">
      <div>
        <h1 className="text-3xl">Something cracked</h1>
        <p className="mt-2 text-muted-foreground">{error.message}</p>
        <button
          onClick={() => { router.invalidate(); reset(); }}
          className="mt-6 bg-primary px-6 py-3 font-bold text-primary-foreground"
        >
          Try again
        </button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "The Crack Guys — Foundation, Crawlspace & Waterproofing Experts" },
      { name: "description", content: "Family-owned foundation repair, crawlspace encapsulation, and waterproofing in Quinton and surrounding areas. 12+ years, 1,000+ five-star reviews. Free estimates." },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    { to: "/", label: "Home" },
    { to: "/services", label: "Services" },
    { to: "/about", label: "About" },
    { to: "/reviews", label: "Reviews" },
    { to: "/contact", label: "Contact" },
  ] as const;
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-secondary text-secondary-foreground">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center bg-primary font-display text-xl text-primary-foreground">CG</div>
          <div className="leading-tight">
            <div className="font-display text-lg tracking-wide">The Crack Guys</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-secondary-foreground/60">Foundation · Crawlspace · Water</div>
          </div>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map(l => (
            <Link key={l.to} to={l.to} className="text-sm font-medium uppercase tracking-wider text-secondary-foreground/80 transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }} activeOptions={{ exact: l.to === "/" }}>
              {l.label}
            </Link>
          ))}
        </nav>
        <a href="tel:2564482018" className="hidden items-center gap-2 bg-primary px-5 py-3 font-bold text-primary-foreground transition-transform hover:scale-105 md:flex">
          <Phone className="h-4 w-4" /> (256) 448-2018
        </a>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          <Menu className="h-6 w-6" />
        </button>
      </div>
      {open && (
        <div className="border-t border-white/10 px-4 py-4 md:hidden">
          {links.map(l => (
            <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="block py-2 text-sm uppercase tracking-wider">
              {l.label}
            </Link>
          ))}
          <a href="tel:2564482018" className="mt-3 flex items-center justify-center gap-2 bg-primary px-5 py-3 font-bold text-primary-foreground">
            <Phone className="h-4 w-4" /> (256) 448-2018
          </a>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="font-display text-3xl">The Crack Guys</div>
          <p className="mt-3 max-w-sm text-sm text-secondary-foreground/70">
            Family-owned foundation, crawlspace and waterproofing experts. Serving Quinton and nearby areas — 24 hours a day.
          </p>
          <a href="tel:2564482018" className="mt-6 inline-flex items-center gap-2 bg-primary px-5 py-3 font-bold text-primary-foreground">
            <Phone className="h-4 w-4" /> Call (256) 448-2018
          </a>
        </div>
        <div>
          <div className="mb-4 text-xs uppercase tracking-[0.2em] text-primary">Hours</div>
          <p className="text-sm text-secondary-foreground/80">Open 24 hours<br/>7 days a week</p>
          <p className="mt-3 text-sm text-secondary-foreground/80">Typically replies within 1 day</p>
        </div>
        <div>
          <div className="mb-4 text-xs uppercase tracking-[0.2em] text-primary">Service Area</div>
          <p className="text-sm text-secondary-foreground/80">Quinton, AL & surrounding areas</p>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-6 text-center text-xs text-secondary-foreground/50">
        © {new Date().getFullYear()} The Crack Guys. Family-owned & operated.
      </div>
    </footer>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1"><Outlet /></main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
