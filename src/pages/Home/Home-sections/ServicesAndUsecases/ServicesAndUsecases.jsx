import Widget from '../../../../components/Widget/Widget';
import MainButton from '../../../Home/Home-button/Main-button';
import './ServicesAndUsecases.scss';
import pixelMate from '@/assets/images/widgets/pixel-mate.webp';
import brandingService from '@/assets/images/widgets/branding-service.webp';
import moonlightBrand from '@/assets/images/widgets/moonlight-brand.webp';
import check from '@/assets/images/widgets/video.webp';
import exhibitionStand from '@/assets/images/widgets/exhibition-stand.webp';
import sites from '@/assets/images/widgets/sites-and-apps.webp';
import uriel from '@/assets/images/widgets/uriel.webp';
import janice from '@/assets/images/widgets/janice.webp';
import place from '@/assets/images/widgets/place-for-you.webp';



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
          <div className="servicesandusecases-bottom__works-work servicesandusecases-bottom__works-work--mobile">
            <Widget size="sm" imageSrc={uriel} text="Uriel Saenz Brand books" textColor='light' />
          </div>

          <div className="servicesandusecases-bottom__works-work servicesandusecases-bottom__works-work--mobile">
            <Widget size="sm" imageSrc={janice} text="Moonlight website" textColor='light' />
          </div>

          <div className="servicesandusecases-bottom__works-work servicesandusecases-bottom__works-work--mobile">
            <Widget size="sm" imageSrc={place} text="Place for you" textColor='light' />
          </div>

          <div className="servicesandusecases-bottom__works-work servicesandusecases-bottom__works-work--mobile">
            <Widget size="sm" imageSrc={exhibitionStand} text="Exhibition stand" textColor='light' />
          </div>

          <div className="servicesandusecases-bottom__pixelmate pixel-ai">
            <Widget size="sm" imageSrc={pixelMate} text="PixelMate" textColor='light' />
          </div>


          <div className="servicesandusecases-bottom__works-check">
            <Widget size="lg" imageSrc={check} text="What service do you need?" textColor='light' />
          </div>

          <div className="servicesandusecases-bottom__works-title servicesandusecases-bottom__widgets--desktop">
            <Widget
              size="sm"
              imageSrc={brandingService}
              text="Branding"
              backImageSrc={moonlightBrand}
              double
              href={'/branding'}
            />
            
            <Widget size="md" imageSrc={sites} text="SITES and APP`s" textColor='light' />
          </div>

          <div className="servicesandusecases-top servicesandusecases-top--tablet">
            <h1 className="servicesandusecases-top__title">
              Services And Use cases
            </h1>

            <div className="servicesandusecases-top__button">
              <MainButton variant='dark' text='view all case studies' />
            </div>
          </div>

          <div className="servicesandusecases-bottom__branding servicesandusecases-bottom__widgets--desktop">
            <Widget
              size="sm"
              imageSrc={brandingService}
              text="Branding"
              backImageSrc={moonlightBrand}
              double
              href={'/branding'}
            />
          </div>

          <div className="servicesandusecases-bottom__works--desktop">
            <div className="servicesandusecases-bottom__works-work">
              <Widget size="sm" imageSrc={uriel} text="Uriel Saenz Brand books" textColor='light' />
            </div>

            <div className="servicesandusecases-bottom__works-work">
              <Widget size="sm" imageSrc={janice} text="Moonlight website" textColor='light' />
            </div>

            <div className="servicesandusecases-bottom__works-work">
              <Widget size="sm" imageSrc={place} text="Place for you" textColor='light' />
            </div>

            <div className="servicesandusecases-bottom__works-work">
              <Widget size="sm" imageSrc={exhibitionStand} text="Exhibition stand" textColor='light' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
