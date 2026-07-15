import "./Hero.css";

import foto from "../assets/euu.jpg";

function Hero(){

    return(

        <section className="hero">

            <div className="hero-text">

                <p>Oii! me chamo</p>

                <h1>Júlia</h1>

                <h2></h2>

                <p>

                    Sou estudante de Ensino Médio Técnico.

                </p>

            </div>

            <div className="hero-image">

                <img src={foto} alt="" />

            </div>

        </section>

    )

}

export default Hero;