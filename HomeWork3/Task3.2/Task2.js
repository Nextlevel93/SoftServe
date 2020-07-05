let ages_List = [13, 11, 23, 23, 23, 55, 23, 55, 3, 77, 3, 4, 8, 101, 54];
let two_Oldest = [];

function max_Ages(any_Array) {
  Array.prototype.max = function() {
    return Math.max.apply(null, this)
  }
  for (let i = 0; i < 2; i++) {
    let max_Age_In_Arr = any_Array.max();
    let index = ages_List.indexOf(any_Array.max());
    ages_List.splice(index, 1);
    two_Oldest.unshift(max_Age_In_Arr);
  }
  console.log(two_Oldest);
}
max_Ages(ages_List);