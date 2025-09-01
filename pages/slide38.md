---
layout: default
---

<p 
    v-motion
    :initial="{ opacity: 0, y: 150 }"
    :click-1="{ opacity: 1, y: 100, transition: { duration: 600, ease: 'easeOut' } }"
    :click-2="{ opacity: 0, y: 0, transition: { duration: 400, ease: 'easeIn' } }"
    class="font-geist text-5xl font-bold"
    style="line-height: 0.9"
>
    With Unistyles we can skip <span class="text-red-400/90">components</span> re-rendering
</p>

<p 
    v-motion
    :initial="{ opacity: 0, y: 50 }"
    :click-2="{ opacity: 1, y: 0, transition: { duration: 600, ease: 'easeOut' } }"
    :click-3="{ opacity: 0, y: -100, transition: { duration: 400, ease: 'easeIn' } }"
    class="font-geist text-5xl font-bold"
    style="line-height: 0.9"
>
    And <span class="text-yellow-500">business logic</span>
</p>

<p 
    v-motion
    :initial="{ opacity: 0, y: 50 }"
    :click-3="{ opacity: 1, y: -50, transition: { duration: 600, ease: 'easeOut' } }"
    class="font-geist text-5xl font-bold"
    style="line-height: 0.9"
>
    What about our goal to achieve <span class="text-green-500">zero const runtime </span>?
</p>


<!-- Click triggers -->
<div v-click class="absolute inset-0 pointer-events-none"></div>
<div v-click class="absolute inset-0 pointer-events-none"></div>
<div v-click class="absolute inset-0 pointer-events-none"></div>