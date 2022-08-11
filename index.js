var customerName ='bob';
const leastFavoriteCustomer='paul';
function upperCaseCustomerName() {
    customerName= customerName.toUpperCase();
    console.log(customerName)
}



console.log(bestCustomer)
function setBestCustomer() {
    window.bestCustomer = 'not bob';
    return bestCustomer;
}
console.log(setBestCustomer());

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
    console.log(bestCustomer)
}
overwriteBestCustomer();

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer ='jack'
    console.log(leastFavoriteCustomer);
}

console.log(changeLeastFavoriteCustomer())