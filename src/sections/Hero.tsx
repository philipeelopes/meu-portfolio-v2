import { useEffect, useRef } from "react";
import styles from "./Hero.module.css"


import { FaLinkedin, FaGithub, FaWhatsapp, FaInstagram } from "react-icons/fa";


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



  useEffect(() => {
  const elements = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.2 }
  );

  elements.forEach(el => observer.observe(el));

  return () => observer.disconnect();
}, []);










  useEffect(() => {

    const hero = heroRef.current;
    if (!hero) return;

    const onMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;

      hero.style.setProperty("--glow-x", `${x}%`);
      hero.style.setProperty("--glow-y", `${y}%`);
    };

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);




  //animação suave mouse
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;



    let currentX = 0;
    let currentY = 0;
    let targetX = 0;
    let targetY = 0;



    const onMouseMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect();
      targetX = (e.clientX - rect.left) / rect.width - 0.5;
      targetY = (e.clientY - rect.top) / rect.height - 0.5;
    };

    const animate = () => {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;

      hero.style.setProperty(
        "--grid-transform",
        `rotateX(${currentY * -10}deg) rotateY(${currentX * 10}deg)`
      );

      requestAnimationFrame(animate);
    };

    hero.addEventListener("mousemove", onMouseMove);
    animate();

    return () => {
      hero.removeEventListener("mousemove", onMouseMove);
    };
  }, []);



  return (
    <section ref={heroRef} className={styles.hero}>
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