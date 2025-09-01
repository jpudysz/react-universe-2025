---
layout: center
---

<p
    v-motion
    :initial="{ opacity: 0, y: 50 }"
    :enter="{ opacity: 1, y: 0, transition: { duration: 600, ease: 'easeOut' } }"
    :click-1="{ opacity: 0, y: -100, transition: { duration: 400, ease: 'easeIn' } }"
    class="font-geist text-5xl font-bold"
>
    Each Native View has a ViewConfig
</p>

<div class="flex flex-row items-center gap-4 flex-wrap">

<p
    v-motion
    :initial="{ opacity: 0, y: 50 }"
    :click-1="{ opacity: 1, y: -50, transition: { duration: 600, ease: 'easeOut' } }"
    :click-2="{ opacity: 0.1, y: -50, transition: { duration: 400, ease: 'easeIn' } }"
    class="font-geist text-5xl"
>
    Commands, Constants,
</p>

<div 
    v-motion 
    class="font-geist text-5xl"
    :initial="{ opacity: 0, y: 50 }"
    :click-1="{ opacity: 1, y: -50, transition: { duration: 600, ease: 'easeOut' } }"
>
    Attributes
</div>

</div>


<!-- Click triggers -->
<div v-click class="absolute inset-0 pointer-events-none"></div>
<div v-click class="absolute inset-0 pointer-events-none"></div>