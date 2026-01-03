import styles from "./Contact.module.css";
import { useEffect, useRef, useState } from "react";
import { FaWhatsapp, FaEnvelope, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion"; // Adicionando Framer Motion para animações avançadas

export default function Contact() {
    const sectionRef = useRef<HTMLElement | null>(null);
    const [visible, setVisible] = useState(false);
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);

    
  

    // Intersection Observer para animação de entrada
    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.unobserve(el);
                }
            },
            { threshold: 0.3 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    // Efeito de hover nos botões (aprimorado com Framer Motion)
    const buttonVariants = {
        hover: { scale: 1.05, boxShadow: "0 20px 40px rgba(86, 126, 187, 0.5)" },
        tap: { scale: 0.95 },
    };

    // Função para envio do formulário (simulado, pode integrar com backend)
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulação de envio
        setTimeout(() => {
            alert("Mensagem enviada com sucesso!");
            setFormData({ name: "", email: "", message: "" });
            setIsSubmitting(false);
        }, 2000);
    };

    return (
        <section
            ref={sectionRef}
            id="contact"
            className={`${styles.contact} ${visible ? styles.visible : ""}`}
        >
            {/* Fundo com partículas ou gradiente futurista */}
            <div className={styles.particles}></div>

            <motion.div
                className={styles.content}
                initial={{ opacity: 0, y: 50 }}
                animate={visible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={visible ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2, duration: 0.8 }}
                >
                    Contato
                </motion.h2>

                <motion.p
                    className={styles.text}
                    initial={{ opacity: 0, y: 20 }}
                    animate={visible ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4, duration: 0.8 }}
                >
                    Aberto a novas oportunidades, freelas e colaborações.
                    <br />
                    Vamos construir algo juntos?
                </motion.p>

                {/* Formulário de contato para interação */}
                <motion.form
                    className={styles.form}
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, y: 20 }}
                    animate={visible ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6, duration: 0.8 }}
                >
                    <input
                        type="text"
                        placeholder="Seu Nome"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className={styles.input}
                    />
                    <input
                        type="email"
                        placeholder="Seu Email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className={styles.input}
                    />
                    <textarea
                        placeholder="Sua Mensagem"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        className={styles.textarea}
                    ></textarea>
                    <motion.button
                        type="submit"
                        className={styles.submitButton}
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                    </motion.button>
                </motion.form>

                {/* Links sociais com animações aprimoradas */}
                <motion.div
                    className={styles.actions}
                    initial={{ opacity: 0, y: 20 }}
                    animate={visible ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.8, duration: 0.8 }}
                >
                    <motion.a
                        href="https://wa.me/5548998593664"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.button}
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                    >
                        <FaWhatsapp />
                        WhatsApp
                    </motion.a>
                    <motion.a
                        href="mailto:philipelopes386@gmail.com"
                        className={styles.button}
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                    >
                        <FaEnvelope />
                        Email
                    </motion.a>
                    <motion.a
                        href="https://www.linkedin.com/in/philipe-lopes-9abba5320/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.button}
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                    >
                        <FaLinkedin />
                        LinkedIn
                    </motion.a>
                </motion.div>
            </motion.div>
        </section>
    );
}