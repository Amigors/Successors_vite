import { Successor, User } from "../interfaces";

export const userData: User[] = [
  {
    id: 1,
    parentId: 0,
    name: "Иванов Павел",
    positionName: "Директор",
    birthday: "01.02.1988",
    scientist: "КДН",
    ukr: "",
    protect: 1,
    type: "input",
  },
  {
    id: 2,
    parentId: 1,
    name: "Смирнов Андрей",
    positionName: "Зам. директора",
    birthday: "01.02.1987",
    scientist: "КТН",
    ukr: "",
    protect: 2,
    type: "input",
  },
  {
    id: 3,
    parentId: 1,
    name: "Петров Павел",
    positionName: "Зам директора",
    birthday: "01.02.1978",
    scientist: "ДН",
    ukr: "",
    protect: 3,
    type: "input",
  },
  {
    id: 4,
    parentId: 2,
    name: "Губарев Николай",
    positionName: "нач. отдела",
    birthday: "01.02.1978",
    scientist: "ДН",
    ukr: "",
    protect: 4,
    type: "input",
  },
  {
    id: 5,
    parentId: 2,
    name: "Семенов Илья",
    positionName: "нач. отдела",
    birthday: "01.02.1978",
    scientist: "ДН",
    ukr: "",
    protect: 2,
    type: "input",
  },
  {
    id: 6,
    parentId: 4,
    name: "Ильин Александр",
    positionName: "нач. отдела",
    birthday: "01.02.1978",
    scientist: "ДН",
    ukr: "",
    protect: 2,
    type: "input",
  },
  {
    id: 7,
    parentId: 5,
    name: "Забин Руслан",
    positionName: "нач. отдела",
    birthday: "01.02.1978",
    scientist: "ДН",
    ukr: "",
    protect: 3,
    type: "input",
  },
];
export const successorsData: Successor[] = [
  {
    id: 10,
    parentId: 1,
    name: "Шохов Даниил",
    positionName: "нач. отдела",
    birthday: "02.04.1988",
    scientist: "КДН",
    ukr: "",
    type: "output",
  },
  {
    id: 20,
    parentId: 1,
    name: "Жгутов Артем",
    positionName: "нач. отдела",
    birthday: "21.02.1987",
    scientist: "КТН",
    ukr: "",
    type: "output",
  },
  {
    id: 30,
    parentId: 1,
    name: "Орлов Роман",
    positionName: "нач. отдела",
    birthday: "21.02.1978",
    scientist: "ДН",
    ukr: "",
    type: "output",
  },
  {
    id: 11,
    parentId: 2,
    name: "Зорин Петр",
    positionName: "нач. отдела",
    birthday: "12.04.1988",
    scientist: "КДН",
    ukr: "",
    type: "output",
  },
  {
    id: 21,
    parentId: 2,
    name: "Гордеев Василий",
    positionName: "нач. отдела",
    birthday: "11.02.1987",
    scientist: "КТН",
    ukr: "",
    type: "output",
  },

]

export const transformUsersDataToReactFlowNodes = (usersData: any[], successers?: any[] | undefined) =>{
    const obj = {}
    let y = 500
    let x = 0
    return usersData.map((user, index) => {

      if (obj[user.parentId]){
        if (obj[user.parentId].subs){
          obj[user.parentId].subs.push(user)
        }else {
          obj[user.parentId].subs = []
        }
        y = obj[user.parentId].position.y + 500
      }
        const position = {
          x,
          y
        }
      console.log(obj)
          obj[user.id] = position

      console.log({obj})
        return {
        type: "myNode",
        id: `${user.id}`,
        data: { 
            ...user,
            mySuccessors: successers?.filter(successer => successer.parentId == user.id),
            showButton: successers?.some(successer => successer.parentId == user.id)
        },
        style:{display:'flex'},
        position
    }});}