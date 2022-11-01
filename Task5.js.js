let arry = [1,1,3,3,4,4,5,2];

var removeDuplicates = function(arr){
   const bound = arr.length;
   const unique = [];
   let k = 0;
   if(bound !== 0 || bound !== 1){
      for (let i = 0; i < bound; i++) {
       if (arr[i] !== arr[i+1]) {
          unique[k++] = arr[i];
       }
      }
   }else{
      k = bound;
   }
   for (let j = 0; j < k; j++) {
      arr[j] = unique[j];
   }
   console.log(unique)
    return k;
};
removeDuplicates(arry);

