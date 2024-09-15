let count = 0;

document.getElementById("counter-btn").addEventListener("click", function() {
  count+=1;
  document.getElementById("count").innerHTML = count;
});
//add a function for reset
document.getElementById("reset").addEventListener("click", function() {
  count = 0;
  document.getElementById("count").innerHTML = count;
})
