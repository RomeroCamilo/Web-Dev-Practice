//array of elements
//let vitArray = ["Vitamin C", "Vitamin A", "Vitamin D"]

//making an object of vitamins.
let vitObject = [
    {
        vitamin: 'Vitamin C', fecha: "2021-10-04"
    },
    {
        vitamin: 'Vitamin B', fecha: "2021-9-21"
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

    //we will now push the object. objects are surrounded by curly braces.
    vitObject.push({vitamin: vitamin, fecha: fecha})
  }
}


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
        const element = document.createElement('div')

        //adding value to the div.
        element.innerText = vitaminFact.vitamin + " Date: " + vitaminFact.fecha
        
        //this how we add a class to a DOM element we created.
        element.className='vitaminFacts'

        //get the div we want to append to
        const containing = document.getElementById('container')
        
        //appending child to containing/'container'
        containing.appendChild(element)
  })
}