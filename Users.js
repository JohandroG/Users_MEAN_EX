

let users = [
    {
    fname: "Kermit",
    lname: "the Frog",
    languages: ["Python", "JavaScript", "C#", "HTML", "CSS", "SQL"],
    interests: {
        music: ["guitar", "flute"],
        dance: ["tap", "salsa"],
        television: ["Black Mirror", "Stranger Things"]
    }
    },
    {
    fname: "Winnie",
    lname: "the Pooh",
    languages: ["Python", "Swift", "Java"],
    interests: {
        food: ["honey", "honeycomb"],
        flowers: ["honeysuckle"],
        mysteries: ["Heffalumps"]
    }
    },
    {
    fname: "Arthur",
    lname: "Dent",
    languages: ["JavaScript", "HTML", "Go"],
    interests: {
        space: ["stars", "planets", "improbability"],
        home: ["tea", "yellow bulldozers"]
    }
    }
]

function userLanguages(users){

    
    for (let i = 0; i<users.length;i++){
    let lang = ""
        for (let j = 0; j<users[i].languages.length;j++){
            lang = lang + users[i].languages[j] + ","
        }
        console.log(users[i].fname,users[i].lname,"knows",lang)
    }
    
}


userLanguages(users);

