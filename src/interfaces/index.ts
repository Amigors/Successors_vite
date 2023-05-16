export type User = {
    [x: string]: any
    id:number,
    parentId?:number,
    name:string,
    positionName:string,
    birthday:string,
    scientist:string,
    ukr:string,
    protect:number,
    type:string
  }
  export type Successor = {
    id:number,
      parentId:number,
      name:string,
      positionName:string,
      birthday:string,
      scientist:string,
      ukr:string,
      readyToWork: number
      type:string
  }
  
  export type SuccessorsStruct = {
    users: User,
    successers: Successor
  }