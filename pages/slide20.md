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
    When new ShadowTree is commited, React Native calls platform specific <span class="text-pink-400/90">MountingManager</span>
</p>

<p 
    v-motion
    :initial="{ opacity: 0, y: 50 }"
    :click-2="{ opacity: 1, y: -100, transition: { duration: 600, ease: 'easeOut' } }"
    :click-3="{ opacity: 0, y: -100, transition: { duration: 400, ease: 'easeIn' } }"
    class="font-geist text-5xl font-bold"
    style="line-height: 0.9"
>
    <span class="text-pink-400/90">MountingManager</span> receives list of mutations and type of operation: create, update, delete
</p>

<p 
    v-motion
    :initial="{ opacity: 0, y: 50 }"
    :click-3="{ opacity: 1, y: -200, transition: { duration: 600, ease: 'easeOut' } }"
    class="font-geist text-5xl font-bold"
    style="line-height: 0.9"
>
    Finally <span class="text-blue-400/90">RCTViewComponentView.updateProps</span> is called and the final conversion to platform specific props happens
</p>


<!-- Click triggers -->
<div v-click class="absolute inset-0 pointer-events-none"></div>
<div v-click class="absolute inset-0 pointer-events-none"></div>
<div v-click class="absolute inset-0 pointer-events-none"></div>