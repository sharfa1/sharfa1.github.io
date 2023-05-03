// to retrive data from local storage
let LoginForm=document.querySelector("#LoginForm");
LoginForm.addEventListener("submit",function(event){
    event.preventDefault();
    let username=document.querySelector("#Username").value;
    let password=document.querySelector("#Password").value;
    if(username === "sharifa" & password === "123"){
        let contacts = JSON.parse(localStorage.getItem("contacts")) || [];
        let contactinfo="";
        for(i=0;i<contacts.length;i++){
            contactinfo += "<h1>contact #" + (i+1)+ "</h1>";
            contactinfo += "<p>name: " + contacts[i].name + "</p>";
            contactinfo += "<p>adress: " + contacts[i].adress + "</p>";
            contactinfo += "<p>email: " + contacts[i].email + "</p>";
            contactinfo += "<p>comments: " + contacts[i].comments + "</p>";
        }
        document.querySelector("#info").innerHTML=contactinfo;
    }else{
        alert("invalid username or password");
    };
    LoginForm.reset();
});