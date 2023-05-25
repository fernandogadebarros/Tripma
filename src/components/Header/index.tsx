import Container from "../Layout/Container";
import Warning from "../Commons/Warning";

export const Header = () => {
  return (
    <>
      <Warning message="Join Tripma today and save up to 20% on your flight using code TRAVEL at checkout. Promotion valid for new users only." />
      <header className="between-center h-24">
        <Container>
          <div className="between-center">
            <div>
              <img src="logo.svg" alt="Tripma" />
            </div>

            <ul className="hidden sm:flex items-center gap-8 text-text-500">
              <li className="text-primary-200">
                <a href="#">Flights</a>
              </li>
              <li>
                <a href="#">Hotels</a>
              </li>
              <li>
                <a href="#">Packages</a>
              </li>
              <li>
                <a href="#">Sign in</a>
              </li>
              <li className="flex">
                <a className="btn-small btn-primary" href="#">
                  Sign Up
                </a>
              </li>
            </ul>
          </div>
        </Container>
      </header>
    </>
  );
};

export default Header;
