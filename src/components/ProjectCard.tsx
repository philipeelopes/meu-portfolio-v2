import React from 'react'; 
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from "./ProjectCard.module.css";
import { FaEye, FaCode } from "react-icons/fa"; // Ícones para links
import { SiReact, SiJavascript, SiTypescript } from "react-icons/si"; // Exemplos de ícones para techs
import StarBackground from "./StarBackground";


type ProjectCardProps = {
   title: string;
   description: string;
   techs: string[];
   images: string[];
   repo: string;
   demo: string;
};

export default function ProjectCard({
   title,
   description,
   techs,
   images,
   repo,
   demo,
}: ProjectCardProps) {
   // Função para mapear techs a ícones
   const getTechIcon = (tech: string): React.ReactElement | null => { // React.ReactElement para mais compatibilidade
      const iconMap: { [key: string]: React.ReactElement } = {
         React: <SiReact />,
         JavaScript: <SiJavascript />,
         TypeScript: <SiTypescript />,
         // mais: ex. "CSS": <SiCss3 />, etc.
      };
      return iconMap[tech] || null;
   };

   return (
      <div className={`${styles.card} card`}>
         {/* Carrossel com overlay sutil */}
         <div className={styles.imageContainer}>
            <Swiper
               modules={[Pagination, Navigation]}
               pagination={{ clickable: true }}
               navigation
               spaceBetween={10}
               className={styles.swiperProjects}
            >
               {images?.map((img, index) => (
                  <SwiperSlide key={index}>
                     <img src={img} alt={title} />
                     <div className={styles.overlay}></div>
                  </SwiperSlide>
               ))}
            </Swiper>
         </div>

         {/* Conteúdo */}
         <div className={styles.content}>
            <h3>{title}</h3>
            <p>{description}</p>

            <ul className={styles.techs}>
               {techs.map((tech) => (
                  <li key={tech} className={styles.techItem}>
                     {getTechIcon(tech)} {tech}
                  </li>
               ))}
            </ul>
            <StarBackground
                  count={100}
                  maxDistance={100}
                  mouseDistance={100}
                  starColor="255,255,255"
                  lineColor="100,150,255"
                  background="#000000ff"
                  speed={1}
                />

            <div className={styles.links}>
               <a href={demo} target="_blank" className={styles.link}>
                  <FaEye /> Demo
               </a>
               <a href={repo} target="_blank" className={styles.link}>
                  <FaCode /> Código
               </a>
            </div>
         </div>
      </div>
   );
}