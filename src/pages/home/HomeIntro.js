import React from "react";
import { useHistory } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ImgMediaCard from "../../components/common/ImageComponent";
import Image from "material-ui-image";

import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

function HomeIntro() {
  const history = useHistory();

  return (
    <>
      <div> Welcome to Interactive Book on Financial Mathematics</div>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="./WhoAreWe">Who Are We?</Link>
            </li>

            <li>
              <Link to="./Differentiate">
                How are we different from other Financial Mathematics Books?
              </Link>
            </li>

            <li>
              <Link to="./MathematicsExample">
                Click here for sample video on Essential Mathematics on topic of
                surface functions of 2 variables
              </Link>
            </li>
          </ul>

          <hr />
          <Switch>
            <Route path="/home/WhoAreWe">
              <WhoAreWe />
            </Route>

            <Route path="/home/Differentiate">
              <Differentiate />
            </Route>

            <Route path="/home/MathematicsExample">
              <MathematicsExample />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}
export default HomeIntro;

function WhoAreWe() {
  const markdown = `
  We are professionals with passion for teaching Mathematics
  with **interactive visualizations**.

  Professor Matthias Hornof has over 35 years experience teaching Physics
  and Mathematics in Germany.

  Pavan Mirla has over 10+ years experience as Quantitative Analyst at
  large Investment Management firms in Canada and USA.
  
`;
  return (
    <>
      <ReactMarkdown children={markdown} />

      <div>
        <div style={{ maxWidth: "800px", maxHeight: "400px" }}>
          {/* <Image src="https://drive.google.com/uc?export=view&id=1N1_MFSySFJM1eiGsUWYVapA3poI0uury" /> */}
          <Image src="https://storage.googleapis.com/fin-math-images/whoarewe.png" />
        </div>
      </div>
    </>
  );
}

function Differentiate() {
  return (
    <div>
      <h2>
        Our lesssons are designed such that students can engage with the
        algorithm or procedure to develop Mathematical Thinking instead of rote
        learning
      </h2>
      <p>We bring equations to life with interactive animations</p>
      <p>We select real-world usable exmaples</p>
      <p> We teach Fianancial Mathematics that results in understanding</p>
      <p>
        We use illustrations and interactive explainers to teach complex topics
      </p>
    </div>
  );
}

function MathematicsExample() {
  return (
    <div>
      <h2>MathematicsExample</h2>
      <iframe
        title="This is a unique title"
        src="https://drive.google.com/file/d/1CtK8Zcl3XgoFkucsnFZQLMHq_Lz5U5ir/preview"
        width="640"
        height="480"
      ></iframe>
    </div>
  );
}
