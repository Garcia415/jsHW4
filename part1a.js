 function hello(){  
    let text = document.querySelector('#text'); 
    let array = [5, 9, 13, 17, 21],
     s = 0,
    p = 1,
    i;
for (i = 0; i < array.length; i ++) 
   {
    s += array[i];
    p*= array[i];

    } 
    let commas = s.toLocaleString("en-US");
    let commas1 = p.toLocaleString("en-US");
    return text.textContent =   `The Sum is: ${commas} and the Product is: ${commas1}`
 }


//Dont know what im doing wrong spent more than a day trying to figure out whats going wrong i keep gettig 3, 6, 9
 const heloo = () => {
    let text = document.querySelector('#one');
    let array = [3, 6, 9, 12, 15, 18, 21],
    s = 0, 
    p = 1,
    i = 1;

while(i < array.length){
    s = s + array[i];
    p = p * array[i];
    i++

   let commas = s.toLocaleString('en-US');
   let commas1 = p.toLocaleString('en-US')
   return text.textContent = `The Sum is: ${commas} and the Product is: ${commas1}`;
}

 };
    let dot = document.querySelector('#button').addEventListener('click', function(){ hello() })
    let dott = document.querySelector('#oneb').addEventListener('click', function(){ heloo() })
