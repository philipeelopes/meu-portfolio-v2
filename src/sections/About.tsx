import styles from "./About.module.css"
import { useEffect, useRef, useState } from "react";


export default function About() {
    const aboutRef = useRef<HTMLElement | null>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = aboutRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.unobserve(el); // anima só uma vez
                }
            },
            { threshold: 0.3 }
        );

        observer.observe(el);

        return () => observer.disconnect();
    }, []);

    return (


        <section
            ref={aboutRef}
            id="about"
            className={`${styles.about} ${visible ? styles.aboutVisible : ""}`}

        >

            <div className={`${styles.auroraBoreal} ${visible ? styles.auroraVisible : ""}`}>
                <div className={styles.auroraLayer1}></div>
                <div className={styles.auroraLayer2}></div>
                <div className={styles.auroraLayer3}></div>
            </div>



            <div className={styles.info}>

                <h2>Sobre mim</h2>


                <p className={`${styles.textReveal} ${styles.delay1} ${visible ? styles.textVisible : ""
                    }`}>
                    Sou desenvolvedor frontend focado em <span className={styles.gold}>React</span> e <span className={styles.gold}>JavaScript</span>, com interesse em
                    criar interfaces modernas, responsivas e acessíveis.</p>

                <p className={`${styles.textReveal} ${styles.delay2} ${visible ? styles.textVisible : ""
                    }`}>
                    Atualmente estudo TypeScript para escrever código mais seguro, organizado
                    e fácil de manter, aplicando esses conceitos em projetos pessoais.</p>

                <p className={`${styles.textReveal} ${styles.delay3} ${visible ? styles.textVisible : ""
                    }`}>
                    Gosto de aprender na prática, evoluindo constantemente e buscando boas
                    práticas de desenvolvimento frontend.

                </p>



                <p className={`${styles.textReveal} ${styles.delay4} ${visible ? styles.textVisible : ""
                    } ${styles.city}`}>Garopaba, Santa Catarina</p>
            </div>










        </section>





    )




}

