import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { findOneUser } from "./outerbase/users";

// import { compare } from "bcrypt";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      type: "credentials",

      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@example.com",
        },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials, req) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        try {
          const { response: user } = await findOneUser(email);

          if (user.items !== null && user.items.length > 0) {
            return user;
          } else {
            throw new Error();
          }
        } catch (error) {
          console.error(error);
        }

        return null;
      },
    }),
  ],

  callbacks: {
    async session({ session, token }: any) {
      session.user = token.user;
      if (session.user) {
        return session;
      }
      throw new Error();
    },
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
  },

  pages: {
    signIn: "/auth",
  },
};

// if (user && (await compare(password, user.passwordHash))) {
//   let { passwordHash, ...userObject } = user;
//   return userObject;
// }
