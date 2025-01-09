const myObject = {
    js: 'javaScript',
    cpp:'C++',
    py:'Python'
};

for(const key in myObject){
    console.log(`${key} is shortcut for ${myObject[key]}`);
}

const map = new Map();
map.set('js','javaScript');
map.set('c++','C plus plus');
map.set('rb','ruby');

// for(const [key,value] in map){//not iterable
//     console.log(key,+"   "+value);
// }