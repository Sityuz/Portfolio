const Sports = document.getElementById("Sports")
const Geography = document.getElementById("Geography")
const History = document.getElementById("History")
const Politics = document.getElementById("Politics")

let category;

const Easy = document.getElementById("Easy")
const Medium = document.getElementById("Medium")
const Hard = document.getElementById("Hard")

let difficult

const catg = document.getElementById("catg")

const diff = document.getElementById("diff")

Sports.addEventListener("click", ()=>{
  category=21;
  console.log("Sport")
  localStorage.setItem("category",21)
  catg.style.visibility= "hidden";
  diff.style.visibility = "visible";
})

Geography.addEventListener("click", ()=>{
  category=22;
  console.log("Geography")
  localStorage.setItem("category",22)
  catg.style.visibility= "hidden";
  diff.style.visibility = "visible";
})

History.addEventListener("click", ()=>{
  category=23;
  console.log("History")
  localStorage.setItem("category",23)
  catg.style.visibility= "hidden";
  diff.style.visibility = "visible";
})

Politics.addEventListener("click", ()=>{
  category=24;
  console.log("Politics")
  localStorage.setItem("category",24)
  catg.style.visibility= "hidden";
  diff.style.visibility = "visible";
})

Easy.addEventListener("click", ()=>{
  difficult = "easy"
  localStorage.setItem("difficult","easy")
  console.log(difficult)
  location.assign("./game.html")
  if(!category || !difficult){
    alert("Please select category and difficulty")
    return;
  }

  // const apiURL = `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficult}&type=multiple`;
  // fetch(apiURL)
  // .then(response => {
  //   // Check if the network request was successful (status code 200-299)
  //   if (!response.ok) {
  //     throw new Error(`HTTP error! status: ${response.status}`);
  //   }
  //   // Parse the response body as JSON
  //   return response.json();
  // })
  // .then(data => {
  //   // Process the retrieved data
  //   console.log('Fetched data:', data);
  //   // You can now use 'data' to update your UI or perform other actions
  // })
  // .catch(error => {
  //   // Handle any errors that occurred during the fetch operation
  //   console.error('Error fetching data:', error);
  // });
})


Medium.addEventListener("click", ()=>{
  difficult = "medium"
  localStorage.setItem("difficult","medium")
  console.log(difficult)
  location.assign("./game.html")
  if(!category || !difficult){
    alert("Please select category and difficulty")
    return;
  }

  // const apiURL = `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficult}&type=multiple`;
  // fetch(apiURL)
  // .then(response => {
  //   // Check if the network request was successful (status code 200-299)
  //   if (!response.ok) {
  //     throw new Error(`HTTP error! status: ${response.status}`);
  //   }
  //   // Parse the response body as JSON
  //   return response.json();
  // })
  // .then(data => {
  //   // Process the retrieved data
  //   console.log('Fetched data:', data);
  //   // You can now use 'data' to update your UI or perform other actions
  // })
  // .catch(error => {
  //   // Handle any errors that occurred during the fetch operation
  //   console.error('Error fetching data:', error);
  // });

})

Hard.addEventListener("click", ()=>{
  difficult = "hard"
  localStorage.setItem("difficult","hard")
  console.log(difficult)
  location.assign("./game.html")
  if(!category || !difficult){
    alert("Please select category and difficulty")
    return;
  }

  // const apiURL = `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficult}&type=multiple`;
  // fetch(apiURL)
  // .then(response => {
  //   // Check if the network request was successful (status code 200-299)
  //   if (!response.ok) {
  //     throw new Error(`HTTP error! status: ${response.status}`);
  //   }
  //   // Parse the response body as JSON
  //   return response.json();
  // })
  // .then(data => {
  //   // Process the retrieved data
  //   console.log('Fetched data:', data);
  //   // You can now use 'data' to update your UI or perform other actions
  // })
  // .catch(error => {
  //   // Handle any errors that occurred during the fetch operation
  //   console.error('Error fetching data:', error);
  // });
})



  

// const fetching = document.getElementById("fetch");

// fetchButton.addEventListener("click", ()=>{
//   if (!category || !difficult) {
//     alert("Please select category and difficulty!");
//     return;
//   }

//   const apiUrl = `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficult}&type=multiple`;

//   fetch(apiUrl)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       return response.json();
//     })
//     .then(data => {
//       console.log('Fetched data:', data);
//       // You can now update UI here with data
//     })
//     .catch(error => {
//       console.error('Error fetching data:', error);
//     });
// });
