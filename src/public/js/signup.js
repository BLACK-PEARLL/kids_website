const n = document.getElementById('name')
const e = document.getElementById('email')
const p = document.getElementById('password')

const form = document.getElementById('form');

form.addEventListener('submit',registerUser);

async function registerUser(e){
    e.preventDefault();
    let Name=n.value;
    let email=e.value;
    let password=p.value;
    const res = await fetch('/signup',{
        method:'POST',
        headers:{
            'Content-type':'applications/json'
        },
        body:{
            "Name":Name,
            'email':email,
            "password":password
        }
    }).then(resp=>resp.json())
    if(res.message==="Admin created Successfully..!"){
        alert( "Admin created Successfully..!")
    }else if(res.message==="Something went wrong")
        alert("wronggggg")
}