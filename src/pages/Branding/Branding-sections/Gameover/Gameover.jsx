import React from "react";
import "./Gameover.scss";
import Widget from "../../../../components/Widget/Widget.jsx";
import GlitchEffect from '../../Effects/GlitchEffect.jsx'
import MainButton from "../../../Home/Home-button/Main-button.jsx";

export default function Gameover({ id }) {
  return (
    <section id={id} className="gameover">
      <div className="gameover-block">
        <div className="gameover-block__widget">
          <Widget size="lg" imageSrc="/images/widgets/video.png" text="Video Ask AI" />
        </div>

        <div className="gameover-block__widget">
          <Widget size="sm" imageSrc="/images/widgets/pixel-mate.png" text="PixelMate" />
        </div>

        <div className="gameover-block__widget">
          <div className="gameover-block__end">
            <h2 className="gameover-block__end-title">
              game over
            </h2>

            <div className="gameover-block__end-glitch">
              <GlitchEffect
                glitchSpeed={50}
                centerVignette={true}
                outerVignette={false}
                smooth={true}
              />
            </div>

            <div className="gameover-block__end-button">
              <MainButton text="RESTART" variant="light"/>
            </div>
          </div>
        </div>

        <div className="gameover-block__widget">
          <Widget size="sm" imageSrc="/images/widgets/older.png" text="PixelMate" />
        </div>
      </div>
    </section>
  );
}