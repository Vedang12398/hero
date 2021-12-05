/* Configuration details - CDN from firebase */
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbuxaZzdaHEDd-AyEs-1Q3ZHKGbfm69ZQ",
  authDomain: "corona-testing-6f50a.firebaseapp.com",
  databaseURL: "https://corona-testing-6f50a-default-rtdb.firebaseio.com",
  projectId: "corona-testing-6f50a",
  storageBucket: "corona-testing-6f50a.appspot.com",
  messagingSenderId: "733146758640",
  appId: "1:733146758640:web:be5b7686e852067afff135",
  measurementId: "G-7BB3TF83BK"
};
  firebase.initializeApp(firebaseConfig);
  
  /* Validation of data collected through form,
  on click event of Submit button, submitForm function is called */
  var UserInputsRef=firebase.database().ref('UserInputs')
  document.getElementById('testForm').addEventListener('submit',submitForm);

  /* function store input values in variables */
  function submitForm(e){
    e.preventDefault();
    var fname =getInputVal('firstname');
    // Add more variables to get input values
    var lname=getInputVal('lastname');
    var mobile=getInputVal("mobile");
    
    var state=getInputVal("state");
    state=state.toLowerCase();
    readState(state);



    
    var profession=getInputVal("profession");
    var dateofbirth=getInputVal("dateofbirth");
    
    var email=getInputVal("email");
    
    var symptomsList = getSelectedCheckboxValues();





    var selectedOption = document.querySelector('input[name = option]:checked').value;
    /* function call to store data values in firebase
    after email id validation  */
    
    saveMessages(lname+ " " +fname,mobile,email,profession,dateofbirth,state,selectedOption,symptomsList);
}

/* function to accept state value as parameter, read database
 to return and display center details on web page */
function saveMessages(name,mobile,email,profession,dateofbirth,state,selectedOption,symptomsList)
{
var newdata=UserInputsRef.push();
newdata.set(
  {
    name:name,
    mobile:mobile,
    state:state,
    profession:profession,
    email:email,
    dateofbirth:dateofbirth,
    selectedOption:selectedOption,
    symptomsList:symptomsList
  }
)
alert(
  "Data submitted sucessfully"

)
}


function readState(state)
{
    var centers;
    var ref = firebase.database().ref(state);
    ref.on('value', (data) => {
        centers = data.val();
        document.getElementById("result").innerHTML ="<br>"+centers.toUpperCase();
       })
}





/* function to return input values as per the id passed as parameter */
function getInputVal(id){
    return document.getElementById(id).value;
}

/* function to write collected details in firebase,
create new record and add values in respective fields */





/* function to return value(s) of selcted checkboxes */
function getSelectedCheckboxValues(name) {
    const checkboxes = document.querySelectorAll(`input[name="${name}"]:checked`);
    let values = [];
    checkboxes.forEach((checkbox) => {
        values.push(checkbox.value);
    });
    return values;
}

/* function to check if email id entered by user is valid */
function validateEmail() 
{
 if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(testForm.email.value))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}
