import { memo, useMemo, useState } from "react";
import { useInView } from "react-intersection-observer";

import styles from "./ProjectCard.module.css";
import { FaEye, FaCode } from "react-icons/fa";
import { SiReact, SiJavascript, SiTypescript } from "react-icons/si";

type ProjectCardProps = {
  index: number;
  title: string;
  description: string;
  techs: string[];
  images: string[];
  repo: string;
  demo: string;
  isActive: boolean;
};

/* 🔒 Mapa de ícones fora do componente */
const techIconMap: Record<string, React.ReactNode> = {
  React: <SiReact />,
  JavaScript: <SiJavascript />,
  TypeScript: <SiTypescript />,
};

const ProjectCard = memo(function ProjectCard({
  index,
  title,
  description,
  techs,
  images,
  repo,
  demo,
}: ProjectCardProps) {
  /* 👁️ Observer apenas para animação */
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  /* 🖼️ Controle da imagem (1 por vez) */
  const [imgIndex, setImgIndex] = useState(0);

  const techList = useMemo(
    () =>
      techs.map((tech) => (
        <li key={tech} className={styles.techItem}>
          {techIconMap[tech]} {tech}
        </li>
      )),
    [techs]
  );

  return (
    <div
      ref={ref}
      className={`
        ${styles.card}
        ${styles.reveal}
        ${index % 2 === 0 ? styles.fromLeft : styles.fromRight}
        ${inView ? styles.revealVisible : ""}
      `}
    >
      {/* 🖼️ IMAGEM SIMPLES (SEM SWIPER) */}
      <div className={styles.imageContainer}>
        {images.length > 0 && (
          <img
            src={images[imgIndex]}
            alt={title}
            loading="lazy"
            width="600"
            height="400"
            className={styles.projectImage}
            onClick={() =>
              setImgIndex((prev) => (prev + 1) % images.length)
            }
          />
        )}
      </div>

      <div className={styles.content}>
        <h3>{title}</h3>
        <p>{description}</p>

        <ul className={styles.techs}>{techList}</ul>

        <div className={styles.links}>
          <a
            href={demo}
            target="_blank"
            rel="noreferrer"
            className={styles.link}
          >
            <FaEye /> Demo
          </a>

          <a
            href={repo}
            target="_blank"
            rel="noreferrer"
            className={styles.link}
          >
            <FaCode /> Código
          </a>
        </div>
      </div>
    </div>
  );
});

export default ProjectCard;
