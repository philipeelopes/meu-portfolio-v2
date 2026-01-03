
import styles from "./Skills.module.css"
import { useEffect, useRef, useState } from "react"
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiGit,
} from "react-icons/si";


const skills = [
  {name: "React", icon: <SiReact/>},
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "HTML", icon: <SiHtml5 /> },
  { name: "CSS", icon: <SiCss3 /> },
  { name: "Git / GitHub", icon: <SiGit /> },
];


 export default function Skills(){
    const sectionRef = useRef<HTMLElement | null>(null);
    const [visible, setVisible] = useState(false);


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
            { threshold: 0.2 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    },[]); 

    return(

        <section ref={sectionRef} className={styles.skills} id="skills">
            <h2>Skills</h2>
              


            <div className={styles.grid}>

                
                {skills.map((skill, index) =>(
                    <div 
                      
                    key={skill.name}
                     
                    className={`${styles.card} ${
                        visible ? styles.visible : ""
                    }`}     
                        style={{ transitionDelay: `${index * 120}ms`}}
                    >
                        <span className={styles.icon}>{skill.icon}
                        </span>
                        <p>{skill.name}</p>
                    </div>
                ))}
               
            </div>
        </section>


    )
 }