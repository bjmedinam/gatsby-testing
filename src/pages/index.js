import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import { trackCustomEvent } from "gatsby-plugin-google-analytics";

const IndexPage = () => {
  const tracking = () => {
    trackCustomEvent({
      // string - required - The object that was interacted with (e.g.video)
      category: "Special Button",
      // string - required - Type of interaction (e.g. 'play')
      action: "Click",
      // string - optional - Useful for categorizing events (e.g. 'Spring Campaign')
      label: "Gatsby Plugin Example Campaign",
      // number - optional - Numeric value associated with the event. (e.g. A product ID)
      value: 43,
    });
  };

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
      <button onClick={tracking}>Click here</button>
    </Layout>
  );
};

export default IndexPage;
