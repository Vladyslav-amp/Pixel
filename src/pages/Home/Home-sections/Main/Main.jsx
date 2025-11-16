import './Main.scss';

import MainWindow from '../../../Home/Home-window/Main-window.jsx';
import Widget from '../../../../components/Widget/Widget.jsx';
import ExpandableWidget from '../../../../components/ExpandableWidget/ExpandableWidget.jsx';
import instagram from '@/assets/images/widgets/instagram.webp';
import facebook from '@/assets/images/widgets/facebook.webp';
import linkedin from '@/assets/images/widgets/linkedin.webp';
import whatsapp from '@/assets/images/widgets/whatsapp.webp';
import youtube from '@/assets/images/widgets/youtube.webp';
import aiAgent from '@/assets/images/widgets/ai-agents-chatbots.webp';
import sites from '@/assets/images/widgets/sites-and-apps.webp';
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
          <div className="main-top__widgets-group main-top__widgets-group--one">
            <div className="main-top__widgets-widget">
              <Widget size="sm" imageSrc={aiAgent} text="AI Agents and chatbots" textColor='light' />
            </div>

            <div className="main-top__widgets-widget">
              <Widget size="md" imageSrc={sites} text="Sites and App`s" textColor='light' />
            </div>
          </div>

          <div className="main-top__widgets-group main-top__widgets-group--two">
            <div className="main-top__widgets-widget">
              <Widget size="sm" imageSrc={linkedin} text="Linkedin" href={'https://www.linkedin.com/company/pixel-experts-team/'} textColor='light' />
            </div>

            <div className="main-top__widgets-widget">
              <Widget size="sm" imageSrc={whatsapp} text="WhatsApp" href={'https://wa.me/48884037664?text=Hello%2C%20Pixel%20%21'} textColor='light' />
            </div>

            <div className="main-top__widgets-widget">
              <Widget size="sm" imageSrc={instagram} text="Instagram" href={'https://www.instagram.com/pixelexpertsteam'} textColor='light' />
            </div>

            <div className="main-top__widgets-widget">
              <ExpandableWidget
                trigger={{ size: 'sm', text: 'Social media', folder: true }}
                items={[
                  { imageSrc: facebook, text: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61583309151807' },
                  { imageSrc: youtube, text: 'YouTube', href: 'https://www.youtube.com/channel/UCdG3plbGNkRPiwRZfXY01Fg' },
                ]}
              />
            </div>
          </div>

          <div className="main-top__widgets-group main-top__widgets-group--three">
            <div className="main-top__widgets-widget">
              <Widget
                size="sm"
                imageSrc={mainBrand}
                text="Branding"
                href={"/branding"}
                target="_self"
                backImageSrc={moonlightBrand}
                double
                textColor='light'
              />
            </div>

            <div className="main-top__widgets-widget">
              <Widget size="sm" imageSrc={businessAutomation} text="Business Automation" textColor='light' />
            </div>

            <div className="main-top__widgets-widget">
              <Widget size="sm" imageSrc={workflowOptimization} text="Workflow Optimization" textColor='light' />
            </div>
          </div>

          <div className="main-top__widgets-group main-top__widgets-group--four main-container">
            <div className="main-top__widgets-center">
              <h1 className="main-top__widgets-text">
                Full-service branding agency
              </h1>

              <h2 className="main-top__widgets-text main-top__widgets-text--small">
                We specialize in comprehensive development of trademarks and corporate brands.
              </h2>
            </div>

            <div className='main-top__widgets-widget'>
              <MainWindow />
            </div>
          </div>

          <div className="main-top__widgets-group main-top__widgets-group--five">
            <div className="main-top__widgets-widget">
              <Widget size="sm" imageSrc={yellowFolder} text="About us" textColor='light' />
            </div>
          </div>
        </div>

        <div className='main-container main-container--tabphone'>
          <div className="main-top__widgets-group main-top__widgets-group--four main-container">
            <div className="main-top__widgets-center">
              <h1 className="main-top__widgets-text">
                Full-service branding agency
              </h1>

              <h2 className="main-top__widgets-text main-top__widgets-text--small">
                We specialize in comprehensive development of trademarks and corporate brands.
              </h2>
            </div>

            <div className='main-top__widgets-widget'>
              <MainWindow />
            </div>
          </div>
        </div>
      </div>

      <div className="main-bottom">
        <div className="main-bottom__widgets">
          <div className="main-bottom__widgets-first">
            <Widget size="sm" imageSrc={pixelMate} text="PixelMate" textColor='light' />

            <ExpandableWidget
              trigger={{ size: 'sm', imageSrc: socialFolder, text: 'Social media', folder: true }}
              items={[
                { imageSrc: whatsapp, text: 'WhatsApp', href: 'https://wa.me/48884037664?text=Hello%2C%20Pixel%20%21' },
                { imageSrc: instagram, text: 'Instagram', href: 'https://www.instagram.com/pixelexpertsteam' },
                { imageSrc: facebook, text: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61583309151807' },
                { imageSrc: youtube, text: 'YouTube', href: 'https://www.youtube.com/channel/UCdG3plbGNkRPiwRZfXY01Fg' },
              ]}
            />
              <div className="main-bottom__widgets-widget">
           <Widget size="sm" imageSrc={linkedin} text="Linkedin" href={"https://www.linkedin.com/company/pixel-experts-team/"} textColor='light' />

              </div>
          </div>

          <div className="main-bottom__widgets-second">
            <div className="main-bottom__widgets-widget">
              <div className="main-bottom__widgets-widget--double-column">
                <Widget size="sm" imageSrc={businessAutomation} text="AI Agents and chatbots" textColor='light' />

                <Widget
                  size="sm"
                  imageSrc={mainBrand}
                  text="Branding"
                  backImageSrc={janiceBrand}
                  double
                  href={'/branding'}
                  textColor='light'
                />
              </div>
            </div>

            <div className="main-bottom__widgets-widget">
              <Widget size="md" imageSrc={sites} text="SITES and APP`s" textColor='light' />
            </div>
          </div>

          <div className="main-bottom__widgets-third">
            <div className="main-bottom__widgets-widget">
              <Widget size="sm" imageSrc={workflowOptimization} text="Workflow Optimization" textColor='light' />
            </div>

            <div className="main-bottom__widgets-widget">
              <Widget size="sm" imageSrc={businessAutomation} text="Business Automation" textColor='light' />
            </div>

            <div className="main-bottom__widgets-widget">
              <Widget size="sm" imageSrc={yellowFolder} text="About us" textColor='light' />
            </div>
          </div>
        </div>
      </div>

      <div className="pixel-ai--active">
        <Widget size="sm" imageSrc={pixelMate} text="PixelMate" limitToFooter={true} textColor='light'/>
      </div>
    </section>
  );
}
