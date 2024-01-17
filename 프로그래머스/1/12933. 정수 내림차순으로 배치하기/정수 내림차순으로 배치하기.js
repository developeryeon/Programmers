function solution(n) {
    // 문자열로 만들고
    // 각 원소를 나눈다.
    // 큰수부터 작은수로 리턴한다.
    let str = n.toString().split(''); //["1","1","8","3","7","2"]
    let answer = str.sort((a, b) =>  b - a);
    var num_list = parseInt(answer.join(''))
    return num_list;
}