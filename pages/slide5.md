---
layout: center
transition: fade-in
---

<p
    v-motion
    :initial="{ opacity: 0, y: 50 }"
    :click-1="{ opacity: 1, y: 0, transition: { duration: 600, ease: 'easeOut' } }"
    :click-2="{ opacity: 0, y: -100, transition: { duration: 400, ease: 'easeIn' } }"
    class="font-geist text-6xl font-bold"
>
    But wait...
</p>

<p
    v-motion
    :initial="{ opacity: 0, y: 50 }"
    :click-2="{ opacity: 1, y: -50, transition: { duration: 600, ease: 'easeOut' } }"
    :click-3="{ opacity: 0, y: -100, transition: { duration: 400, ease: 'easeIn' } }"
    class="font-geist text-6xl font-bold"
>
    We don't need StyleSheet
</p>

<div
    v-motion
    :initial="{ opacity: 0, y: 50 }"
    :click-3="{ opacity: 1, y: 0, transition: { duration: 600, ease: 'easeOut' } }"
    :click-5="{ opacity: 0, y: -100, transition: { duration: 400, ease: 'easeIn' } }"
    class="flex flex-col gap-4 absolute bottom-40 left-30"
>

<p class="font-geist text-3xl font-bold">Inline styles</p>

````md magic-move {at:3, lines:true}

```tsx {all|all}
import { View, StyleSheet } from 'react-native'

<View style={styles.box} />

const styles = StyleSheet.create({
    box: {
        width: 100,
        height: 100,
        backgroundColor: 'orange',
    }
})
```

```tsx {all|all}
import { View } from 'react-native'

<View 
    style={{
        width: 100,
        height: 100,
        backgroundColor: 'orange',
    }}
/>
```

````

</div>

<img 
    v-motion
    :initial="{ opacity: 0, y: 0 }"
    :click-4="{ opacity: 1 }"
    :click-5="{ opacity: 0, y: -100, transition: { duration: 400, ease: 'easeIn' } }"
    src="../assets/frame.png" 
    class="w-[300px] absolute top-0 right-30" 
/>
