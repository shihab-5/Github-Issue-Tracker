const showAll=()=>{
    fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
    .then((res)=> res.json())
    .then((data)=> displayAll(data.data))
}
const displayAll=(data)=>{
    const allCont=document.getElementById("container")
    allCont.innerHTML=``
    data.forEach(l => {
        const div=document.createElement("div")
        div.innerHTML=`
            <div class="p-2 bg-base-100 flex flex-col gap-4 m-2 shadow rounded-[10px] border-t-5 border-t-green-700">
            <div class="flex justify-between">
           <img src="./assets/Open-Status.png" alt="">
           <p class="px-5 bg-red-200 text-red-700 font-bold rounded-2xl">high</p>
            </div>
            <p class="font-bold text-[18px] ">Fix navigation menu on mobile devices</p>
            <p class=" text-gray-500 text-[15px]">The navigation menu doesn't collapse properly on mobile devices...</p>
            <div class="flex gap-4">
                 <p class="px-5 bg-red-200 text-red-700 font-bold rounded-2xl"><i class="fa-solid fa-bug"></i> bug</p>
                  <p class="px-5 bg-orange-200 text-orange-700 font-bold rounded-2xl"><i class="fa-solid fa-life-ring"></i> help wanted</p>
            </div>
            <hr class=" border-gray-400 border-t-2 mx-0">
            <p class="text-gray-500">#1 by john_doe</p>
            <p class="text-gray-500">1/15/2025</p>

        </div>`
        allCont.appendChild(div)
    });

}
showAll()