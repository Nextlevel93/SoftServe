let sumMin = ([
  [13, 11, 2],
  [3, 23, 23, 55],
  [23, 55, 3, 1, 77],
  [39, 7, 89, 94, 1]
])
let sumMin2 = ([
  [13, 11, 2],
  [3, 23, 23, 55]
])

function minimum(any_Array) {
  Array.prototype.min = function() {
    return Math.min.apply(null, this);
  }
  let count = 0;
  for (let i = 0; i < any_Array.length; i++) {
    let min_Num_Of_Each = any_Array[i].min();
    count += min_Num_Of_Each;
  }
  console.log(count);
}
minimum(sumMin);
minimum(sumMin2);