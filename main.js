
// card 
let btn = document.querySelector(".button");

btn.addEventListener("click", function () {

    let title = document.getElementById("title").value;
    let content = document.getElementById("content").value;
    if (title === "") {
        alert("Enter Some Text");
        return;
    } else {


        let color = document.getElementById("color");
        let textcolor = document.getElementById("textcolor");
        let card = document.createElement("div");
        card.classList.add("card");
        let head = document.createElement("h1");
        head.innerText = title;
        let para = document.createElement("p");
        para.innerText = content;

        card.innerHTML = `
    <button class="btn2">❌</button>
    `;
        card.append(head);
        card.append(para);
        
        card.style.backgroundColor = color.value;
        card.style.color = textcolor.value;
        document.querySelector(".second_section").append(card);
        let ans = document.getElementById("title");
        ans.value = "";
        let ans2 = document.getElementById("content");
        ans2.value = "";
        document.querySelector("#note").style.display = "none";

    }
    let close = document.querySelector(".second_section");

    close.addEventListener("click", (e) => {
        if (e.target.innerText === "❌") {
            e.target.parentElement.remove();
        }

    })
});
// button styling 

function font1() { 
  content.style.textTransform="capitalize"; 
} 

function font2() { 
content.style.fontWeight = "bold"; 
} 

function font3() { 
 content.style.fontStyle = "italic"; 
} 

function font4() { 
  content.style.textDecoration = "underline"; 
} 
function font5() { 
   content.style.textDecoration = "overline"; 
} 
function font6() { 
  //remove all style
 content.style.fontWeight = "normal"; ; 
 content.style.fontStyle = "normal"; 
 content.style.textTransform = "lowerCase"; 
 content.style.textDecoration = "none";
 content.value = " "; 
}


