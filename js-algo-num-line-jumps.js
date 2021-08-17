// 2 Kangaroos jumping from starting point (x1, x2) and jumping at their rates (v1, v2)
// Will kangaroos ever end up at same spot at same time (after same number of jumps)

function kangaroo(x1, v1, x2, v2) {
  // setting kangaroo variables at their intial spot
  // which will continue to change as they "jump"
  let kangaroo1 = x1;
  let kangaroo2 = x2;
  // set number of jumps initially at zero before iterations
  let jumps = 0;

  // first call out obvious conditional cases where kangaroos will never end up same spot
  // and set return to NO to eliminate them out
  if (
    (x1 > x2 && v1 > v2) ||
    (x2 > x1 && v2 > v1) ||
    (x1 !== x2 && v1 === v2) ||
    (x1 === x2 && v1 !== v2)
  ) {
    return "NO";
    // for the possible conditionals cases that remain use a while loop
    // because don't yet know how many iterations it will take to break loop
    // while loop to run until conditional is no longer met (kangaroos meet or one surpasses the other without meeting)
    // through each iteration move the kangaroo position according to their jump rate
    // and tally the number of jumps by one
  } else if (x1 > x2) {
    // as long as first kangaroo1 is "ahead" of kangaroo 2 continue iterations
    while (kangaroo1 > kangaroo2) {
      kangaroo1 += v1;
      kangaroo2 += v2;
      jumps += 1;
      // when both kangaroos are in the same "spot"
      if (kangaroo1 === kangaroo2) {
        return `YES after ${jumps} jumps at spot ${kangaroo1}`;

        // if kangaroo2 surpasses kangaroo1 then the result is NO
      } else if (kangaroo2 > kangaroo1) {
        return "NO";
      }
    }
  } else if (x2 > x1) {
    // same while loop exceppt for case of kangaroo2 starting point ahead of kangaroo1
    while (kangaroo2 > kangaroo1) {
      kangaroo1 += v1;
      kangaroo2 += v2;
      jumps += 1;
      if (kangaroo2 === kangaroo1) {
        return `YES after ${jumps} jumps at spot ${kangaroo2}`;
      } else if (kangaroo1 > kangaroo2) {
        return "NO";
      }
    }
  }
}

console.log(kangaroo(0, 3, 4, 2));
console.log(kangaroo(28, 8, 96, 2));
console.log(kangaroo(21, 6, 47, 3));
console.log(kangaroo(1817, 9931, 8417, 190));
console.log(kangaroo(43, 2, 70, 2));
console.log(kangaroo(43, 2, 43, 3));
