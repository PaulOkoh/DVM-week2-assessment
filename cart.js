///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/

//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
  {
    name: "pizza",
    price: 9.99,
  },
  {
    name: "pasta",
    price: 8.99,
  },
  {
    name: "salad",
    price: 7.99,
  },
];

//CODE HERE

let cartTotal = cart.reduce((acc, curr) => acc + curr.price, 0);

console.log(cartTotal);

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE

function calcFinalPrice(cartTotal, couponValue, tax) {
  return cartTotal * (1 + tax) - Number(couponValue);
}
console.log(calcFinalPrice(cartTotal, 5, 0.06));

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE

    Model for customer object :
    Properties: 
        - name (string) >>>> need a name to identify customer
        - phone number (number) >>>> need a phone number to notify / contact customer
        - zip code (number) >>>>> need for delivery purposes
        - credit card info (number) >>>> to process payment
        - item/ type / name of item ordered (string) >>>> to prepare correct order
        - quantity of item ordered  (number)>>>>> for proper billing / charge
        - total charge(number) >>>> for proper billing/payment

    Make sure that you give your properties values
    of the correct data type.


    

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE

const customer = {
  name: "Michael Douglas",
  phone: 2145555555,
  zipcode: 85411,
  ccard: 123445678902,
  item: "Aloha Pizza",
  quantity: 2,
  total: 21.99,
};

console.log(customer.zipcode);
