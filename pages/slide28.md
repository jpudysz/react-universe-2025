---
layout: center
---

<div class="flex flex-row gap-20">

<div
    v-motion
    :initial="{ opacity: 0, y: -25, x: 0 }"
    :click-1="{ opacity: 1, y: -25, x: 250,  transition: { duration: 400, ease: 'easeIn' } }"
    :click-2="{ x: 50, y: -25, transition: { duration: 400, ease: 'easeIn' } }"
>

```tsx {2-9}
const styles = StyleSheet.create(
    (theme, rt) => ({
        box: {
            width: 100,
            height: 100,
            paddingTop: rt.inset.top,
            backgroundColor: theme.colors.background
        }
    })
)
```

</div>

<div 
    v-motion
    :initial="{ opacity: 0, x: -50 }"
    :click-2="{ opacity: 1, x: 0, transition: { delay: 100, duration: 400, ease: 'easeOut' } }"
    class="flex flex-col gap-2 -mt-4"
>

<p 
  v-motion
  :initial="{ opacity: 0, x: -50 }"
  :click-3="{ opacity: 1, x: 0, transition: { delay: 100, duration: 400, ease: 'easeOut' } }"
  :click-4="{ opacity: 0.3, x: 0, transition: { delay: 200, duration: 400, ease: 'easeOut' } }"
  class="font-geist text-lg text-pink-400"
>
  Function is called from C++
</p>

<p 
  v-motion
  :initial="{ opacity: 0, x: -50 }"
  :click-4="{ opacity: 1, x: 0, transition: { delay: 200, duration: 400, ease: 'easeOut' } }"
  :click-5="{ opacity: 0.3, x: 0, transition: { delay: 200, duration: 400, ease: 'easeOut' } }"
  class="font-geist text-lg"
>
  Each StyleSheet style is parsed and saved on C++ StyleSheet
</p>

<p 
  v-motion
  :initial="{ opacity: 0, x: -50 }"
  :click-5="{ opacity: 1, x: 0, transition: { delay: 300, duration: 400, ease: 'easeOut' } }"
  :click-6="{ opacity: 0.3, x: 0, transition: { delay: 200, duration: 400, ease: 'easeOut' } }"
  class="font-geist text-lg"
>
  StyleSheet is parsed and registered in UnistylesRegistry
</p>

<p 
  v-motion
  :initial="{ opacity: 0, x: -50 }"
  :click-6="{ opacity: 1, x: 0, transition: { delay: 400, duration: 400, ease: 'easeOut' } }"
  :click-7="{ opacity: 0.3, x: 0, transition: { delay: 200, duration: 400, ease: 'easeOut' } }"
  class="font-geist text-lg"
>
  Each "Unistyle" contains list of dependencies
</p>

<p 
  v-motion
  :initial="{ opacity: 0, x: -50 }"
  :click-7="{ opacity: 1, x: 0, transition: { delay: 500, duration: 400, ease: 'easeOut' } }"
  :click-8="{ opacity: 0.3, x: 0, transition: { delay: 200, duration: 400, ease: 'easeOut' } }"
  class="font-geist text-lg font-bold text-yellow-400"
>
  Parsed value is returned to JS
</p>

</div>

</div>


<!-- Click triggers -->
<div v-click class="absolute inset-0 pointer-events-none"></div>
<div v-click class="absolute inset-0 pointer-events-none"></div>
<div v-click class="absolute inset-0 pointer-events-none"></div>
<div v-click class="absolute inset-0 pointer-events-none"></div>
<div v-click class="absolute inset-0 pointer-events-none"></div>
<div v-click class="absolute inset-0 pointer-events-none"></div>
<div v-click class="absolute inset-0 pointer-events-none"></div>
