// promp the user to enter their flavors
let input = prompt("Enter your froyo flavors seperated by commas:", "vanilla,vanilla,vanilla,strawberry,coffee,coffee");

// turning inpupt into array
let flavors = input.split(",")

// fuction for counting flavors
function countFlavors(FlavorsArray) {
    let flavorCount = {};
    
    for (let i = 0; i < FlavorsArray.length; i++) {
        let flavor = FlavorsArray[i].trim();

        if (flavorCount[flavor]) {
            flavorCount[flavor] = flavorCount[flavor] + 1;
        } else {
            flavorCount[flavor] = 1;
        }
    }

    return flavorCount;
}

// get result
let result = countFlavors(flavors);

// show in console
console.table(result);