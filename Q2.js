function solution(n) {
    let result = 0,
        sum= n % 60;
   if (sum === 2) {
    result = result + n/60;
    result = result + sum;
    return result;
    } else {
        result = result + n/10;
        result = result + n%10;
        return result;
    }

   
    

}