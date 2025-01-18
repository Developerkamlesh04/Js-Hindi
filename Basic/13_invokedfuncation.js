//(IIFE) IMMEDIATELY INVOKED FUNCTION EXPRESSIOS

// name iife
(function chai (){
    console.log(`DB CONNECTED`);   
})();

//without name iife
( (name) => {
    console.log(`db connected two ${name}`);    
})('kamlesh')