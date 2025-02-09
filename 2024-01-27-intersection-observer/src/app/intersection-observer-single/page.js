"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";

const images = [
  "earbud",
  "external_ssd",
  "keyboard",
  "mouse",
  "smartwatch",
  "rgb_keyboard",
  "rgb_mouse",
  "styluspen",
];

export default function IntersectionObserverSingle() {
  const refs = useRef([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = refs.current.indexOf(entry.target);

          if (entry.isIntersecting) {
            console.log('enter:', index);
            setIndex(index);
          }
        });
      },
      { threshold: 0.9 },
    );

    refs.current.forEach((elem) => {
      if (elem) observer.observe(elem);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.gallery} >
          {images.map((name, i) =>
            <Image key={name}
              src={`/${name}.webp`}
              width={400} height={400} alt={name}
              ref={(ref) => (refs.current[i] = ref)}
            />
          )}
        </div>
        <div className={styles.indicator}>
          {images.map((name, i) =>
            <div key={`indicator-${name}`}
              className={index === i ? styles.active : ""}
            >{i}</div>
          )}
        </div>
      </main>
    </div>
  );
}
