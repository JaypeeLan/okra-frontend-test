import { Footerlinks } from "../../data";
import footerStyles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={footerStyles.footer}>
      <div className={footerStyles.topImageWrapper}>
        <img
          src="/bubble.png"
          alt="Bubble"
          className={footerStyles.centeredImage}
        />
      </div>
      <div className={footerStyles.contentWrapper}>
        <div className={footerStyles.content}>
          <img
            src="/icons/brinte-icon.svg"
            alt="Brinte"
            className={footerStyles.logo}
          />
          <div className={footerStyles.links}>
            {Footerlinks.map((category, index) => (
              <div key={index} className={footerStyles.category}>
                <p className={footerStyles.categoryTitle}>
                  {category.category}
                </p>
                {category.links.map((link, linkIndex) => (
                  <div key={linkIndex} className={footerStyles.link}>
                    {link.icon && (
                      <img
                        src={link.icon}
                        alt={link.name}
                        className={footerStyles.linkIcon}
                      />
                    )}
                    <a href={link.to} className={footerStyles.linkText}>
                      {link.name}
                    </a>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className={footerStyles.info}>
          <div className={footerStyles.status}>
            <div className={footerStyles.operationStatus}>
              <div></div>
            </div>
            <span>All systems operational</span>
          </div>
          <span>© Brinte 2024</span>
        </div>
      </div>
      <div className={footerStyles.bottomImageWrapper}>
        <img
          src="/wordmark.png"
          alt="Wordmark"
          className={footerStyles.centeredImage}
          width={"100%"}
        />
      </div>
    </div>
  );
};

export default Footer;
