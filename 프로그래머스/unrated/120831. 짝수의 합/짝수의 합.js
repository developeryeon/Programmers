function solution(n) {
    let sum = 0;
    
    //정수 n 이하의 짝수
    //구한 짝수를 모두 더한 값을 sum에 넣어준다.
    
    for(let i=0; i <= n; i++){
        if(i % 2 === 0){
            sum += i;   
        }
    }
    
    return sum;
}
