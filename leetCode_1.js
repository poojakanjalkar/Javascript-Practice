function twoSum(nums, target) {
  let numMap = {}; 

  for (let i = 0; i < nums.length; i++) {
      let complement = target - nums[i];
      if (complement in numMap) {
          return [numMap[complement], i];
      }
      numMap[nums[i]] = i;
  }
  return [];
  }
console.log(twoSum([2,7,11,15], 9))
