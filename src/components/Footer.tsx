import styles from "./Footer.module.css";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion"; // Para animações suaves

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                {/* Seção de Branding/Logo */}
                <motion.div
                    className={styles.brand}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h3>Philipe Lopes</h3>
                    <p>Desenvolvedor Full-Stack & Designer UI/UX</p>
                </motion.div>

                {/* Links Rápidos */}
                <motion.div
                    className={styles.links}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <h4>Links Rápidos</h4>
                    <ul>
                        <li><a href="#hero">Home</a></li>
                        <li><a href="#about">Sobre</a></li>
                        <li><a href="#projects">Projetos</a></li>
                        <li><a href="#contact">Contato</a></li>
                    </ul>
                </motion.div>

                {/* Contato */}
                <motion.div
                    className={styles.contact}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <h4>Contato</h4>
                    <p>Email: philipelopes386@gmail.com</p>
                    <p>Telefone: +55 48 99859-3664</p>
                    <p>Localização: Brasil</p>
                </motion.div>

                {/* Redes Sociais */}
                <motion.div
                    className={styles.socials}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h4>Siga-me</h4>
                    <div className={styles.socialIcons}>
                        <a
                            href="https://github.com/philipeelopes"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                        >
                            <FaGithub />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/philipe-lopes-9abba5320/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href="https://instagram.com/philipel0pes" 
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                        >
                            <FaInstagram />
                        </a>
                        <a
                            href="https://twitter.com/seuusuario" 
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Twitter"
                        >
                            <FaTwitter />
                        </a>
                        <a
                            href="mailto:philipelopes386@gmail.com"
                            aria-label="Email"
                        >
                            <FaEnvelope />
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Copyright */}
            <motion.div
                className={styles.copyright}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
            >
                <p>© {new Date().getFullYear()} Philipe Lopes. Todos os direitos reservados. | Desenvolvido com ❤️</p>
            </motion.div>
        </footer>
    );
}