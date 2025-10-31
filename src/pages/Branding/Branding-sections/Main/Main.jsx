import React from "react";
import "./Main.scss";
import Widget from "../../../../components/Widget/Widget.jsx";
import Carousel from '../../../../components/Carousel/Carousel.jsx';
import img1 from "@/assets/images/widgets/accordion.png";
import img2 from "@/assets/images/widgets/accordion.png";
import img3 from "@/assets/images/widgets/accordion.png";

export default function Main({ id }) {

  const slides = [img1, img2, img3];

  return (
    <section id={id} className="main">
      <div className="main-block">
        <div className="main-block__widget">
          <Widget size="lg" imageSrc="/src/assets/images/widgets/video.png" text="Check what you need" />
        </div>

        <div className="main-block__widget">
          <Widget size="sm" imageSrc="/src/assets/images/widgets/pixel-mate.png" text="Check what you need" />
        </div>

        <div className="main-block__widget">
          <Carousel items={slides} title="Uriel Saenz brand book"/>
        </div>
      </div>
    </section>
  );
}