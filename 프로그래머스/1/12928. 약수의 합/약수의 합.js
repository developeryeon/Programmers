function solution(n) {
    let sum = 0;
    
    // n의 약수 예를 들어 12
    // 약수를 모두 더한 값
    // 12 % {1, 2, 3, 4, 6, 12} = 0 
    
    for (let i = 0; i <= n; i++){
        if(n % i === 0) {
            sum += i
        }
    }
    
    return sum;
}
