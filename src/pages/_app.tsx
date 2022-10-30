import '../styles/tailwind.css';
import { ReactElement } from 'react';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps): ReactElement {
    return <Component {...pageProps} />;
}
