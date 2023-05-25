import Container from "../Layout/Container";
import { IoLogoTwitter, IoLogoInstagram } from "react-icons/io";
import { GrFacebook } from "react-icons/gr";

export const Footer = () => {
  return (
    <footer>
      <Container className="flex juystify-between gap-32 py-8">
        <div>
          <img src="logo.svg" alt="Tripma" />
        </div>
        <div>
          <h3 className="text-text-600 text-lg font-bold mb-3">About</h3>
          <ul className="text-text-400">
            <li className="mb-3">
              <a href="#">About Tripma</a>
            </li>
            <li className="mb-3">
              <a href="#">How it works</a>
            </li>
            <li className="mb-3">
              <a href="#">Careers</a>
            </li>
            <li className="mb-3">
              <a href="#">Press</a>
            </li>
            <li className="mb-3">
              <a href="#">Blog</a>
            </li>
            <li className="mb-3">
              <a href="#">Forum</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-text-600 text-lg font-bold mb-3">
            Partner with us
          </h3>
          <ul className="text-text-400">
            <li className="mb-3">
              <a href="#">Partnership programs</a>
            </li>
            <li className="mb-3">
              <a href="#">Affiliate program</a>
            </li>
            <li className="mb-3">
              <a href="#">Connectivity partners</a>
            </li>
            <li className="mb-3">
              <a href="#">Promotions and events</a>
            </li>
            <li className="mb-3">
              <a href="#">Integrations</a>
            </li>
            <li className="mb-3">
              <a href="#">Community</a>
            </li>
            <li className="mb-3">
              <a href="#">Loyalty program</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-text-600 text-lg font-bold mb-3">Support</h3>
          <ul className="text-text-400">
            <li className="mb-3">
              <a href="#">Help Center</a>
            </li>
            <li className="mb-3">
              <a href="#">Affiliate program</a>
            </li>
            <li className="mb-3">
              <a href="#">Contact us</a>
            </li>
            <li className="mb-3">
              <a href="#">Privacy policy</a>
            </li>
            <li className="mb-3">
              <a href="#">Terms of service</a>
            </li>
            <li className="mb-3">
              <a href="#">Trust and safety</a>
            </li>
            <li className="mb-3">
              <a href="#">Accessibility</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-text-600 text-lg font-bold mb-3">Get the app</h3>
          <ul className="text-text-400">
            <li className="mb-3">
              <a href="#">Tripma for Android</a>
            </li>
            <li className="mb-3">
              <a href="#">Tripma for iOS</a>
            </li>
            <li className="mb-3">
              <a href="#">Mobile site</a>
            </li>
          </ul>
          <div>
            <a href="#" className="block mt-8 mb-2">
              <img src="app-store.svg" alt="App Store" />
            </a>
            <a href="#" className="block">
              <img src="google-play.svg" alt="Google Play" />
            </a>
          </div>
        </div>
      </Container>
      <div className="border-t border-t-gray-200">
        <Container className="between-center py-6">
          <ul className="flex items-center text-text-600 gap-3">
            <li>
              <a href="#">
                <IoLogoTwitter />
              </a>
            </li>
            <li>
              <a href="#">
                <IoLogoInstagram />
              </a>
            </li>
            <li>
              <a href="#">
                <GrFacebook />
              </a>
            </li>
          </ul>
          <p className="text-text-400">© 2020 Tripma incorporated</p>
        </Container>
      </div>
    </footer>
  );
};
