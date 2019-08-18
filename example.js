const obj = {
    name: 'Billy Johnson',
    address: '123 Johns Hopkins way',
    age: 23,
    occupation: 'thinker and astronomer'
}

// Create array of the object's keys.
const keys = Object.keys(obj);

//Iterate through the keys like any normal array
keys.forEach(item => {
    const innerObj = obj[item];
    console.log(innerObj);
})