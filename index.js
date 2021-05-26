/* the slice method take 2 arguments, the start point and end point, the end point is not included in the result,the 2 points represent indices in an Array */

/* Dont forget the original Array is not changed, instead, slice method returns the result in the form of a new Array, it doesnt effect the original one. */

let footballTeams = ["Manchester City", "Manchester United", "Liverpool", "Arsenel", "Lecister City"];

let slicefootballTeams = footballTeams.slice(2, 4);

// slicing stores at index 2 (Liverpool), and ends at index 4 (Lecister City), but the end point is not part of the result, slicing stops before Lecister City

console.log(footballTeams);
console.log(slicefootballTeams);