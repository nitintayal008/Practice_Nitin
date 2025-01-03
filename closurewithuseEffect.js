
//first question

function x(){
    for(var i=1; i<=5; i++){
        function close(i){
            setTimeout(()=>{
                console.log(i)
            }, i*1000)
        }
        close(i);
    }
    console.log('done')
}

x();

//2nd question

function find(){
    let a = [];
    for(let i=0; i<10000; i++){
        a[i] = i*i;
    }

    return function (index){
        console.log(a[index]);
    }

}

const closure = find();

console.time("6");
closure(6);
console.timeEnd("6");


//3rd question
// how would you use a closure to create a private counter?

function counter(){
    var _counter =0;
    function add(increment){
        _counter+=increment;
    }

    function retrive(){
        return "Counter = "+_counter;
    }

    return {
        add, 
        retrive,
    };

};

const c = counter();
c.add(5);
c.add(10);

console.log(c.retrive());

//4th question
