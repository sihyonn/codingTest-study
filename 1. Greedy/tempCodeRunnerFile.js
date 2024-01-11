
function solution(arr) {
  let count = 1;
  for (let i=1 ; i < arr.length; i++){
    if(end_time <= arr[i][0]){
      count++;
      end_time = arr[i][1];
    }
  }
  console.log(count);
}

solution(times);