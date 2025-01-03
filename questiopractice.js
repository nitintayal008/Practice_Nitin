// function findCommonSkills(students) {
//     if (students.length === 0) return [];

//     // Start with the skills of the first student
//     let commonSkills = students[0].skills;

//     // Iterate through each student's skills and find the intersection
//     for (let i = 1; i < students.length; i++) {
//         commonSkills = commonSkills.filter((item)=> students[i].skills.includes(item))
//         console.log(commonSkills);
//     }

//     return commonSkills;
// }

// const students = [
//     { name: "Alice", skills: ["JavaScript", "React"] },
//     { name: "Bob", skills: ["JavaScript", "Node.js"] },
//     { name: "Charlie", skills: ["React", "Node.js"] }
// ];

// console.log(findCommonSkills(students));

// const query = "fields=name,email,phone&expand=contacts,addresses";
// const arr1 = Object.fromEntries(query.split("&").map((item)=>{
//     const [key, value] = item.split("=")
//     return [key, value.split(",")]
// }));
// console.log(arr1)

const transactions = [
    { item: "apple", quantity: 10 },
    { item: "banana", quantity: 5 },
    { item: "apple", quantity: 3 },
    { item: "orange", quantity: 7 },
    { item: "banana", quantity: 2 }
];


// {
//     apple: 13,
//     banana: 7,
//     orange: 7
// }

const obj = {}
transactions.forEach((item)=>{
    if(obj[item.item]){
        obj[item.item]+= item.item.quantity;
    }
    else{
        obj[item.item]=  item.item.quantity;
    }
})

console.log(obj);



