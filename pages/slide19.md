---
layout: center
---

<p 
    v-motion
    :initial="{ opacity: 0, y: 50 }"
    :click-1="{ opacity: 1, y: 0, transition: { duration: 600, ease: 'easeOut' } }"
    class="font-geist text-5xl font-bold"
    style="line-height: 0.9"
>
    Inside <span class="text-pink-400/90">BaseViewProps</span> our <span class="text-orange-400/70">RawProps</span> are converted to unified types that can be later convrted to platform 
    specific types
</p>

<div 
    v-motion
    :initial="{ opacity: 0, y: 50 }"
    :click-2="{ opacity: 1, y: 0, transition: { duration: 600, ease: 'easeOut' } }"
    class="flex flex-col mt-10"
>

<p class="font-mono font-light text-sm color-white/75">
<span class="font-bold italic">width:</span> 100 -> <span class="text-pink-400/90">YGDimensionWidth</span>
</p>

<p class="font-mono font-light text-sm color-white/75">
<span class="font-bold italic">height:</span> 100 -> <span class="text-pink-400/90">YGDimensionHeight</span>
</p>

<p class="font-mono font-light text-sm color-white/75">
<span class="font-bold italic">backgroundColor:</span> 4294944000 -> <span class="text-pink-400/90">SharedColor</span>
</p>

</div>

<!-- Click triggers -->
<div v-click class="absolute inset-0 pointer-events-none"></div>
<div v-click class="absolute inset-0 pointer-events-none"></div>