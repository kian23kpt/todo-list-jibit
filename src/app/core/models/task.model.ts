export namespace Task {
  export interface priority {
    value: string;
    color: string;
  }

  export interface model {
    id: string; //uuid
    title: string;
    description: string;
    dueDate: string; //date
    priority: string;
    creationTime: string; //date
    status: Status;
  }

  export enum Status {
    open = 1,
    done = 2,
  }
}
