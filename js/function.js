function openPrompt() {
    var txt;
    var person = prompt("Please enter your name:", "");
    if (person == null || person == "") {
      txt = "User cancelled the prompt.";
    } else {
      txt = "Hello " + person ;
    }
    document.getElementById("paragraph").innerHTML = txt;
}