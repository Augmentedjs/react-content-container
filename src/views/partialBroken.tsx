import ContentRequestor from "../abstract/contentRequestor";

const Broken = (props: { uri: string, type: "image" | "json" | "html" | null }) => {
  return (
    <div>
      <header>
        <h1>I'm a broken component</h1>
        <h2>Or should say, example of handling one. :)</h2>
      </header>
      <ContentRequestor uri={props.uri} type={props.type} />
    </div>
  );
};

export default Broken;
