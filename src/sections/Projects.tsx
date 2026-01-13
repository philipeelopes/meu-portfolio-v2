import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "./Projects.module.css";

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className={styles.projects} id="projects">
      <h2>Projetos</h2>

      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={24}
        slidesPerView={1}
        speed={500}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
        }}
        className={styles.swiperP}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={project.id}>
            <ProjectCard
              {...project}
              index={index}
              isActive={index === activeIndex}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
