
let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "Karen", age: "19", profession: "admin" }
]

let dropdown = document.getElementById("dropdown");
let result = document.getElementById("result");
let filterbtn = document.getElementById("filterBtn");

function filterbyprofession() {
    result.innerHTML = "";
    let dropdownValue = dropdown.value;

    if (dropdownValue == "profession") {
        alert("Select a profession before clicking the button.");
        return;
    }


    arr.forEach((item) => {
        if (item.profession === dropdownValue) {
            let div = document.createElement("div");
            div.innerText = item.id + ". Name: " + item.name + "  Profession: " + item.profession + "  Age: " + item.age;
            result.append(div);
        }
    })
}

filterbtn.addEventListener("click", filterbyprofession);


let pushName = document.getElementById("name");
let pushProfession = document.getElementById("profession");
let pushAge = document.getElementById("age");

let Btns = document.getElementById("addUser");


function addUser() {
    let Uname = pushName.value;
    let age = pushAge.value;
    let prfo = pushProfession.value;

    let x = arr.length;
    ++x;

    let newList = { id: x, name: `${Uname}`, age: `${age}`, profession: `${prfo}` }
    if(Uname !== "" && age !== "" && prfo !== ""){
        arr.push(newList);
    }
    else{
        alert("fill complete detail.")
    }

    pushName.value = "";
    pushAge.value = "";
    pushProfession.value = "";

}

Btns.addEventListener("click", addUser);