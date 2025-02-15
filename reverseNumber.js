//num=[3,4,1,5,6]
function rotateArray(num,k){
  let size=num.length;
  if(size>k){
    k=k%size;
  }

  reverse(num,0,num.length-1)
  reverse(num,0,k-1);
  reverse(num,k,num.length-1)
  return num

}
function reverse(num,left,right){
  while(left<right){
    const temp=num[left]
    num[left++]=num[right]
    num[right--]=temp
  
    
  }
  

}

console.log(rotateArray([3,4,1,5,6],3))

//temp=3
//left=6