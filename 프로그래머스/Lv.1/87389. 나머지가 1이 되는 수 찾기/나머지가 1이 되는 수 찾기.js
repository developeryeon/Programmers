function solution(n) {
    let x = 0;
    // x가 가장 작은 자연수
    // 10 % 3 === 1
    // 12 % 11 === 1;
    for(let x = 0; x < n; x++){
        if(n % x === 1) {
            return x;
        };
    };  
}