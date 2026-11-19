import { updateUsersCache } from "@/app/users/create/updateUsersCache";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";

export function UserDialog({ className, children, user }) {
  const router = useRouter();

  // ===== submit form handler =====
  const onSubmit = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    let data = Object.fromEntries(formData.entries());
    console.log("Form submitted:", data);

    try {
      const response = await fetch(`http://localhost:5000/users/${user._id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Failed to create user");
      }

      alert("User updated successfully!");
      console.log("User Updated:", result);
      await updateUsersCache();

      form.reset();
      router.push("/users");
    } catch (error) {
      console.error("User update failed:", error);
      alert(`${error.message || "Unknown error"}`);
    }
  };

  return (
    <Dialog>
      <DialogTrigger
        render={
          <Button variant="outline" className={className}>
            {children}
          </Button>
        }
      />
      <DialogContent className="sm:max-w-sm">
        <form onSubmit={onSubmit}>
          <DialogHeader>
            <DialogTitle className="mb-2">Edit profile</DialogTitle>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Label htmlFor="name">Name</Label>
              <Input
                type="text"
                id="name"
                name="name"
                defaultValue={user.name}
              />
            </Field>
            <Field>
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                name="email"
                defaultValue={user.email}
              />
            </Field>
          </FieldGroup>
          <DialogFooter>
            <DialogClose render={<Button variant="outline">Cancel</Button>} />
            <DialogClose render={<Button type="submit">Save changes</Button>} />
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
