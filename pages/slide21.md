---
layout: center
---

```cpp {all|8|13}
- (void)updateProps:(const Props::Shared &)props oldProps:(const Props::Shared &)oldProps {
    /* ... */

    const auto &newViewProps = static_cast<const ViewProps &>(*props);

    /* ... */

    self.backgroundColor = RCTUIColorFromSharedColor(newViewProps.backgroundColor);

    /* ... */

    if (_contentView) {
        _contentView.frame = RCTCGRectFromRect(_layoutMetrics.getContentFrame());
    }
}
```

<div 
    v-motion
    :initial="{ opacity: 0, y: 50 }"
    :click-2="{ opacity: 1, y: 0, transition: { duration: 600, ease: 'easeOut' } }"
    class="flex flex-col mt-10"
>

<p class="font-mono font-light text-sm color-white/75">
<span class="font-bold italic">width:</span> YGDimensionWidth -> <span class="text-pink-400/90">Float</span>
</p>

<p class="font-mono font-light text-sm color-white/75">
<span class="font-bold italic">height:</span> YGDimensionHeight -> <span class="text-pink-400/90">Float</span>
</p>

<p class="font-mono font-light text-sm color-white/75">
<span class="font-bold italic">backgroundColor:</span> SharedColor -> <span class="text-pink-400/90">UIColor</span>
</p>

</div>