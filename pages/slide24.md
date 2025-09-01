---
layout: center
---

<div class="flex flex-row gap-60 w-full absolute top-10 left-10 justify-start items-start">

<div class="flex flex-col gap-2">
<p class="font-geist text-3xl font-bold">All RN styling libraries*</p>
<p class="font-geist font-light color-white/75 text-sm">* based on State of the React Native 2024</p>

<div class="flex flex-col gap-2 mt-6">

<p 
  v-motion
  :initial="{ opacity: 0, x: -50 }"
  :enter="{ opacity: 1, x: 0, transition: { delay: 100, duration: 400, ease: 'easeOut' } }"
  class="font-geist text-lg"
>
  Dripsy
</p>

<p 
  v-motion
  :initial="{ opacity: 0, x: -50 }"
  :enter="{ opacity: 1, x: 0, transition: { delay: 200, duration: 400, ease: 'easeOut' } }"
  class="font-geist text-lg"
>
  Emotion
</p>

<p 
  v-motion
  :initial="{ opacity: 0, x: -50 }"
  :enter="{ opacity: 1, x: 0, transition: { delay: 300, duration: 400, ease: 'easeOut' } }"
  class="font-geist text-lg"
>
  RN StyleSheet/Inline styles
</p>

<p 
  v-motion
  :initial="{ opacity: 0, x: -50 }"
  :enter="{ opacity: 1, x: 0, transition: { delay: 400, duration: 400, ease: 'easeOut' } }"
  class="font-geist text-lg"
>
  NativeWind
</p>

<p 
  v-motion
  :initial="{ opacity: 0, x: -50 }"
  :enter="{ opacity: 1, x: 0, transition: { delay: 500, duration: 400, ease: 'easeOut' } }"
  class="font-geist text-lg font-bold text-orange-400"
>
  react-native-unistyles
</p>

<p 
  v-motion
  :initial="{ opacity: 0, x: -50 }"
  :enter="{ opacity: 1, x: 0, transition: { delay: 600, duration: 400, ease: 'easeOut' } }"
  class="font-geist text-lg"
>
  React Strict DOM
</p>

<p 
  v-motion
  :initial="{ opacity: 0, x: -50 }"
  :enter="{ opacity: 1, x: 0, transition: { delay: 700, duration: 400, ease: 'easeOut' } }"
  class="font-geist text-lg"
>
  Restyle
</p>

<p 
  v-motion
  :initial="{ opacity: 0, x: -50 }"
  :enter="{ opacity: 1, x: 0, transition: { delay: 800, duration: 400, ease: 'easeOut' } }"
  class="font-geist text-lg"
>
  styled components
</p>

<p 
  v-motion
  :initial="{ opacity: 0, x: -50 }"
  :enter="{ opacity: 1, x: 0, transition: { delay: 900, duration: 400, ease: 'easeOut' } }"
  class="font-geist text-lg"
>
  StyleX
</p>

<p 
  v-motion
  :initial="{ opacity: 0, x: -50 }"
  :enter="{ opacity: 1, x: 0, transition: { delay: 1000, duration: 400, ease: 'easeOut' } }"
  class="font-geist text-lg"
>
  Tamagui
</p>

<p 
  v-motion
  :initial="{ opacity: 0, x: -50 }"
  :enter="{ opacity: 1, x: 0, transition: { delay: 1100, duration: 400, ease: 'easeOut' } }"
  class="font-geist text-lg"
>
  twrnc
</p>

</div>

</div>

<!-- Right side: Architecture boxes -->
<div class="flex flex-col gap-1">

<!-- DX box - appears on click-2 -->
<div 
  v-motion
  :initial="{ opacity: 0, x: 50 }"
  :click-2="{ opacity: 1, x: 0, transition: { delay: 300, duration: 400, ease: 'easeOut' } }"
  class="flex flex-col"
>
  <div class="bg-gray-900 border-3 border-gray-500 rounded-lg min-w-40 h-[100px] justify-center items-center flex">
    <p class="font-geist text-sm font-bold text-blue-400">DX</p>
  </div>
</div>

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
<p class="font-geist text-sm font-light text-yellow-400">View.js</p>
</div>

<div 
  v-motion
  :initial="{ opacity: 0, x: 50 }"
  :click-1="{ opacity: 1, x: 0, transition: { delay: 1250, duration: 400, ease: 'easeOut' } }"
  class="bg-gray-700/50 border border-gray-500 rounded-lg min-w-50 h-10 justify-center items-center flex"
>
<p class="font-geist text-sm font-light text-yellow-400">ViewNativeComponent.js</p>
</div>

<div 
  v-motion
  :initial="{ opacity: 0, x: 50 }"
  :click-1="{ opacity: 1, x: 0, transition: { delay: 1300, duration: 400, ease: 'easeOut' } }"
  class="bg-gray-700/50 border border-gray-500 rounded-lg min-w-50 h-10 justify-center items-center flex"
>
<p class="font-geist text-sm font-light text-yellow-400">ReactFabric.js</p>
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
<p class="font-geist text-sm font-light text-pink-400">UIManagerBinding.cpp</p>
</div>

<div 
  v-motion
  :initial="{ opacity: 0, x: 50 }"
  :click-1="{ opacity: 1, x: 0, transition: { delay: 1450, duration: 400, ease: 'easeOut' } }"
  class="bg-gray-700/50 border border-gray-500 rounded-lg min-w-50 h-10 justify-center items-center flex"
>
<p class="font-geist text-sm font-light text-pink-400">UIManager.cpp</p>
</div>

<div 
  v-motion
  :initial="{ opacity: 0, x: 50 }"
  :click-1="{ opacity: 1, x: 0, transition: { delay: 1500, duration: 400, ease: 'easeOut' } }"
  class="bg-gray-700/50 border border-gray-500 rounded-lg min-w-50 h-10 justify-center items-center flex"
>
<p class="font-geist text-sm font-light text-pink-400">ShadowTree.cpp</p>
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
<p class="font-geist text-sm font-light text-green-400">RCTMountingManager.mm</p>
</div>


<!-- Obj-C++ section with label and line -->
<div 
  v-motion
  :initial="{ opacity: 0, x: 50 }"
  :click-1="{ opacity: 1, x: 0, transition: { delay: 1650, duration: 400, ease: 'easeOut' } }"
  class="flex items-center gap-4 w-full"
>
  <div class="border-t border-gray-500 flex-1"></div>
  <p class="font-geist text-sm font-bold text-green-400">Obj-C++</p>
  <div class="border-t border-gray-500 flex-1"></div>
</div>

</div>

</div>

<!-- Click triggers -->
<div v-click class="absolute inset-0 pointer-events-none"></div>
<div v-click class="absolute inset-0 pointer-events-none"></div>