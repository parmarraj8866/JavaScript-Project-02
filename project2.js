


// 1. Bill Calculation

// function FindBill(items, taxrate) {
//     let bill = 0;

//     for (let i = 0; i < items.length; i++) {
//         bill += items[i].price * items[i].quatity;
//     }

//     let tax = (bill * taxrate) / 100;

//     let finalBill = bill + tax;

//     return finalBill;
// }

// const items = [
//     { name: "item1", price: 500, quatity: 3 },
//     { name: "item2", price: 300, quatity: 1 }
// ];

// const taxrate = 5;

// console.log("Bill =", FindBill(items, taxrate));




// 2. Grade System

// let marks = parseInt(prompt("Enter Your Marks :"));
// let grade;

// if (marks >= 90 && marks < 100) {
//     grade = "A";
// } else if (marks >= 80 && marks < 90) {
//     grade = "B";
// }
// else if (marks >= 70 && marks < 80) {
//     grade = "C"
// }
// else if (marks >= 60 && marks < 70) {
//     grade = "D"
// }
// else if (marks >= 50 && marks < 60) {
//     grade = "F";
// } else {
//     grade = "Sorry, You are Fail Not Show Grade"
// }

// console.log("Grade =", grade);




// 3. Interest Calculation


// function findInterest(value, rate, time) {
//     let interest = 0;

//     interest = (value * rate * time) / 100;

//     return interest;
// }


// console.log("Interest =", findInterest(10000, 5, 2));





//  4. Change Password

// let oldPass = "raj-321";
// let EnterOld = prompt("Enter Your Old Password");

// if (oldPass === EnterOld) {
//     let newPass = prompt("Enter New Password :");
//     let conformNewPass = prompt("Enter Conform New Password :");

//     if (newPass === conformNewPass) {
//         console.log("Your old Password Updated!");
//     } else {
//         alert("Your Password Not Matching! Please Try Again");
//     }
// } else {
//     alert("You Enter Wrong Old Password!");
// }