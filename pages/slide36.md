---
layout: center
---


<img 
    v-motion
    :initial="{ opacity: 0, y: 0 }"
    :enter="{ opacity: 1, transition: { duration: 600, ease: 'easeOut' } }"
    src="../assets/frame-click.png" 
    class="w-[260px] absolute top-2 left-50" 
/>

<div 
    v-motion
    :initial="{ opacity: 0, y: 0, scale: 1 }"
    :click-1="{ opacity: 1, transition: { duration: 600, ease: 'easeOut' } }"
    :click-2="{ scale: 1.5, transition: { duration: 600, ease: 'easeOut' } }"
    :click-3="{ scale: 1, transition: { duration: 600, ease: 'easeOut' } }"
    class="absolute size-8 bg-green-500/80 rounded-full bottom-10 left-70" 
/>

<div class="flex flex-col gap-1 ml-80">

<div 
  v-motion
  :initial="{ opacity: 0, x: 50 }"
  :click-4="{ opacity: 1, x: 0, transition: { delay: 1600, duration: 400, ease: 'easeOut' } }"
  class="flex items-center gap-4 w-full"
>
  <div class="border-t border-gray-500 flex-1"></div>
</div>

<div 
  v-motion
  :initial="{ opacity: 0, x: 50 }"
  :click-1="{ opacity: 1, x: 0, transition: { delay: 1200, duration: 400, ease: 'easeOut' } }"
  class="bg-gray-700/50 border border-gray-500 rounded-lg min-w-40 h-10 justify-center items-center flex"
>
<p class="font-geist text-sm font-light text-yellow-400">JSI Object</p>
</div>


<!-- JS section with label and line -->
<div 
  v-motion
  :initial="{ opacity: 0, x: 50 }"
  :click-1="{ opacity: 1, x: 0, transition: { delay: 1350, duration: 400, ease: 'easeOut' } }"
  class="flex items-center gap-4 w-full"
>
  <div class="border-t border-gray-500 flex-1"></div>
  <p class="font-geist text-sm font-bold text-yellow-400">JS</p>
  <div class="border-t border-gray-500 flex-1"></div>
</div>

<!-- C++ section with label and line -->

<div 
  v-motion
  :initial="{ opacity: 0, x: 50 }"
  :click-1="{ opacity: 1, x: 0, transition: { delay: 1400, duration: 400, ease: 'easeOut' } }"
  class="bg-gray-700/50 border border-gray-500 rounded-lg min-w-40 h-10 justify-center items-center flex"
>
<p class="font-geist text-sm font-light text-pink-400">HostUnistyle.cpp</p>
</div>

<div 
  v-motion
  :initial="{ opacity: 0, x: 50 }"
  :click-1="{ opacity: 1, x: 0, transition: { delay: 1450, duration: 400, ease: 'easeOut' } }"
  class="bg-gray-700/50 border border-gray-500 rounded-lg min-w-50 h-10 justify-center items-center flex"
>
<p class="font-geist text-sm font-light text-pink-400">Cache</p>
</div>


<div 
  v-motion
  :initial="{ opacity: 0, x: 50 }"
  :click-1="{ opacity: 1, x: 0, transition: { delay: 1550, duration: 400, ease: 'easeOut' } }"
  class="flex items-center gap-4 w-full"
>
  <div class="border-t border-gray-500 flex-1"></div>
  <p class="font-geist text-sm font-bold text-pink-400">C++</p>
  <div class="border-t border-gray-500 flex-1"></div>
</div>

<div 
  v-motion
  :initial="{ opacity: 0, x: 50 }"
  :click-1="{ opacity: 1, x: 0, transition: { delay: 1600, duration: 400, ease: 'easeOut' } }"
  class="bg-gray-700/50 border border-gray-500 rounded-lg min-w-50 h-10 justify-center items-center flex"
>
<p class="font-geist text-sm font-light text-yellow-400">style</p>
</div>


<!-- Obj-C++ section with label and line -->
<div 
  v-motion
  :initial="{ opacity: 0, x: 50 }"
  :click-1="{ opacity: 1, x: 0, transition: { delay: 1650, duration: 400, ease: 'easeOut' } }"
  class="flex items-center gap-4 w-full"
>
  <div class="border-t border-gray-500 flex-1"></div>
  <p class="font-geist text-sm font-bold text-yellow-400">JS</p>
  <div class="border-t border-gray-500 flex-1"></div>
</div>

</div>

<!-- Click triggers -->
<div v-click class="absolute inset-0 pointer-events-none"></div>
<div v-click class="absolute inset-0 pointer-events-none"></div>
<div v-click class="absolute inset-0 pointer-events-none"></div>
<div v-click class="absolute inset-0 pointer-events-none"></div>
<div v-click class="absolute inset-0 pointer-events-none"></div>
