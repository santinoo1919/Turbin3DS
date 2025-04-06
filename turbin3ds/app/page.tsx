"use client";

import { ContactForm } from "@/components/features/ContactForm";

export default function Home() {
  return (
    <main className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">Contact Form</h1>

      <div className="max-w-md">
        <ContactForm
          onSubmit={(data: any) => {
            console.log("Form submitted:", data);
            alert("Form submitted! Check console.");
          }}
          defaultValues={{
            name: "John Doe",
            email: "john@example.com",
          }}
        />
      </div>
    </main>
  );
}
