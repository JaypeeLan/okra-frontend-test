import sectionStyles from "./CTAsection.module.scss";

const cardData = [
  {
    id: 1,
    title: "Brinte docs",
    description: "See Brinte docs",
    icon: "/icons/book-open.svg",
    className: sectionStyles.purple,
  },
  {
    id: 2,
    title: "Brinte community",
    description: "Join Slack community",
    icon: "/icons/slack.svg",
    className: sectionStyles.orange,
  },
  {
    id: 3,
    title: "Brinte support",
    description: "Go to help center",
    icon: "/icons/slack.svg",
    className: sectionStyles.neutral,
  },
];

const CTAsection = () => {
  return (
    <section className={sectionStyles.section}>
      <div className={sectionStyles.resources}>
        <div className={sectionStyles.text}>
          <h3>Helpful resources</h3>
          <p>
            Find helpful tools, tips, and materials from our community, help
            center, and docs.
          </p>
        </div>

        <div className={sectionStyles["boxes-container"]}>
          {cardData.map((card, index) => (
            <div
              key={card.id}
              className={`${sectionStyles["cta-box"]} ${card.className} ${
                index === 0 ? sectionStyles["full-column"] : ""
              }`}
            >
              <div className={sectionStyles["top-bar"]}>
                <div>
                  <img
                    src={card.icon}
                    alt={card.title}
                    width={16}
                    height={16}
                    className={sectionStyles["box-icon"]}
                  />
                  <span>{card.description}</span>
                </div>

                <div className={sectionStyles["arrow-icon"]}>
                  <img
                    src="/icons/arrow-up-right.svg"
                    alt={card.title}
                    width={16}
                    height={16}
                  />
                </div>
              </div>
              <h5>{card.title}</h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTAsection;
