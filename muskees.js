musketeers = ["Athos", "Porthos", "Aramis"];
for(i = 0; i < musketeers.length; i++){
    console.log(musketeers[i]);
}
musketeers.push("D'Artagnan");
musketeers.forEach(myElement =>{
    console.log(`${myElement}`);
});
musketeers.splice(3, 1);
let ofMovie;
for (ofMovie of musketeers){
    console.log(ofMovie);
}
const add = [3, 11, 7, 2, 9, 10];
let sum = 0;
for(i = 0; i < add.length; i++){
    sum = sum + add[i];
}
console.log(sum);

const max = [3, 11, 7, 2, 9, 10];
let big = 0
for(i = 0; i < max.length; i++){
    if (max[i] > big){
        big = max[i]
    }
}
console.log(big);