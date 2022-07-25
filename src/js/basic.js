let obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40};

const orderByProps = function (object, arr) {
  const newArr = [];
  for (const prop in object) {
    arr.map((elem) => {
      if (elem == prop) {
        newArr.push({ key : obj.prop });
      }
      return newArr;
    });
    
  }
  return newArr;
};
console.log(orderByProps(obj, ['name', 'level']));
