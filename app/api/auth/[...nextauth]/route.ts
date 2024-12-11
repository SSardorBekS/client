import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

// Define NextAuth options
export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      type: "credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "Username" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Password",
        },
      },
      async authorize(credentials) {
        if (!credentials) {
          throw new Error("Missing credentials");
        }
        try {
          // Make API call to FastAPI backend for token
          const response = await axios.post(
            `${process.env.NEXT_PUBLIC_API_URL}/users/token`,
            // Correct body payload
            new URLSearchParams({
              username: credentials.username,
              password: credentials.password,
            }),
            {
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
              },
            }
          );

          const user = {
            id: credentials.username,
            token: response.data.access_token,
          };
          return user;
        } catch (error) {
          throw new Error("Invalid username or password");
        }
      },
    }),

    // Create Account Provider
    CredentialsProvider({
      id: "create-account",
      name: "create-account",
      type: "credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "Username" },
        password: { label: "Password", type: "password", placeholder: "Password" },
        email: { label: "Email", type: "email", placeholder: "Email" },
      },
      async authorize(credentials) {
        if (!credentials) {
          throw new Error("Missing credentials");
        }
        try {
          // API call to create account
          await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/users/register`, {
            username: credentials.username,
            password: credentials.password,
            email: credentials.email,
          });

          // After successful registration, log the user in
          const response = await axios.post(
            `${process.env.NEXT_PUBLIC_API_URL}/users/token`,
            new URLSearchParams({
              username: credentials.username,
              password: credentials.password,
            }),
            {
              headers: { "Content-Type": "application/x-www-form-urlencoded" },
            }
          );

          const user = {
            id: credentials.username,
            token: response.data.access_token,
          };
          return user;
        } catch (error) {
          throw new Error("Account creation failed. Please try again.");
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = (user as any).token;
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken as string;
      return session;
    },
    async redirect({ url, baseUrl }) {
      // Agar `callbackUrl` noto'g'ri bo'lsa, asosiy sahifaga qaytaring
      return url.startsWith(baseUrl) ? url : baseUrl;
    },
  },
  secret: process.env.NEXTAUTH_SECRET || "your_secret_key",
  pages: {
    signIn: "/sign-in",
    newUser: "/sign-up", // Optional: Custom page for account creation
  },
  session: {
    strategy: "jwt",
  },
};

// Export NextAuth handler
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
