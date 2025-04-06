"use client";

import { z } from "zod";
import { BaseForm } from "@/components/patterns/BaseForm";
import { Input } from "@/components/ui/input";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
});

type ContactFormProps = {
  onSubmit: (data: z.infer<typeof contactSchema>) => void;
  defaultValues?: Partial<z.infer<typeof contactSchema>>;
};

export function ContactForm({ onSubmit, defaultValues }: ContactFormProps) {
  return (
    <BaseForm
      schema={contactSchema}
      onSubmit={onSubmit}
      defaultValues={defaultValues}
      submitLabel="Save Contact"
    >
      <FormField
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Name</FormLabel>
            <FormControl>
              <Input placeholder="John Doe" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input type="email" placeholder="john@example.com" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        name="phone"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Phone (optional)</FormLabel>
            <FormControl>
              <Input type="tel" placeholder="+1 (555) 000-0000" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </BaseForm>
  );
}
