import Widget from '../../../../components/Widget/Widget';
import MainButton from '../../../Home/Home-button/Main-button';
import './ServicesAndUsecases.scss';
import pixelMate from '@/assets/images/widgets/pixel-mate.png';
import brandingService from '@/assets/images/widgets/branding-service.png';
import moonlightBrand from '@/assets/images/widgets/moonlight-brand.png';
import check from '@/assets/images/widgets/video.png';
import checkWhatYouNeed from '@/assets/images/widgets/checkwhatyouneed.png';
import sites from '@/assets/images/widgets/sites-and-apps.png';
import uriel from '@/assets/images/widgets/uriel.png';
import janice from '@/assets/images/widgets/janice.png';
import place from '@/assets/images/widgets/placeforyou.png';



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
            <Widget size="sm" imageSrc={pixelMate} text="PixelMate" />
          </div>

          <div className="servicesandusecases-bottom__branding servicesandusecases-bottom__widgets--desktop">
            <Widget
              size="sm"
              imageSrc={brandingService}
              text="Branding"
              backImageSrc={moonlightBrand}
              double
            />
          </div>

          <div className="servicesandusecases-bottom__works-check servicesandusecases-bottom__works-check--hide">
            <Widget size="lg" imageSrc={check} text="Check what you need" />
          </div>

          <div className="servicesandusecases-bottom__works-check servicesandusecases-bottom__widgets--desktop">
            <Widget size="lg" imageSrc={checkWhatYouNeed} text="Check what you need" />
          </div>

          <div className="servicesandusecases-bottom__works-title servicesandusecases-bottom__widgets--desktop">
            <Widget size="md" imageSrc={sites} text="SITES and APP`s" />
          </div>

          <div className="servicesandusecases-bottom__works-work servicesandusecases-bottom__works-work--mobile">
            <Widget size="sm" imageSrc={uriel} text="Uriel Saenz Brand books" />
          </div>

          <div className="servicesandusecases-bottom__works-work servicesandusecases-bottom__works-work--mobile">
            <Widget size="sm" imageSrc={janice} text="Janice website" />
          </div>

          <div className="servicesandusecases-bottom__works-work servicesandusecases-bottom__works-work--mobile">
            <Widget size="sm" imageSrc={place} text="Place for you" />
          </div>

          <div className="servicesandusecases-bottom__works servicesandusecases-bottom__works--mobile">
            <div className="servicesandusecases-bottom__works-work">
              <Widget size="sm" imageSrc={uriel} text="Uriel Saenz Brand books" />
            </div>

            <div className="servicesandusecases-bottom__works-work">
              <Widget size="sm" imageSrc={janice} text="Janice website" />
            </div>

            <div className="servicesandusecases-bottom__works-work">
              <Widget size="sm" imageSrc={place} text="Place for you" />
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
