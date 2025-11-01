import React from "react";
import "./Brandbook.scss";
import Widget from "../../../../components/Widget/Widget.jsx";
import { Accordion, AccordionItem } from "../../BrandingAccordion/BrandingAccordion.jsx";
import GlitchEffect from '../../Effects/GlitchEffect.jsx'

import Carousel from '../../../../components/Carousel/Carousel.jsx';
import img1 from "/src/assets/images/widgets/moonlight-brand.png";
import img2 from "/src/assets/images/widgets/moonlight-brand.png";
import img3 from "/src/assets/images/widgets/moonlight-brand.png";
import img4 from "/src/assets/images/widgets/uriel.png";
import img5 from "/src/assets/images/widgets/uriel.png";
import img6 from "/src/assets/images/widgets/uriel.png";
import pixelmate from '@/assets/images/widgets/pixel-mate.png'
import video from '@/assets/images/widgets/video.png'
import whiteFolder from '@/assets/images/widgets/white-folder.svg'
import accordion from '@/assets/images/widgets/accordion.png'
import MainButton from '../../../Home/Home-button/Main-button.jsx';


export default function Brandbook({ id }) {
  const slides = [img1, img2, img3];
  const slides2 = [img4, img5, img6];


  return (
    <section id={id} className="brandbook">
      <div className="brandbook-block">
        <div className="brandbook-block__widget brandbook-block__widget--accordion">
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

        <div className="brandbook-block__widget">
          <Carousel items={slides} title="Janice Grodsky brand book" />
        </div>

        <div className="brandbook-block__widget brandbook-block__widget--carousel">
          <Carousel items={slides2} title="Uriel Saenz brand book" />
        </div>

        <div className="brandbook-block__widget">
          <Widget size="sm" imageSrc={video} text="Pixel vs Traditional" />
        </div>

        <div className="brandbook-block__widget">
          <Widget size="sm" imageSrc={whiteFolder} text="See examples" />
        </div>

        <div className="brandbook-block__widget brandbook-block__widget--pixel">
          <Widget size="sm" imageSrc={pixelmate} text="PixelMate" />
        </div>

        <div className="brandbook-block__widget brandbook-block__widget--center">
          <h1 className="brandbook-block__widget-title">branding</h1>
          <MainButton text="view all case studies" />
        </div>
      </div>
    </section>
  );
}