const names = ["Yadira", "Kadiatou", "Isaiah", "Francisco", "Darius"];
for (let i = 0; i < names.length; i++)
{
    console.log(names[i]);
}





const age = [22, 28, 27, 33, 29];
let total = 0;
for (let i = 0; i < age.length; i++)
{
    total += age[i];
}
console.log(total / age.length);


// const numbers = [2, 3, 1];
// numbers.sort();
// console.log(numbers);

// reverse();



const courses = [{id:2,name:'Node.js'},
                {id:3,name:'Javascript'}
];

courses.sort(function(a, b)
{
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
});


const numbers = [1, -1, 2, 3];
const filtered = numbers.filter((value) =>
{
    return value >= 0;
});
console.log(filtered);


const mapped = filtered.map((value) =>
{
    return '<li>' + value + '</li>';
});
console.log(mapped);

reduce();