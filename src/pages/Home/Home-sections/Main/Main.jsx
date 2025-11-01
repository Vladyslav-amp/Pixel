import './Main.scss';

import MainWindow from '../../../Home/Home-window/Main-window.jsx';
import Widget from '../../../../components/Widget/Widget.jsx';
import ExpandableWidget from '../../../../components/ExpandableWidget/ExpandableWidget.jsx';
import instagram from '@/assets/images/widgets/instagram.svg';
import facebook from '@/assets/images/widgets/facebook.svg';
import linkedin from '@/assets/images/widgets/linkedin.png';
import whatsapp from '@/assets/images/widgets/whatsapp.svg';
import youtube from '@/assets/images/widgets/youtube.svg';
import tiktok from '@/assets/images/widgets/tik-tok.svg';
import aiAgent from '@/assets/images/widgets/ai-agents-chatbots.png';
import sites from '@/assets/images/widgets/sites-and-apps.png';
import whiteFolder from '@/assets/images/widgets/white-folder.svg';
import mainBrand from '@/assets/images/widgets/main-brand.png';
import moonlightBrand from '@/assets/images/widgets/moonlight-brand.png';
import workflowOptimization from '@/assets/images/widgets/workflow-optimization.png';
import pixelMate from '@/assets/images/widgets/pixel-mate.png';
import businessAutomation from '@/assets/images/widgets/business-automation.png';
import yellowFolder from '@/assets/images/widgets/yellow-folder.svg';
import urielBrand from '@/assets/images/widgets/uriel-brand.png';
import janiceBrand from '@/assets/images/widgets/moonlight-brand.png';

export default function Main({ id }) {
  return (
    <section id={id} className="main">
      <div className="main-top">
        <div className="main-top__widgets">
          <div className="main-top__widgets-widget">
            <Widget size="sm" imageSrc={aiAgent} text="AI Agents and chatbots" />
          </div>

          <div className="main-top__widgets-widget">
            <Widget size="sm" imageSrc={linkedin} text="Linkedin" />
          </div>

          <div className="main-top__widgets-widget">
            <Widget size="sm" imageSrc={whatsapp} text="WhatsApp" />
          </div>

          <div className="main-top__widgets-widget">
            <Widget size="md" imageSrc={sites} text="SITES and APP`s" />
          </div>

          <div className="main-top__widgets-widget">
            <Widget size="sm" imageSrc={instagram} text="Instagram" />
          </div>

          <div className="main-top__widgets-widget">
            <ExpandableWidget
              trigger={{ size: 'sm', imageSrc: whiteFolder, text: 'Social media' }}
              items={[
                { imageSrc: facebook, text: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61583309151807' },
                { imageSrc: youtube, text: 'YouTube', href: 'https://www.youtube.com/channel/UCdG3plbGNkRPiwRZfXY01Fg' },
                { imageSrc: tiktok, text: 'TikTok', href: 'https://tiktok.com/@...' },
              ]}
            />
          </div>

          <div className="main-top__widgets-widget">
            <Widget
              size="sm"
              imageSrc={mainBrand}
              text="Branding"
              href={"/branding"}
              target="_self"
              backImageSrc={moonlightBrand}
              double
            />
          </div>

          <div className="main-top__widgets-widget">
            <Widget size="sm" imageSrc={whiteFolder} text="About us" />
          </div>

          <div className="main-top__widgets-widget">
            <Widget size="sm" imageSrc={workflowOptimization} text="Workflow Optimization" />
          </div>

          <div className="main-top__widgets-widget">
            <Widget size="sm" imageSrc={businessAutomation} text="Business Automation" />
          </div>

          <div className="main-top__widgets-widget">
            <Widget size="sm" imageSrc={pixelMate} text="PixelMate" />
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
              <Widget size="sm" imageSrc={pixelMate} text="PixelMate" />
            </div>

            <ExpandableWidget
              trigger={{ size: 'sm', imageSrc: whiteFolder, text: 'Social media' }}
              items={[
                { imageSrc: whatsapp, text: 'WhatsApp', href: 'https://facebook.com/...' },
                { imageSrc: instagram, text: 'Instagram', href: 'https://instagram.com/...' },
                { imageSrc: facebook, text: 'Facebook', href: 'https://twitter.com/...' },
                { imageSrc: youtube, text: 'YouTube', href: 'https://youtube.com/@...' },
                { imageSrc: tiktok, text: 'TikTok', href: 'https://tiktok.com/@...' },
              ]}
            />

            <div className="main-bottom__widgets-widget">
              <Widget size="sm" imageSrc={linkedin} text="Linkedin" />
            </div>
          </div>

          <div className="main-bottom__widgets-second">
            <div className="main-bottom__widgets-widget">
              <Widget size="sm" imageSrc={workflowOptimization} text="Workflow Optimization" />
            </div>

            <div className="main-bottom__widgets-widget">
              <Widget size="md" imageSrc={sites} text="SITES and APP`s" />
            </div>
          </div>

          <div className="main-bottom__widgets-third">
            <div className="main-bottom__widgets-widget">
              <Widget
                size="sm"
                imageSrc={urielBrand}
                text="Branding"
                backImageSrc={janiceBrand}
                double
              />
            </div>

            <div className="main-bottom__widgets-widget">
              <Widget size="sm" imageSrc={yellowFolder} text="About us" />
            </div>
          </div>

          <div className="main-bottom__widgets-four">
            <div className="main-bottom__widgets-widget">
              <Widget size="sm" imageSrc={aiAgent} text="AI Agents and chatbots" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
