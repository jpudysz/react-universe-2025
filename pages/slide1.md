---
layout: center
transition: slide-left
---

<!-- Introduction -->

<div 
  v-motion
  :initial="{ x: 0 }"
  :enter="{ x: 0, opacity: 1 }"
  :click-1="{ x: -200, opacity: 0.3, transition: { duration: 1000, ease: 'easeInOut' } }"
  class="flex items-center gap-4"
>
    
<img 
  v-motion
  :initial="{ x: 400, opacity: 0 }"
  :enter="{ x: 0, opacity: 1, transition: { delay: 500, duration: 1000 } }"
  src="../assets/me.png" 
  class="size-40 object-cover rounded-full border-1 border-white/50 relative z-20 bg-[#1F1A12]" 
/>

<div
  v-motion
  :initial="{ opacity: 0, y: 0 }"
  :enter="{ opacity: 1, y: 0, transition: { delay: 1000, duration: 800 } }"
  class="relative flex items-center flex-col gap-4"
>

<p class="font-geist text-5xl relative">
  Jacek Pudysz
</p>

<p class="font-geist text-xl font-light color-white/75">
  CTO & Co-Founder @ Codemask
</p>

</div>

</div>

<!-- Socials -->

<div 
  v-motion
  :initial="{ opacity: 0, y: 0, x: 0 }"
  :enter="{ opacity: 1, y: 0, transition: { delay: 1500, duration: 800 } }"
  :click-1="{ x: -200, opacity: 0.3, transition: { duration: 1200, ease: 'easeInOut' } }"
  class="flex items-center w-full justify-center gap-10 mt-10"
>

<div class="flex items-center gap-1 flex-col">
    <img src="../assets/github.png" class="size-10 bg-white p-1 rounded-full" />
    <p class="font-geist text-sm font-light color-white/90">@jpudysz</p>
</div>

<div class="flex items-center gap-1 flex-col">
    <img src="../assets/x.png" class="size-10 bg-black p-1 rounded-full" />
    <p class="font-geist text-sm font-light color-white/90">@jpudysz</p>
</div>

<div class="flex items-center gap-1 flex-col">
    <img src="../assets/linkedin.png" class="size-10 bg-white p-1 rounded-full" />
    <p class="font-geist text-sm font-light color-white/90">jpudysz</p>
</div>

</div>

<!-- Unistyles sheet -->

<div 
  v-motion
  :initial="{ opacity: 0, x: 160 }"
  :click-1="{ opacity: 1, x: 0, transition: { duration: 750, delay: 250, ease: 'easeInOut' } }"
  class="absolute bg-black/20 right-0 top-0 w-[400px] h-full flex items-center justify-center rounded-tl-2xl rounded-bl-2xl flex-col px-10"
>


<img src="../assets/unistyles.webp" class="w-[300px] object-contain rounded-tl-md rounded-tr-md" />


<div class="flex gap-4 flex-col bg-black p-4 rounded-bl-md rounded-br-md w-[300px]">

<p class="font-geist text-2xl relative italic">react-native-unistyles</p>
<p class="font-geist font-light color-white/75 text-md">Level up your React Native StyleSheet</p>

<div class="flex items-start gap-2 flex-col border-t-1 border-white/10 pt-2">

<div class="flex items-center gap-2">
    <img src="../assets/star.svg" class="size-5 brightness-0 invert" />
    <p class="font-geist font-light text-base">2.5k stars</p>
</div>

<div class="flex items-center gap-2">
    <img src="../assets/downloads.svg" class="size-5 brightness-0 invert" />
    <p class="font-geist font-light text-base">2.4M downloads</p>
</div>

</div>

</div>

</div>

<!-- Invisible click trigger -->
<div v-click class="absolute inset-0 pointer-events-none"></div>