var responseDiv=document.body.querySelector(".response");


document.body.querySelector(".butt").addEventListener("click", function (){
    var textValue=document.body.querySelector(".input").value;
    var textValuePass=document.body.querySelector(".inputPass").value;
    if(textValuePass==="password"&& textValue==="cool"){
        createNav();
        createWrapper();
        navigate("Home");
    }
        // responseDiv.innerHTML="good";}
    else if (textValue!=="cool" && textValuePass!=="password"){
        responseDiv.innerHTML = "You did not enter anything correct";}
    else if (textValue!=="cool"){
        responseDiv.innerHTML="wrong username"}
    else if (textValuePass!=="password"){
        responseDiv.innerHTML="wrong password"}
    });


var pages=["Grade View","Add Grade"];
function createNav() {
    document.body.innerHTML=""

    var nav = document.createElement("nav");
    createButton(pages[0]);
    createButton(pages[1]);
    nav.style.backgroundColor = "red";

    document.body.appendChild(nav);
    function createButton(pg) {
        var butt = document.createElement("button");
        butt.innerHTML = pg;
        butt.addEventListener("click", function () {

            navigate(pg);


        });
        nav.appendChild(butt);
    }
}

function createWrapper() {
    var wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");
    document.body.appendChild(wrapper);

}

function navigate(pg) {
    if (pg === "Grade View") {
        homePage()
    } else if(pg==="Add Grade") {
        aboutPage()
    }

}


function homePage() {
    var wrapper = document.body.querySelector(".wrapper");
    wrapper.innerHTML = "";
    var header = document.createElement("h1");
    header.innerHTML = "View Grade";

    wrapper.appendChild(header);
}
// var list=[];

function aboutPage() {
    var wrapper = document.body.querySelector(".wrapper");
    wrapper.innerHTML = "";

    var header = document.createElement("h1");
    header.innerHTML = "Add Grade";
    var header2= document.createElement("h3")
    wrapper.appendChild(header);


    var responseDive2 = document.createElement("div")
    responseDive2.classList.add("responseDiv2");
    document.body.appendChild(responseDive2);

    var Name = document.createElement("input")
    var Grade = document.createElement("input")

    responseDive2.classList.add("Name");
    responseDive2.classList.add("Grade");
    responseDive2.appendChild(Name)
    responseDive2.appendChild(Grade)
    document.body.appendChild(Name)
    document.body.appendChild(Grade)
    var submitAnswer = document.createElement("button");
    responseDive2.appendChild(submitAnswer)
    document.body.appendChild(submitAnswer)
    submitAnswer.innerHTML="Submit";
    submitAnswer.addEventListener("click",function () {
        if (/*Name.value.length >= "" && */ Grade<=100 && Grade>=0 /*&& isNaN(Grade.value)*/) {
            responseDive2.innerHTML = "You have entered an invalid input"
        } else if (Name.value.length <= "" && !isNaN(Grade.value)) {
            responseDive2.innerHTML = "You have entered an invalid Text"
        } else if (Name.value.length <= "" && isNaN(Grade.value))
            responseDive2.innerHTML = "Nothing you have entered is valid"
        else {
            responseDive2.innerHTML = "Name: " + Name.value + " Grade: " + Grade.value;

        }})}

    //     renderList()
    // })}


    // function renderList(){
    //     var itemsDiv=document.body.querySelector(".items");
    //     itemsDiv.innerHTML="";
    //     for (var i=0; i<list.length; i++){
    //         var ele=document.createElement("div")
    //         ele.innerHTML=list[i];
    //         itemsDiv.appendChild(ele)
    //     }}

    // document.body.appendChild(submitAnswer)
    // submitAnswer.innerHTML="Submit";
    // submitAnswer.addEventListener("click",function () {
    //     if (Name.value.length >= "" && isNaN(Grade.value)) {
    //         responseDive2.innerHTML = "You have entered an invalid importance"
    //     } else if (Name.value.length <= "" && !isNaN(Grade.value)) {
    //         responseDive2.innerHTML = "You have entered an invalid Text"
    //
    //     } else if (Name.value.length <= "" && isNaN(Grade.value))
    //         responseDive2.innerHTML = "Nothing you have entered is valid"
    //     else {
    //         responseDive2.innerHTML = "Name: "+Name.value + " Grade: "+Grade.value;
    //
    //
    //     }
    // })










