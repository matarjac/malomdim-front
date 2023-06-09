export interface IMainSub {
  _id: string;
  title: string;
  description?: string;
  startDate: number;
  endDate: number;
  numOfDays: number;
  nextMainSub: String | null;
  head?: boolean;
}
export interface IMaterials {
  _id: string;
  idSubTopic: string;
  title: string;
  description: string;
  body: string;
  category: string;
  codeType: string;
  publisher: string;
}


export interface ISubTopics {
  _id: string;
  idMainSub: string;
  title: string;
  description: string;
}
