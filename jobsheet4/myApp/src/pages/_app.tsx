import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import AppShell from '@/components/layouts/AppShell';
import Navbar from '@/components/layouts/navbar';
import useAuth from "@/hooks/useAuth";


export default function App({ Component, pageProps }: AppProps) {
    const { isLoggedIn } = useAuth();

  // Tampilkan halaman hanya jika sudah login
  if (!isLoggedIn) return null;
  return (
    <>
      <AppShell>
        <Component {...pageProps} />
      </AppShell>
    </>
  )
}