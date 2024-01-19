function solution(a, b) {
    // a와 b가 주어졌을 때 a와 b사이에 속한 모든 정수의 합
    let sum = 0;
    // 만약 i = a가 b보다 작거나 같다면 i를 하나씩 늘려줘
    if(a < b) {
        for(let i = a; i <= b; i++){
            sum += i;
        }
    }else { //반대
        for(let i = b; i <= a; i++){
            sum += i;
        }
    }
    return sum;
    
}
 