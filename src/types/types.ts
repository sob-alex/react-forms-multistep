export interface ITodo {
  id: string;
  title: string;
  text: string;
  completed: boolean;
}

export interface IFile {
  name: string;
  size: number;
}

export interface IFormData {
  files: Array<IFile>;
}
