import { createAuthClient } from 'better-auth/react' // make sure to import from better-auth/react
import {
  inferAdditionalFields,
  magicLinkClient,
} from 'better-auth/client/plugins'

export const authClient = createAuthClient({
  baseURL:
    process.env.NEXT_PUBLIC_BETTER_AUTH_URL || 'http://localhost:8000/api/auth', // The base URL of the API
  plugins: [
    inferAdditionalFields({
      user: {
        phone: { type: 'string' },
        isAdmin: { type: 'boolean' },
      },
    }),
    magicLinkClient(),
  ],
})

export const { signIn, signUp, useSession } = authClient
