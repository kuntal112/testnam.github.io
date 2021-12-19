let carousal=document.getElementById("carousal");
let carousalfwdbtn=document.getElementById("carousal_fwdbutton");
let carousalbwdbtn=document.getElementById("carousal_bwdbutton");
let bodySection=document.getElementById("body_section");

console.log("hii")
let img=1;
// carousal.innerHTML=`<img src="./image/img${img}.jpg" /> `
carousal.innerHTML=`<h3>banner ${img}</h3> `
carousalfwdbtn.addEventListener("click",()=>{
    img++;
    // carousal.innerHTML=`<img src="./image/img${img}.jpg" /> `
    carousal.innerHTML=`<h3>banner ${img}</h3> `
})
carousalbwdbtn.addEventListener("click",()=>{
    if(img>1){
        
        img--;
        // carousal.innerHTML=`<img src="./image/img${img}.jpg" /> `
        carousal.innerHTML=`<h3>banner ${img}</h3> `
    }
    
})
let h=1;
window.onscroll = function(ev) {
    if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
        // let html=document.createElement(`<section class="dynamic_section>hello world ${h}</section>`)
        let html=document.createElement("div");
        html.id=`div${h}`
        html.className=`dynamic_section`
        html.innerHTML=`<h2>Hello World ${h}</h2>`
     document.body.append(html)
     h++;
    console.log("Bottom of page");
    }
    // else   if(h>1){
    //     if () {
    //             let lastelem = document.getElementById(`div${h}`)
    //             lastelem.remove()
    //             h--;
    //     }}
};


