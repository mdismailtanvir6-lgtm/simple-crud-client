import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function UserCard({ user }) {
  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0 py-2 px-3">
      <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
      <CardHeader>
        <CardTitle>{user.name}</CardTitle>
        <CardDescription>{user.email}</CardDescription>
      </CardHeader>
    </Card>
  );
}
