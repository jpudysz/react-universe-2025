---
layout: center
transition: fade-in
---

<p
    v-motion
    :initial="{ opacity: 0, y: 50 }"
    :enter="{ opacity: 1, y: 0, transition: { duration: 600, ease: 'easeOut' } }"
    class="font-geist text-5xl font-bold"
    style="line-height: 0.9"
>
    Does it mean there is no style processing on JS side?
</p>
