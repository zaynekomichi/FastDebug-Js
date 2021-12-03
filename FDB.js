function log(a){
    console.log(a);
}

function ViewList(a){
    if(Array.isArray(a)){
        console.table(a);
    }else{
        console.error(`Pass in data is not Array`);
        console.error(`Expecting and Array [] but got ->  ${a}`);
    }
}

function checkOnline(data){
    fetch(data,{mode: 'no-cors'}).
    then((Response)=>{
        log(`Resource is online ->${true}`);   
    }).catch((error)=>{
        log(`Failed to fetch load resourse ->${error}`);
    });
}


