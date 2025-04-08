"use client";

import { Card } from "@/components/ui/card";

export default function LayoutComponentsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Layout Components</h1>

      <Card className="p-6">
        <p>This page would showcase layout components like:</p>
        <ul className="list-disc pl-6 mt-4">
          <li>Grid system</li>
          <li>Containers</li>
          <li>Dividers</li>
          <li>Panels</li>
          <li>Tabs</li>
          <li>Accordions</li>
        </ul>
      </Card>
    </div>
  );
}
