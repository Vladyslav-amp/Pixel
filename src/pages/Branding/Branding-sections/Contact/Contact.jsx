import React from "react";
import "./Contact.scss";
import Widget from "../../../../components/Widget/Widget.jsx";
import ContactModal from '../../../../components/ContactModal/ContactModal.jsx';

export default function Contact({ id }) {
  return (
    <section id={id} className="contact">
      <div className="contact-block">
        <div className="contact-block__top contact-block__widget">
          <h1 className="contact-block__top-title">
            Time to move beyond a logo.
          </h1>

          <div className="contact-block__top-text">
            <p className="contact-block__top-text--top">
              Build a system your customers fall in love with
              — and remember.Let your brand work even when you sleep.
            </p>
            <br/>
            <p className="contact-block__top-text--top">
              📩 Ready for next-level brand identity?Write to us. Let’s build your future.
            </p>
          </div>
        </div>

        <div className="contact-block__bottom contact-block__widget">
          <ContactModal inline />
        </div>

        {/* <div className="brandbook-block__widget">
          <Widget size="sm" imageSrc="/images/widgets/video.png" text="PixelMate" />
        </div> */}
      </div>
    </section>
  );
}