import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Fun to Learn',
    Img: require('@site/static/img/undraw_docusaurus_react.png').default,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and used to get a website up and quickly. We use this open-source tool as a way to teach code fundamentals and web development.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Img: require('@site/static/img/undraw_docusaurus_tree.png').default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Powered by Docusaurus',
    Img: require('@site/static/img/undraw_docusaurus_mountain.png').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({ Img, title, description }) {
  return (
    // ✅ col--2 removed — pure CSS flex controls layout now
    <div className={styles.featureCard}>
      <div className={styles.featureImgWrap}>
        <img src={Img} alt={title} className={styles.featureImg} loading="lazy" />
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