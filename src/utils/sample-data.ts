import { Successor, User } from "../interfaces";
import axios from "axios";
export const userData: User[] = [
  {
    id: 1,
    parentId: 0,
    name: "Иванов Павел",
    positionName: "Генеральный директор",
    birthday: "01.02.1988",
    scientist: "КДН",
    ukr: "123",
    protect: 1,
    type: "input",
  },
  {
    id: 2,
    parentId: 1,
    name: "Смирнов Андрей",
    positionName: "Зам директора",
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
    id: 8,
    parentId: 1,
    name: "Забин Руслан",
    positionName: "нач. отдела",
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
    parentId: 5,
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
  {
    id: 9,
    parentId: 5,
    name: "Забин Руслан",
    positionName: "нач. отдела",
    birthday: "01.02.1978",
    scientist: "ДН",
    ukr: "",
    protect: 3,
    type: "input",
  },
  {
    id: 17,
    parentId: 1,
    name: "Забин Руслан",
    positionName: "нач. отдела",
    birthday: "01.02.1978",
    scientist: "ДН",
    ukr: "",
    protect: 3,
    type: "input",
  },
  // {
  //   id: 11,
  //   parentId: 1,
  //   name: "Забин Руслан",
  //   positionName: "нач. отдела",
  //   birthday: "01.02.1978",
  //   scientist: "ДН",
  //   ukr: "",
  //   protect: 3,
  //   type: "input",
  // },

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
    readyToWork: 5,
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
    readyToWork: 5,
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
    readyToWork: 5,
    type: "output",
  },
  {
    id: 40,
    parentId: 1,
    name: "Шохов Даниил",
    positionName: "нач. отдела",
    birthday: "02.04.1988",
    scientist: "КДН",
    ukr: "",
    readyToWork: 5,
    type: "output",
  },
  {
    id: 50,
    parentId: 1,
    name: "Жгутов Артем",
    positionName: "нач. отдела",
    birthday: "21.02.1987",
    scientist: "КТН",
    ukr: "",
    readyToWork: 5,
    type: "output",
  },
  {
    id: 60,
    parentId: 1,
    name: "Орлов Роман",
    positionName: "нач. отдела",
    birthday: "21.02.1978",
    scientist: "ДН",
    ukr: "",
    readyToWork: 5,
    type: "output",
  },
  {
    id: 70,
    parentId: 1,
    name: "Шохов Даниил",
    positionName: "нач. отдела",
    birthday: "02.04.1988",
    scientist: "КДН",
    ukr: "",
    readyToWork: 5,
    type: "output",
  },
  {
    id: 80,
    parentId: 1,
    name: "Жгутов Артем",
    positionName: "нач. отдела",
    birthday: "21.02.1987",
    scientist: "КТН",
    ukr: "",
    readyToWork: 5,
    type: "output",
  },
  // {
  //   id: 90,
  //   parentId: 1,
  //   name: "Орлов Роман",
  //   positionName: "нач. отдела",
  //   birthday: "21.02.1978",
  //   scientist: "ДН",
  //   ukr: "",
  //   readyToWork: 5,
  //   type: "output",
  // },
  // {
  //   id: 100,
  //   parentId: 1,
  //   name: "Шохов Даниил",
  //   positionName: "нач. отдела",
  //   birthday: "02.04.1988",
  //   scientist: "КДН",
  //   ukr: "",
  //   readyToWork: 5,
  //   type: "output",
  // },
  // {
  //   id: 110,
  //   parentId: 1,
  //   name: "Жгутов Артем",
  //   positionName: "нач. отдела",
  //   birthday: "21.02.1987",
  //   scientist: "КТН",
  //   ukr: "",
  //   readyToWork: 5,
  //   type: "output",
  // },
  // {
  //   id: 120,
  //   parentId: 1,
  //   name: "Орлов Роман",
  //   positionName: "нач. отдела",
  //   birthday: "21.02.1978",
  //   scientist: "ДН",
  //   ukr: "",
  //   readyToWork: 5,
  //   type: "output",
  // },
  {
    id: 11,
    parentId: 2,
    name: "Зорин Петр",
    positionName: "нач. отдела",
    birthday: "12.04.1988",
    scientist: "КДН",
    ukr: "",
    readyToWork: 5,
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
    readyToWork: 5,
    type: "output",
  },

]

