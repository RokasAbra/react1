import getId from "./getId";
const key = 'exams';
export function create(obj){
    let data = localStorage.getItem(key);// nuskaitiom
    if (null === data) {
        data = JSON.stringify([]);
    }
    data = JSON.parse(data);
    obj.id = getId(key + '_id');
    data.push(obj);
    data = JSON.stringify(data);
    localStorage.setItem(key, data);// sudedam i local storage
};


export function read() {
    let data = localStorage.getItem(key);// nuskaitiom
    if (null === data) {
        data = JSON.stringify([]);
    }
    data = JSON.parse(data);
    return data;
};