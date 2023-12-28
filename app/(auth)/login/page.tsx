import { auth, getPageSession } from "@/auth/lucia";
import * as context from "next/headers";
import { redirect } from "next/navigation";

import React from "react";
import AuthForm, { AuthProps } from "@/components/AuthForm";
import Button from "@/components/Button";

import { Input } from "@nextui-org/react";

export default async function Login() {
  const session = await getPageSession();

  if (session) redirect("/profile");

  const formProps: AuthProps = {
    heading: "Welcome Back!",
    subheading: "Please enter your details to continue.",
    buttonText: "Continue",
    linkWord: "Don't",
    linkHref: "/signup",
    linkText: "Sign Up",
  };

  return (
    <main className="flex items-center justify-center min-h-screen">
      <AuthForm action="/api/login" {...formProps}></AuthForm>
    </main>
  );
}
