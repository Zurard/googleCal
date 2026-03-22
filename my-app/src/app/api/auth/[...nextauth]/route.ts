import nextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const client = {
  id: process.env.GOOGLE_CLIENT_ID!,
  secret: process.env.GOOGLE_CLIENT_SECRET!,
};

const URL = process.env.NEXTAUTH_URL || "http://localhost:3000";

export const handler = nextAuth({
  providers: [
    GoogleProvider({
      clientId: client.id,
      clientSecret: client.secret,
      httpOptions: {
        timeout: 40000,
      },
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],

  callbacks: {
    async jwt({ token, account, user }) {
      if (account) {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`,
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${account?.id_token}`,
            },
          },
        );
        const resParsed = await res.json();
        token = Object.assign({}, token, {
          id_token: account.id_token,
        });
        token = Object.assign({}, token, {
          myToken: resParsed.authToken,
        });
      }

      return token;
    },
    async session({ session, token }) {
      if (session) {
        session = Object.assign({}, session, {
          id_token: token.id_token,
        });
        session = Object.assign({}, session, {
          authToken: token.myToken,
        });
      }
      return session;
    },
  },
});

export { handler as GET, handler as POST, handler as PUT, handler as DELETE };
