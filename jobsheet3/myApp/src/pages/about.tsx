import React from 'react';
import Head from "next/head";
import Link from "next/link";
// import styles from '../styles/Home.module.css';

export default function About() {
  return (
    <div>
      <main className="main-content">
        <h1 className="title">About Me</h1>
        <div className="description">
            <p>Nama: M. Firmansyah</p>
            <p>NIM: 2341720099</p>
            <p>Prodi: D4 - Teknik Informatika</p>
        </div>
        <Link href="/" className="button">
            Back to Home
        </Link>
      </main>
    </div>
  );
}
