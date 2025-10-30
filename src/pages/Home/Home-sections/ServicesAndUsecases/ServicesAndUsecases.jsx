import Widget from '../../../../components/Widget/Widget';
import MainButton from '../../Home-button/Main-Button';
import './servicesandusecases.scss';

export default function servicesandusecases({ id }) {
  return (
    <section id={id} className="servicesandusecases">
      <div className="servicesandusecases-block">
        <div className="servicesandusecases-top servicesandusecases-top--mobile">
          <h1 className="servicesandusecases-top__title">
            Services And Use cases
          </h1>

          <div className="servicesandusecases-top__button">
            <MainButton variant='dark' text='view all case studies' />
          </div>
        </div>

        <div className="servicesandusecases-bottom">
          <div className="servicesandusecases-bottom__pixelmate">
            <Widget size="sm" imageSrc="/images/widgets/pixel-mate.png" text="PixelMate" />
          </div>

          <div className="servicesandusecases-bottom__branding servicesandusecases-bottom__widgets--desktop">
            <Widget
              size="sm"
              imageSrc="/images/widgets/branding-service.png"
              text="Branding"
              backImageSrc="/images/widgets/moonlight-brand.png"
              double
            />
          </div>

          <div className="servicesandusecases-bottom__works-check servicesandusecases-bottom__works-check--hide">
            <Widget size="lg" imageSrc="/images/widgets/video.png" text="Check what you need" />
          </div>

          <div className="servicesandusecases-bottom__works-check servicesandusecases-bottom__widgets--desktop">
            <Widget size="lg" imageSrc="/images/widgets/checkwhatyouneed.png" text="Check what you need" />
          </div>

          <div className="servicesandusecases-bottom__works-title servicesandusecases-bottom__widgets--desktop">
            <Widget size="md" imageSrc="/images/widgets/sites-and-apps.png" text="SITES and APP`s" />
          </div>

          <div className="servicesandusecases-bottom__works-work servicesandusecases-bottom__works-work--mobile">
            <Widget size="sm" imageSrc="/images/widgets/uriel.png" text="Uriel Saenz Brand books" />
          </div>

          <div className="servicesandusecases-bottom__works-work servicesandusecases-bottom__works-work--mobile">
            <Widget size="sm" imageSrc="/images/widgets/janice.png" text="Janice website" />
          </div>

          <div className="servicesandusecases-bottom__works-work servicesandusecases-bottom__works-work--mobile">
            <Widget size="sm" imageSrc="/images/widgets/placeforyou.png" text="Place for you" />
          </div>

          <div className="servicesandusecases-bottom__works servicesandusecases-bottom__works--mobile">
            <div className="servicesandusecases-bottom__works-work">
              <Widget size="sm" imageSrc="/images/widgets/uriel.png" text="Uriel Saenz Brand books" />
            </div>

            <div className="servicesandusecases-bottom__works-work">
              <Widget size="sm" imageSrc="/images/widgets/janice.png" text="Janice website" />
            </div>

            <div className="servicesandusecases-bottom__works-work">
              <Widget size="sm" imageSrc="/images/widgets/placeforyou.png" text="Place for you" />
            </div>
          </div>

          <div className="servicesandusecases-top servicesandusecases-top--tablet">
            <h1 className="servicesandusecases-top__title">
              Services And Use cases
            </h1>

            <div className="servicesandusecases-top__button">
              <MainButton variant='dark' text='view all case studies' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
