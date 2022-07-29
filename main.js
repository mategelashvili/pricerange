let products=[["Cherry", 3],["Banana", 1.8], ["Apple", 2.4,],["Peach",1.2],["Watermelon", 0.7],["Melon", 1],["Plum", 3.2]]

let pricelist = document.querySelector(".pricelist")
let btn = document.querySelector(".btn")
let tolow = document.querySelector(".tolow")
let tohigh= document.querySelector(".tohigh")
let z_a= document.querySelector(".z_a")
let inputemini = document.querySelector(".inputemini")
let inputemax = document.querySelector(".inputemax")
let filter = document.querySelector(".filter")
 function creatprodact(){

     products.map(i=>{
        let aple= document.createElement("div")
      pricelist.appendChild(aple)
      aple.classList.add("aple")
      let prodact = document.createElement("p")
      let pricee  = document.createElement("p")
      aple.appendChild(prodact)
      aple.appendChild(pricee)
      prodact.innerHTML="prodact name: "+i[0]
      pricee.innerHTML="prodact price: "+i[1]
    })

 }
creatprodact()

 
tolow.addEventListener("click",function(){
   pricelist.innerHTML=""
   products.sort((a,b)=>a[1]-b[1])
   creatprodact()
})
tohigh.addEventListener("click",function(){
   pricelist.innerHTML=""
   products.sort((a,b)=>b[1]-a[1])
   creatprodact()
})

 btn.addEventListener("click",function(){
   pricelist.innerHTML= ""
   products.sort()
  creatprodact()
  
   
 })
 z_a.addEventListener("click",function(){
   pricelist.innerHTML= ""
   products.sort()
   products.reverse()
  creatprodact()
  
   
 })

 filter.addEventListener("click",function(){
   pricelist.innerHTML= "";
   let range = []
   products.filter((i)=>{
       if(i[1] >= inputemini.value && i[1] <= inputemax.value){
           range.push(i)
       }
   })
   range.map(i=>{
       let aple= document.createElement("div")
     pricelist.appendChild(aple)
     aple.classList.add("aple")
     let prodact = document.createElement("p")
     let pricee  = document.createElement("p")
     aple.appendChild(prodact)
     aple.appendChild(pricee)
     prodact.innerHTML="prodact name: "+i[0]
     pricee.innerHTML="prodact price: "+i[1]
   })
 })
   
  
