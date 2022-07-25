
const condition = ["name", "level"];
const result = [];

const objSopted = Object.fromEntries(Object.entries(obj).sort());//преобразует список пар ключ-значение в объект и сразу сортирует его
for (const key in objSopted){
    if (condition.includes(key)){
        const index = condition.findIndex((item) => item ===key);// находит индекс ключа в образцовом массиве
        result[index] = {key ,value: objSopted[key]};
    }
}
for( const key in objSopted){
    if(!condition.includes(key)){
        result[result.length] = { key, value: objSopted[key]};
    }
    return result;
}