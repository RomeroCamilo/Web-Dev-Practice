//array of elements
let vitArray = ["Vitamin C", "Vitamin A", "Vitamin D"]


//function that will add a vitamin to the list.
function addVitamin(){
  //user validation.
  if(document.getElementById('addVitamin').value === ""){
    alert("No Input")
  }
  else{
    //getting user input from text box.
    const vitamin = document.getElementById('addVitamin').value

    //getting date
    const fecha = document.getElementById("fecha").value
    vitArray.push(vitamin)
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
    vitArray.forEach(function (vitamin){

    //creating a div.
    const element = document.createElement('div')

    //adding value to the div.
    element.innerText = vitamin

    //get the div we want to append to
    const containing = document.getElementById('container')
    
    //appending child to containing/'container'
    containing.appendChild(element)
  })
}