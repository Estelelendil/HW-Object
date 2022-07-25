/* eslint-disable guard-for-in */
const obj = {
  name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
};

const orderByProps = (object, arr) => {
  const newArr = [];
  for (const prop in object) {
    arr.forEach((elem) => {
      if (elem === prop) {
        newArr.push({ key: object.prop });
      }
    });
  }

  return newArr;
};
console.log(orderByProps(obj, ['name', 'level']));
