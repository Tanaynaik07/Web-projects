console.log("Date Now: ", Date.now());

let tasks = document.getElementById("tasks");
const del = (event) => {
    console.log("button is pressed");
    let target = event.target.className;
    let target1 = event.target.id;
    console.log(target);
    let to_del = document.querySelector("." + target);
    let extra = document.querySelector(".text");

    localStorage.removeItem(target);
    a = document.getElementById(target1);
    console.log(typeof (target));
    a.remove();
    
    if(tasks.innerHTML===""){
        localStorage.clear()
    }
     
    
};

const change_bg_color = () => {
    let randomColor1 = Math.floor(Math.random() * 256);
    let randomColor2 = Math.floor(Math.random() * 256);
    let randomColor3 = Math.floor(Math.random() * 256);
    let randomColor4 = Math.floor(Math.random() * 256);
    
    document.body.style.backgroundImage = `linear-gradient(to right, rgba(${randomColor1}, ${randomColor2}, ${randomColor3}, 0.5), rgba(${randomColor4}, ${randomColor3}, ${randomColor2}, 0.5))`;
};

let display = setInterval(change_bg_color, 2000);


let count = 0;


const clear_tasks = ()=>{
    console.log("askjdbad");
    tasks.innerHTML="";
    localStorage.clear();
}
// check if local storage has any tasks and add them to the tasks list
if (localStorage.length > 0) {
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        if (key.startsWith("task")) {
            count++;
            let task = localStorage.getItem(key);
            let text = document.createElement("div");
            text.className = "task" + count.toString();
            text.id = count;
            text.innerHTML = task;
            text.className = "text";
            text.style.display = "flex";
            text.style.minHeight = "80px";
            text.style.margin = "40px";
            text.style.fontSize = "20px";
            text.style.fontFamily = "cursive";
            text.style.textTransform = "capitalize";
            text.style.justifyContent = "space-between";
            text.style.alignItems = "center";
            tasks.appendChild(text);

            let cross_button = document.createElement("button");
            cross_button.className = "cross_btn";
            cross_button.id = count;

            let cross = document.createElement("i");
            cross.className = "fas fa-times";
            cross.id = "non-clickable";

            cross_button.appendChild(cross);
            text.appendChild(cross_button);
            cross_button.className = "task" + count.toString();
            cross_button.onclick = del;
        }
    }
}

const task_adder = () => {
    count += 1;
    let task = document.getElementById("task_adder").value;
    let text = document.createElement("div");
    text.className = "task" + count.toString();
    text.id = count;
    console.log(task[0].upper);
    text.innerHTML = task;
    text.className = "text";
    text.style.display = "flex";
    text.style.minHeight = "80px";
    text.style.margin = "40px";
    text.style.fontSize = "20px";
    text.style.fontFamily = "cursive";
    text.style.textTransform = "capitalize";
    text.style.justifyContent = "space-between";
    text.style.alignItems = "center";
    
    localStorage.setItem("task" + count.toString(), task);
    
    let cross_button = document.createElement("button");
    cross_button.className = "cross_btn";
    cross_button.id = count;
    cross_button.className = 'task' + count.toString();
    cross_button.onclick = del;
    
  
    tasks.appendChild(text);

    let cross = document.createElement("i");
    cross.className = "fas fa-times";
    cross.id = "non-clickable";
    cross_button.appendChild(cross);
    text.appendChild(cross_button);

  
    
    
}