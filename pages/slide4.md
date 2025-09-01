---
layout: center
transition: view-transition
---

<div class="flex flex-row">

<div 
    v-motion
    :initial="{ opacity: 0, x: 0, y: 50 }"
    :enter="{ opacity: 1, x: 200, y: 50, transition: { duration: 600, ease: 'easeOut' } }"
    :click-3="{ opacity: 1, x: -30, y: 50, transition: { duration: 400, ease: 'easeIn' } }"
    class="flex gap-6 flex-col"
>
<p
    v-motion
    :initial="{ opacity: 1 }"
    :click-3="{ opacity: 0.3, transition: { duration: 400, ease: 'easeIn' } }"
    class="font-geist text-2xl font-bold"
>
StyleSheet.create</p>

```js {all|2-7|9}
create<+S: ____Styles_Internal>(obj: S): $ReadOnly<S> {
    if (__DEV__) {
      for (const key in obj) {
        if (obj[key]) {
          Object.freeze(obj[key]);
        }
      }
    }
    return obj;
},
```
</div>

<div
    v-motion
    :initial="{ opacity: 0, x: 50 }"
    :click-3="{ opacity: 1, x: 0, transition: { duration: 400, ease: 'easeIn' } }"
    class="flex gap-10 flex-col"
>

<div>

<p class="font-geist text-2xl font-bold">Benchmark</p>
<p class="font-geist text-md font-light color-white/75">
    100 StyleShets with 5 styles and 2 properties each
</p>

</div>

<p
    v-motion
    :initial="{ opacity: 0 }"
    :click-4="{ opacity: 1, transition: { duration: 400, ease: 'easeIn' } }"
>
    16x times faster!
</p>

<div
    v-motion
    :initial="{ opacity: 0 }"
    :click-5="{ opacity: 1, transition: { duration: 400, ease: 'easeIn' } }"
    class="flex gap-4 items-end justify-center"
>


<div class="h-[20px] w-20 bg-yellow-400/70 rounded-md flex items-center justify-center relative">
   <span class="font-geist font-bold text-sm text-black/75">0.7 μs</span>
   <span class="font-geist font-xs font-thin absolute -bottom-[40px]">No freeze</span>
</div>

<div
    class="h-[240px] w-20 rounded-md flex items-center justify-center bg-purple-400/70 relative"
>
   <span class="font-geist font-bold text-xl text-black/75">11.5 μs</span>
   <span class="font-geist font-xs font-thin absolute -bottom-[40px]">Freeze</span>
</div>

</div>

</div>

</div>

<!-- Click triggers -->
<div v-click class="absolute inset-0 pointer-events-none"></div>
<div v-click class="absolute inset-0 pointer-events-none"></div>
<div v-click class="absolute inset-0 pointer-events-none"></div>