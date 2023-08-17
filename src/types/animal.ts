export type Animal = {
  id: number;
  name: string;
  parent: null | number;
  children?: Animal[];
};
