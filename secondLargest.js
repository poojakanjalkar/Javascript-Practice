// input=[33,34,1,34,5]

function secondLargest(num){
  const uniqueArray=Array.from(new Set(num))
  console.log(uniqueArray)
uniqueArray.sort((a,b)=>{
  
    return b-a
 
 
})
if(uniqueArray.length>=2){
  return uniqueArray[2]
}else{
  return -1
}
}

console.log(secondLargest([33,34,1,34,5]))