export const transformUsersDataToReactFlowNodes = (usersData: any[], successers?: any[] | undefined, movePos?: boolean ) => {
  // const apiUrl = 'http://172.16.180.100:8080/'
  // axios.get(apiUrl).then((resp) => {
  //   const response = resp.data
  //   // console.log(response)
  // })

  const obj = {};
  let y = 0;
  let x = 0;
  const successorsPosition ={
    0: {x: 450, y: -170},
    1: {x: 450, y: -15},
    2: {x: 450, y: 140},
    3: {x: -450, y: 140},
    4: {x: -450, y: -15},
    5: {x: -450, y: -170},
    6: {x: 450, y: -325},
    7: {x: -450, y: -325},
    8: {x: 450, y: 275},
    9: {x: -450, y: 275},
    10: {x: 450, y: 430},
    11: {x: -450, y: 430},
  }
  return usersData.map((user, index) => {
    const parentNode = obj[user.parentId];
    if (parentNode) {
      const subs = parentNode.subs ?? (parentNode.subs = []);
      subs.push(user);

      const sortedSubs = subs.sort((a, b) => b.value - a.value);

      const leftHalf = [];
      const rightHalf = [];

      for (let i = 0; i < sortedSubs.length; i++){
        if (i % 2 == 0) {
          leftHalf.push(sortedSubs[i]);
        } else {
          rightHalf.push(sortedSubs[i]);
        }
      }

      const spacing = 500;
      if (subs.length % 2 !== 0){
        const centerIndex = Math.floor(sortedSubs.length / 2);
        sortedSubs[centerIndex].position = { x: parentNode.position.x, y: parentNode.position.y + 500 };
        for (let i = 0; i < leftHalf.length; i++){
          x = parentNode.position.x - (i + 1) * spacing;
          y = parentNode.position.y + 500;
          leftHalf[i].position = { x, y };
        }
        for (let i = 0; i < rightHalf.length; i++){
          x = parentNode.position.x + (i + 1) * spacing;
          y = parentNode.position.y + 500;
          rightHalf[i].position = { x, y };
        }
      } else {
        if (leftHalf.length > 0) {
          leftHalf.forEach((elem, index) => {
            if (index === 0){
              x = parentNode.position.x - (index + 1) * 250;
              y = parentNode.position.y + 500;
              elem.position = { x, y };
            } else {
              x = parentNode.position.x - (index + 1) * 250;
              y = parentNode.position.y + 500;
              elem.position = { x, y };
            }
          });
        }
        if (rightHalf.length > 0) {
          rightHalf.forEach((elem, index) => {
            if (index === 0){
              x = parentNode.position.x + (index + 1) * 500;
              y = parentNode.position.y + 500;
              elem.position = { x, y };
            } else {
              x = parentNode.position.x + (index + 1) * spacing;
              y = parentNode.position.y + 500;
              elem.position = { x, y };
            }
          });
        }
      }
    }

    const position = {
      x,
      y,
    };

    if (user.position){
      obj[user.id] = { position: user.position };
    } else {
      obj[user.id] = {position};
    }
    return {
      type: "myNode",
      id: `${user.id}`,
      data: {
        ...user,
        mySubordinates: userData?.filter((userChild)=>userChild.parentId == user.id).map((item, index)=>{
          return {...item, position: user.position}
        }),
        mySuccessors: successers?.filter((successer) => successer.parentId == user.id).map((item, index)=>{
              return {...item, position: {
                    x: position.x + successorsPosition[index].x,
                    y: position.y + successorsPosition[index].y,
              }}
        }),
        showButton: successers?.some((successer) => successer.parentId == user.id),
      },
      style: { display: "flex" },
      position: user.position || position,
    };
  });

};

