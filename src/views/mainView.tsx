import ContentRequestor from "../abstract/contentRequestor";
import WorkInProgress from "./partial";
import Broken from "./partialBroken";

const MainView = () => {
  return (
    <section>
      <header>
        <h1>Content Components</h1>
      </header>
      <div className="box">
        <ContentRequestor uri="content/images/cool beans-logos.jpeg" width="200px" type="image" className="figure"/>
        <ContentRequestor uri="content/ex.html" type="html"/>
      </div>
      <div className="box">
        <ContentRequestor uri="content/li.html" type="html" isolated={true} width="500px"/>
      </div>
      <div className="box">
        <Broken uri="content/broken.html" type="html"/>
      </div>
      <div className="box">
      <ContentRequestor uri="content/images/cool beans-logos.jpeg" width="32px" type="image" className="figure"/>
        <code>
          <pre>
            <ContentRequestor uri="content/package.json" type="json"/>
          </pre>
        </code>
      </div>
      <div className="box">
        <code>
          <pre>
            <WorkInProgress uri="content/Dockerfile" type={null}/>
          </pre>
        </code>
      </div>
    </section>
  );
};

export default MainView;
