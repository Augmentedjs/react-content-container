const Content = (props: ContentProps ) => {
  const className: string = (props.className) ? ("contentBox " + props.className) : "contentBox";
  return (
    <div className={className} data-type={props.type}>{props.content}</div>
  );
};

export default Content;
