//array of elements
//let vitArray = ["Vitamin C", "Vitamin A", "Vitamin D"]

//making an object of vitamins.
let vitObject = [
    {
        vitamin: 'Vitamin C', fecha: "2021-10-04", id:'id1'
    },
    {
        vitamin: 'Vitamin B', fecha: "2021-9-21", id: 'id2'
    }
]


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
    vitObject.push({vitamin: vitamin, fecha: fecha, id: id})

    alert("Data has been updated, click Print Vitamins again.")
  }
}


//function that will reset the inner html of id 'container'
function reset(){
  document.getElementById('container').innerText = " "
}

//event will have the information of a button in the event of a specific button is clicked.
function deleteRow(event){

    //getting the id of the event button clicked/ targetting current event
    const idToDelete = event.target.id;
    
    //filter vs for each: In summary, "filter" is used for filtering elements from an array based on a certain condition, 
    //while "foreach" is used for iterating over each element and performing an action on them.

    //looping through our vitObject array with filter. we want to filter out
    //WE PUT AN EQUAL IN FILTER BECAUSE IN FILTER WE UPDATE THE ARRAY AND FILTER OUT WHAT WE DONT NEED.
    vitObject = vitObject.filter(function(vitaminRow){
        if(vitaminRow.id === idToDelete){
            alert("Delete Successful")
            return false;
        }
        else{
            return true;
        }
    });

    render();
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