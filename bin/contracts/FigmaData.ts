export interface FigmaData {
  document: Document;
  components?: Record<string, unknown>;
}

type Document = {
  id: string;
  name: string;
  type: string;
  children: any[];
};
