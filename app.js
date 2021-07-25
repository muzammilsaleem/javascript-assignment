
// Q1
// var itemsArray=[
//           {name:"juice",price:50,quamtity:3},
//           {name:"cookie",price:30,quamtity:9},
//           {name:"shirt",price:880,quamtity:1},
//           {name:"pen",price:100,quamtity:2}
// ];
// var sum=0,items=0;
// for(i=0;i<itemsArray.length;i++)
// {
//           sum+=itemsArray[i].price;
//           items+=itemsArray[i].quamtity;
// }
// console.log("sum = "+sum);
// console.log("items = "+items)

// Q2
// var stdInfo=[
          
//           {firstName:"Muzammil",lastName:"Saleem",email:"muzammil@gmail.com",password:"22",age:"22",gender:"male",city:"karachi",country:"Pakistan"}
          
// ]
// console.log("age exist :"+stdInfo[0].hasOwnProperty("age"));
// console.log("country exist :"+stdInfo[0].hasOwnProperty("country"));
// console.log("First Name :"+stdInfo[0].firstName);
// console.log("last Name :"+stdInfo[0].lastName);


// Q3

// function stdInfo(FirstName,lastName,email,password,age,gender,city,country)
// {
//           this.FirstName=FirstName;
//           this.lastName=lastName;
//           this.email=email;
//           this.password=password;
//           this.age=age;
//           this.gender=gender;
//           this.city=city;
//           this.country=country;
// }
// var std1=new stdInfo("muzammil","saleem","muzammil@gmail.com",22,"male","karachi","pakistan");
// var std2=new stdInfo("asad","asad","11muzammil@gmail.com",11,"male","karachi","pakistan");
// console.log(std1);
// console.log(std2);

//Q4
function CheckPopulation(name, gender, address, education, profession) {
  this.name = name;
  this.gender = gender;
  this.address = address;
  this.education = education;
  this.profession = profession;
}

const Peoples = new CheckPopulation(
  "Muzammil",
  "Male",
  "Nazimabad",
  "computer Engineering",
  "Developer"
);
console.log(Peoples);

//save vales of education
function educationData() {
  var select = document.getElementById("education");
  localStorage.setItem("save", select.value);
 
            console.log(select.value)
   
}

//save values for profession
function professionPeoples() {
  var profession = document.getElementById("profession");
    profession[localStorage.getItem("save")];
            console.log(profession.value);
    localStorage.setItem("profession", profession.value);
  
}

//ave values of radio buttons
function gender(){
var radio = document.getElementsByName("gender");
for (var i = 0; i < radio.length; i++) {
  if (radio[i].checked) {
    localStorage.getItem("Male");
    console.log("male")}
    else {
    localStorage.getItem("female");

    }
}
}