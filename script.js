function calculate() {
    event.preventDefault();
  let input1 = parseFloat(document.getElementById("input1").value);
  let input2 = parseFloat(document.getElementById("input2").value);
  let operator = document.getElementById("operator").value;
  let result;
  if (operator == "+") {
    result = input1 + input2;
  } else if (operator == "-") {
    result = input1 - input2;
  } else if (operator == "*") {
    result = input1 * input2;
  } else if (operator == "/") {
    result = input1 / input2;
  } else {
    alert("Enter valid number");
  }
  document.getElementById("result").value = result;
}
