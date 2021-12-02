 let a  = [("{{}}")];
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

function online(data){
    fetch(data).
    then((Response)=>{
        log(true);
    }).catch((error)=>{
        log(false);
    });
}

