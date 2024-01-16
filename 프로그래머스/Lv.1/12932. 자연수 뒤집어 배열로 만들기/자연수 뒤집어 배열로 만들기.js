function solution(n) {
    var answer = [];
    
    
    // 자연수를 한자리씩 뒤집는다.
    // 뒤집은 숫자를 각각 원소로 만든다.
    // 원소를 하나씩 배열로 answer에 넣는다.
    
    let reverseNum = n.toString().split('').reverse().join('');
    // '54321'
    
    for (let i = 0; i < reverseNum.length; i++) {
        answer.push(parseInt(reverseNum[i]));
    }
    
    return answer;
}

solution(12345);
