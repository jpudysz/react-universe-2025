---
layout: center
---

<p class="font-geist text-4xl font-bold absolute left-20 top-20">
Window dimensions change
</p>

<img 
    v-motion
    :initial="{ opacity: 0, y: 0 }"
    :enter="{ opacity: 1, transition: { duration: 600, ease: 'easeOut' } }"
    :click-1="{ opacity: 0, transition: { duration: 600, ease: 'easeOut' } }"
    src="../assets/ipad-full.png" 
    class="w-[600px] absolute top-40 right-10" 
/>

<img 
    v-motion
    :initial="{ opacity: 0, y: 0 }"
    :click-1="{ opacity: 1, transition: { duration: 600, ease: 'easeOut' } }"
    src="../assets/ipad-half.png" 
    class="w-[600px] absolute top-40 right-10" 
/>

<!-- Click triggers -->
<div v-click class="absolute inset-0 pointer-events-none"></div>
