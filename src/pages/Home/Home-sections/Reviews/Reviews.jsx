import React from "react";
import "./Reviews.scss";
import Widget from "../../../../components/Widget/Widget.jsx";
import AnimatedMenuIcon from '../../../../components/Icons/Icon.jsx';

export default function Reviews({ id }) {
  const videoJanice = "/video/janice.mp4";
  const titleId = "reviews-video-title";

  return (
    <section id={id} className="reviews">
      <div className="reviews-block">
        <div className="reviews-header">
          <h1 className="reviews-header__title">Results come first</h1>
        </div>

        <figure className="reviews-menu__video-block">
          <div className="reviews-menu__video">
            <video
              src={videoJanice}
              controls
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              aria-labelledby={titleId}
              className=""
            >
              <track kind="captions" />
              Your browser does not support the video tag.
            </video>
          </div>
          <figcaption>
            <h2 id={titleId} className="reviews-menu__video-title">
              Janice Grodsky video
            </h2>
          </figcaption>
        </figure>

        <article className="reviews-menu__testimonials-block reviews-menu__testimonials-block--janice">
          <div className="reviews-menu__testimonials-header">
            <span className="reviews-menu__testimonials-icon">
              <AnimatedMenuIcon
                open={true}
                size={16}
                className="close-icon"
              />
            </span>

            <h3 className="reviews-menu__testimonials-title">
              Janice Grodsky, Founder & CEO, Moonlight Company
            </h3>
          </div>

          <div className="reviews-menu__testimonials-body">
            <p className="reviews-menu__testimonials-text">
              My expectations have been exceeded. I never imagined the final outcome would be so precise, stylish, and full of life.
            </p>
            <p className="reviews-menu__testimonials-text">
              What impressed me most was how the team asked the right questions and immersed themselves in my world — it felt like a true dialogue and deep understanding. I wholeheartedly recommend PIXEL to anyone who wants to build a brand identity that reflects their personality and values.
            </p>
            <p className="reviews-menu__testimonials-text">
              And I want to extend a special thanks to the whole team — working with you has been an absolute pleasure.
            </p>
          </div>
        </article>

        <article className="reviews-menu__testimonials-block reviews-menu__testimonials-block--uriel">
          <div className="reviews-menu__testimonials-header">
            <span className="reviews-menu__testimonials-icon">
              <AnimatedMenuIcon
                open={true}
                size={16}
                className="close-icon"
              />
            </span>
            <h3 className="reviews-menu__testimonials-title">
              Uriel Saenz, CEO, The <br/> US Lifestyle Group LLC
            </h3>
          </div>
          <div className="reviews-menu__testimonials-body">
            <p className="reviews-menu__testimonials-text">
              Working with PIXEL was a true <br/> example of transparent and creative partnership. The team adapted flexibly at every stage and did everything to deeply understand my brand.
            </p>
            <p className="reviews-menu__testimonials-text">
              The result is a brand book where I can truly recognize myself and my company. It’s not just design — it’s the essence of The US Lifestyle Group.
            </p>
            <p className="reviews-menu__testimonials-text">
              I recommend PIXEL to anyone looking for a team that not only creates visuals, but also builds a way of working tailored to you.
            </p>
          </div>
        </article>

        <div className="reviews-widgets reviews-widgets--first">
          <Widget size="sm" imageSrc="/images/widgets/yellow-folder.svg" text="About us" />
        </div>

        <div className="reviews-widgets reviews-widgets--second">
          <Widget size="sm" imageSrc="/images/widgets/pixel-mate.png" text="PixelMate" />
        </div>
      </div>
    </section>
  );
}