import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.gallery}>
          <Image src="/earbud.webp" width={400} height={400} alt="earbud"/>
          <Image src="/external_ssd.webp" width={400} height={400} alt="external_ssd"/>
          <Image src="/keyboard.webp" width={400} height={400} alt="keyboard"/>
          <Image src="/mouse.webp" width={400} height={400} alt="mouse"/>
          <Image src="/smartwatch.webp" width={400} height={400} alt="smartwatch"/>
          <Image src="/rgb_keyboard.webp" width={400} height={400} alt="rgb keyboard"/>
          <Image src="/rgb_mouse.webp" width={400} height={400} alt="rgb mouse"/>
          <Image src="/styluspen.webp" width={400} height={400} alt="stylus pen"/>
        </div>
      </main>
    </div>
  );
}
