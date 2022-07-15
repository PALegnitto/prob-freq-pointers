// find the average of pairs from the array
//compare against the target
//return true if a pair's average is equal to target

function averagePair(nums, targetAvg) {
  let left = 0;
  let right = nums.length - 1;

  //find the average of the each pair the pointers are pointing at
  //we'll check it against the target average
  //if the average is less than the target average,
  //then we'll increase the left pointer
  //otherwise we will decrease the left pointer

  while (left < right) {
    let avg = (nums[left] + nums[right]) / 2;

    if (avg < targetAvg) {
      left++;
    }

    if (avg > targetAvg) {
      right--;
    }

    if (avg === targetAvg) {
      return true;
    }
  }

  return false;
}
