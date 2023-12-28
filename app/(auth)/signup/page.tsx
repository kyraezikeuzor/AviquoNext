import { auth, getPageSession } from "@/auth/lucia";
import * as context from "next/headers";
import { redirect } from "next/navigation";

import React from "react";
import AuthForm, { AuthProps } from "@/components/AuthForm";
import Button from "@/components/Button";

import { Input } from "@nextui-org/react";

export default async function Signup() {
  const session = await getPageSession();

  if (session) redirect("/profile");

  const formProps: AuthProps = {
    heading: "Sign up for Aviquo",
    subheading: "Let's get you started.",
    buttonText: "Sign Up",
    linkWord: "Already",
    linkHref: "/login",
    linkText: "Log In",
  };

  return (
    <AuthForm action="/api/signup" {...formProps}>
      <Input
        id="first_name"
        name="first_name"
        type="text"
        label="First Name"
        labelPlacement="outside"
      />
      <Input
        id="last_name"
        name="last_name"
        type="text"
        label="Last Name"
        labelPlacement="outside"
      />
      <Input
        id="email"
        name="email"
        type="email"
        label="Email"
        labelPlacement="outside"
      />
    </AuthForm>
  );
}
