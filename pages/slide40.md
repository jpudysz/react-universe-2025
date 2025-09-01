---
layout: default
---

<h1 class="font-geist text-5xl font-bold">Benchmarks</h1>

<div class="flex flex-row gap-20 justify-center mt-10">

<div
    v-motion
    :initial="{ opacity: 0 }"
    :enter="{ opacity: 1, transition: { duration: 600, ease: 'easeOut', delay: 1000 } }"
    class="phone-frame h-[667px] w-[250px] bg-white p-2 rounded-lg"
>
    <div class="p-4 bg-gray-300 w-full h-full p-4 rounded-lg">
        <p class="font-geist text-sm font-bold text-black">View</p>
        <div class="p-4 bg-blue-300 w-full h-full p-4 rounded-lg">
            <p class="font-geist text-sm font-bold text-black">ScrollView</p>
            <div class="p-4 bg-black-300 w-full h-full p-1 gap-3 flex flex-col">
                <div class="p-1 bg-blue-500 w-full h-[30px]">
                    <p class="font-geist text-sm font-bold text-black">Item 1</p>
                </div>
                <div class="p-1 bg-blue-500 w-full h-[30px]">
                    <p class="font-geist text-sm font-bold text-black">Item 2</p>
                </div>
                <div class="p-1 bg-blue-500 w-full h-[30px]">
                    <p class="font-geist text-sm font-bold text-black">Item 3</p>
                </div>
                <div class="p-1 bg-blue-500 w-full h-[30px]">
                    <p class="font-geist text-sm font-bold text-black">Item 4</p>
                </div>
                <div class="p-1 bg-blue-500 w-full h-[30px]">
                    <p class="font-geist text-sm font-bold text-black">Item 5</p>
                </div>
                <div class="p-1 bg-blue-500 w-full h-[30px]">
                    <p class="font-geist text-sm font-bold text-black">Item 6</p>
                </div>
                <div class="p-1 bg-blue-500 w-full h-[30px]">
                    <p class="font-geist text-sm font-bold text-black">Item ...</p>
                </div>
                <div class="p-1 bg-blue-500 w-full h-[30px]">
                    <p class="font-geist text-sm font-bold text-black">Item 1000</p>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="flex flex-col gap-10 relative">
    <p
    v-motion
    :initial="{ opacity: 0 }"
    :click-2="{ opacity: 1, transition: { duration: 400, ease: 'easeIn' } }"
    class="font-geist text-xl font-bold pt-16">
        Avg of 10 runs
    </p>

<div
    v-motion
    :initial="{ opacity: 0 }"
    :click-2="{ opacity: 1, transition: { duration: 400, ease: 'easeIn' } }"
    class="flex gap-4 items-end justify-center"
>


<div class="h-[240px] w-25 bg-gray-300 rounded-md flex items-center justify-center relative mr-6">
   <span class="font-geist font-bold text-sm text-black/75"></span>
   <span class="font-geist font-xs font-thin absolute -bottom-[40px] w-[108px]">Other libraries</span>
</div>

<div
    class="h-[180px] w-25 rounded-md flex items-center justify-center bg-pink-400/70 relative mr-6"
>
   <span class="font-geist font-bold text-xl text-black/75 mb-3">~300ms</span>
   <span class="font-geist font-xs font-thin absolute -bottom-[40px]">Unistyles 3.0</span>
</div>

<div class="h-[80px] w-25 rounded-md flex items-center justify-center bg-yellow-400/70 relative">
   <span class="font-geist font-bold text-xl text-black/75">~135ms</span>
   <span class="font-geist font-xs font-thin absolute -bottom-[40px]">StyleSheet</span>
</div>

<div 
    v-motion
    :initial="{ opacity: 0 }"
    :click-3="{ opacity: 1, transition: { duration: 400, ease: 'easeIn' } }"
    class="absolute w-[420px] h-1 bg-red-500 -right-5 bottom-20"></div>

<p
    v-motion
    :initial="{ opacity: 0, y: 10 }"
    :click-4="{ opacity: 1, y: 0, transition: { duration: 400, ease: 'easeIn' } }"
    class="font-geist text-xl font-bold absolute -right-15 bottom-30">
        Mission Unistyles
    </p>

</div>
</div>

</div>


<!-- Click triggers -->
<div v-click class="absolute inset-0 pointer-events-none"></div>
<div v-click class="absolute inset-0 pointer-events-none"></div>
<div v-click class="absolute inset-0 pointer-events-none"></div>
<div v-click class="absolute inset-0 pointer-events-none"></div>
