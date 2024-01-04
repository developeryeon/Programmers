function solution(numbers) {
    // 배열 담는 곳 초기화 시켜주기
    let sum = 0;
    // 배열을 원소들이 하나씩 돌아가면서 더하고 모두 합한 값의 원소 갯수만큼 return 하도록 하자.
    // 반복문으로 배열의 원소 하나씩 ++ 반복해서 , 더한다.
    for(let i = 0; i < numbers.length; i++){  // i가 배열의 원소, numbers.length가 배열 원소 갯수
         sum += numbers[i];
    }
    
    return answer = sum / numbers.length;
}
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))