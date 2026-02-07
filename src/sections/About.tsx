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


                <p
                    className={`${styles.textReveal} ${styles.delay1} ${visible ? styles.textVisible : ""
                        }`}
                >
                    Sou desenvolvedor frontend especializado em{" "}
                    <span className={styles.gold}>React</span> e{" "}
                    <span className={styles.gold}>JavaScript</span>, atuando no desenvolvimento de{" "}
                    <strong>interfaces modernas, responsivas e focadas em experiência do usuário</strong>.
                </p>

                <p
                    className={`${styles.textReveal} ${styles.delay2} ${visible ? styles.textVisible : ""
                        }`}
                >
                    Trabalho com <strong>componentização, integração com APIs REST</strong> e{" "}
                    <strong>Node.js</strong>, criando aplicações web organizadas, escaláveis e de
                    fácil manutenção, com atenção à performance e boas práticas de desenvolvimento.
                </p>

                <p
                    className={`${styles.textReveal} ${styles.delay3} ${visible ? styles.textVisible : ""
                        }`}
                >
                    Busco entregar <strong>soluções eficientes e bem estruturadas</strong>,
                    alinhando qualidade visual, usabilidade e código limpo em cada projeto.
                </p>


                <p className={`${styles.textReveal} ${styles.delay4} ${visible ? styles.textVisible : ""
                    } ${styles.city}`}>Garopaba, Santa Catarina</p>
            </div>










        </section>





    )




}

