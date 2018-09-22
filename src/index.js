module.exports = function warmup(temperature) {
  // your implementation here

   var t = Number(temperature);
  if(t != 0) {
  	return (t*9)/5 + 32;
  }
  else {
  	return 32;
  }
};
