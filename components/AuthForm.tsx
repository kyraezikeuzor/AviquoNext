"use client";

import React from "react";
import styles from "./AuthForm.module.css";
import Logo from "./Logo";
import Button from "./Button";

import { useRouter } from "next/navigation";
import { Auth } from "lucia";

import { Input } from "@nextui-org/react";
export interface AuthProps {
  heading: string;
  subheading: string;
  buttonText: string;
  linkWord: string;
  linkHref: string;
  linkText: string;
}

interface AuthInterface extends AuthProps {
  children?: React.ReactNode;
  action: string;
}

const SUCCESSFUL = 0;

export default function AuthForm({
  children,
  action,
  heading,
  subheading,
  buttonText,
  linkWord,
  linkHref,
  linkText,
}: AuthInterface) {
  const router = useRouter();

  async function handleError(response: Response) {
    console.log(response);
    window.alert(
      "Server Received An Error - idk will fine tune error handling sometime"
    );
  }

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const response = await fetch(action, {
      method: "POST",
      body: formData,
      redirect: "manual",
    });

    if (response.status === SUCCESSFUL) {
      return router.refresh();
    } else {
      handleError(response);
    }
  }

  return (
    <form
      action={action}
      method="post"
      onSubmit={handleSubmit}
      className={styles.form}
    >
      <Logo />
      <h1>{heading}</h1>
      <p>{subheading}</p>

      <Input
        id="username"
        name="username"
        type="text"
        label="Username"
        labelPlacement="outside"
      />
      <Input
        id="password"
        name="password"
        type="password"
        label="Password"
        labelPlacement="outside"
      />

      {children}

      <Button type="btn--submit" size="btn--md" style="btn--primary">
        {buttonText}
      </Button>

      <p>
        {linkWord} have an account? <a href={linkHref}>{linkText}</a>
      </p>
    </form>
  );
}
