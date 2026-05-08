import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Powered by Creativity",
    Img: require("@site/static/img/undraw_docusaurus_react.png").default,
    description: (
      <>
        You will learn to design and deploy full-featured web applications
        while gaining practical code skills for today's workplace.
      </>
    ),
  },
  {
    title: "Fun to Learn",
    Img: require("@site/static/img/undraw_docusaurus_mountain.png").default,
    description: (
      <>
        We use a free open-source tool called{" "}
        <a href="https://docusaurus.io/">Docusaurus</a> to teach code
        fundamentals for all ages and skill levels.
      </>
    ),
  },
  {
    title: "Focus on What Matters",
    Img: require("@site/static/img/undraw_docusaurus_tree.png").default,
    description: (
      <>
        Our approach teaches you how to code, not just to think about it. Try our{" "}
        <a href="/docs/python">Python in 5 mins challenge</a> to get started today.
      </>
    ),
  },
];

function Feature({ Img, title, description }) {
  return (
    // ✅ col--2 removed — pure CSS flex controls layout now
    <div className={styles.featureCard}>
      <div className={styles.featureImgWrap}>
        <img
          src={Img}
          alt={title}
          className={styles.featureImg}
          loading="lazy"
        />
      </div>
      <div className={styles.featureText}>
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      {/* ✅ container and row divs removed — styles.module.css takes full control */}
      <div className={styles.featureRow}>
        {FeatureList.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
