import { useEffect, useRef, useState } from "react";  // Adicionei useState
import styles from "./Hero.module.css";
import { FaLinkedin, FaGithub, FaWhatsapp, FaInstagram } from "react-icons/fa";
import StarBackground from "../components/StarBackground";

export default function Hero() {
  const heroRef = useRef<HTMLElement | null>(null);
  const [displayText1, setDisplayText1] = useState("");  // Para "PHILIPE"
  const [displayText2, setDisplayText2] = useState("");  // Para "LOPES"
  const fullText1 = "PHILIPE";  // Texto para a primeira linha
  const fullText2 = "LOPES";    // Texto para a segunda linha

  useEffect(() => {
    // Lógica existente para movimento do mouse
    const hero = heroRef.current;
    if (!hero) return;

    const content = hero.querySelector(`.${styles.content}`) as HTMLElement;

    const onMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      content.style.transform = `translate(${x * 12}px, ${y * 12}px)`;
    };

    const reset = () => {
      content.style.transform = `translate(0,0)`;
    };

    hero.addEventListener("mousemove", onMove);
    hero.addEventListener("mouseleave", reset);

    // Lógica para reveal (já existente)
    const revealElements = hero.querySelectorAll(`.${styles.reveal}`);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.show);
          }
        });
      },
      { threshold: 0.1 }
    );

    revealElements.forEach((el) => observer.observe(el));

    // Lógica para typewriter: anima "PHILIPE" primeiro, depois "LOPES"
    let index1 = 0;
    let index2 = 0;

    const typeWriter1 = () => {
      if (index1 < fullText1.length) {
        setDisplayText1(fullText1.slice(0, index1 + 1));
        index1++;
        setTimeout(typeWriter1, 250);  // Velocidade por letra
      } else {
     
        setTimeout(typeWriter2, 300);  // Delay de 0.3s entre as palavras
      }
    };

    const typeWriter2 = () => {
      if (index2 < fullText2.length) {
        setDisplayText2(fullText2.slice(0, index2 + 1));
        index2++;
        setTimeout(typeWriter2, 150);
      }
    };

    // Inicia o typewriter após um delay inicial
    setTimeout(typeWriter1, 500);  // Delay de 0.5s para sincronizar com reveal

    return () => {
      hero.removeEventListener("mousemove", onMove);
      hero.removeEventListener("mouseleave", reset);
      observer.disconnect();
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
        background=""
        speed={1}
      />

      <div className={styles.bg} />
      <div className={styles.glow} />

      <div className={styles.content}>
        <h1 className={`${styles.name} ${styles.reveal} ${styles.delay1}`}>
          {displayText1}  {/* "PHILIPE" animado */}
          <span>{displayText2}</span>  {/* "LOPES" animado */}
        </h1>
        <h2 className={`${styles.reveal} ${styles.delay2}`}>
          Desenvolvedor Frontend
        </h2>
        <p className={`${styles.reveal} ${styles.delay3}`}>
          Crio interfaces modernas e responsivas com React, JavaScript e TypeScript.
        </p>

        <div className={`${styles.actions}  ${styles.reveal}  ${styles.delay5}`}>
          <a href="#projects">Ver projetos</a>
          <a href="#contact">Contato</a>
        </div>
        <div className={`${styles.socials}  ${styles.reveal}  ${styles.delay6}`}>
          <a href="https://www.linkedin.com/in/philipe-lopes-9abba5320/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://github.com/philipeelopes" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://wa.me/5548998593664" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <FaWhatsapp />
          </a>
          <a href="https://www.instagram.com/philipel0pes/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram />
          </a>
        </div>
      </div>
    </section>
  );
}