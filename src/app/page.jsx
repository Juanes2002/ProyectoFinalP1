"use client";
import Image from "next/image";
import styles from "./page.module.css";
import art1 from "public/art1.jpg";
import Button from "@/components/button/Button";

export default function Home() {
  return (
    <>
      <div></div>
      <div className={styles.container}>
        <div className={styles.item}>
          <h1 className={styles.title}>
            ArtistryUnleashed: Celebrating Creativity and Inspiration.
          </h1>
          <p className={styles.description}>
            Your portal to boundless creativity and diverse artistic
            expressions, where every stroke and concept weaves a unique story.
          </p>
          <Button url="/portfolio" text="Start" />
        </div>
        <div className={styles.item}>
          <Image src={art1} alt="" className={styles.img} />
        </div>
      </div>
    </>
  );
}
