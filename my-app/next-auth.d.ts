// used to add custom properties to the session object and JWT token in NextAuth.js 

// types/next-auth.d.ts
import NextAuth, { DefaultSession } from "next-auth";
import { DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session extends DefaultSession {
    authToken?: string; // Add your custom property here
    user: {
      id: string; // You might also want to add 'id' to the user object
      email: string;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  /**
   * The shape of the JWT token
   */
  interface JWT extends DefaultJWT {
    authToken?: string; // Add your custom property here to persist it in the token
  }
}
