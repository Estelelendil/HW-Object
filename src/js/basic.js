import compare from './app';

/* eslint-disable guard-for-in */

const orderByProps = (object, arr) => {
  const newArr = [];
  const dirArr = [];

  for (const prop in object) {
    if (arr.includes(prop)) {
      newArr.push({ key: prop, value: object[prop] });
    } else {
      dirArr.push({ key: prop, value: object[prop] });
    }
  }
  const result = newArr.concat(dirArr.sort(compare));

  return result;
};

export default orderByProps;
// console.log(orderByProps(obj, ['name', 'level']));
