/*Write a function that merges overlapping intervals in an array of intervals.
const intervals = [[1,0, 3,1], [2,0, 6,1], [7,0,9,1],[8, 10], [15, 18]];
Output:[[1, 6], [7, 10], [15, 18]];*/


function mergingIntervals(intervals){
  let mergedArray=[];
  let first=intervals[0];

  for(let i=1;i<intervals.length;i++){
    if(intervals[i][0]<=first[1]){
      first[1]=Math.max(first[1],intervals[i][1]);
    }else{
      mergedArray.push(first);
      first=intervals[i];
    }
  }
  mergedArray.push(first);
  return mergedArray;
};
const intervals = [[1,3], [2,6], [7,9],[8, 10],[15, 18]];
console.log(mergingIntervals(intervals));