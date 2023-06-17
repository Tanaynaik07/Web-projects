let projects = document.getElementById("projects");
let left = document.createElement("div");
left.setAttribute("id", "left");
let right = document.createElement("div");
right.setAttribute("id", "right");
const checkbox = document.getElementById("checkbox");
viewDiv = document.getElementById("view");


let type_clicked = () => {   
                                    // Function for Html
    
    window.alert("Some of the Projects might show some warnings when you open them.But its just a issue we will solve soon.So just ignore the warning and enter the projects")
    if (projects.innerHTML.trim() !== "") {
        left.innerHTML = "";
    }

    right.innerHTML = "";
    const ht_cs_js = document.getElementById("ht_cs_js");
    ht_cs_js.removeEventListener("click", type_clicked);
    projects.appendChild(left);
    projects.appendChild(right);

    left.style.transition = "all 0.75s";
    left.style.opacity = "0";
    let names = document.createElement("ul");
    list_add(names, "Instagram clone", "h1");
    list_add(names, "Spotify clone", "h2");
    list_add(names, "Astra", "h3");
    list_add(names, "Books store", "h4");
    list_add(names, "Todo", "h5");
    list_add(names, "landing page", "h6");
    list_add(names, "Massive Landing Page", "h7")

    left.appendChild(names);

    setTimeout(() => {
        left.style.opacity = "1";
    }, 100);
};

let python_clicked = () => {                  // Function for React Projects
    if (projects.innerHTML.trim() !== "") {
        left.innerHTML = "";
    }

    const python = document.getElementById("python");
    python.removeEventListener("click", python_clicked);
    projects.appendChild(left);
    projects.appendChild(right);
    right.innerHTML = "Projects from python will be uploaded soon"
    left.style.transition = "all 0.75s";
    left.style.opacity = "0";
    let names = document.createElement("ul");
    list_add(names, "React Project 1", "1");
    list_add(names, "React Project 2", "2");
    list_add(names, "React Project 3", "3");
    list_add(names, "React Project 4", "4");
    list_add(names, "React Project 5", "5");
    list_add(names, "React Project 6", "6");

    left.appendChild(names);

    setTimeout(() => {
        left.style.opacity = "1";
    }, 100);
};


let react_clicked = () => {                  // Function for React projects
    if (projects.innerHTML.trim() !== "") {
        left.innerHTML = "";
    }

    const react = document.getElementById("react");
    react.removeEventListener("click", python_clicked);
    projects.appendChild(left);
    projects.appendChild(right);
    right.innerHTML = "Projects from React will be uploaded soon"
    left.style.transition = "all 0.75s";
    left.style.opacity = "0";
    let names = document.createElement("ul");
    list_add(names, "React Project 1", "1");
    list_add(names, "React Project 2", "2");
    list_add(names, "React Project 3", "3");
    list_add(names, "React Project 4", "4");
    list_add(names, "React Project 5", "5");
    list_add(names, "React Project 6", "6");

    left.appendChild(names);

    setTimeout(() => {
        left.style.opacity = "1";
    }, 100);
};


let c_clicked = () => {
    if (projects.innerHTML.trim() !== "") {             // Function for C
        left.innerHTML = "";
    }

    const react = document.getElementById("react");
    react.removeEventListener("click", python_clicked);
    projects.appendChild(left);
    projects.appendChild(right);
    right.innerHTML = "Projects from C will be uploaded soon"
    left.style.transition = "all 0.75s";
    left.style.opacity = "0";
    let names = document.createElement("ul");
    list_add(names, "C Project 1", "1");
    list_add(names, "C Project 2", "2");
    list_add(names, "C Project 3", "3");
    list_add(names, "C Project 4", "4");
    list_add(names, "C Project 5", "5");
    list_add(names, "C Project 6", "6");

    left.appendChild(names);

    setTimeout(() => {
        left.style.opacity = "1";
    }, 100);
};

const list_add = (lst, ele, ele_id) => {
    let li = document.createElement("li");
    li.textContent = ele;
    li.setAttribute("id", ele_id)
    lst.appendChild(li);
};

const display_project = (project_name, nameofproject, link) => {
    right.textContent = "";
    let project_display = document.createElement("div");
    let nme = document.createElement("a");
    nme.innerHTML = nameofproject;
    nme.className = "link_name"
    nme.href = link;
    nme.target = "_blank"
    let image = document.createElement("img");
    image.setAttribute("src", project_name);
    project_display.appendChild(image);
    project_display.setAttribute("id", "display_project");
    image.style.height = "auto";
    image.style.width = "80%";
    project_display.src = project_name;
    project_display.appendChild(nme)

    right.appendChild(project_display);
}

