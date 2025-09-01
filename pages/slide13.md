---
layout: center
---

<p
    v-motion
    :initial="{ opacity: 0, y: 50 }"
    :click-1="{ opacity: 1, y: 0, transition: { duration: 600, ease: 'easeOut' } }"
    :click-2="{ opacity: 0, y: -100, transition: { duration: 400, ease: 'easeIn' } }"
    class="font-geist text-5xl font-bold"
>
    What happens next?
</p>

<p
    v-motion
    :initial="{ opacity: 0, y: 50 }"
    :click-2="{ opacity: 1, y: -50, transition: { duration: 600, ease: 'easeOut' } }"
    :click-3="{ opacity: 0, y: -100, transition: { duration: 400, ease: 'easeIn' } }"
    class="font-geist text-5xl font-bold"
    style="line-height: 0.9"
>
    We're ready to cross the language barrier
</p>

<p
    v-motion
    :initial="{ opacity: 0, y: 50 }"
    :click-3="{ opacity: 1, y: -50, transition: { duration: 600, ease: 'easeOut' } }"
    :click-4="{ opacity: 0, y: -100, transition: { duration: 400, ease: 'easeIn' } }"
    class="font-geist text-5xl font-bold"
    style="line-height: 0.9"
>
    Meet <span class="text-pink-400/90">JSI</span> and <span class="text-blue-400/90">UIManager</span>
</p>


<!-- Click triggers -->
<div v-click class="absolute inset-0 pointer-events-none"></div>
<div v-click class="absolute inset-0 pointer-events-none"></div>
<div v-click class="absolute inset-0 pointer-events-none"></div>