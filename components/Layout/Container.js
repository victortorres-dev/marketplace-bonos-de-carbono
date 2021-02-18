import Head from 'next/head'
import NavBar from '../NavBar'

export default function Index ({ children }) {
  return (
    <>
      <Head>
        <title>Toroto</title>
        <link rel='icon' href='/favicon.ico' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link href='https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap' rel='stylesheet' />
        <link rel='stylesheet' href='https://use.fontawesome.com/releases/v5.8.1/css/all.css' integrity='sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf' crossOrigin='anonymous' />
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width' />
        <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#0063be' />
        <meta name='msapplication-TileColor' content='#0063be' />
        <meta name='theme-color' content='#0063be' />
      </Head>
      <NavBar />
      {children}

    </>
  )
}
