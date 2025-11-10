import React from "react";
import "./Main.scss";
import Widget from "../../../../components/Widget/Widget.jsx";
import Carousel from '../../../../components/Carousel/Carousel.jsx';
import img1 from "@/assets/images/uriel-carousel/uriel-carousel1.webp";
import img2 from "@/assets/images/uriel-carousel/uriel-carousel2.webp";
import img3 from "@/assets/images/uriel-carousel/uriel-carousel3.webp";
import img4 from "@/assets/images/uriel-carousel/uriel-carousel4.webp";
import img5 from "@/assets/images/uriel-carousel/uriel-carousel5.webp";
import img6 from "@/assets/images/uriel-carousel/uriel-carousel6.webp";
import img7 from "@/assets/images/uriel-carousel/uriel-carousel7.webp";
import img8 from "@/assets/images/uriel-carousel/uriel-carousel8.webp";
import img9 from "@/assets/images/uriel-carousel/uriel-carousel9.webp";
import check from "@/assets/images/widgets/video.webp";
import pixel from "@/assets/images/widgets/pixel-mate.webp";
import accordion from '@/assets/images/widgets/accordion.webp'
import { Accordion, AccordionItem } from "../../BrandingAccordion/BrandingAccordion.jsx";

export default function Main({ id }) {

  const urielSlides = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

  return (
    <section id={id} className="main main-branding">
      <div className="main-body">
        <div className="main-block">
          <div className="main-block__widget">
            <Widget size="lg" imageSrc={check} text="Check what you need" textColor="light" />
          </div>

          <div className="main-block__widget main-block__widget-pixel--mobile pixel-ai">
            <Widget size="sm" imageSrc={pixel} text="PixelMate" />
          </div>

          <div className="main-block__widget main-block__widget-pixel--desktop pixel-ai--active">
            <Widget size="sm" imageSrc={pixel} text="PixelMate" />
          </div>

          <div className="main-block__widget main-block__widget--hide">
            <Carousel items={urielSlides} title="Uriel Saenz brand book" />
          </div>

          <div className="main-block__widget main-block__widget--tablet">
            <Accordion defaultOpen={0}>
              <AccordionItem
                title="Brandbook"
                subtitle="Every business tells a story. We turn it into a visual language."
                media={
                  <img src={accordion} alt="Brand preview" />
                }
              >
                <p>The Pixel brandbook isn’t just a guide — it’s your brand’s digital DNA.</p>
                <br />
                <p>
                  From typography to tone, from colours to character — it captures what
                  already exists inside your brand and turns it into a system that speaks
                  clearly and consistently. We don’t decorate.
                </p>
                <p>
                  We reveal the essence of who you are.
                </p>
              </AccordionItem>

              <AccordionItem title="WHAT PROBLEMS DOES A BRANDBOOK SOLVE?">
                <ul><b>Without a brandbook:</b>
                  <li>Inconsistent visuals and communication</li>
                  <li>Lack of brand recognition</li>
                  <li>Confusion across teams and agencies</li>
                  <li>Wasted time and budget on misaligned assets</li>
                </ul>
                <br />
                <ul><b>With a Pixel brandbook:</b>
                  <li>Clear visual system across all channels</li>
                  <li>Seamless collaboration between designers, marketers, and developers</li>
                  <li>Unified voice and style across platforms</li>
                  <li>Customers instantly recognize and remember your brand</li>
                </ul>

              </AccordionItem>

              <AccordionItem title="Our edge: Brandbook + AI" subtitle="Pixel Brandbook = Visual System + AI Agent">
                <p>We go beyond the traditional. Every brandbook we
                  deliver comes with a custom-trained AI agent that:</p>
                <ul>
                  <li>Knows your visual style, mission, tone, and audience</li>
                  <li>Generates visuals that follow your brand rules</li>
                  <li>Recommends content, packaging, and marketing ideas</li>
                  <li>Writes brand-consistent texts</li>
                  <li>Adapts to your evolving business needs</li>
                </ul>
                <br />
                <p>This AI is infused with your brand's core.More than a document — it’s your brand’s operating system.</p>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}