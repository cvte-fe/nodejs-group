/*
node --print-bytecode hello100.js > hello100.log
*/ 

const num = 2
const helloAdd1 = function() {
    return 1 + num;
}

const helloAdd2 = function() {
    return 1 + num;
}

helloAdd2()

const hello100 = function() {
    
    const Obj = function(){
        this.a = 1; 
        this.b = 2; 
    }
    
    let helloObj = new Obj();
    
    const helloForIn = function(helloObj) {
        for (const key in helloObj) {
            
        }
    }

    const count = 9999999;

    console.time('fast')
    for(let i = 0; i < count; i ++) {
        helloForIn(helloObj)
    }
    console.timeEnd('fast')
    
    const change = () => {
        Obj.prototype.c = 0
    }
    change()
    
    console.time('slow')
    for(let i = 0; i < count; i ++) {
        helloForIn(helloObj)
    }
    console.timeEnd('slow')
}

hello100()


