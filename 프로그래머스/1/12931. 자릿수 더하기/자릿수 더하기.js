function solution(n)
{
    let sum = 0;
    //자연수 N, N의 각 자릿수의 합을 구해서 return .
    // 123이면 1 + 2 + 3 N원소 [i] 
    // 어떻게 빼줄까? 문자열로?
    
   let num = n.toString().split("").map(Number);
    
    for(let i = 0; i < num.length; i++) {
        sum += num[i]
        
    }
    
    
    return sum;
  
}

