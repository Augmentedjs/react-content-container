type ContentRequestorProps = {
  className?: string; 
  uri: string; 
  type: "image" | "json" | "html" | null; 
  filtered?: boolean; 
  isolated?: boolean; 
  width?: string; 
  height?: string;
}

type IsolatedContentProps = {
  className?: string; 
  type: "image" | "json" | "html" | null; 
  content: any; 
  width?: string; 
  height?: string;
}

type ContentProps = {
  className?: string;
  type: "image" | "json" | "html" | null;
  content: any;
}