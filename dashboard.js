async function submitLinks(){

let text = document.getElementById("urls").value

let urls = text.split("\n").filter(x => x.trim() !== "")

await fetch("/api/submit",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({urls:urls})

})

loadLinks()

}

async function loadLinks(){

let res = await fetch("/api/links")

let data = await res.json()

let table = document.getElementById("table")

for(let i=1;i<table.rows.length;){

table.deleteRow(i)

}

for(let l of data){

let row = table.insertRow()

row.insertCell(0).innerText = l.url

row.insertCell(1).innerText = new Date(l.dateAdded).toLocaleString()

}

}

loadLinks()