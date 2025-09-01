---
layout: center
---

<div class="flex flex-row gap-10">

<div>

<div class="flex flex-col gap-1">

<div 
  v-motion
  :initial="{ opacity: 0, x: 50 }"
  :click-1="{ opacity: 1, x: 0, transition: { delay: 1600, duration: 400, ease: 'easeOut' } }"
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
<p class="font-geist text-sm font-light text-yellow-400">HybridStyleSheet.js</p>
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
<p class="font-geist text-sm font-light text-pink-400">HybridStyleSheet.cpp</p>
</div>

<div 
  v-motion
  :initial="{ opacity: 0, x: 50 }"
  :click-1="{ opacity: 1, x: 0, transition: { delay: 1450, duration: 400, ease: 'easeOut' } }"
  class="bg-gray-700/50 border border-gray-500 rounded-lg min-w-50 h-10 justify-center items-center flex"
>
<p class="font-geist text-sm font-light text-pink-400">Parser.cpp</p>
</div>

<div 
  v-motion
  :initial="{ opacity: 0, x: 50 }"
  :click-1="{ opacity: 1, x: 0, transition: { delay: 1500, duration: 400, ease: 'easeOut' } }"
  class="bg-gray-700/50 border border-gray-500 rounded-lg min-w-50 h-10 justify-center items-center flex"
>
<p class="font-geist text-sm font-light text-pink-400">UnistylesRegistry.cpp</p>
</div>


<div 
  v-motion
  :initial="{ opacity: 0, x: 50 }"
  :click-1="{ opacity: 1, x: 0, transition: { delay: 1500, duration: 400, ease: 'easeOut' } }"
  class="bg-gray-700/50 border border-gray-500 rounded-lg min-w-50 h-10 justify-center items-center flex"
>
<p class="font-geist text-sm font-light text-pink-400">HostUnistyle.cpp</p>
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

<p 
    v-motion
    :initial="{ opacity: 0, x: 50 }"
    :click-1="{ opacity: 1, x: 0, transition: { delay: 1650, duration: 400, ease: 'easeOut' } }"
    class="font-geist text-2xl font-bold text-center pt-16"
>

Unistyles Runtime API

</p>

</div>

<div class="flex flex-col gap-1">

<div 
  v-motion
  :initial="{ opacity: 0, x: 50 }"
  :click-2="{ opacity: 1, x: 0, transition: { delay: 1600, duration: 400, ease: 'easeOut' } }"
  class="flex items-center gap-4 w-full"
>
  <div class="border-t border-gray-500 flex-1"></div>
</div>

<div 
  v-motion
  :initial="{ opacity: 0, x: 50 }"
  :click-2="{ opacity: 1, x: 0, transition: { delay: 1200, duration: 400, ease: 'easeOut' } }"
  :click-4="{ opacity: 0.3, x: 0, transition: { delay: 0, duration: 400, ease: 'easeOut' } }"
  class="bg-gray-700/50 border border-gray-500 rounded-lg min-w-40 h-10 justify-center items-center flex"
>
<p class="font-geist text-sm font-light text-yellow-400">View.js</p>
</div>

<div 
  v-motion
  :initial="{ opacity: 0, x: 50 }"
  :click-2="{ opacity: 1, x: 0, transition: { delay: 1250, duration: 400, ease: 'easeOut' } }"
  :click-4="{ opacity: 0.3, x: 0, transition: { delay: 0, duration: 400, ease: 'easeOut' } }"
  class="bg-gray-700/50 border border-gray-500 rounded-lg min-w-50 h-10 justify-center items-center flex"
>
<p class="font-geist text-sm font-light text-yellow-400">ViewNativeComponent.js</p>
</div>

<div 
  v-motion
  :initial="{ opacity: 0, x: 50 }"
  :click-2="{ opacity: 1, x: 0, transition: { delay: 1300, duration: 400, ease: 'easeOut' } }"
  :click-4="{ opacity: 0.3, x: 0, transition: { delay: 0, duration: 400, ease: 'easeOut' } }"
  class="bg-gray-700/50 border border-gray-500 rounded-lg min-w-50 h-10 justify-center items-center flex"
>
<p class="font-geist text-sm font-light text-yellow-400">ReactFabric.js</p>
</div>

<!-- JS section with label and line -->
<div 
  v-motion
  :initial="{ opacity: 0, x: 50 }"
  :click-2="{ opacity: 1, x: 0, transition: { delay: 1350, duration: 400, ease: 'easeOut' } }"
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
  :click-2="{ opacity: 1, x: 0, transition: { delay: 1400, duration: 400, ease: 'easeOut' } }"
  class="bg-gray-700/50 border border-gray-500 rounded-lg min-w-40 h-10 justify-center items-center flex"
>
<p class="font-geist text-sm font-light text-pink-400">UIManagerBinding.cpp</p>
</div>

<div 
  v-motion
  :initial="{ opacity: 0, x: 50 }"
  :click-2="{ opacity: 1, x: 0, transition: { delay: 1450, duration: 400, ease: 'easeOut' } }"
  class="bg-gray-700/50 border border-gray-500 rounded-lg min-w-50 h-10 justify-center items-center flex"
>
<p class="font-geist text-sm font-light text-pink-400">UIManager.cpp</p>
</div>

<div 
  v-motion
  :initial="{ opacity: 0, x: 50 }"
  :click-2="{ opacity: 1, x: 0, transition: { delay: 1500, duration: 400, ease: 'easeOut' } }"
  class="bg-gray-700/50 border border-gray-500 rounded-lg min-w-50 h-10 justify-center items-center flex"
