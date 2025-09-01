---
layout: center
transition: view-transition
---

<style>
::view-transition-old(view-transition-circle),
::view-transition-new(view-transition-circle) {
  animation-duration: 500ms !important;
  animation-timing-function: ease-in-out;
}

::view-transition-group(view-transition-circle) {
  animation-duration: 500ms !important;
}

.view-transition-circle {
  view-transition-name: view-transition-circle;
}
</style>

<div class="flex items-center gap-20 relative h-20">

<div class="relative">
<!-- First h1: "It's just" -->
<h1 
  v-motion
  :initial="{ opacity: 0, y: 50 }"
  :click-1="{ opacity: 1, y: -28, transition: { duration: 600, ease: 'easeOut' } }"
  :click-2="{ opacity: 0, y: -50, transition: { duration: 400, ease: 'easeIn' } }"
  class="absolute font-geist text-6xl -left-15 w-60 font-bold text-white/80 absolute"
>
  It's just
</h1>

<!-- Second h1: "Boring" -->
<h1 
  v-motion
  :initial="{ opacity: 0, y: 50, x: 15 }"
  :click-2="{ opacity: 1, y: -28, transition: { duration: 600, ease: 'easeOut', delay: 200 } }"
  :click-3="{ opacity: 0, y: -50, transition: { duration: 400, ease: 'easeIn' } }"
  class="absolute font-geist text-6xl font-bold text-white/80 absolute -left-15"
>
  Boring
</h1>

<!-- Third h1: "The art of" -->
<h1 
  v-motion
  :initial="{ opacity: 0, y: 50, x: -40 }"
  :click-3="{ opacity: 1, y: -28, transition: { duration: 600, ease: 'easeOut', delay: 200 } }"
  class="absolute font-geist text-6xl font-bold w-100 absolute -left-15"
>
  The art of
</h1>
</div>

<h1 
  :initial="{ x: 0, opacity: 0 }"
  :click-1="{ x: 85, opacity: 1, transition: { duration: 500, ease: 'easeOut' } }"
  class="font-geist text-6xl font-bold"
>
  Styling
</h1>

</div>

<!-- Animated Circle from top-left -->
<div 
  v-motion
  :initial="{ x: -200, y: -200, opacity: 0, rotate: 0, backgroundColor: '#ffffff' }"
  :click-3="{ x: 0, y: 0, opacity: 1, rotate: 360, backgroundColor: '#ef4444', transition: { duration: 1200, ease: 'easeInOut', delay: 500 } }"
  class="size-30 rounded-full absolute top-20 left-30 view-transition-circle"
></div>

<!-- Animated Square from top-right -->
<div 
  v-motion
  :initial="{ x: 200, y: -200, opacity: 0, rotate: 0, backgroundColor: '#ffffff' }"
  :click-3="{ x: 0, y: 0, opacity: 1, rotate: -180, backgroundColor: '#3b82f6', transition: { duration: 1200, ease: 'easeInOut', delay: 800 } }"
  class="size-30 absolute top-50 right-30"
></div>

<!-- Animated Triangle from bottom-center -->
<div 
  v-motion
  :initial="{ x: 0, y: 300, opacity: 0, rotate: 0 }"
  :click-3="{ x: 0, y: 0, opacity: 1, rotate: 180, transition: { duration: 1200, ease: 'easeInOut', delay: 500 } }"
  class="absolute bottom-10 right-50%"
>
  <div class="w-0 h-0 
              border-l-[5.5rem] border-l-transparent 
              border-r-[5.5rem] border-r-transparent 
              border-b-[8rem] border-b-green-500">
  </div>
</div>


<!-- Click triggers -->
<div v-click class="absolute inset-0 pointer-events-none"></div>
<div v-click class="absolute inset-0 pointer-events-none"></div>
<div v-click class="absolute inset-0 pointer-events-none"></div>

