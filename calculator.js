function clearScreen() {
    document.getElementById("result").value = "";
  }
  
  function display(value) {
    document.getElementById("result").value += value;
  }
  
  function calculate() {
    var a = document.getElementById("result").value;
    try {
      var b = eval(a);
      document.getElementById("result").value = b;
    } catch (error) {
      alert("Invalid expression!");
    }
  }
  