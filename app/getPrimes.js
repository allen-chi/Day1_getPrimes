
module.exports={
  getPrimes: function (n){
    if(typeof n === "number"){
      if(n>1){

        var arr=[];

        for(var i=2; i<n; i++){
          if(i==3||i==2){

            arr.push(i);
          }
          
          else if (!(i%2===0 || i%3===0)){
            arr.push(i);
          }
         }
            
      return arr;
      }
     else{
      return "invalid number";
     }
   }
     
    else{
      return "value must be number";
 
        }

}
}
