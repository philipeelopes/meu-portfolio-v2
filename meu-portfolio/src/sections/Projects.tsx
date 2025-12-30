import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import "swiper/css/navigation";


import "swiper/css";
import "swiper/css/pagination";

import styles from "./Projects.module.css";

export default function Projects() {

 


  return (
    <section className={styles.projects} id="projects">
      <div className={styles.sectionDividerFX}>
        <span />
      </div>
      <h2>Projetos</h2>



      <Swiper
      
         
        modules={[Pagination, Navigation, Autoplay]}
        navigation
        pagination={{ clickable: true }}
       
        spaceBetween={24}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
        }}
        className={styles.swiper}
      >




        {projects.map(({ id, ...project }) => (
          <SwiperSlide key={id}>
            <ProjectCard {...project} />
          </SwiperSlide>
        ))}

      </Swiper>
    </section >
  );
}