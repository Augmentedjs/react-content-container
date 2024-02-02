const IsolatedContent= (props: IsolatedContentProps) => {
  let iframe_ref = null;

  const writeHTML = (frame: any) => {
    if(!frame) {
      return;
    };
    iframe_ref = frame;
    let doc = frame.contentDocument;

    doc.open();
    doc.write(props.content);
    doc.close();

    frame.style.width = (props.width) ? props.width : "100%";
    frame.style.height = (props.height) ? props.height : 
      `${frame.contentWindow.document.body.scrollHeight}px`;
  };

  let className = "contentBox";
  if (props.className) {
    className += " " + props.className;
  }
  return (
    <iframe src="about:blank" ref={writeHTML} className={className} data-type={props.type}></iframe>
  );
};

export default IsolatedContent;
