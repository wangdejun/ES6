function convertToRoman(num) {
    var romanArr = [];
    if(Math.floor(num/1000)!=0){
        for(var i=0;i<Math.floor(num/1000);i++){
            romanArr.push('M');
        }
        num = num - Math.floor(num/1000)*1000;
        console.log(`num: ${num}`);
    }
    if(Math.floor(num/500)!=0){
        romanArr.push('D');
        num = num - Math.floor(num/500)*500;
        console.log(`num: ${num}`);       
    }

    if(Math.floor(num/100)!=0){
        if(Math.floor(num/100)==9){
            romanArr.push('C');
            romanArr.push('D');
        }else{
            for(var i=0;i<Math.floor(num/100);i++){
                romanArr.push('C');
            }
        }
        num = num - Math.floor(num/100)*100;
        console.log(`num: ${num}`);
    }

    if(Math.floor(num/50)!=0){
        romanArr.push('C');
        num = num - Math.floor(num/50)*50;
        console.log(`num: ${num}`)
    }
    
    if(Math.floor(num/10)!=0){
        if(Math.floor(num/10)==4){
            romanArr.push('L');
            romanArr.push('X');
        }else{
            for(var i=0;i<Math.floor(num/10);i++){
                romanArr.push('X');
            }
        }
        num = num - Math.floor(num/10)*10;
        console.log(`num: ${num}`)
    }

    if(Math.floor(num/5)!=0){
        if(Math.floor(num)==9){
            romanArr.push('IX')
            num = num - Math.floor(num);
        }else{
            romanArr.push('X');
            num = num - Math.floor(num/5)*5;
            console.log(`num: ${num}`);
        }
    }
    if(Math.floor(num)!=0){
        if(num==4){
            romanArr.push('I');
            romanArr.push('V');
        }else{
            for(var i=0;i<Math.floor(num);i++){
                romanArr.push('I');
            }
        }
        console.log(`num: ${num}`);
    }
    var numRoman = romanArr.join('');
    return numRoman;
}
  
// console.log(convertToRoman(4));
console.log(convertToRoman(29));

// console.log(convertToRoman(10));
// console.log(convertToRoman(11));
// console.log(convertToRoman(14));
// console.log(convertToRoman(34));
// console.log(convertToRoman(3999));
