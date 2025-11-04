import './Main.scss';

import MainWindow from '../../../Home/Home-window/Main-window.jsx';
import Widget from '../../../../components/Widget/Widget.jsx';
import ExpandableWidget from '../../../../components/ExpandableWidget/ExpandableWidget.jsx';
import instagram from '@/assets/images/widgets/instagram.webp';
import facebook from '@/assets/images/widgets/facebook.webp';
import linkedin from '@/assets/images/widgets/linkedin.webp';
import whatsapp from '@/assets/images/widgets/whatsapp.webp';
import youtube from '@/assets/images/widgets/youtube.webp';
import tiktok from '@/assets/images/widgets/tik-tok.webp';
import aiAgent from '@/assets/images/widgets/ai-agents-chatbots.webp';
import sites from '@/assets/images/widgets/sites-and-apps.webp';
import whiteFolder from '@/assets/images/widgets/white-folder.webp';
import mainBrand from '@/assets/images/widgets/branding-service.webp';
import moonlightBrand from '@/assets/images/widgets/moonlight-brand.webp';
import workflowOptimization from '@/assets/images/widgets/workflow-optimization.webp';
import pixelMate from '@/assets/images/widgets/pixel-mate.webp';
import businessAutomation from '@/assets/images/widgets/business-automation.webp';
import yellowFolder from '@/assets/images/widgets/yellow-folder.webp';
import janiceBrand from '@/assets/images/widgets/moonlight-brand.webp';
import socialFolder from '@/assets/images/widgets/social-folder.webp';

export default function Main({ id }) {
  return (
    <section id={id} className="main">
      <div className="main-top">
        <div className="main-top__widgets">
          <div className="main-top__widgets-widget">
            <Widget size="sm" imageSrc={aiAgent} text="AI Agents and chatbots"/>
          </div>

          <div className="main-top__widgets-widget">
            <Widget size="sm" imageSrc={linkedin} text="Linkedin" href={'https://www.linkedin.com/company/pixel-experts-team/'}/>
          </div>

          <div className="main-top__widgets-widget">
            <Widget size="sm" imageSrc={whatsapp} text="WhatsApp" href={'https://wa.me/48884037664?text=Hello%2C%20Pixel%20%21'}/>
          </div>

          <div className="main-top__widgets-widget">
            <Widget size="md" imageSrc={sites} text="Sites and App`s" />
          </div>

          <div className="main-top__widgets-widget">
            <Widget size="sm" imageSrc={instagram} text="Instagram" href={'https://www.instagram.com/pixelexpertsteam'}/>
          </div>

          <div className="main-top__widgets-widget">
            <ExpandableWidget
              trigger={{ size: 'sm', imageSrc: socialFolder, text: 'Social media' }}
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
            <div className="main-bottom__widgets-widget pixel-ai">
              <Widget size="sm" imageSrc={pixelMate} text="PixelMate" />
            </div>

            <ExpandableWidget
              trigger={{ size: 'sm', imageSrc: socialFolder, text: 'Social media' }}
              items={[
                { imageSrc: whatsapp, text: 'WhatsApp', href: 'https://wa.me/48884037664?text=Hello%2C%20Pixel%20%21' },
                { imageSrc: instagram, text: 'Instagram', href: 'https://www.instagram.com/pixelexpertsteam' },
                { imageSrc: facebook, text: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61583309151807' },
                { imageSrc: youtube, text: 'YouTube', href: 'https://www.youtube.com/channel/UCdG3plbGNkRPiwRZfXY01Fg' },
                { imageSrc: tiktok, text: 'TikTok', href: 'https://tiktok.com/@...' },
              ]}
            />

            <div className="main-bottom__widgets-widget">
              <Widget size="sm" imageSrc={linkedin} text="Linkedin" href={"https://www.linkedin.com/company/pixel-experts-team/"}/>
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
                imageSrc={mainBrand}
                text="Branding"
                backImageSrc={janiceBrand}
                double
                href={'/branding'}
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

            <div className="main-bottom__widgets-widget">
              <Widget size="sm" imageSrc={businessAutomation} text="AI Agents and chatbots" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
