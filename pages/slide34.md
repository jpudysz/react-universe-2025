---
layout: default
---

<h2 class="font-geist text-2xl font-bold">Unityles under the hood</h2>


<div class="flex flex-row gap-10 mt-10 justify-center items-center">

<div class="flex flex-col gap-10">

<div class="flex flex-col gap-10">

<div
    v-motion
    :initial="{ opacity: 0, y: 20 }"
    :click-1="{ opacity: 1, y: 0, transition: { duration: 400, ease: 'easeOut' } }"
    class="relative flex flex-col relative"
>

<div
    v-motion
    :initial="{ opacity: 0 }"
    :click-2="{ opacity: 1, transition: { duration: 400, ease: 'easeOut' } }"
    class="relative flex flex-col relative"
>

<FancyArrow 
  from="(150, 60)" 
  to="(150, 140)" 
  color="red" 
  animated
  animation-duration="1000"
  animation-delay="500" />

</div>

<div class="w-[300px] h-20 bg-transparent border border-gray-500 flex items-center justify-center rounded-lg">
    <p class="font-geist text-sm font-bold text-center">Native event</p>
</div>

</div>

<div
    v-motion
    :initial="{ opacity: 0, y: 20 }"
    :click-2="{ opacity: 1, y: 0, transition: { duration: 400, ease: 'easeOut' } }"
    class="relative flex flex-col relative"
>

<div
    v-motion
    :initial="{ opacity: 0 }"
    :click-3="{ opacity: 1, transition: { duration: 400, ease: 'easeOut' } }"
    class="relative flex flex-col relative"
>

<FancyArrow 
  from="(150, 60)" 
  to="(150, 140)" 
  color="red" 
  animated
  animation-duration="1000"
  animation-delay="500" />

</div>

<div class="w-[300px] h-20 bg-transparent border border-blue-500 flex items-center justify-center rounded-lg">
    <p class="font-geist text-sm font-bold text-center">Swift</p>
</div>

</div>

<div 
    v-motion
    :initial="{ opacity: 0 }"
    :click-3="{ opacity: 1, transition: { duration: 400, ease: 'easeOut' } }"
    class="w-[300px] h-20 bg-transparent border border-pink-500 flex items-center justify-center rounded-lg"
>
    <p class="font-geist text-sm font-bold text-center">C++</p>
</div>

</div>

</div>

<div 
    v-motion
    :initial="{ opacity: 0, x: -50 }"
    :click-4="{ opacity: 1, x: 0, transition: { delay: 100, duration: 400, ease: 'easeOut' } }"
    class="flex flex-col gap-2 -mt-4"
>

<p 
  v-motion
  :initial="{ opacity: 0, x: -50 }"
  :click-4="{ opacity: 1, x: 0, transition: { delay: 100, duration: 400, ease: 'easeOut' } }"
  :click-5="{ opacity: 0.3, x: 0, transition: { delay: 200, duration: 400, ease: 'easeOut' } }"
  class="font-geist text-lg text-blue-400"
>
  Some event occurs
</p>

<p 
  v-motion
  :initial="{ opacity: 0, x: -50 }"
  :click-5="{ opacity: 1, x: 0, transition: { delay: 200, duration: 400, ease: 'easeOut' } }"
  :click-6="{ opacity: 0.3, x: 0, transition: { delay: 200, duration: 400, ease: 'easeOut' } }"
  class="font-geist text-lg"
>
  Unistyles receives callback in platform module
</p>

<p 
  v-motion
  :initial="{ opacity: 0, x: -50 }"
  :click-6="{ opacity: 1, x: 0, transition: { delay: 300, duration: 400, ease: 'easeOut' } }"
  :click-7="{ opacity: 0.3, x: 0, transition: { delay: 200, duration: 400, ease: 'easeOut' } }"
  class="font-geist text-lg"
>
  Thanks to <span class="font-bold text-blue-400">NitroModules</span>, Unistyles keeps C++ callback
</p>

<p 
  v-motion
  :initial="{ opacity: 0, x: -50 }"
  :click-7="{ opacity: 1, x: 0, transition: { delay: 400, duration: 400, ease: 'easeOut' } }"
  :click-8="{ opacity: 0.3, x: 0, transition: { delay: 200, duration: 400, ease: 'easeOut' } }"
  class="font-geist text-lg"
>
  C++ code receives callback with list of changed <span class="font-bold text-pink-400">dependencies</span>
</p>

<p 
  v-motion
  :initial="{ opacity: 0, x: -50 }"
  :click-8="{ opacity: 1, x: 0, transition: { delay: 500, duration: 400, ease: 'easeOut' } }"
  :click-9="{ opacity: 0.3, x: 0, transition: { delay: 200, duration: 400, ease: 'easeOut' } }"
  class="font-geist text-lg font-bold"
>
  Based on dependencies, new set of affected "unistyles" is generated
</p>

<p 
  v-motion
  :initial="{ opacity: 0, x: -50 }"
  :click-9="{ opacity: 1, x: 0, transition: { delay: 500, duration: 400, ease: 'easeOut' } }"
  :click-10="{ opacity: 0.3, x: 0, transition: { delay: 200, duration: 400, ease: 'easeOut' } }"
  class="font-geist text-lg font-bold"
>
  <span class="font-bold text-pink-400">Unistyles</span> re-evaluates all affected styles and StyleSheets
</p>

<p 
  v-motion
  :initial="{ opacity: 0, x: -50 }"
  :click-10="{ opacity: 1, x: 0, transition: { delay: 500, duration: 400, ease: 'easeOut' } }"
  :click-11="{ opacity: 0.3, x: 0, transition: { delay: 200, duration: 400, ease: 'easeOut' } }"
  class="font-geist text-lg font-bold"
>
  Changes are translated to <span class="font-bold text-red-400">ShadowTree updates</span>
</p>

<p 
  v-motion
  :initial="{ opacity: 0, x: -50 }"
  :click-11="{ opacity: 1, x: 0, transition: { delay: 500, duration: 400, ease: 'easeOut' } }"
  :click-12="{ opacity: 0.3, x: 0, transition: { delay: 200, duration: 400, ease: 'easeOut' } }"
  class="font-geist text-lg font-bold"
>
  New <span class="font-bold text-red-400">ShadowTree</span> is commited
</p>

<p 
  v-motion
  :initial="{ opacity: 0, x: -50 }"
  :click-12="{ opacity: 1, x: 0, transition: { delay: 500, duration: 400, ease: 'easeOut' } }"
  :click-13="{ opacity: 0.3, x: 0, transition: { delay: 200, duration: 400, ease: 'easeOut' } }"
  class="font-geist text-lg font-bold"
>
  User can see the changes without <span class="font-bold text-purple-400">re-rendering</span>
</p>


</div>

</div>

<!-- Click triggers -->
<div v-click class="absolute inset-0 pointer-events-none"></div>
<div v-click class="absolute inset-0 pointer-events-none"></div>
<div v-click class="absolute inset-0 pointer-events-none"></div>
<div v-click class="absolute inset-0 pointer-events-none"></div>
<div v-click class="absolute inset-0 pointer-events-none"></div>
<div v-click class="absolute inset-0 pointer-events-none"></div>
<div v-click class="absolute inset-0 pointer-events-none"></div>
<div v-click class="absolute inset-0 pointer-events-none"></div>
<div v-click class="absolute inset-0 pointer-events-none"></div>
<div v-click class="absolute inset-0 pointer-events-none"></div>
<div v-click class="absolute inset-0 pointer-events-none"></div>
<div v-click class="absolute inset-0 pointer-events-none"></div>
