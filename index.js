const returnFirstTwoDrivers = function (drivers){
    return drivers.slice (0,2)}
const returnLastTwoDrivers = function (drivers){
    return drivers.slice (-2)
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function (pay){
    return function (day){
        return pay * day 
    }
}
const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)
const selectDifferentDrivers= function(Drivers,whichdrivers){
    return whichdrivers(Drivers)
}