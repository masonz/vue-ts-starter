export interface State {
  counter: number;
}

export const createState = (): State => {
  return { counter: 0 };
};