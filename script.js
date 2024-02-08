const array = [2, 4, 10, 16];
const double =[];
const newArray = array.forEach((num) =>{
    double.push(num *2)
})
console.log( 'ForEach', double);



// Map, Filter, Reduce

        // Map
const mapArray = array.map(num => num + 2)

console.log('map', mapArray);


        // Filter
const filterArray = array.filter(num => num === 2)

console.log('filter', filterArray);


        // reduce
const reduceArray = array.reduce((accumulator, num) =>{
    return accumulator + num
}, );

 console.log('reduce', reduceArray);