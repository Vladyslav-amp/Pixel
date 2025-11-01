import MainButton from '../Home-button/Main-button';
import './Main-window.scss'
import iconMain from '@/assets/images/main-window-icon.svg';


export default function MainWindow() {
  return (
    <div id="MainWindow" className="MainWindow">
      <div className="MainWindow__container">
        <div className="MainWindow-top">
          <div className="MainWindow-top__title">
            <h3 className="MainWindow-top__title-text">
              Your brand. Enhanced by AI.
            </h3>
          </div>
        </div>

        <div className="MainWindow-mid">
          <div className="MainWindow-mid__title">
            <span className="MainWindow-mid__title-icon">
              <img src={iconMain} alt="main-window-icon" />
            </span>

            <h2 className="MainWindow-mid__title-text">
              PRODUCT INFORMATION SHEET
            </h2>
          </div>

          <div className="MainWindow-mid__subtitle">
            <h3 className="MainWindow-mid__subtitle-text">
              We create brand experiences where intelligence and design work as one.
            </h3>
          </div>
        </div>

        <div className="MainWindow-bottom">
          <div className="MainWindow-bottom__buttons-block">
            <MainButton text="Start" variant="light" />
            <MainButton text="TRY 0$ CONSULTATION" variant="dark" />
          </div>
        </div>
      </div>
    </div>
  );
}
