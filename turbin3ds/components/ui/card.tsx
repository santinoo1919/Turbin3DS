import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const cardVariants = cva(
  "rounded-md border shadow-sm", // base styles
  {
    variants: {
      variant: {
        default: "bg-card text-card-foreground",
        contact: "bg-blue-50/50 border-blue-100 shadow-sm",
        organization: "bg-purple-50/50 border-purple-100 shadow-sm",
      },
      size: {
        default: "p-4",
        sm: "p-2",
        lg: "p-6",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

function Card({ className, variant, size, ...props }: CardProps) {
  return (
    <div
      className={cn(cardVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { Card, cardVariants };
