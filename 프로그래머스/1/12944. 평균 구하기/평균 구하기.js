function solution(arr) {
    var answer = 0;
    let sum = 0;
    
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    
    return answer += sum / arr.length;
}

console.log(solution([1,2,3,4]));