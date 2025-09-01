---
layout: center
---

<p class="font-geist text-4xl font-bold absolute left-30 top-30">
Theme change
</p>

<img 
    v-motion
    :initial="{ opacity: 0, y: 0 }"
    :enter="{ opacity: 1, transition: { duration: 600, ease: 'easeOut' } }"
    :click-1="{ opacity: 0, transition: { duration: 600, ease: 'easeOut' } }"
    src="../assets/frame-light.png" 
    class="w-[300px] absolute top-10" 
/>

<img 
    v-motion
    :initial="{ opacity: 0, y: 0 }"
    :click-1="{ opacity: 1, transition: { duration: 600, ease: 'easeOut' } }"
    src="../assets/frame-dark.png" 
    class="w-[300px] absolute top-10" 
/>

<!-- Click triggers -->
<div v-click class="absolute inset-0 pointer-events-none"></div>
