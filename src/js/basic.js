import compare from './app';

/* eslint-disable guard-for-in */

const sortingByProps = (object, arr) => {
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

export default sortingByProps;
// console.log(orderByProps(obj, ['name', 'level']));
