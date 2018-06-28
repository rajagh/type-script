console.log('hello world')
// for watching please add tsc -w filename
// for whole folder watch please enter tsc init then tsc -w

// chapter 'let'
// global access q
{
    var q  = 'block1'
}
// global (scope) access
console.log(q);

//function scope

function p1(){
    var a = "block2";
}
p1();

function hello() {
    var ha = "Raja";
    console.log(ha);
    
}
hello();
//console.log(a)

function hello1() {
    var a = "RAMA";
    
   
        for (var i = 0; i<10; i++){
            (function(){
                 let a = "RAMA";
                 
            })();
            console.log('one: '+a);
        }
        console.log('two: '+a);
    
   
}

function hello2() {
       var a = "RAMA";
    
   
        for (var i = 0; i<10; i++){
                  
                 let a = "RAja";
                 console.log('inside the loop '+a +i); 
                 let b = "Shubh" 
           
        }
   
        console.log('outside the loop '+a +' '+ b +i);
   
}
// conts : you can not chnage vlaue during the excuation
function blockly (){
    const something = 'NewSome one'
    if (true){
        let something = "New New some one"
            console.log('true' + something)

    }
    something = "Raja here!!"
    console.log(something);

}

function muitliline(){
    let user = "Raja"
    let userNew = `welcome ${user} here....`
    console.log(userNew);
    let mutlilines = `welcome   
                    ${user}
                    here.....
    
    `
    console.log(mutlilines)
}
// fat arroe//
setTimeout(() => console.log('call time'),1000);






setTimeout(function(){
    console.log('call time');
    
    },1000);
    

 // fat arrow// 
 
 var x = () => {console.log('rja')}
 var y = (a,b,c) => { a+b+c ;
    console.log("total: " a+b+c);
 setTimeout(() => {
    console.log("total: " a+b+c);  
 }, 1000);
 }
var speed = () => { var x =0;    
        setInterval(() => {x++; console.log(x) },1000 ); 
          
    
}
// stop set Interval Time

var stopSpeed = ()=> {
    let x = 0;
    let innerContain = <HTMLElement>document.getElementById('last')as HTMLInputElement;
    
    var timer = () =>{
    if(x<=3){
        x++;
        console.log("Start "+ x );
        document.getElementById("last").innerHTML ="your number : "+ x;
        
         
    }
    else{
        console.log("End "+ x);
        clearInterval(setTime);
    }
}
    var setTime = setInterval(timer,1000);
}




hello1();
hello2();
blockly();
muitliline();
x();
y(1,3,4);
//speed();
stopSpeed();