const onClick = (event) => {
    console.log(event.target.id);
    if (event.target.id === "h1") {
        right.style.opacity = "0";
        right.style.left = "80%";

        display_project("img/instagram.png", "Instagram Clone", "https://tanaynaik07.github.io/instagram_clone/")
        setTimeout(() => {
            right.style.left = "0";
            right.style.opacity = "1";
        }, 500);
    }
    else if (event.target.id === "h2") {
        right.style.left = "80%";
        right.style.opacity = "0";
        display_project("img/spotify.png", "Spotify Clone", "https://tanaynaik07.github.io/Spotify/")
        setTimeout(() => {
            right.style.left = "0";
            right.style.opacity = "1";
        }, 500);
    } else if (event.target.id === "h3") {
        right.style.left = "80%";
        right.style.opacity = "0";
        display_project("img/Astra.png", "Astra", "https://tanaynaik07.github.io/Astra_clone/")
        setTimeout(() => {
            right.style.left = "0";
            right.style.opacity = "1";
        }, 500);
    } else if (event.target.id === "h4") {
        right.style.left = "80%";
        right.style.opacity = "0";
        display_project("img/book.png", "My Books Collection", "https://tanaynaik07.github.io/book_collection/")
        setTimeout(() => {
            right.style.left = "0";
            right.style.opacity = "1";
        }, 500);
    } else if (event.target.id === "h5") {
        right.style.left = "80%";
        right.style.opacity = "0";
        display_project("img/todo.png", "Todo", "https://tanaynaik07.github.io/Todo/")
        setTimeout(() => {
            right.style.left = "0";
            right.style.opacity = "1";
        }, 500);
    }
    else if (event.target.id === "h6") {
        right.style.right = "100%";
        right.style.opacity = "0";
        display_project("img/landing.png", "Landing Page", "https://tanaynaik07.github.io/landing_page/")
        setTimeout(() => {
            right.style.right = "0";
            right.style.opacity = "1";
        }, 500);
    }
    else if (event.target.id === "h7") {
        right.style.right = "100%";
        right.style.opacity = "0";
        display_project("img/massive .png", "Massive Landing Page", "https://tanaynaik07.github.io/massive_landingpage/")
        setTimeout(() => {
            right.style.right = "0";
            right.style.opacity = "1";
        }, 500);
    }
};



let nav_names = document.getElementsByClassName("nav-names");
let logo = document.querySelector(".logo");
let header = document.querySelector("header");
let hero = document.querySelector("#hero");
let about = document.querySelector("#about");
let project = document.querySelector("#projects_type");
let container_projects = document.querySelector(".container_projects");
let topic_box = document.querySelectorAll(".topic_box");
let contact = document.querySelector("#contact");
let card = document.querySelector(".card");
let projects_sec = document.querySelector("#projects");
let link_name = document.getElementsByClassName("link_name");
let card1=document.querySelector(".card1")



// Event listener for checkbox
checkbox.addEventListener("change", () => {
    if (checkbox.checked) {

        for (let i = 0; i < nav_names.length; i++) {
            nav_names[i].style.color = "white";
        }
        logo.style.color = "white";
        header.style.backgroundColor = "black";
        hero.style.backgroundColor = "#565454";
        hero.style.color = "white";
        about.style.backgroundColor = "black";
        about.style.color = "black";
        project.style.backgroundColor = "#565454";

        for (let i = 0; i < topic_box.length; i++) {
            topic_box[i].style.backgroundColor = "black";
            topic_box[i].style.color = "yellow";
            topic_box[i].classList.add("topic_box1");
        }
        contact.style.backgroundColor = "black";
        contact.style.color = "white";
        card.style.backgroundColor = "rgb(52 51 51)";
        projects_sec.style.backgroundColor = "black";
        projects_sec.style.color = "white";
        link_name[0].style.color = "white";
        card1.style.backgroundColor="black";
        




    } else {
        document.documentElement.setAttribute("data-theme", "light");
        for (let i = 0; i < nav_names.length; i++) {
            nav_names[i].style.color = "black";
        }
        logo.style.color = "black";
        header.style.backgroundColor = "darkturquoise";
        hero.style.backgroundColor = "#f2f2f2";
        hero.style.color = "black";
        about.style.backgroundColor = "white";
        about.style.color = "black";
        project.style.backgroundColor = "#f2f2f2";

        for (let i = 0; i < topic_box.length; i++) {
            topic_box[i].style.backgroundColor = "grey";
            topic_box[i].style.color = "white";
            topic_box[i].classList.remove("topic_box1");
        }
        contact.style.backgroundColor = "white";
        contact.style.color = "black";
        card.style.backgroundColor = "rgb(238, 238, 238)";
        projects_sec.style.backgroundColor = "white";
        projects_sec.style.color = "black";
        link_name[0].style.color = "black";



    }
});

// Event listener for project type click
const ht_cs_js = document.getElementById("ht_cs_js");
ht_cs_js.addEventListener("click", type_clicked);

// Add the event listener after declaring the onClick function
window.addEventListener("click", onClick);
