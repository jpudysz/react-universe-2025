---
layout: center
---

<p 
    v-motion
    :initial="{ opacity: 0, y: 50 }"
    :click-1="{ opacity: 1, y: 0, transition: { duration: 600, ease: 'easeOut' } }"
    :click-2="{ opacity: 0, y: -100, transition: { duration: 400, ease: 'easeIn' } }"
    class="font-geist text-5xl font-bold"
    style="line-height: 0.9"
>
    We can consider this pipeline as <span class="text-red-400/90">zero runtime styling</span>
</p>

<p 
    v-motion
    :initial="{ opacity: 0, y: 0 }"
    :click-2="{ opacity: 1, y: -100, transition: { duration: 600, ease: 'easeOut' } }"
    class="font-geist text-5xl font-bold"
    style="line-height: 0.9"
>
    No library <span class="text-gray-500">can't</span> go faster than that
</p>


<!-- Click triggers -->
<div v-click class="absolute inset-0 pointer-events-none"></div>
<div v-click class="absolute inset-0 pointer-events-none"></div>