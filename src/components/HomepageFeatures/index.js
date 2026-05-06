import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Fun to Learn',
    // Swapping undraw_docusaurus_mountain.svg for undraw_docusaurus_mountain.png
    Img: require('@site/static/img/undraw_docusaurus_mountain.png').default,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get a website up and running quickly. We use this open-source tool
        as a way to teach code fundamentals and web development.  
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    // Swapping undraw_docusaurus_tree.svg for undraw_docusaurus_tree.png
    Img: require('@site/static/img/undraw_docusaurus_tree.png').default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Powered by React',
    // Swapping undraw_docusaurus_react.svg for undraw_docusaurus_react.png
    Img: require('@site/static/img/undraw_docusaurus_react.png').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

// Updated component to handle the PNG image source
function Feature({Img, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {/* Using <img> tag with the existing styles for consistent sizing */}
        <img src={Img} className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}