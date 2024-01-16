function solution(x, n) {
    var answer = [];
    // x가 x만큼 증가하고,
    // n번 반복된다.
    // 실제 몇번 배열을 도는 횟수
    // 만약 x가 n개가 있다면 x를 x씩 증가해서 answer에 넣어라. 
    // x를 n번 x를 더해서 배열에 넣어라.
    
    for (let i = 1; i <= n; i++) {
        answer.push(x * i);
    }
    
    return answer;
}

let answer1 = solution(2, 5);
let answer3 = solution(-4, 2);

console.log(answer1);
console.log(answer3);