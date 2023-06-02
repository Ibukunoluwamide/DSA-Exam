let one = 1
for (let index = 0; index <= 10 ; index++) {
    if (index==0) {
        console.log(`The factorial of ${index} is ${one}`);
    }else{
        one = index * one
        console.log(`The factorial of ${index} is ${one}`);
    }
}