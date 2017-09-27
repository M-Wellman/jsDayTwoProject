
for(let i=0; i<101; i++){
  if(i%3 == 0 && i%5 == 0){
    console.log(i + " Bing Bong");
  } else if(i%3 == 0){
    console.log(i + " Bing");
  } else if (i%5 == 0){
    console.log(i + " Bong");
  } else {
    console.log(i);
  }
}
