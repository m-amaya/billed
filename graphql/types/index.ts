export type ListArgs = Partial<Omit<Page, 'pageTotal'>>;
export type OneArgs = { id: string };
export type AddArgs<T, K extends keyof T> = Required<Omit<T, K>>;
export type EditArgs<T extends OneArgs> = Pick<T, 'id'> &
  Partial<Omit<T, 'id'>>;
export type DeleteArgs = OneArgs;

export interface Context {
  // dataSources: DataSources
}

export interface Page {
  pageNum: number;
  count: number;
  pageTotal: number;
}

export interface List<T> {
  page: Page;
  list: T[];
}

export interface Response<T> {
  success: boolean;
  message?: string;
  data?: T;
}
