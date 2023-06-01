export function log(a){
    console.log(a);
}

let hospital_data = [
    {
        patient_name:"Tanya Chifodya",
        patient_age:"27",
        gestation:"31",
    },
    {
        patient_name:"Danai Gwatidza",
        patient_age:"25",
        gestation:"12",
    },
    {
        patient_name:"Millicent Bene",
        patient_age:"24",
        gestation:"23",
    },
    {
        patient_name:"Cheryl Bulande",
        patient_age:"26",
        gestation:"28",
    }
];

export function ViewList(a){
    if(Array.isArray(a)){
        console.table(a);
    }else{
        console.error(`data is not Array`);
        console.error(`Expecting ad Array [] but got ->  ${a}`);
    }
}

export function online(data){
    fetch(data,{mode: 'no-cors'}).
    then((Response)=>{
        console.log('%c Resource is Online ', 'background: white; color: #00aeff');  
    }).catch((error)=>{
        console.log('%c Resource not Online ', 'background: white; color: red');  
    });
}


 export function JsonData(url){
    return fetch(url)
    .then(response => response.json())
    .then(json =>{console.table(json)})
    .catch(e=>log(`Failed ${e}`));
}
