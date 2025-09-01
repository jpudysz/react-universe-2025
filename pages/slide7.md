---
layout: center
transition: fade-in
---

<div class="w-screen flex flex-col items-center">


<div 
    v-motion
    :initial="{ opacity: 1, y: 0 }"
    :click-4="{ opacity: 1, y: -100, transition: { duration: 600, ease: 'easeOut' } }"
    class="flex flex-row gap-4"
>


<div
    v-motion
    :initial="{ opacity: 0, x: 300 }"
    :enter="{ opacity: 1, x: 230, transition: { duration: 600, ease: 'easeOut' } }"
    :click-2="{ opacity: 1, x: 0, transition: { duration: 600, ease: 'easeOut' } }"
>

<p class="font-mono italic font-light text-sm color-white/75">
app/MyView.tsx
</p>
```tsx {all|all|all|3,9}
import { View } from 'react-native'

<View 
    style={{
        width: 100,
        height: 100,
        backgroundColor: 'orange',
    }}
/>
```

</div>

<div 
    v-motion
    :initial="{ opacity: 0 }"
    :click-2="{ opacity: 1, transition: { duration: 600, ease: 'easeOut' } }"
    class="flex justify-center flex-col"
>

 <p class="font-mono italic font-light text-sm color-white/75">
react-native/Libraries/Components/View/View.js
</p>

```tsx
import ViewNativeComponent from './ViewNativeComponent';

// some accessibility props mapping

<ViewNativeComponent {...processedProps} />
```

</div>

<dev
    v-motion
    :initial="{ opacity: 0 }"
    :click-3="{ opacity: 1, transition: { duration: 600, ease: 'easeOut' } }"
    class="absolute"
>

<FancyArrow 
  from="(60, 90)" 
  to="(310, 160)" 
  color="red" 
  animated
  animation-duration="1000"
  animation-delay="500" />

</dev>

</div>


<div 
    v-motion
    :initial="{ opacity: 0 }"
    :click-4="{ opacity: 1, transition: { duration: 600, ease: 'easeOut', delay: 500 } }"
    class="flex justify-center flex-col absolute top-80"
>

 <p class="font-mono italic font-light text-sm color-white/75">
react-native/Libraries/Components/View/ViewNativeComponent.js
</p>

```tsx
const ViewNativeComponent: HostComponent<Props> =
  NativeComponentRegistry.get<Props>('RCTView', () => ({
    uiViewClassName: 'RCTView',
  }));

export default ViewNativeComponent;
```

</div>


<dev
    v-motion
    :initial="{ opacity: 0 }"
    :click-4="{ opacity: 1, transition: { duration: 600, ease: 'easeOut' } }"
    class="absolute"
>

<FancyArrow 
  from="(60, 90)" 
  to="(-110, 200)" 
  color="red" 
  animated
  animation-duration="1000"
  animation-delay="1000" />

</dev>

</div>

<!-- Click triggers -->
<div v-click class="absolute inset-0 pointer-events-none"></div>