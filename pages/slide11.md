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
    <span class="font-light">Attributes are</span> Props
</p>

<p
    v-motion
    :initial="{ opacity: 0, y: 50 }"
    :click-2="{ opacity: 1, y: 0, transition: { duration: 600, ease: 'easeOut' } }"
    :click-3="{ opacity: 0, y: -100, transition: { duration: 400, ease: 'easeIn' } }"
    class="font-geist text-5xl font-bold"
>
    Among them we can find 
    <span class="font-geist font-bold text-orange-400/70">style props</span>
</p>

<div
    v-motion
    class="absolute"
    :initial="{ opacity: 0, bottom: 0}"
    :click-3="{ opacity: 1, bottom: 150, transition: { duration: 600, ease: 'easeOut' } }"
>

```tsx {all|all|all|all|10-13}
const styleProps = {
    opacity: true,
    shadowOpacity: true,
    shadowRadius: true,
    display: true,
    zIndex: true,

    /* other props */

    backgroundColor: {process: require('../StyleSheet/processColor').default},
    boxShadow: {process: require('../StyleSheet/processBoxShadow').default},
    borderColor: {process: require('../StyleSheet/processColor').default},

    /* ... */
}
```

</div>
