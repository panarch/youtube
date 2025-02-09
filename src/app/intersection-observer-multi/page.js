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
  "smartphone",
  "ebook_reader",
  "wireless_charger",
  "headphone",
  "cat",
  "usb_cable",
  "desklamp",
  "pixel_cat",
];

export default function IntersectionObserverMulti() {
  const refs = useRef([]);
  const [indexes, setIndexes] = useState(new Set([0]));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setIndexes(preIndexes => {
          const newIndexes = new Set(preIndexes);

          entries.forEach((entry) => {
            const index = refs.current.indexOf(entry.target);

            if (entry.isIntersecting) {
              console.log('add:', index);
              newIndexes.add(index);
            } else {
              console.log('delete:', index);
              newIndexes.delete(index);
            }
          });

          return newIndexes;
        });
      },
      { threshold: 0.1 },
    );

    refs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.gallery} >
          {images.map((name, i) =>
            <Image key={name} src={`/${name}.webp`} width={400} height={400} alt={name}
              ref={(ref) => (refs.current[i] = ref)}
            />
          )}
        </div>
        <div className={styles.indicator}>
          {images.map((name, i) =>
            <div key={`indicator-${name}`} className={indexes.has(i) ? styles.active : ""}
            />
          )}
        </div>
      </main>
    </div>
  );
}
