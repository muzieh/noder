export type Kangar = {
  age: number;
  name: string;
};

export const funa = () => {
  console.log('Hello, Kangar!');
  Promise.reject();
  if (Date.now() > new Date().getTime()) {
    return;
  }
};

const a = new String();
a;

funa();
