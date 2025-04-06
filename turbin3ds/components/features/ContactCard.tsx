"use client";

import { BaseCard } from "@/components/patterns/BaseCard";
import { Button } from "@/components/ui/button";

interface ContactCardProps {
  name: string;
  email: string;
  status: string;
  phone?: string;
  avatarUrl?: string;
  onEdit?: () => void;
  onContact?: () => void;
}

export function ContactCard(props: ContactCardProps) {
  const actions = (
    <>
      {props.onContact && (
        <Button variant="outline" size="sm" onClick={props.onContact}>
          Contact
        </Button>
      )}
      {props.onEdit && (
        <Button variant="ghost" size="sm" onClick={props.onEdit}>
          Edit
        </Button>
      )}
    </>
  );

  return (
    <BaseCard
      title={props.name}
      subtitle={props.email}
      status={props.status}
      imageUrl={props.avatarUrl}
      className="bg-blue-50/50 border-blue-100"
      actions={actions}
    >
      {props.phone && (
        <p className="text-sm text-muted-foreground mt-1">{props.phone}</p>
      )}
    </BaseCard>
  );
}
