import { useState, useEffect, Suspense, ReactElement } from "react";
import fetchContent from "../functions/fetchContent";
import cleanDOM from "../functions/cleanDOM";
import parseDOM from "../functions/parseDOM";
import Content from "./content";
import IsolatedContent from "./isolatedContent";
import spinner from "../images/spinner-icon-0.gif";

const ContentRequestor = (props: ContentRequestorProps) => {
  const [content, setContent] = useState<ReactElement | null>(null);

  useEffect(() => {
    if (props.uri) {
      // Fetch content if I'm given something
      fetchContent(props.uri, props.type)
      .then( (response) => {
        let content = response;
        if (props.type === "image") {
          const imageUrl = URL.createObjectURL(response);
          content = (<img src={imageUrl} width={props.width} height={props.height}></img>);
        } else if (props.type === "json") {
          content = JSON.stringify(content);
        } else if (props.type === "html") {
          let dom: Element;
          if (props.filtered && props.filtered === true) {
            dom = cleanDOM(parseDOM(response)).innerHTML;
          } else {
            dom = response;
          }
          if ((props.isolated && props.isolated === true)) {
            content = response;
          } else {
            content = (<div dangerouslySetInnerHTML={{__html: dom}} />);
          }
        }
        // set whatever it is by default (text)
        setContent(content);
      })
      .catch((e) => {
        setContent(<p className="error">An error ocurred.</p>);
        console.error("An error ocurred.", e);
      });
    }
  }, []);

  if (content) {
    return (
      <>
      <Suspense fallback={<img src={spinner} style={ { width: "32px", height: "32px" } }></img>}>
        {(props.isolated && props.isolated === true) ? (
          <IsolatedContent content={content} className={props.className} type={props.type} width={props.width} height={props.height}/>) : (
          <Content content={content} className={props.className} type={props.type}/>
        )}
      </Suspense>
      </>
    );
  } else {
    return (<div></div>);
  }
};

export default ContentRequestor;
