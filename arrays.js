movies = ["Lilo and Stitch", "Hawaii 5-0", "Jurassic Park"];
/*console.log(movies[1]);
console.log(movies[0]);
console.log(movies[2]);
console.log(movies.length)
console.log(movies.log)
const elements = ["Hello", 7, { message: "Hi mom" }, true];
//************ITERATING OVER AN ARRAY************\\
for (i = 0; i < movies.length; i++){
    console.log(movies[i])
}
//using the for-of method
let ofMovie;
for (ofMovie of movies){
    console.log(ofMovie);
}
/*movies.forEach(myElement =>{
    console.log(`For Loop ${myElement}`);
});*/
//ADDING TO AN ARRAY 
movies.push("Magnum PI");

for (i = 0; i < movies.length; i++){
    console.log(movies[i])
}
console.log(movies[movies.length - 1]);
//add to beginning of array
movies.unshift("50 First Dates");
console.log(movies[0]);
//remove the last element from array
movies.pop();
let theEndElement = movies.pop();
for (i = 0; i < movies.length; i++){
    console.log(movies[i])
}
//splice (index to start, number of elemtns to remove)
movies.splice(1, 2);