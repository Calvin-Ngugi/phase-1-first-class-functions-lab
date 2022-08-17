// Code your solution in this file!

const returnFirstTwoDrivers = (drivers = ['Antonia', 'Nuru']) =>{
    const d2 = [...drivers];
    return d2.slice(0, 2);
};

const returnLastTwoDrivers = (drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']) =>{
    const d2 = [...drivers];
    return d2.slice(2);
};

const selectingDrivers = [(returnFirstTwoDrivers), (returnLastTwoDrivers)];

const createFareMultiplier = function (createMultiplier){
    return function (value){
        return createMultiplier * value;
    }
}

const fareDoubler = (double) =>{
    return double * 2;
}

const fareTripler = (tripler) =>{
    return tripler * 3;
}

const selectDifferentDrivers = (drivers, result) => {
    return result(drivers);
}