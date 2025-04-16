let weight = 68;
let height_m = 1.7;

function calculateBMI(weight,height){
    return weight / (height * height)
}
const bmi = calculateBMI(weight,height_m)

console.log(bmi)