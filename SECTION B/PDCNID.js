for (let index = 1; index <= 100; index++) {
    if (index%3==0 && index%5==0 ) {
        console.log(`Number ${index} is PDC NID`);
    }
    else if (index%5==0) {
        console.log(`Number ${index} is NID`);
        
    }
    else if (index%3==0) {
        console.log(`Number ${index} is PDC`);
    }
    else{
        console.log(`Number ${index} is neither PDC nor NID`);
    }
    
}