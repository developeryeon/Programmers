function solution(x) {
    
    //x가 소수인지 정수인지
    //문자열로해서 분리
    let splitNum = x.toString().split('');
    //하나씩 돌아가면서 넘버로 바꿔줘
    let reducedNum = splitNum.map( (index) => Number(index) );
    //그리고 각 자리수를 더해 = x의 자릿수의 합 
    let sum = reducedNum.reduce((a, b) => (a + b));
    
    if(x % sum === 0) {
        return true;
    }else{
        return false;
    }

}