"use client";

import { createUser } from "@/lib/actions/users";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useActionState } from "react";

export function UserForm() {
  const [state, formAction, pending] = useActionState(createUser, {
    error: null,
  });

  return (
    <form className="flex w-96 flex-col gap-4" action={formAction}>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="fieldgroup-name">Name</FieldLabel>
          <Input id="fieldgroup-name" name="name" placeholder="Jordan Lee" />
        </Field>
        <Field>
          <FieldLabel htmlFor="fieldgroup-email">Email</FieldLabel>
          <Input
            id="fieldgroup-email"
            name="email"
            type="email"
            placeholder="name@example.com"
          />
          <FieldDescription>
            We&apos;ll send updates to this address.
          </FieldDescription>
        </Field>

        {state?.error ? (
          <p className="text-sm text-destructive">{state.error}</p>
        ) : null}

        <Field orientation="horizontal">
          <Button type="reset" variant="outline" disabled={pending}>
            Reset
          </Button>
          <Button type="submit" disabled={pending}>
            {pending ? "Creating..." : "Submit"}
          </Button>
        </Field>
      </FieldGroup>
    </form>
  );
}
