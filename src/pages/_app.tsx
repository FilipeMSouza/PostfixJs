
import type { AppProps } from 'next/app'
import { GloblaStyles } from '../styles/theme'

export default function MyApp({ Component, pageProps }: AppProps) {
  
  return (
  <>
    <Component {...pageProps} />
    <GloblaStyles/>
  </>
  )
}

