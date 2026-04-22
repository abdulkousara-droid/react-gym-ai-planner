import { createAuthClient } from '@neondatabase/neon-js/auth';
export const authClient = createAuthClient(
    import.meta.env.VITE_NEON_AUTH_URL,
    import.meta.env.VITE_API_URL
)