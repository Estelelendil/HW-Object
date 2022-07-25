// const condition = ["name", "level"];
// const result = [];

// const objSopted = Object.fromEntries(Object.entries(obj).sort());
// for (const key in objSopted){
//     if (condition.includes(key)){
//         const index = condition.findIndex((item) => item ===key);
//         result[index] = {key ,value: objSopted[key]};
//     }
// }
// for( const key in objSopted){
//     if(!condition.includes(key)){
//         result[result.length] = { key, value: objSopted[key]};
//     }
//     // return result;
// }
function compare(a, b) {
    if(a.key.firstname < b.key.firstname) { return -1; };
    if(a.key.firstname > b.key.firstname) { return 1; };
    return 0;
};
export default compare;