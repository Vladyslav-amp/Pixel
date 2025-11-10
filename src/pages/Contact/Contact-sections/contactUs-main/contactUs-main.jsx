import React from "react";
import "./contactUs-main.scss";
import ContactModal from "../../../../components/ContactModal/ContactModal";
import Widget from "../../../../components/Widget/Widget";
import { useCopyMail } from "../../../../components/useCopyMail/useCopyMail";
import pixel from "@/assets/images/widgets/pixel-mate.webp";
import emailIcon from "@/assets/images/icons/mail.webp";
import phoneIcon from "@/assets/images/icons/phone.webp";

export default function ContactUsMain({ id }) {
  const { copyMail, CopyNotification } = useCopyMail();
  return (
    <section id={id} className="contactus">
      <div className="contactus-block">
        <div className="contactus-block__top">
          <div className="contactus-block__top-pixel pixel-ai">
            <Widget size="sm" imageSrc={pixel} text="About us" />
          </div>

          <div className="contactus-block__top-block">
            <p className="contactus-top__head">Contact us</p>

            <p className="contactus-top__title">
              We’d love to hear from you
            </p>

            <p className="contactus-top__subtitle">
              Our friendly team is always here to chat.
            </p>
          </div>

          <div className="contactus-block__top-block contactus-block__top-block--social">
            <div className="contactus-top__social">
              <div className="contactus-top__social-icon">
                <img
                  src={emailIcon}
                  alt="Email icon"
                  width={24}
                  height={24}
                  loading="eager"
                  decoding="async"
                />
              </div>
              <div className="contactus-top__social-data">
                <p className="contactus-top__social-head">Email</p>
                <a
                  className="contactus-top__social-email contactus-top__social-info"
                  href="mailto:elena@pixelexpertsteam.com"
                  onClick={(e) => copyMail("elena@pixelexpertsteam.com", e)}
                >
                  elena@pixelexpertsteam.com
                </a>

                <CopyNotification />
              </div>
            </div>

            <div className="contactus-top__social contactus-top__social--phone">
              <div className="contactus-top__social-icon">
                <img
                  src={phoneIcon}
                  alt="Phone icon"
                  width={24}
                  height={24}
                  loading="eager"
                  decoding="async"
                />
              </div>

              <div className="contactus-top__social-data">
                <p className="contactus-top__social-head">Phone</p>
                <div className="contactus-top__social-link">
                  <a
                  className="contactus-top__social-phone contactus-top__social-info"
                  href="tel:+18582128350"
                >
                  +1 858 212 8350
                </a>
                
                <a
                  className="contactus-top__social-phone contactus-top__social-info"
                  href="tel:+48884037664"
                >
                  +48 88 4037664
                </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="contactus-block__bottom">
          <div className="contactus-block__bottom-block">
            <p className="contactus-bottom__head">Contact us</p>

            <p className="contactus-bottom__title">get in touch</p>

            <p className="contactus-bottom__subtitle">
              We’d love to hear from you. Please fill out this form.
            </p>
          </div>

          <div className="contactus-block__bottom-block">
            <ContactModal inline />
          </div>
        </div>
      </div>
    </section>
  );
}
