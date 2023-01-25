//array of elements
//let vitArray = ["Vitamin C", "Vitamin A", "Vitamin D"]

//CHECKING OUR LOCAL STORAGE.
let vitObject;

//retrieve local storage with key. convert the storage value from string to its original data type.
const savedStorage = JSON.parse(localStorage.getItem('vitamin'));

//if an array is found in this program, that means there is already previous info to use, so we will use the previous info.
if(Array.isArray(savedStorage)){
   vitObject = savedStorage;
}
//if local storage is empty, create a new array.
else{
    //making an object of vitamins.
     vitObject = [
    {
        vitamin: 'Vitamin C', fecha: "2021-10-04", id:'id1'
    },
    {
        vitamin: 'Vitamin B', fecha: "2021-9-21", id: 'id2'
    }
  ]
}

// MODEL SECTION OF THE M.V.C: CONTAINS ALL THE CODE THAT SAVES AND MANAGES DATA, SUCH AS ADDING AND DELETING DATA. //

//using our local storage to store the values of our object array after adding and deleting data.
//local storage must have a string key and value, so make sure to stringify any value before placing into storage.
function saveRows(){
  //function that will store our current array in local storage. the array is not a string, so i converted it into a string.
  localStorage.setItem('vitamin', JSON.stringify(vitObject));
}

//will get the info the push from addVitamin.
function createVitamin(vitamin, date, id){
  vitObject.push({vitamin:vitamin, fecha: date, id: id})

  saveRows()
}

//CONTROLLER PART OF THE MVC
//function that will add a vitamin to the list.
function addVitamin(){
  //Input validation 
  if(document.getElementById('addVitamin').value === ""){
    alert("No Vitamin added")
  }
  else if(document.getElementById("fecha").value === ""){
    alert("No date added")
  }
  else{
    //getting user input from text box.
    const vitamin = document.getElementById('addVitamin').value

    //getting date
    const fecha = document.getElementById("fecha").value

    //an id for our current button. this function will return the current time in miliseconds.
    //converting to string.
    const id = new Date().getTime().toString()

    //we will now push the object. objects are surrounded by curly braces.
    //vitObject.push({vitamin: vitamin, fecha: fecha, id: id})

    createVitamin(vitamin,fecha,id)

    alert("Data has been updated, click Print Vitamins again.")
  }
}

function deleteVitamin(idToDelete){
    //filter vs for each: In summary, "filter" is used for filtering elements from an array based on a certain condition, 
    //while "foreach" is used for iterating over each element and performing an action on them.

    //looping through our vitObject array with filter. we want to filter out
    //updating our current array. thats why we set it equal to the filter function.
    vitObject = vitObject.filter(function(vitaminRow){
      //every element that is not equal to the id we want to delete will remain in the array.
      return vitaminRow.id != idToDelete;
  });
  //saving updating list into local storage.
  saveRows()
}

//CONTROLLER PART OF THE MVC.
//event will have the information of a button in the event of a specific button is clicked.
function deleteRow(event){

    //getting the id of the event button clicked/ targetting current event
    const idToDelete = event.target.id;
    
    //calling function that will delete the row.
    deleteVitamin(idToDelete)

    render();
}

//  VIEW SECTION OF THE MVC. RENDERS THE VISUAL ELEMENTS. //
//function that will reset the inner html of id 'container'
function reset(){
  document.getElementById('container').innerText = " "
}

//function that will print out the vitamin list.
function render(){

    //before printing out the list, to avoid duplicates, clear out the div with innerHtml/text.
    document.getElementById("container").innerText = " "

    //going into the vitamin array and printing out each vitamin into a div.
    vitObject.forEach(function (vitaminFact){

        //creating a div that will be filled with value from current iteration Vitamin Fact object.
        //this is how you create a div in javascript from html.
        const element = document.createElement('div')

        //adding value to the div.
        element.innerText = vitaminFact.vitamin + " Date: " + vitaminFact.fecha
        
        //this how we add a class to a DOM element we created.
        element.className='vitaminFacts'

        //adding a delete button to our current div element which can delete a vitamin row.
        const deleteButton = document.createElement('button')
       
        deleteButton.innerText = 'Delete'
       
        //setting css class.
        deleteButton.className = "deleteButtons"
       
        //linking the current iteration button with an id for that row.
        deleteButton.id = vitaminFact.id

        //add functionality when clicked in javascript.
        deleteButton.onclick = deleteRow
        
        //add the button to our current div.
        element.appendChild(deleteButton)
    
        //get the div we want to append to
        const containing = document.getElementById('container')
        
        //appending current div to containing/'container', our main container/div.
        containing.appendChild(element)
  })
}