>
<p class="font-geist text-sm font-light text-pink-400">ShadowTree.cpp</p>
</div>


<div 
  v-motion
  :initial="{ opacity: 0, x: 50 }"
  :click-2="{ opacity: 1, x: 0, transition: { delay: 1550, duration: 400, ease: 'easeOut' } }"
  class="flex items-center gap-4 w-full"
>
  <div class="border-t border-gray-500 flex-1"></div>
  <p class="font-geist text-sm font-bold text-pink-400">C++</p>
  <div class="border-t border-gray-500 flex-1"></div>
</div>

<div 
  v-motion
  :initial="{ opacity: 0, x: 50 }"
  :click-2="{ opacity: 1, x: 0, transition: { delay: 1600, duration: 400, ease: 'easeOut' } }"
  class="bg-gray-700/50 border border-gray-500 rounded-lg min-w-50 h-10 justify-center items-center flex"
>
<p class="font-geist text-sm font-light text-green-400">RCTMountingManager.mm</p>
</div>


<!-- Obj-C++ section with label and line -->
<div 
  v-motion
  :initial="{ opacity: 0, x: 50 }"
  :click-2="{ opacity: 1, x: 0, transition: { delay: 1650, duration: 400, ease: 'easeOut' } }"
  class="flex items-center gap-4 w-full"
>
  <div class="border-t border-gray-500 flex-1"></div>
  <p class="font-geist text-sm font-bold text-green-400">Obj-C++</p>
  <div class="border-t border-gray-500 flex-1"></div>
</div>


<p 
    v-motion
    :initial="{ opacity: 0, x: 50 }"
    :click-2="{ opacity: 1, x: 0, transition: { delay: 1650, duration: 400, ease: 'easeOut' } }"
    class="font-geist text-2xl font-bold text-center pt-4"
>

React Native

</p>


</div>

<div class="flex flex-col gap-1 justify-end">

<div 
  v-motion
  :initial="{ opacity: 0, x: 50 }"
  :click-3="{ opacity: 1, x: 0, transition: { delay: 1600, duration: 400, ease: 'easeOut' } }"
  class="flex items-center gap-4 w-full"
>
  <div class="border-t border-gray-500 flex-1"></div>
</div>

<div 
  v-motion
  :initial="{ opacity: 0, x: 50 }"
  :click-3="{ opacity: 1, x: 0, transition: { delay: 1200, duration: 400, ease: 'easeOut' } }"
  class="bg-gray-700/50 border border-gray-500 rounded-lg min-w-40 h-10 justify-center items-center flex"
>
<p class="font-geist text-sm font-light text-yellow-400">JSI Object</p>
</div>


<!-- JS section with label and line -->
<div 
  v-motion
  :initial="{ opacity: 0, x: 50 }"
  :click-3="{ opacity: 1, x: 0, transition: { delay: 1350, duration: 400, ease: 'easeOut' } }"
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
  :click-3="{ opacity: 1, x: 0, transition: { delay: 1400, duration: 400, ease: 'easeOut' } }"
  class="bg-gray-700/50 border border-gray-500 rounded-lg min-w-40 h-10 justify-center items-center flex"
>
<p class="font-geist text-sm font-light text-pink-400">HostUnistyle.cpp</p>
</div>

<div 
  v-motion
  :initial="{ opacity: 0, x: 50 }"
  :click-3="{ opacity: 1, x: 0, transition: { delay: 1450, duration: 400, ease: 'easeOut' } }"
  class="bg-gray-700/50 border border-gray-500 rounded-lg min-w-50 h-10 justify-center items-center flex"
>
<p class="font-geist text-sm font-light text-pink-400">Cache</p>
</div>


<div 
  v-motion
  :initial="{ opacity: 0, x: 50 }"
  :click-3="{ opacity: 1, x: 0, transition: { delay: 1550, duration: 400, ease: 'easeOut' } }"
  class="flex items-center gap-4 w-full"
>
  <div class="border-t border-gray-500 flex-1"></div>
  <p class="font-geist text-sm font-bold text-pink-400">C++</p>
  <div class="border-t border-gray-500 flex-1"></div>
</div>

<div 
  v-motion
  :initial="{ opacity: 0, x: 50 }"
  :click-3="{ opacity: 1, x: 0, transition: { delay: 1600, duration: 400, ease: 'easeOut' } }"
  class="bg-gray-700/50 border border-gray-500 rounded-lg min-w-50 h-10 justify-center items-center flex"
>
<p class="font-geist text-sm font-light text-yellow-400">style</p>
</div>


<!-- Obj-C++ section with label and line -->
<div 
  v-motion
  :initial="{ opacity: 0, x: 50 }"
  :click-3="{ opacity: 1, x: 0, transition: { delay: 1650, duration: 400, ease: 'easeOut' } }"
  class="flex items-center gap-4 w-full"
>
  <div class="border-t border-gray-500 flex-1"></div>
  <p class="font-geist text-sm font-bold text-yellow-400">JS</p>
  <div class="border-t border-gray-500 flex-1"></div>
</div>

<p 
    v-motion
    :initial="{ opacity: 0, x: 50 }"
    :click-3="{ opacity: 1, x: 0, transition: { delay: 1650, duration: 400, ease: 'easeOut' } }"
    class="font-geist text-2xl font-bold text-center pt-4"
>

Platform API

</p>

</div>

</div>

<!-- Click triggers -->
<div v-click class="absolute inset-0 pointer-events-none"></div>
<div v-click class="absolute inset-0 pointer-events-none"></div>
<div v-click class="absolute inset-0 pointer-events-none"></div>
<div v-click class="absolute inset-0 pointer-events-none"></div>