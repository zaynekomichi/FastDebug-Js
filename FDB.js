function log(a){
    console.log(a);
}

function ViewList(a){
    if(Array.isArray(a)){
        console.table(a);
    }else{
        console.error(`data is not Array`);
        console.error(`Expecting and Array [] but got ->  ${a}`);
    }
}

function online(data){
    fetch(data,{mode: 'no-cors'}).
    then((Response)=>{
        console.log('%c Resource is Online ', 'background: white; color: #00aeff');  
    }).catch((error)=>{
        console.log('%c Resource not Online ', 'background: white; color: red');  
    });
}


