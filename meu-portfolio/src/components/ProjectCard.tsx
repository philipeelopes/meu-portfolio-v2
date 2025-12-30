import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


import styles from "./ProjectCard.module.css"



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

   return (
      
      <div className={`${styles.card} card`}>
        
         

         {/* carrossel */}

         <Swiper
            modules={[Pagination, Navigation]}
            pagination={{ clickable: true }}
            navigation
            spaceBetween={10}
            className={styles.swiper}
         >
            {images?.map((img, index) => (
               <SwiperSlide key={index}>
                  <img src={img} alt={title} />
               </SwiperSlide>
            ))}

         </Swiper>

         {/* CONTEÚDO */}

         <h3>{title}</h3>
         <p>{description}</p>

         <ul className={styles.techs}>
            {techs.map((tech) => (
               <li key={tech}>{tech}</li>
            ))}
         </ul>

         <div className={styles.links}>
            <a href={demo} target="_blank">Demo</a>
            <a href={repo} target="_blank">Código</a>
         </div>
      </div>
   );
}



