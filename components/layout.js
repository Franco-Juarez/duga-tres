import Head from 'next/head';
import styles from './layout.module.css';
import Link from 'next/link';
import NavBar from './NavBar';
import Footer from './Footer';

export const siteTitle = 'Duga-3. Imaginación política en el desierto de ideas';

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="Duga-3"
          content="Imaginación política en el desierto de ideas"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <NavBar />
      <header className={styles.header}>
        {home ? (
          <>
          </>
        ) : (
          <>
          </>
        )}
      </header>
      <main className={styles.mainContent}>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Página Principal</Link>
        </div>
      )}
      <Footer />
    </div>
  );
}