---
layout: center
---

<p class="font-geist text-2xl font-bold">
Summary
</p>

<div class="flex gap-2 mt-20">

<div 
  class="flex flex-col gap-2 bg-gray-800/50 p-4 rounded-lg min-w-35 items-end"
>
    <h3 class="font-geist text-sm font-bold text-gray-400 mb-2">Prop</h3>
    <p class="text-xs font-mono text-white/40">Name</p>
    <div class="text-xs font-mono text-white/80">width:</div>
    <div class="text-xs font-mono text-white/80">height:</div>
    <div class="text-xs font-mono text-white/80">backgroundColor:</div>
</div>


<div 
  v-motion
  :initial="{ opacity: 0, y: 50 }"
  :click-1="{ opacity: 1, y: 0, transition: { duration: 600, ease: 'easeOut' } }"
  class="flex flex-col gap-2 bg-gray-800/50 p-4 rounded-lg min-w-24"
>
  <h3 class="font-geist text-sm font-bold text-yellow400 mb-2">JS</h3>
  <p class="text-xs font-mono text-white/40">Our code</p>
  <div class="text-xs font-mono text-white/80">100</div>
  <div class="text-xs font-mono text-white/80">100</div>
  <div class="text-xs font-mono text-white/80">orange</div>
</div>

<!-- Column 2: Bridge -->
<div 
  v-motion
  :initial="{ opacity: 0, y: 50 }"
  :click-2="{ opacity: 1, y: 0, transition: { duration: 600, ease: 'easeOut' } }"
  class="flex flex-col gap-2 bg-gray-800/50 p-4 rounded-lg min-w-24"
>
  <h3 class="font-geist text-sm font-bold text-yellow-400 mb-2">JS</h3>
  <p class="text-xs font-mono text-white/40">(process)</p>
  <div class="text-xs font-mono text-white/80">100</div>
  <div class="text-xs font-mono text-white/80">100</div>
  <div class="text-xs font-mono text-white/80">4294944000</div>
</div>

<!-- Column 3: C++ Processing -->
<div 
  v-motion
  :initial="{ opacity: 0, y: 50 }"
  :click-3="{ opacity: 1, y: 0, transition: { duration: 600, ease: 'easeOut' } }"
  class="flex flex-col gap-2 bg-gray-800/50 p-4 rounded-lg min-w-24"
>
  <h3 class="font-geist text-sm font-bold text-pink-400 mb-2">C++</h3>
  <p class="text-xs font-mono text-white/40">(RawProps)</p>
  <div class="text-xs font-mono text-white/80">jsi::Number</div>
  <div class="text-xs font-mono text-white/80">jsi::Number</div>
  <div class="text-xs font-mono text-white/80">jsi::Number</div>
</div>

<!-- Column 4: C++ Processing -->
<div 
  v-motion
  :initial="{ opacity: 0, y: 50 }"
  :click-4="{ opacity: 1, y: 0, transition: { duration: 600, ease: 'easeOut' } }"
  class="flex flex-col gap-2 bg-gray-800/50 p-4 rounded-lg min-w-20"
>
  <h3 class="font-geist text-sm font-bold text-pink-400 mb-2">C++</h3>
  <p class="text-xs font-mono text-white/40">(BaseViewProps)</p>
  <div class="text-xs font-mono text-white/80">YGDimensionWidth</div>
  <div class="text-xs font-mono text-white/80">YGDimensionHeight</div>
  <div class="text-xs font-mono text-white/80">SharedColor</div>
</div>

<!-- Column 5: C++ Processing -->
<div 
  v-motion
  :initial="{ opacity: 0, y: 50 }"
  :click-5="{ opacity: 1, y: 0, transition: { duration: 600, ease: 'easeOut' } }"
  class="flex flex-col gap-2 bg-gray-800/50 p-4 rounded-lg min-w-20"
>
  <h3 class="font-geist text-sm font-bold text-green-400 mb-2">Objective-C++</h3>
  <p class="text-xs font-mono text-white/40">(updateProps)</p>
  <div class="text-xs font-mono text-white/80">Float</div>
  <div class="text-xs font-mono text-white/80">Float</div>
  <div class="text-xs font-mono text-white/80">UIColor</div>
</div>


</div>

<!-- Click triggers -->
<div v-click class="absolute inset-0 pointer-events-none"></div>
<div v-click class="absolute inset-0 pointer-events-none"></div>
<div v-click class="absolute inset-0 pointer-events-none"></div>
<div v-click class="absolute inset-0 pointer-events-none"></div>
<div v-click class="absolute inset-0 pointer-events-none"></div>
<div v-click class="absolute inset-0 pointer-events-none"></div>

