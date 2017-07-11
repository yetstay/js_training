function a() {

    console.log('A!');

    function b(){
        console.log('B!'); 
    }

    return b();
}

var s = a();
console.log('break');


function c() {

    console.log('C!');

    function d(){
        console.log('D!'); 
    }

    return d;
}

var sa = c();
console.log('break');
sa();