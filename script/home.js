const showAll=()=>{
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
    data.forEach(l => {
        const div=document.createElement("div")
        div.innerHTML=`
            <div class="min-h-full p-2 bg-base-100 flex flex-col gap-4 mt-5 shadow rounded-[10px] border-t-5 border-t-green-700">
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
    });

}
showAll()