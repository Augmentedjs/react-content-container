const fetchContent = async (uri: string , type: "image" | "json" | "html" | null ) => {
  return await fetch(uri, {credentials: "include"})
  .then( (response) => {
    if (response.ok) {
      if (type === "image") {
        return response.blob();
      } else if (type === "json") {
        return response.json();
      }
      return response.text();
    } else {
      throw new Error(`Problem requesting: ${response.status} ${response.statusText}`);
    }
  })
  .catch( (e) => {
    throw e;
  });
};

export default fetchContent;
