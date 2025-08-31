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

<div class="flex items-center justify-center gap-1">

<div class="size-4 view-transition-circle bg-red border-red rounded-full mb-[10px] mr-2"></div>
<h1 class="font-geist text-xl text-white/90">zero cost runtime</h1>

</div>

<h1 
  v-motion
  :initial="{ opacity: 0, y: 20 }"
  :click-1="{ opacity: 1, y: 0, transition: { duration: 800, ease: 'easeOut' } }"
  class="font-geist text-6xl font-bold"
>
    Is this even possible?
</h1>

<!-- Click trigger -->
<div v-click class="absolute inset-0 pointer-events-none"></div>
