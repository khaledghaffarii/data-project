import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
export default NextAuth({
  providers: [
    GoogleProvider({
      // eslint-disable-next-line no-undef
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    // ...add more providers here
  ],
  secret: process.env.SECRET,
})

export async function handler(req, res) {
  // if using `NEXTAUTH_SECRET` env variable, we detect it, and you won't actually need to `secret`
  // const token = await getToken({ req })
  const token = await getToken({ req, secret })
  console.log('JSON Web Token', token)
  res.end()
}
