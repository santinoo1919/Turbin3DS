"use client";

import { Card } from "@/components/ui/card";

export default function FeedbackComponentsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Feedback Components</h1>

      <Card className="p-6">
        <p>This page would showcase feedback components like:</p>
        <ul className="list-disc pl-6 mt-4">
          <li>Alerts</li>
          <li>Toasts</li>
          <li>Modals/Dialogs</li>
          <li>Progress indicators</li>
          <li>Loading spinners</li>
          <li>Error messages</li>
        </ul>
      </Card>
    </div>
  );
}
