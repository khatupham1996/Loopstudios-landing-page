import logo from "../images/logo.svg";
import facebook from "../images/icon-facebook.svg";
import instagram from "../images/icon-instagram.svg";
import pinterest from "../images/icon-pinterest.svg";
import twitter from "../images/icon-twitter.svg";

function Footer() {
  const navItems = ["About", "Careers", "Events", "Products", "Support"];
  return (
    <div className="py-16 md:py-8 bg-black ">
      <div className="px-8 md:px-16 lg:px-28 flex md:flex-col flex-col">
        <div className="flex md:items-center md:justify-between mb-6 justify-center">
          <img src={logo} alt="logo" className="mb-4" />
          <div className="hidden lg:block">
            <ul className="flex gap-6">
              <li>
                <img src={facebook} alt="" />
              </li>
              <li>
                <img src={twitter} alt="" />
              </li>
              <li>
                <img src={pinterest} alt="" />
              </li>

              <li>
                <img src={instagram} alt="" />
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center md:items-center md:justify-between ">
          <ul className="flex items-center gap-6 flex-col md:flex-row">
            {navItems.map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="text-white">
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <p className="hidden lg:block text-white">
            © 2021 Loopstudios. All rights reserved.
          </p>
        </div>
        <div className="flex mt-10 mb-4 justify-center lg:hidden">
          <div className="lg:hidden">
            <ul className="flex gap-6">
              <li>
                <img src={facebook} alt="" />
              </li>
              <li>
                <img src={twitter} alt="" />
              </li>
              <li>
                <img src={pinterest} alt="" />
              </li>

              <li>
                <img src={instagram} alt="" />
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center lg:hidden">
          <p> © 2021 Loopstudios. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
