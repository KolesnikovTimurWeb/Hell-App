import { Logo } from "@/components/Logo/Logo";

import telegramIcon from "@/images/footer/telegram.svg";
import openseaIcon from "@/images/footer/opensea.svg";
import xIcon from "@/images/footer/x.svg";
import discordIcon from "@/images/footer/discord.svg";

import mainDevil from '@/images/footer/bottom-devil.png'
import topDevil from '@/images/footer/top-devil.png'

import "./Footer.scss";

const socials = [
  {
    icon: telegramIcon,
    link: "#",
  },
  {
    icon: openseaIcon,
    link: "#",
  },
  {
    icon: xIcon,
    link: "#",
  },
  {
    icon: discordIcon,
    link: "#",
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <Logo classImage="footer__logo" />

      <div className="footer__content">
        <p className="footer__links">
          By using this service you accept our
          <a href="" className="footer__link">
            Terms of Service
          </a>
          <span>and</span>
          <a href="#" className="footer__link">
            Privacy Policy
          </a>
        </p>
        <p>Made by @CRAZYHELL</p>

        <ul className="footer__socials">
          {socials.map((targetSocial, index) => (
            <li key={index}>
              <a
                href={targetSocial.link}
                target="_blank"
              >
                <img
                  src={targetSocial.icon}
                  alt={`link ${index}`}
                />
              </a>
            </li>
          ))}
        </ul>

      </div>

      <img
        src={mainDevil}
        alt="main devil"
        className="footer__main-devil"
      />

      <img
        src={topDevil}
        alt="devil on top"
        className="footer__top-devil"
      />

    </footer>
  );
};

export default Footer;
