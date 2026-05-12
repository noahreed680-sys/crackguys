import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";

import appCss from "../styles.css?url";
import logoImg from "@/assets/logo.png";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold">404</h1>
        <p className="mt-4 text-muted-foreground">This page doesn't exist.</p>
        <Link to="/" className="mt-6 inline-block rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground">
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
        <h1 className="text-3xl font-bold">Something went wrong</h1>
        <p className="mt-2 text-muted-foreground">{error.message}</p>
        <button
          onClick={() => { router.invalidate(); reset(); }}
          className="mt-6 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground"
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
      { property: "og:title", content: "The Crack Guys — Foundation, Crawlspace & Waterproofing Experts" },
      { name: "twitter:title", content: "The Crack Guys — Foundation, Crawlspace & Waterproofing Experts" },
      { property: "og:description", content: "Family-owned foundation repair, crawlspace encapsulation, and waterproofing in Quinton and surrounding areas. 12+ years, 1,000+ five-star reviews. Free estimates." },
      { name: "twitter:description", content: "Family-owned foundation repair, crawlspace encapsulation, and waterproofing in Quinton and surrounding areas. 12+ years, 1,000+ five-star reviews. Free estimates." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/52228600-a443-4a84-85f6-51346c3ea2f3/id-preview-90e3e304--c061718f-f5a4-40f4-95a7-bd3b9ccc4474.lovable.app-1778545044512.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/52228600-a443-4a84-85f6-51346c3ea2f3/id-preview-90e3e304--c061718f-f5a4-40f4-95a7-bd3b9ccc4474.lovable.app-1778545044512.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:type", content: "website" },
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

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2.5">
      <img src={logoImg} alt="The Crack Guys" width={160} height={48} className="h-11 w-auto" />
    </Link>
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
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 sm:px-6">
        <Logo />
        <nav className="hidden items-center gap-1 md:flex">
          {links.map(l => (
            <Link key={l.to} to={l.to}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              activeProps={{ className: "rounded-md px-3 py-2 text-sm font-semibold text-foreground bg-secondary" }}
              activeOptions={{ exact: l.to === "/" }}>
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <a href="tel:2564482018" className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
            <Phone className="h-4 w-4" /> (256) 448-2018
          </a>
        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-background px-4 py-3 md:hidden">
          {links.map(l => (
            <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="block rounded-md px-3 py-2.5 text-sm font-medium hover:bg-secondary">
              {l.label}
            </Link>
          ))}
          <a href="tel:2564482018" className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground">
            <Phone className="h-4 w-4" /> (256) 448-2018
          </a>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Family-owned foundation, crawlspace and waterproofing experts. Serving Quinton and nearby areas — open 24 hours.
          </p>
          <a href="tel:2564482018" className="mt-5 inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
            <Phone className="h-4 w-4" /> (256) 448-2018
          </a>
        </div>
        <div>
          <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Hours</div>
          <p className="text-sm">Open 24 hours<br/>7 days a week</p>
          <p className="mt-2 text-sm text-muted-foreground">Replies within 1 day</p>
        </div>
        <div>
          <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Service Area</div>
          <p className="text-sm">Quinton, AL & surrounding areas</p>
        </div>
      </div>
      <div className="border-t border-border px-4 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} The Crack Guys. Family-owned & operated · Licensed & insured.
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
