import './Main.scss';

import MainWindow from '../../../Home/Home-window/Main-window.jsx';
import Widget from '../../../../components/Widget/Widget.jsx';
import ExpandableWidget from '../../../../components/ExpandableWidget/ExpandableWidget.jsx';
// import { ReactComponent as PlayIcon } from 'assets/play.svg';


export default function Main({ id }) {
  return (
    <section id={id} className="main">
      <div className="main-top">
        <div className="main-top__widgets">
          <div className="main-top__widgets-widget">
            <Widget size="sm" imageSrc="/images/widgets/ai-agents-chatbots.png" text="AI Agents and chatbots" />
          </div>

          <div className="main-top__widgets-widget">
            <Widget size="sm" imageSrc="/images/widgets/linkedin.png" text="Linkedin" />
          </div>

          <div className="main-top__widgets-widget">
            <Widget size="sm" imageSrc="/images/widgets/whatsapp.svg" text="WhatsApp" />
          </div>

          <div className="main-top__widgets-widget">
            <Widget size="md" imageSrc="/images/widgets/sites-and-apps.png" text="SITES and APP`s" />
          </div>

          <div className="main-top__widgets-widget">
            <Widget size="sm" imageSrc="/images/widgets/instagram.svg" text="Instagram" />
          </div>

          <div className="main-top__widgets-widget">
            <ExpandableWidget
              trigger={{ size: 'sm', imageSrc: '/images/widgets/white-folder.svg', text: 'Social media' }}
              items={[
                { imageSrc: '/images/widgets/facebook.svg', text: 'Facebook', href: 'https://twitter.com/...' },
                { imageSrc: '/images/widgets/youtube.svg', text: 'YouTube', href: 'https://youtube.com/@...' },
                { imageSrc: '/images/widgets/tik-tok.svg', text: 'TikTok', href: 'https://tiktok.com/@...' },
              ]}
            />
          </div>

          <div className="main-top__widgets-widget">
            <Widget
              size="sm"
              imageSrc="/images/widgets/main-brand.png"
              text="Branding"
              backImageSrc="/images/widgets/moonlight-brand.png"
              double
            />
          </div>

          <div className="main-top__widgets-widget">
            <Widget size="sm" imageSrc="/images/widgets/white-folder.svg" text="About us" />
          </div>

          <div className="main-top__widgets-widget">
            <Widget size="sm" imageSrc="/images/widgets/workflow-optimization.png" text="Workflow Optimization" />
          </div>

          <div className="main-top__widgets-widget">
            <Widget size="sm" imageSrc="/images/widgets/business-automation.png" text="Business Automation" />
          </div>

          <div className="main-top__widgets-widget">
            <Widget size="sm" imageSrc="/images/widgets/pixel-mate.png" text="PixelMate" />
          </div>

          <div className='main-top__widgets-widget main-container main-container--desktop'>
            <MainWindow />
          </div>
        </div>

        <div className='main-container main-container--tabphone'>
          <MainWindow />
        </div>
      </div>

      <div className="main-bottom">
        <div className="main-bottom__widgets">
          <div className="main-bottom__widgets-first">
            <div className="main-bottom__widgets-widget">
              <Widget size="sm" imageSrc="/images/widgets/pixel-mate.png" text="PixelMate" />
            </div>

            {/* <div className="main-bottom__widgets-widget"> */}
            <ExpandableWidget
              trigger={{ size: 'sm', imageSrc: '/images/widgets/white-folder.svg', text: 'Social media' }}
              items={[
                { imageSrc: '/images/widgets/whatsapp.svg', text: 'WhatsApp', href: 'https://facebook.com/...' },
                { imageSrc: '/images/widgets/instagram.svg', text: 'Instagram', href: 'https://instagram.com/...' },
                { imageSrc: '/images/widgets/facebook.svg', text: 'Facebook', href: 'https://twitter.com/...' },
                { imageSrc: '/images/widgets/youtube.svg', text: 'YouTube', href: 'https://youtube.com/@...' },
                { imageSrc: '/images/widgets/tik-tok.svg', text: 'TikTok', href: 'https://tiktok.com/@...' },
              ]}
            />
            {/* </div> */}

            <div className="main-bottom__widgets-widget">
              <Widget size="sm" imageSrc="/images/widgets/linkedin.png" text="Linkedin" />
            </div>
          </div>

          <div className="main-bottom__widgets-second">
            <div className="main-bottom__widgets-widget">
              <Widget size="sm" imageSrc="/images/widgets/workflow-optimization.png" text="Workflow Optimization" />
            </div>

            <div className="main-bottom__widgets-widget">
              <Widget size="md" imageSrc="/images/widgets/sites-and-apps.png" text="SITES and APP`s" />
            </div>
          </div>

          <div className="main-bottom__widgets-third">
            <div className="main-bottom__widgets-widget">
              <Widget
                size="sm"
                imageSrc="/images/widgets/uriel-brand.png"
                text="Branding"
                backImageSrc="/images/widgets/moonlight-brand.png"
                double
              />
            </div>

            <div className="main-bottom__widgets-widget">
              <Widget size="sm" imageSrc="/images/widgets/yellow-folder.svg" text="About us" />
            </div>
          </div>

          <div className="main-bottom__widgets-four">
            <div className="main-bottom__widgets-widget">
              <Widget size="sm" imageSrc="/images/widgets/ai-agents-chatbots.png" text="AI Agents and chatbots" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
