import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Player, Transport } from 'tone';
import { useEffect } from 'react';

export default function Home() {
  const play = () => {
    console.log('Pkayubg Audio');

    const p = new Player('http://localhost:8080/1.mp3', () => {
      p.start();
    }).toDestination();
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <button onClick={play}>Play</button>
    </div>
  );
}
