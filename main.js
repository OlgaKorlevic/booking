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

var form = document.getElementById("form");
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const mail = document.getElementById("email").value;
  const phone = document.getElementById("mobile").value;
  const origin = document.getElementById("orig").value;
  const destination = document.getElementById("destin").value;
  const location = document.getElementById("address").value;
  const address = document.getElementById("country").value;
  const pin = document.getElementById("postcode").value;
  const error = document.getElementById("error");

  var messages = [];
  const errorElement = document.getElementById("error");

  const regex = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z])+.([a-z]+)?$/;


  if (!regex.test(mail)) {
    document.getElementById("error1").innerHTML = "Please enter a valid email";
   
    // messages.push(" please enter a valid email");
  }

  const re = /^\d{10}$/;
  if (!re.test(phone) && isNaN) {
    document.getElementById("error2").innerHTML = "Please enter a valid phone number";
    //messages.push("please enter a valid mobile number");
  }
  if (destination === origin) {
    document.getElementById("error3").innerHTML = "Destination cannot be same as origin";
    //messages.push("destination cannot be same as origin");
  }

  if (messages.length > 0) {
    e.preventDefault();
    errorElement.innerText = messages.join(", ");
  } else {
    messages.push(
      "***** Congratulations your booking is done and you will soon receive your booking details in your specified email! *****"
    );
    errorElement.innerText = messages;
  }
  // const message = document.getElementById("message")
  // message.innerText = error
});



