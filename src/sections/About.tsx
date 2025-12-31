import styles from "./About.module.css"


export default function About() {

    return (

        



        <section className={styles.about}>

            <img src="imagens/fundo5.png" alt="foto decorativa"  className={styles.cornerImage}/>



            <div className={styles.info}>

                <h2>Sobre mim</h2>


                <p>   Sou desenvolvedor frontend focado em React e JavaScript, com interesse em
                    criar interfaces modernas, responsivas e acessíveis.</p>

                <p>     Atualmente estudo TypeScript para escrever código mais seguro, organizado
                    e fácil de manter, aplicando esses conceitos em projetos pessoais.</p>

                <p>
                    Gosto de aprender na prática, evoluindo constantemente e buscando boas
                    práticas de desenvolvimento frontend.

                </p>



                <p className={styles.city}>Garopaba, Santa Catarina</p>
            </div>










        </section>





    )




}

