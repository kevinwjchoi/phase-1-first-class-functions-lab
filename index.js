const returnFirstTwoDrivers = function(driverNames){
    driverNames = ['Antonia', 'Nuru', 'Amari', 'Mo'];
    return driverNames.slice(0, 2);
}

const returnLastTwoDrivers = function(driverNames){
    driverNames = ['Antonia', 'Nuru', 'Amari', 'Mo'];
    return driverNames.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(n){
    return function (value){
        return n * value;
    }
    
}

const fareDoubler = (createFareMultiplier) => {
    return createFareMultiplier * 2;
}
const fareTripler = (createFareMultiplier) => {
    return createFareMultiplier * 3;
}

function selectDifferentDrivers(driverNames, selectingDrivers){
    return selectingDrivers(driverNames);
}