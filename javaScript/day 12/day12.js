

const student = {
    name: "Rahul",
    age: 20,
    course: "B.Tech",
    marks: { math: 85, science: 90, english: 78 }
}

student.city = "Delhi"
student.age = "21"
student.marks.math = 95
delete student.course

console.log(student)

//part 2

student.getDetails = function () {

    return this.name + " is " + this.age + " years old and lives in " + this.city
}
console.log(student.getDetails());

student.calculateAverage = function () {
    return (this.marks.math + this.marks.science + this.marks.english) / 3

}

// part 3
console.log(student.calculateAverage());

for (let key in student) {
    console.log(`${key}: ${student[key]}`);
}

Object.entries(student).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});

//part 4
// Q7
// 6. Consider the following code:

//let obj1 = { a: 10, b: { c: 20 } };
//let obj2 = obj1;
//obj2.b.c = 50;
//console.log(obj1.b.c);

// Explain what will be the output and why.
// How can you prevent this behavior using deep copy?
/*the output is 50 because in obj1 there is nested object so when obj2 = obj1 the both refereces the same object  hence change in one affects the others here shallow copy occured 
to prevent it we can use deep copy. by deep copy we can create a compeletly independent copy of objects including all nested objects of array
to create a deep copy we can use JSON.parse()and JSON.stringify() methods ; but for large object both methods are not good 
so we can use lodash for deep copy it is js library it contains cloneDeep() method which help in copying 
 
*/
let obj1 = { a: 10, b: { c: 20 } };
let obj2 = JSON.parse(JSON.stringify(obj1));
obj2.b.c = 50;
console.log(obj1.b.c);


//Question 7
//cloning

let cloneObj1 = { ...student }
console.log(cloneObj1);

let cloneObj2 = Object.assign({}, student);
console.log(cloneObj2);

let cloneObj3 = JSON.parse(JSON.stringify(student));
console.log(cloneObj3);
//part 5

//8. Destructuring:

let { name, city } = student
console.log(city);
console.log(name);

//9 merge
let newDetails = { hobby: "Reading", age: 22 }

let mergeObj = { ...student, ...newDetails }

console.log(mergeObj)

//10

function person(name, age, city) {

    this.name = name;
    this.age = age;
    this.city = city;

}

const person1 = new person("Amit", 25, "Mumbai");

console.log(person1);

//11

let arrOfObj = [
    { name: "harshda", age: 19, marks: 85 },
    { name: "Neha", age: 21, marks: 92 },
    { name: "shivani", age: 23, marks: 78 }
];
let max = 0;
let topper = ""
for (let index = 0; index < arrOfObj.length; index++) {
    if (arrOfObj[index].marks > max) {
        max = arrOfObj[index].marks
        topper = arrOfObj[index].name

    }

}

console.log(topper, " achived highest marks .")

function check(p1) {
    if (Object.keys(p1).length === 0) {
        console.log("object is empty");



    }
    else {
        console.log("Object is not empty");

    }

}

check(student)
check({})
