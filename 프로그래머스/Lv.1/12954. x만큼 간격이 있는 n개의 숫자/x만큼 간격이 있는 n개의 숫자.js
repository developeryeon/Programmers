function solution(x, n) {
    var answer = [];
    // x를 x씩 더해 n번 반복해 배열에 넣어라.
    
    for (let i = 1; i <= n; i++) {
        answer.push(x * i);
    }
    
    return answer;
}

// let answer1 = solution(2, 5);
// let answer3 = solution(-4, 2);

// console.log(answer1);
// console.log(answer3);