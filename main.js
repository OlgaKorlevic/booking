form.addEventListener ('submit', (e) => {
//     tripType();
// flightDates();
// mealChoice();
// payment();

    e.preventDefault(); //prevents the auto submission of the form
const form = document.getElementById("form");
const fName = document.getElementById("pName").value;
const lName = document.getElementById("lName").value;

const f2Name = document.getElementById("p2Name").value;
const l2Name = document.getElementById("l2Name").value;

const f3Name = document.getElementById("p3Name").value;
const l3Name = document.getElementById("l3Name").value;

const age = document.getElementById("age").value;
const age2 = document.getElementById("age2").value;
const age3 = document.getElementById("age3").value;







//sindhus code
 const mail = document.getElementById("email").value;
 const phone = document.getElementById("mobile").value;
  const origin = document.getElementById("orig").value;
  const destination = document.getElementById("destin").value;
  const location = document.getElementById("address").value;
  const address = document.getElementById("country").value;
  const pin = document.getElementById("postcode").value;
  const error = document.getElementById("error");
var messages = [];


//OLGAS CODE START

tripType();
flightDates();
mealChoice();
payment();

//Code to pick the trip type fight:
//1. returns the chosen type or message if none is chosen DONE
function tripType() {         
    let selectedTrip='';
    if(document.getElementById('oneWay').checked) {
        //Code in green showed which buttons were chosen.
        //document.getElementById("disp").innerHTML
          //  = document.getElementById("oneWay").value
          //  + " radio button checked";
    selectedTrip=document.getElementById('oneWay').value;
    document.getElementById("disp").innerHTML = "";
    return selectedTrip;
    }
    else if(document.getElementById('return').checked) {
    selectedTrip=document.getElementById('return').value;
    document.getElementById("disp").innerHTML = ""
    return selectedTrip;
        }
    else {
    document.getElementById("disp").innerHTML = "Trip type is not selected";
    return selectedTrip;
          }
}

//Code that hides return when One Way and shows it back when Return is chosen DONE
function hideReturn() {
    let ret = document.getElementById('ret');
    let retlb = document.getElementById('retlb');
        if (document.getElementById('oneWay').checked) {
          ret.style.display = 'none';
          retlb.style.display = 'none';
          document.getElementById("disp").innerHTML = "";
        }else if (document.getElementById('return').checked){
        ret.style.display = 'inline-block';
        retlb.style.display = 'inline-block';
        document.getElementById("disp").innerHTML = "";
        }
      }
//Code for choice of dates
//1.Checks that departure date is earlier than return===OPTIONAL, LATER
//2.Checks that both dates (or one if Return is not available) are chosen (needs to assign it to 
//Submit button) DONE
function flightDates (){
    let departureDate = document.getElementById('dep').value;
    let returnDate = document.getElementById('ret').value;
    let tripSelected=tripType();
    if (tripSelected==='') {
    document.getElementById("disp2").innerHTML = "Did you choose the trip type?";}
    else{
   if (departureDate===''){
    document.getElementById("disp2").innerHTML = "Select the date(s)";
    }  else if (tripSelected==='return' && returnDate===''){
    document.getElementById("disp2").innerHTML = "Select the date(s)";
} else if (tripSelected==='oneWay'){
    document.getElementById("disp2").innerHTML = "";
    returnDate="not applicable";
    return departureDate;
    return returnDate;
}
else {
    document.getElementById("disp2").innerHTML = "";
    //document.getElementById("disp2").innerHTML= 'departure'+departureDate+'return'+returnDate;//
    //Code to check which dates the function returns if it works
    return departureDate, returnDate};
};
}; 
//Code for choice of meals:
//1. Checks that the meal is chosen DONE
function mealChoice (){
    const mealChosen=document.getElementById('meal').value 
        if (mealChosen == "nochoice") {
        document.getElementById("disp3").innerHTML = "Please select the meal option";
        return false;//Check if I can use that in previous functions
        }else{
        //Code in green was to check whih meal value will be returned returned
        //document.getElementById("disp3").innerHTML = "Chosen meal"+mealChosen;
        document.getElementById("disp3").innerHTML = "";
        return mealChosen;
}
}
//Code for choice of payment methods
//1. Checks that the payment option is chosen DONE
function payment (){
    const paymentOption=document.getElementById('payment').value 
        if (paymentOption == "nochoice") {
        document.getElementById("disp4").innerHTML = "Please select the payment option";
        return false;//Check if I can use that in previous functions
        }else{
        //Code in green was to check whih meal value will be returned returned
        //document.getElementById("disp4").innerHTML = "Payment option"+paymentOption;
        document.getElementById("disp4").innerHTML = "";
        return paymentOption;
}
}




//OLGAS CODE ENDS
const errorElement = document.getElementById('error');
// if (fName == "") {
// messages.push(" Please enter First Name");
// }
console.log(fName[0]);
// regular expression to match only alphanumeric characters and spaces
const re = /^[\w ]+$/;
//const re = /^[a-zA-Z0-9._]+$/;
//const re = /^[a-z0-9_-]$/;
if(!isNaN(fName[0]) || fName[0] === " ")
{
console.log(fName[0]);
// messages.push(" First name cannot start with a number or space");
document.getElementById("fName-error").innerHTML = "First name cannot start with a number or space";
}
else if(!re.test(fName)) {
//  messages.push(" First name contains invalid characters");
document.getElementById("fName-error").innerHTML = "First name contains invalid characters";
}
else
{
for (let i=0; i<fName.length; i++)
{
   if (fName[i] === " ")
   {
    //    messages.push("First name cannot contain spaces");
    document.getElementById("fName-error").innerHTML = "First name cannot contain spaces";
       i = fName.length;
   }
}
}
// I have put this validation just because they asked us for length greater than 5 but 5 characters is normal length in name
if(fName.length > 20){
// messages.push(" First Name is more than 20 characters");
document.getElementById("fName-error").innerHTML = "First Name is more than 20 characters";
}
// validation fails if the input doesn't match our regular expression
//last name validations
if(!isNaN(lName[0]) || lName[0] === " ")
{
console.log(lName[0]);
// messages.push(" Last name cannot start with a number or space");
document.getElementById("lName-error").innerHTML = "Last name cannot start with a number or space";
}
else if(!re.test(lName)) {
//  messages.push(" Last Name contains invalid characters");
document.getElementById("lName-error").innerHTML = "Last Name contains invalid characters";
}
else
{
    for (let i=0; i<lName.length; i++)
{
   if (lName[i] === " ")
   {
    //    messages.push("Last name cannot contain spaces");
    document.getElementById("lName-error").innerHTML = "Last name cannot contain spaces";
       i = lName.length;
   }
}
}
if(lName.length > 20){
// messages.push(" Last Name is more than 20 characters");
document.getElementById("lName-error").innerHTML = "Last Name is more than 20 characters";
}
if (isNaN(age))
{
//  messages.push(" Age should be a number");
document.getElementById("age-error").innerHTML = "Age should be a number";
}
else
{
for (let i=0; i<age.length; i++)
{
   if (age[i] === " ")
   {
    //    messages.push("Age is a number and cannot contain spaces");
    document.getElementById("age-error").innerHTML = "Age is a number and cannot contain spaces";
       i = age.length;
   }
}
}



//Passenger -2

// const re = /^[\w ]+$/;
//const re = /^[a-zA-Z0-9._]+$/;
//const re = /^[a-z0-9_-]$/;
if(!isNaN(f2Name[0]) || f2Name[0] === " ")
{
console.log(f2Name[0]);
// messages.push(" First name cannot start with a number or space");
document.getElementById("f2Name-error").innerHTML = "First name cannot start with a number or space";
}
else if(!re.test(f2Name)) {
//  messages.push(" First name contains invalid characters");
document.getElementById("f2Name-error").innerHTML = "First name contains invalid characters";
}
else
{
for (let i=0; i<f2Name.length; i++)
{
   if (f2Name[i] === " ")
   {
    //    messages.push("First name cannot contain spaces");
    document.getElementById("f2Name-error").innerHTML = "First name cannot contain spaces";
       i = f2Name.length;
   }
}
}
// I have put this validation just because they asked us for length greater than 5 but 5 characters is normal length in name
if(f2Name.length > 20){
// messages.push(" First Name is more than 20 characters");
document.getElementById("f2Name-error").innerHTML = "First Name is more than 20 characters";
}
// validation fails if the input doesn't match our regular expression
//last name validations
if(!isNaN(l2Name[0]) || l2Name[0] === " ")
{
console.log(l2Name[0]);
// messages.push(" Last name cannot start with a number or space");
document.getElementById("l2Name-error").innerHTML = "Last name cannot start with a number or space";
}
else if(!re.test(l2Name)) {
//  messages.push(" Last Name contains invalid characters");
document.getElementById("l2Name-error").innerHTML = "Last Name contains invalid characters";
}
else
{
    for (let i=0; i<l2Name.length; i++)
{
   if (l2Name[i] === " ")
   {
    //    messages.push("Last name cannot contain spaces");
    document.getElementById("l2Name-error").innerHTML = "Last name cannot contain spaces";
       i = l2Name.length;
   }
}
}
if(l2Name.length > 20){
// messages.push(" Last Name is more than 20 characters");
document.getElementById("l2Name-error").innerHTML = "Last Name is more than 20 characters";
}
if (isNaN(age2))
{
//  messages.push(" Age should be a number");
document.getElementById("age2-error").innerHTML = "Age should be a number";
}
else
{
for (let i=0; i<age2.length; i++)
{
   if (age2[i] === " ")
   {
    //    messages.push("Age is a number and cannot contain spaces");
    document.getElementById("age2-error").innerHTML = "Age is a number and cannot contain spaces";
       i = age2.length;
   }
}
}



//passenger-3

// const re = /^[\w ]+$/;
//const re = /^[a-zA-Z0-9._]+$/;
//const re = /^[a-z0-9_-]$/;
if(!isNaN(f3Name[0]) || f3Name[0] === " ")
{
console.log(f3Name[0]);
// messages.push(" First name cannot start with a number or space");
document.getElementById("f3Name-error").innerHTML = "First name cannot start with a number or space";
}
else if(!re.test(f3Name)) {
//  messages.push(" First name contains invalid characters");
document.getElementById("f3Name-error").innerHTML = "First name contains invalid characters";
}
else
{
for (let i=0; i<f3Name.length; i++)
{
   if (f3Name[i] === " ")
   {
    //    messages.push("First name cannot contain spaces");
    document.getElementById("f3Name-error").innerHTML = "First name cannot contain spaces";
       i = f3Name.length;
   }
}
}
// I have put this validation just because they asked us for length greater than 5 but 5 characters is normal length in name
if(f3Name.length > 20){
// messages.push(" First Name is more than 20 characters");
document.getElementById("f3Name-error").innerHTML = "First Name is more than 20 characters";
}
// validation fails if the input doesn't match our regular expression
//last name validations
if(!isNaN(l3Name[0]) || l3Name[0] === " ")
{
console.log(l3Name[0]);
// messages.push(" Last name cannot start with a number or space");
document.getElementById("l3Name-error").innerHTML = "Last name cannot start with a number or space";
}
else if(!re.test(l3Name)) {
//  messages.push(" Last Name contains invalid characters");
document.getElementById("l3Name-error").innerHTML = "Last Name contains invalid characters";
}
else
{
    for (let i=0; i<l3Name.length; i++)
{
   if (l3Name[i] === " ")
   {
    //    messages.push("Last name cannot contain spaces");
    document.getElementById("l3Name-error").innerHTML = "Last name cannot contain spaces";
       i = l3Name.length;
   }
}
}
if(l3Name.length > 20){
// messages.push(" Last Name is more than 20 characters");
document.getElementById("l3Name-error").innerHTML = "Last Name is more than 20 characters";
}
if (isNaN(age3))
{
//  messages.push(" Age should be a number");
document.getElementById("age3-error").innerHTML = "Age should be a number";
}
else
{
for (let i=0; i<age3.length; i++)
{
   if (age3[i] === " ")
   {
    //    messages.push("Age is a number and cannot contain spaces");
    document.getElementById("age3-error").innerHTML = "Age is a number and cannot contain spaces";
       i = age3.length;
   }
}
}
//    document.getElementById("submit-error").innerHTML = "** Congratulations your booking is done and you will soon receive your booking details in your specified email! **";
// //    if (messages.length > 0)
//     {
//         e.preventDefault();
//         errorElement.innerText = messages.join(', ');
//     }
//     else
//     {
//     messages.push("***** Congratulations your booking is done and you will soon receive your booking details in your specified email! *****")
//     errorElement.innerText = messages;
//     }

// Sindhus functionality

const regex = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z])+.([a-z]+)?$/;
  if (!regex.test(mail)) {
    document.getElementById("error1").innerHTML = "Please enter a valid email";
    // messages.push(" please enter a valid email");
  }
  const re1 = /^\d{10}$/;
  if (!re1.test(phone) && isNaN) {
    document.getElementById("error2").innerHTML = "Please enter a valid phone number";
    //messages.push("please enter a valid mobile number");
  }
  if (destination === origin) {
    document.getElementById("error3").innerHTML = "Destination cannot be same as origin";
    //messages.push("destination cannot be same as origin");
  }
})


