//Set up Button Event Listeners
document.getElementById('MadLibBtn').addEventListener('click', setMadLib)

//Mad Lib Button Functions
function setMadLib() {
    //storing input values into variables
    let verbinput = document.getElementById("verb").value;
    let pluralnouninput = document.getElementById("pluralnoun").value;
    let adjectiveinput = document.getElementById("adjective").value;
    let presenttenseverbinput = document.getElementById("presenttenseverb").value;
    let nouninput = document.getElementById('noun').value

    //putting input variables into the paragraph
    document.getElementById('firstblank').innerHTML = verbinput;
    document.getElementById('secondblank').innerHTML = pluralnouninput;
    document.getElementById('thirdblank').innerHTML = adjectiveinput;
    document.getElementById('fourthblank').innerHTML = presenttenseverbinput;
    document.getElementById('fifthblank').innerHTML = nouninput;
 
}
