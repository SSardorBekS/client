"use client";

import { SessionProvider } from "next-auth/react";
import {Session} from "next-auth";

type Props = {
  children?: React.ReactNode;
  session?: Session | null;
};

export const NextAuthProvider = ({ children, session }: Readonly<Props>) =>{
  return <SessionProvider session={session}>{children}</SessionProvider>
};
