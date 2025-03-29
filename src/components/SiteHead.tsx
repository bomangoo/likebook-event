import Head from 'next/head';

export default function SiteHead(props: {
    title?: string;
    description?: string;
}) {
    const { title, description } = props;

    return (
        <Head>
            <title>{!!title ? title : '사이트명 | 타이틀 설명'}</title>
            <meta
                name="description"
                content={!!description ? description : '사이트 디스크립션'}
            />
            <meta property="og:type" content="website" />
            <meta name="og:title" property="og:title" content="og 타이틀" />
            <meta
                name="og:description"
                property="og:description"
                content="og 설명글"
            />
            <meta property="og:site_name" content="회사명" />
            <meta property="og:image" content="" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
            />
            <meta name="theme-color" content="" />
            <meta name="mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="" />
            <meta name="apple-mobile-web-app-title" content="회사명" />
            <meta name="robots" content="none" />
            <link rel="icon" href="/favicon.ico" />
            <link rel="apple-touch-icon" href="" />
        </Head>
    );
}
