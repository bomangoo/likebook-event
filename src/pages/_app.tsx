import { AppProps } from 'next/app';
import { FC } from 'react';
import { Global } from '@emotion/react';
import { globalStyles } from '../styles/globals';

const App: FC<AppProps> = (props) => {
    const { Component, pageProps } = props;

    return (
        <>
            <Global styles={globalStyles} />
            <Component {...pageProps} />
        </>
    );
}

export default App;