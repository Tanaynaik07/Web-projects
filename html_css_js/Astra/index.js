console.log("sajdna");
const home = () => {
    console.log("sajdna");
}
document.getElementById("home").style.transition = "all 0.15s";
document.getElementById("contact").style.transition = "all 0.15s";
document.getElementById("folder").style.transition = "all 0.15s";
document.getElementById("home_p").style.transition = "all 0.15s";
document.getElementById("folder_p").style.transition = "all 0.15s";
document.getElementById("contact_p").style.transition = "all 0.15s";
document.getElementById("home_i").style.transition = "all 0.15s";
document.getElementById("folder_i").style.transition = "all 0.15s";
document.getElementById("contact_i").style.transition = "all 0.15s";
document.getElementById("twitter_i").style.transition = "all 0.15s";
document.addEventListener('click', (e) => {
    // Get element class(es)
    let elementClass = e.target.className;
    // If element has class(es)
    if (elementClass !== '') {
        if (elementClass.includes("home_i")) {
            console.log("asdjasd");
            document.getElementById("home_p").style.opacity = "1";
            document.getElementById("folder_p").style.opacity = "0";
            document.getElementById("contact_p").style.opacity = "0";
            document.getElementById("home_i").style.opacity = "1";
            document.getElementById("folder_i").style.opacity = "0.4";
            document.getElementById("contact_i").style.opacity = "0.4";
            document.getElementById("twitter_i").style.opacity = "0.4";
            document.getElementById("home").style.zIndex = "3";
            document.getElementById("folder").style.zIndex = "2";
            document.getElementById("contact").style.zIndex = "1";
            document.getElementById("home").style.opacity = "1";
            document.getElementById("folder").style.opacity = "0";
            document.getElementById("contact").style.opacity = "0";


            let trans = document.querySelectorAll(".transition").id;
            let i = 0;
            console.log(trans)
            for (i; i < length.trans; i++) {
                console.log(i);
            }
            console.log(trans);


        }

        if (elementClass.includes("folder_i")) {
            console.log("asdjasd");
            document.getElementById("folder_p").style.opacity = "1";
            document.getElementById("home_p").style.opacity = "0";
            document.getElementById("contact_p").style.opacity = "0";
            document.getElementById("folder_i").style.opacity = "1";
            document.getElementById("home_i").style.opacity = "0.4";
            document.getElementById("contact_i").style.opacity = "0.4";
            document.getElementById("twitter_i").style.opacity = "0.4";
            document.getElementById("folder").style.zIndex = "3";
            document.getElementById("home").style.zIndex = "2";
            document.getElementById("contact").style.zIndex = "1";
            document.getElementById("home").style.opacity = "0";
            document.getElementById("folder").style.opacity = "1";
            document.getElementById("contact").style.opacity = "0";


        }

        if (elementClass.includes("message_i")) {
            console.log("asdjasd");
            document.getElementById("contact_p").style.opacity = "1";
            document.getElementById("home_p").style.opacity = "0";
            document.getElementById("folder_p").style.opacity = "0";
            document.getElementById("contact_i").style.opacity = "1";
            document.getElementById("home_i").style.opacity = "0.4";
            document.getElementById("folder_i").style.opacity = "0.4";
            document.getElementById("twitter_i").style.opacity = "0.4";
            document.getElementById("contact").style.zIndex = "3";
            document.getElementById("home").style.zIndex = "2";
            document.getElementById("folder").style.zIndex = "1";
            document.getElementById("home").style.opacity = "0";
            document.getElementById("contact").style.opacity = "1";
            document.getElementById("folder").style.opacity = "0";


        }




        console.log(elementClass);
    }
    // If element has no classes
    else {
        console.log('An element without a class was clicked');
    }
}
);