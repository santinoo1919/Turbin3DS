"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ArrowRight,
  Layers,
  Layout,
  SlidersHorizontal,
  Bell,
  BarChart3,
  Component,
  Github,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 px-6 md:px-8 flex flex-col items-center justify-center text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
              Turbin3DS
            </span>{" "}
            Design System
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            its a library thing
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            {/* <Button size="lg" className="gap-2">
              <span>Explore Components</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <Github className="h-4 w-4" />
              <span>View on GitHub</span>
            </Button> */}
          </div>
        </div>
      </section>

      {/* Components Section */}
      <section className="py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Component Categories</h2>
            {/* <p className="text-muted-foreground max-w-2xl mx-auto">
              i forgot why i made this text box
            </p> */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CategoryCard
              icon={<SlidersHorizontal />}
              title="Basic Inputs"
              description="Buttons, inputs, selects, and other basic form controls"
              href="/components/basic-inputs"
              color="bg-blue-500/10 text-blue-500"
            />

            <CategoryCard
              icon={<Component />}
              title="Form Components"
              description="Form layouts, validations, and specialized inputs"
              href="/components/form-components"
              color="bg-purple-500/10 text-purple-500"
            />

            <CategoryCard
              icon={<BarChart3 />}
              title="Data Display"
              description="Cards, badges, avatars, and other data visualization components"
              href="/components/data-display"
              color="bg-emerald-500/10 text-emerald-500"
            />

            <CategoryCard
              icon={<Layers />}
              title="Feature Components"
              description="Higher-level components used in the application"
              href="/components/feature-components"
              color="bg-amber-500/10 text-amber-500"
            />

            <CategoryCard
              icon={<Layout />}
              title="Layout Components"
              description="Layout structuring components and patterns"
              href="/components/layout"
              color="bg-sky-500/10 text-sky-500"
            />

            <CategoryCard
              icon={<Bell />}
              title="Feedback Components"
              description="Alerts, toasts, dialogs, and other feedback mechanisms"
              href="/components/feedback"
              color="bg-rose-500/10 text-rose-500"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function CategoryCard({
  icon,
  title,
  description,
  href,
  color,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  color: string;
}) {
  return (
    <Link href={href} className="block group">
      <div className="border rounded-lg p-6 hover:border-primary hover:shadow-md transition-all h-full flex flex-col bg-card">
        <div className={`p-3 rounded-lg w-fit mb-4 ${color}`}>{icon}</div>
        <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
          {title}
        </h2>
        <p className="text-muted-foreground flex-grow">{description}</p>
        <div className="mt-5 flex justify-between items-center">
          <span className="text-sm font-medium">Explore</span>
          <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
        </div>
      </div>
    </Link>
  );
}
