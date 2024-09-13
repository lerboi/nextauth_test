import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const authOptions = {
    providers: [
        Credentials({
            name: "Credentials",
            credentials: {
                username: { label:"Username", type:"text", placeholder:"Enter Usename" },
                password: { label: "Password", type:"password" }
            },

            async authorize(credentials, req){
                let user = null
                //create authorie logic here
                user = {
                    username: "Leroy",
                    password: "123"
                }

                return user
            }
        }) 
    ]
}

const handler = NextAuth(authOptions)

export const GET = handler
export const POST = handler