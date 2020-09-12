let criminals = [
    {
        name:"evans",
        age:"25",
        country:"europe",
        hobbies:['robbery','kill','games']
    },
    {
        name:"roman",
        age:"28",
        country:"america",
        hobbies:['kill','hack','games']
    },
    {
        name:"peter",
        age:"32",
        country:"jorden",
        hobbies:['robbery','kill','hack']
    },
    {
        name:"charlie",
        age:"30",
        country:"INDIA",
        hobbies:['dance','kill','play']
    }
];

function displayAge(criminals){
    console.log("People with age less than 30");

    console.log("---------------");
    criminals.forEach(element => {
        if(element.age<30)
        {
            console.log(element);
        }
    });
}
function displayCountry(criminals){
    console.log("People in INDIA");

    console.log("---------------");
    criminals.forEach(element => {
        if(element.country == "INDIA")
        {
            console.log(element);
        }
    });
}
displayAge(criminals);
displayCountry(criminals);