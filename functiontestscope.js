function testscope(){
    if(true){
        var m = 10;
        const k = 20;
        let n = 30;
        console.log(m);
        console.log(n);
        console.log(k);

    }
    console.log(m);
    //console.log(n);
    //console.log(k);
}
testscope();