// function viewpage() {
//     var wrapper = document.body.querySelector(".wrapper");
//     wrapper.innerHTML = "";
//     var header = document.createElement("h1");
//     header.innerHTML = "View Notes";
//     wrapper.appendChild(header);
//
//
//     var responseDive2 = document.createElement("div")
//     responseDive2.classList.add("responseDiv2");
//     document.body.appendChild(responseDive2);
//
//     var Text = document.createElement("input")
//     var importance = document.createElement("input")
//     responseDive2.classList.add("Text");
//     responseDive2.classList.add("importance");
//     responseDive2.appendChild(Text)
//     responseDive2.appendChild(importance)
//     document.body.appendChild(Text)
//     document.body.appendChild(importance)
//     var submitAnswer = document.createElement("button");
//     responseDive2.appendChild(submitAnswer)
//     document.body.appendChild(submitAnswer)
//     submitAnswer.innerHTML="Submit";
//     submitAnswer.addEventListener("click",function () {
//         if (Text.value.length >= "" && isNaN(importance.value)) {
//             responseDive2.innerHTML = "You have entered an invalid importance"
//         } else if (Text.value.length <= "" && !isNaN(importance.value)) {
//             responseDive2.innerHTML = "You have entered an invalid Text"
//
//         } else if (Text.value.length <= "" && isNaN(importance.value))
//             responseDive2.innerHTML = "Nothing you have entered is valid"
//         else {
//             responseDive2.innerHTML = "Note: "+Text.value + " Importance: "+importance.value;
//
//
//         }
//     })}



// function createWrapper() {
//     var wrapper = document.createElement("div");
//     wrapper.classList.add("wrapper");
//     document.body.appendChild(wrapper);
//
// }
//
// function navigate(pg) {
//     if (pg === "Home") {
//         homePage()
//     } else if(pg==="About") {
//         aboutPage()
//     }
//     else{
//         interactpage()
//     }
// }
//
//
//
//
// function homePage() {
//     var wrapper = document.body.querySelector(".wrapper");
//     wrapper.innerHTML = "";
//     var header = document.createElement("h1");
//     header.innerHTML = "Home Page";
//
//     wrapper.appendChild(header);
// }
//
// function aboutPage() {
//     var wrapper = document.body.querySelector(".wrapper");
//     wrapper.innerHTML = "";
//     var header = document.createElement("h1");
//     header.innerHTML = "About Page";
//     var header2= document.createElement("h3")
//     header2.innerHTML="Karin";
//     wrapper.appendChild(header);
//     wrapper.appendChild(header2);
// }
//
// function interactpage() {
//     var wrapper = document.body.querySelector(".wrapper");
//     wrapper.innerHTML = "";
//     var header = document.createElement("h1");
//     header.innerHTML = "Interact";
//     var increase=["Increase Counter"]
//     var counts=-1;
//     var count = document.createElement("button");
//     count.innerHTML=increase;
//     var wrapper2 = document.createElement("div");
//     wrapper2.classList.add("wrapper2");
//     document.body.appendChild(wrapper2);
//     function counter() {
//         counts++;
//         wrapper2.innerHTML = "counter: "+counts;
//     }
//     count.addEventListener("click",function (){
//         counter()
//     });
//     wrapper.appendChild(header);
//     wrapper.appendChild(wrapper2)
//     wrapper.appendChild(count);
// }



// var pages=["Grade View","Add Grade"];
// function createNav() {
//     document.body.innerHTML=""
//
//     var nav = document.createElement("nav");
//     createButton(pages[0]);
//     createButton(pages[1]);
//
//     nav.style.backgroundColor = "red";
//
//     document.body.appendChild(nav);
//     function createButton(pg) {
//         var butt = document.createElement("button");
//         butt.innerHTML = pg;
//         butt.addEventListener("click", function () {
//
//             navigate(pg);
//
//         });
//         nav.appendChild(butt);
//     }
// }
//
// function createWrapper() {
//     var wrapper = document.createElement("div");
//     wrapper.classList.add("wrapper");
//     document.body.appendChild(wrapper);
//
// function navigate(pg) {
//     if (pg === "Grade View") {
//         gradeview()
//     } else if(pg==="Add Grade") {
//         addgrade()
//     }
// }
//
// function gradeview() {
//     var wrapper = document.body.querySelector(".wrapper");
//     wrapper.innerHTML = "";
//     var header = document.createElement("h1");
//     header.innerHTML = "Home Page";
//
//     wrapper.appendChild(header);
// }};
// function addgrade(){
//     var wrapper = document.body.querySelector(".wrapper");
//     wrapper.innerHTML = "";
//     var header = document.createElement("h1");
//     header.innerHTML = "Home Page";
//     wrapper.appendChild(header);
//
// }
//
//
//
