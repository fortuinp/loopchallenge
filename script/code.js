let numbers=[12, 18, 11, 5, 8]


function challenge(){
    

        if(numbers.length%2==0 ){
            console.log( numbers[(numbers.length)/2-1], numbers[numbers.length/2]);
            document.getElementById('output').textContent = 
            new Array().concat(numbers[(numbers.length)/2-1], numbers[numbers.length/2]);

        }
        else{
            console.log(numbers[parseInt(numbers.length/2)]);
            document.getElementById('output').textContent = numbers[parseInt(numbers.length/2)];
        }
    

    
}

challenge()
