/**
 *
 * @returns A promise that is designed to resolve with a list of hobbits, or potentially fail with an failure object. The failure object includes a boolean success property and a string message property.
 */
function getList() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let potentialFail = Math.round(Math.random() * 100) < 10;
      if (potentialFail) {
        reject({ success: false, message: "Failed to get list of hobbits." });
      } else {
        resolve(["Bilbo", "Frodo", "Sam", "Merry", "Pippin"]);
      }
    }, 10);
  });
}

// Exercise 1
/* const paragraph = document.getElementById("error");
const ul = document.getElementById("list"); */

const errorP = document.querySelector("#error");
const listUL = document.querySelector("list");

getList().then((val) => {
  console.log(val);
  // success -- iterate using a forEach loop
  for (let i = 0; i < val.length; i++){
    const newLi = document.createElement("li");
    newLi.textContent = val[i];
    listUL.appendChild(newLi);
  }
}).catch((err) => {
  console.log(err);
  // failure
  errorP.textcontent = err.message;
})


// TODO: Handle the resolved or rejected states of the promise

// TODO: If the promise resolves with the list of hobbits
// Render the list of hobbits as list items within the unordered list with id="list" (check the index.html file)

// TODO: If the promise rejects with the failure object
// Display the failure message in the paragraph element with id="error" (check index.html file)