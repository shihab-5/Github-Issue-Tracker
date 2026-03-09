const total=document.getElementById('total')
console.log(total.innerText);

// button
const all=document.getElementById('allbtn')
const opn=document.getElementById('openbtn')
const clse=document.getElementById('closebtn')

const spinner=(status)=>{
    if(status==true){
        document.getElementById("spinner").classList.remove("hidden")
        document.getElementById("container").classList.add("hidden")
    }
    else{
        document.getElementById("spinner").classList.add("hidden")
        document.getElementById("container").classList.remove("hidden")
    }
}
const loadDetail=(id)=>{
 fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`)
 .then((res)=> res.json())
 .then((data)=> displayD(data.data))
}

// "status": "success",
// "message": "Issue fetched successfully",
// "data": {
// "id": 1,
// "title": "Fix navigation menu on mobile devices",
// "description": "The navigation menu doesn't collapse properly on mobile devices. Need to fix the responsive behavior.",
// "status": "open",
// "labels": [
// "bug",
// "help wanted"
// ],
// "priority": "high",
// "author": "john_doe",
// "assignee": "jane_smith",
// "createdAt": "2024-01-15T10:30:00Z",
// "updatedAt": "2024-01-15T10:30:00Z"
// }
const displayD=(data)=>{
        const detail=document.getElementById("details")
        detail.innerHTML=` 
           <p class="font-bold text-2xl">${data.title}</p>
       <div class="flex gap-1 justify-center items-center flex-wrap">
        <p class="btn bg-green-600 text-white rounded-2xl ">${data.status}ed</p>
        <p>. opened by ${data.author} .</p>
        <p>${data.createdAt}</p>
       </div>
       <div class="flex gap-2">
        <p class="btn btn-outline btn-error rounded-4xl">${data.labels[0]}</p>
        <p class="btn btn-outline btn-warning rounded-4xl"> ${data.labels[1] ?data.labels[1]:``}</p>
       </div>
       <p>${data.description}</p>
       <div class="flex bg-gray-200 rounded-2xl p-3 gap-44">
        <p>assignee: <br><span class="font-extrabold">${data.assignee}</span></p>
        <p>priority: <br><span class="btn bg-red-600 text-white rounded-3xl">${data.priority}</span></p>

       </div>`

    document.getElementById('my_modal_5').showModal();

}

const showAll=()=>{
spinner(true);

    fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
    .then((res)=> res.json())
    .then((data)=> displayAll(data.data))
}
// "id": 1,
// "title": "Fix navigation menu on mobile devices",
// "description": "The navigation menu doesn't collapse properly on mobile devices. Need to fix the responsive behavior.",
// "status": "open",
// "labels": [
// "bug",
// "help wanted"
// ],
// "priority": "high",
// "author": "john_doe",
// "assignee": "jane_smith",
// "createdAt": "2024-01-15T10:30:00Z",
// "updatedAt": "2024-01-15T10:30:00Z"
const displayAll=(data)=>{
    const allCont=document.getElementById("container")
    allCont.innerHTML=``
        total.innerText=data.length;

    data.forEach(l => {
        const div=document.createElement("div")
        div.innerHTML=`
            <div onclick="loadDetail(${l.id})" id="cart${l.id}" class="min-h-full p-2 bg-base-100 flex flex-col gap-4 mt-5 shadow rounded-[10px] border-t-5 border-t-green-700">
            <div class="flex justify-between">
           <img src="./assets/Open-Status.png" alt="">
           <p class="px-5 bg-red-200 text-red-700 font-bold rounded-2xl">${l.priority}</p>
            </div>
            <p class="font-bold text-[18px] ">${l.title}</p>
            <p class=" text-gray-500 text-[15px]">${l.description}</p>
            <div class="flex gap-4">
                 <p class="px-5 bg-red-200 text-red-700 font-bold rounded-2xl"><i class="fa-solid fa-bug"></i> ${l.labels[0]}</p>
                  <p class="px-5 bg-orange-200 text-orange-700 font-bold rounded-2xl"><i class="fa-solid fa-life-ring"></i>  ${l.labels[1] ?l.labels[1]:``}</p>
            </div>
            <hr class=" border-gray-400 border-t-2 mx-0">
            <p class="text-gray-500">#${l.id} by ${l.author}</p>
            <p class="text-gray-500">${l.createdAt}</p>

        </div>`
 
        allCont.appendChild(div)
               if(l.status=="closed"){
            // console.log(l.status)
            // const id=document.getElementById(`cart${l.id}`)
            // console.log(id)
            document.getElementById(`cart${l.id}`).classList.remove("border-t-green-700")
            document.getElementById(`cart${l.id}`).classList.add("border-t-fuchsia-700")

        }
    });
spinner(false)
}
showAll()

document.getElementById("openbtn").
addEventListener("click",function(){

  all.classList.remove("btn-primary")
  opn.classList.remove("btn-primary")
  clse.classList.remove("btn-primary")
  opn.classList.add("btn-primary")
         
  spinner(true);

     fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
    .then((res)=> res.json())
    .then((data)=> displayOpen(data.data))

})

const displayOpen=(data)=>{
    const allCont=document.getElementById("container")
    allCont.innerHTML=``
    let count=0;
   
    data.forEach(l => {
        if(l.status!="open"){
            return;
        }
        if(l.status==="open"){
        count++;
    }
        const div=document.createElement("div")
        div.innerHTML=`
            <div id="cart${l.id}" class="min-h-full p-2 bg-base-100 flex flex-col gap-4 mt-5 shadow rounded-[10px] border-t-5 border-t-green-700">
            <div class="flex justify-between">
           <img src="./assets/Open-Status.png" alt="">
           <p class="px-5 bg-red-200 text-red-700 font-bold rounded-2xl">${l.priority}</p>
            </div>
            <p class="font-bold text-[18px] ">${l.title}</p>
            <p class=" text-gray-500 text-[15px]">${l.description}</p>
            <div class="flex gap-4">
                 <p class="px-5 bg-red-200 text-red-700 font-bold rounded-2xl"><i class="fa-solid fa-bug"></i> ${l.labels[0]}</p>
                  <p class="px-5 bg-orange-200 text-orange-700 font-bold rounded-2xl"><i class="fa-solid fa-life-ring"></i>  ${l.labels[1] ?l.labels[1]:``}</p>
            </div>
            <hr class=" border-gray-400 border-t-2 mx-0">
            <p class="text-gray-500">#${l.id} by ${l.author}</p>
            <p class="text-gray-500">${l.createdAt}</p>

        </div>`
 
        allCont.appendChild(div)
               if(l.status=="closed"){
            // console.log(l.status)
            // const id=document.getElementById(`cart${l.id}`)
            // console.log(id)
            document.getElementById(`cart${l.id}`).classList.remove("border-t-green-700")
            document.getElementById(`cart${l.id}`).classList.add("border-t-fuchsia-700")

        }
    total.innerText=count;

    });
spinner(false)
}
document.getElementById("closebtn").
addEventListener("click",function(){

      all.classList.remove("btn-primary")
  opn.classList.remove("btn-primary")
  clse.classList.remove("btn-primary")
//   all.classList.add("btn-soft")
//   opn.classList.add("btn-soft")
  clse.classList.add("btn-primary")

  spinner(true);


     fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
    .then((res)=> res.json())
    .then((data)=> displayClose(data.data))

})

const displayClose=(data)=>{
    const allCont=document.getElementById("container")
    allCont.innerHTML=``
    let count=0;
    data.forEach(l => {
        if(l.status!="closed"){
        return;
        }
        if(l.status==="closed"){
              count++;

        }
        const div=document.createElement("div")
        div.innerHTML=`
            <div id="cart${l.id}" class="min-h-full p-2 bg-base-100 flex flex-col gap-4 mt-5 shadow rounded-[10px] border-t-5 border-t-green-700">
            <div class="flex justify-between">
           <img src="./assets/Open-Status.png" alt="">
           <p class="px-5 bg-red-200 text-red-700 font-bold rounded-2xl">${l.priority}</p>
            </div>
            <p class="font-bold text-[18px] ">${l.title}</p>
            <p class=" text-gray-500 text-[15px]">${l.description}</p>
            <div class="flex gap-4">
                 <p class="px-5 bg-red-200 text-red-700 font-bold rounded-2xl"><i class="fa-solid fa-bug"></i> ${l.labels[0]}</p>
                  <p class="px-5 bg-orange-200 text-orange-700 font-bold rounded-2xl"><i class="fa-solid fa-life-ring"></i>  ${l.labels[1] ?l.labels[1]:``}</p>
            </div>
            <hr class=" border-gray-400 border-t-2 mx-0">
            <p class="text-gray-500">#${l.id} by ${l.author}</p>
            <p class="text-gray-500">${l.createdAt}</p>

        </div>`
 
        allCont.appendChild(div)
               if(l.status=="closed"){
            // console.log(l.status)
            // const id=document.getElementById(`cart${l.id}`)
            // console.log(id)
            document.getElementById(`cart${l.id}`).classList.remove("border-t-green-700")
            document.getElementById(`cart${l.id}`).classList.add("border-t-fuchsia-700")

        }
         total.innerText=count;
    });
spinner(false)

}

document.getElementById("allbtn").
addEventListener('click',function(){

    opn.classList.remove("btn-primary")
  clse.classList.remove("btn-primary")
  opn.classList.remove("btn-primary")
//   clse.classList.add("btn-soft")
//   opn.classList.add("btn-soft")
  all.classList.add("btn-primary")

    showAll();

})

document.getElementById('searchbtn').
addEventListener('click',function(){

    const input=document.getElementById('inpt')
//   console.log(input.value.trim().toLowerCase())
    fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${input.value.trim().toLowerCase()}`)
    .then((res)=>(res.json()))
    .then((data)=>displayAll(data.data))
})