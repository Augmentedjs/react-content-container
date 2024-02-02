import ContentRequestor from "../abstract/contentRequestor";

const WorkInProgress = (props: { uri: string, type: "image" | "json" | "html" | null }) => {
  return (
    <div>
      <header>
        <h1>I'm working on this</h1>
      </header>
      <ContentRequestor uri={props.uri} type={props.type} />
    </div>
  );
};

export default WorkInProgress;
