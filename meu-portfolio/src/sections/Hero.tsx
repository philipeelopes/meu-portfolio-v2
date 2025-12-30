import styles from "./Hero.module.css"
import { FaLinkedin, FaGithub, FaWhatsapp, FaInstagram } from "react-icons/fa";


export default function Hero() {
    return (
        <section className={styles.hero}>

            <video
                className={styles.video}
                src="videos/fundo.mp4"
                autoPlay
                loop
                muted
                playsInline
            />




            <div className={styles.content}>


                <h1 className={styles.name}>PHILIPE <span>LOPES</span></h1>
                <h2>Desenvolvedor Frontend</h2>



                <p>
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