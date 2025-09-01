---
layout: center
transition: fade-in
---

<div class="flex flex-row items-center gap-4">

<div class="flex flex-col">

<p class="font-mono italic font-light text-sm color-white/75">
Libraries/Components/View/ViewNativeComponent.js
</p>

```tsx {all|2}
const ViewNativeComponent: HostComponent<Props> =
  NativeComponentRegistry.get<Props>('RCTView', () => ({
    uiViewClassName: 'RCTView',
  }));

export default ViewNativeComponent;
```

</div>

<div
    v-motion
    :initial="{ opacity: 0, x: 100 }"
    :click-2="{ opacity: 1, x: 0, transition: { duration: 600, ease: 'easeOut' } }"
>

<p class="font-mono italic font-light text-sm color-white/75">
Libraries/NativeComponent/NativeComponentRegistry.js
</p>

```tsx {all|all|2,11|5-9}
export function get<Config: {...}>(
  name: string,
  viewConfigProvider: () => PartialViewConfig,
): HostComponent<Config> {
    ReactNativeViewConfigRegistry.register(name, () => {
        // resolve viewConfig

        return viewConfig
    })

    return name
}
```

</div>

</div>