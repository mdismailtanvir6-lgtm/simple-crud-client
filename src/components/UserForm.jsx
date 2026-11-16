// "use client";

// import { updateUsersCache } from "@/app/users/create/updateUsersCache";
// import { Check } from "@gravity-ui/icons";
// import {
//   Button,
//   Description,
//   FieldError,
//   Form,
//   Input,
//   Label,
//   TextField,
// } from "@heroui/react";
// import { useRouter } from "next/navigation";

// export function UserForm() {
//   const router = useRouter();

//   const onSubmit = async (e) => {
//     e.preventDefault();

//     const form = e.currentTarget;
//     const formData = new FormData(form);
//     let data = Object.fromEntries(formData.entries());

//     try {
//       const response = await fetch("http://localhost:8000/users", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       });

//       const result = await response.json();

//       if (!response.ok || !result.success) {
//         throw new Error(result.message || "Failed to create user");
//       }

//       await updateUsersCache();

//       form.reset();
//       router.push("/users");

//     } catch (error) {
//       console.error("User creation failed:", error);
//     }
//   };

//   return (
//     <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>
//       {/* ==== name ===== */}
//       <TextField
//         isRequired
//         name="name"
//         type="text"
//         validate={(value) => {
//           if (value.length < 2) {
//             return "Name must be at least 2 characters";
//           }

//           return null;
//         }}
//       >
//         <Label>Name</Label>
//         <Input placeholder="John Doe" />
//         <FieldError />
//       </TextField>

//       {/* ==== email ===== */}
//       <TextField
//         isRequired
//         name="email"
//         type="email"
//         validate={(value) => {
//           if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
//             return "Please enter a valid email address";
//           }

//           return null;
//         }}
//       >
//         <Label>Email</Label>
//         <Input placeholder="john@example.com" />
//         <FieldError />
//       </TextField>

//       {/* ==== password ===== */}
//       <TextField
//         isRequired
//         minLength={8}
//         name="password"
//         type="password"
//         validate={(value) => {
//           if (value.length < 8) {
//             return "Password must be at least 8 characters";
//           }
//           if (!/[A-Z]/.test(value)) {
//             return "Password must contain at least one uppercase letter";
//           }
//           if (!/[0-9]/.test(value)) {
//             return "Password must contain at least one number";
//           }

//           return null;
//         }}
//       >
//         <Label>Password</Label>
//         <Input placeholder="Enter your password" />
//         <Description>
//           Must be at least 8 characters with 1 uppercase and 1 number
//         </Description>
//         <FieldError />
//       </TextField>

//       {/* ==== age ===== */}
//       <TextField
//         isRequired
//         name="age"
//         type="number"
//         validate={(value) => {
//           if (value < 15) {
//             return "Age must be at least 15";
//           }

//           return null;
//         }}
//       >
//         <Label>Age</Label>
//         <Input placeholder="25" />
//         <FieldError />
//       </TextField>

//       {/* ==== role ===== */}
//       <div className="flex flex-col gap-3">
//         <Label>Role</Label>

//         <label className="flex items-center gap-2 cursor-pointer">
//           <input
//             type="radio"
//             name="role"
//             value="admin"
//             className="h-4 w-4 accent-primary"
//           />
//           Admin
//         </label>

//         <label className="flex items-center gap-2 cursor-pointer">
//           <input
//             type="radio"
//             name="role"
//             value="author"
//             className="h-4 w-4 accent-primary"
//           />
//           Author
//         </label>

//         <label className="flex items-center gap-2 cursor-pointer">
//           <input
//             type="radio"
//             name="role"
//             value="user"
//             defaultChecked
//             className="h-4 w-4 accent-primary"
//           />
//           User
//         </label>
//       </div>

//       {/* ====== submit btn ======= */}
//       <div className="flex gap-2">
//         <Button type="submit">
//           <Check />
//           Submit
//         </Button>
//         <Button type="reset" variant="secondary">
//           Reset
//         </Button>
//       </div>
//     </Form>
//   );
// }
