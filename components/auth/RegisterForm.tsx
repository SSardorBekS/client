"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { signIn } from "next-auth/react";

export const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const result = await signIn("createAccount", {
        redirect: false,
        username,
        password,
        email,
      });
      if (result.error) {
        toast({ title: "Invalid username or password" });
      }

      // toast({
      //   title: "Login successful",
      // }); // Misol uchun, muvaffaqiyatli login xabari
      // router.push("/dashboard"); // Aslida login qilinganligini tasdiqlashni unutmang
    } catch (error) {
      toast({
        title: "Something went wrong. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full space-y-6 rounded-2xl bg-white px-4 py-10 shadow-md ring-1 ring-black/5 sm:w-96 sm:px-8">
      <header className="text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 40 40"
          className="mx-auto size-10 text-zinc-950"
          aria-hidden
        >
          <circle cx="20" cy="20" r="20" fill="#D9D9D9" />
        </svg>
        <h1 className="mt-4 text-xl font-medium tracking-tight text-zinc-950">
          Sign up to Voice Diary
        </h1>
      </header>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-medium text-zinc-950">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full rounded-md bg-white px-3.5 py-2 text-sm outline-none ring-1 ring-inset ring-zinc-300 hover:ring-zinc-400 focus:ring-[1.5px] focus:ring-zinc-950"
          />
        </div>
        <div className="space-y-2">
          <Label
            htmlFor="username"
            className="text-sm font-medium text-zinc-950"
          >
            Username
          </Label>
          <Input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="w-full rounded-md bg-white px-3.5 py-2 text-sm outline-none ring-1 ring-inset ring-zinc-300 hover:ring-zinc-400 focus:ring-[1.5px] focus:ring-zinc-950"
          />
        </div>
        <div className="space-y-2">
          <Label
            htmlFor="password"
            className="text-sm font-medium text-zinc-950"
          >
            Password
          </Label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full rounded-md bg-white px-3.5 py-2 text-sm outline-none ring-1 ring-inset ring-zinc-300 hover:ring-zinc-400 focus:ring-[1.5px] focus:ring-zinc-950"
          />
        </div>
        <Button
          type="submit"
          className="w-full rounded-md bg-zinc-950 px-3.5 py-1.5 text-center text-sm font-medium text-white shadow outline-none ring-1 ring-inset ring-zinc-950 hover:bg-zinc-800 focus-visible:outline-[1.5px] focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
          disabled={isLoading}
        >
          {isLoading ? <Loader2 className="mx-auto animate-spin" /> : "Sign Up"}
        </Button>
      </form>
      <p className="text-center text-sm text-zinc-500">
        No account?{" "}
        <Link
          href="/sign-up"
          className="font-medium text-zinc-950 decoration-zinc-950/20 underline-offset-4 outline-none hover:text-zinc-700 hover:underline"
        >
          Create an account
        </Link>
      </p>
    </div>
  );
};