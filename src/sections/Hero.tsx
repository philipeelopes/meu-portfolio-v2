import { useEffect, useRef } from "react";
import styles from "./Hero.module.css"


import { FaLinkedin, FaGithub, FaWhatsapp, FaInstagram } from "react-icons/fa";
import StarBackground from "../components/StarBackground";


export default function Hero() {
  const heroRef = useRef<HTMLElement | null>(null);


  useEffect(() => {
  const hero = heroRef.current;
  if (!hero) return;

  const content = hero.querySelector(`.${styles.content}`) as HTMLElement;

  const onMove = (e: MouseEvent) => {
    const rect = hero.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    content.style.transform = `
      translate(${x * 12}px, ${y * 12}px)
    `;
  };

  const reset = () => {
    content.style.transform = `translate(0,0)`;
  };

  hero.addEventListener("mousemove", onMove);
  hero.addEventListener("mouseleave", reset);

  return () => {
    hero.removeEventListener("mousemove", onMove);
    hero.removeEventListener("mouseleave", reset);
  };
}, []);





  return (
    <section ref={heroRef} className={styles.hero} id="hero">
     
       <StarBackground
      count={200}
      maxDistance={100}
      mouseDistance={100}
      starColor="255,255,255"
      lineColor="100,150,255"
      background="#000000ff"
      speed={1}
    />


      <div className={styles.bg} />
      <div className={styles.glow} />

      <div className={styles.content}>


        <h1 className={`${styles.name} reveal delay1`}>PHILIPE <span>LOPES</span></h1>
        <h2 className={`reveal delay2`}>Desenvolvedor Frontend</h2>
        <p className={`reveal delay3`}>
          Crio interfaces modernas e responsivas com React, JavaScript e TypeScript.
        </p>

        <div className={styles.actions}>
          <a href="#projects">Ver projetos</a>
          <a href="#contact">Contato</a>
        </div>
        <div className={styles.socials}>
          <a
            href="https://www.linkedin.com/in/philipe-lopes-9abba5320/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/philipeelopes"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://wa.me/5548998593664"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>

          <a
            href="https://www.instagram.com/philipel0pes/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </div>
      </div>


    </section>
  );
}