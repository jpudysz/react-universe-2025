---
layout: center
---

<p
    v-motion
    :initial="{ opacity: 0, y: 250 }"
    :click-1="{ opacity: 1, y: 200, transition: { duration: 600, ease: 'easeOut' } }"
    :click-2="{ opacity: 0, y: 250, transition: { duration: 400, ease: 'easeIn' } }"
    class="font-geist text-5xl font-bold"
    style="line-height: 0.9"
>
    ViewShadowNode has <span class="text-orange-400/70">ViewShadowNodeProps</span>
</p>

<p
    v-motion
    :initial="{ opacity: 0, y: 150 }"
    :click-2="{ opacity: 1, y: 120, transition: { duration: 600, ease: 'easeOut' } }"
    :click-3="{ opacity: 0, y: 150, transition: { duration: 400, ease: 'easeIn' } }"
    class="font-geist text-5xl font-bold"
    style="line-height: 0.9"
>
    <span class="text-orange-400/70">ViewShadowNodeProps </span>inherits from <span class="text-pink-400/90">ViewProps</span>
</p>

<div
    v-motion
    :initial="{ opacity: 0, y: 0 }"
    :click-3="{ opacity: 1, y: -90, transition: { duration: 600, ease: 'easeOut' } }"
    style="line-height: 0.9"
>

```cpp {all|all|all|all|2|0}
namespace facebook::react {
    using ViewProps = HostPlatformViewProps;
    using SharedViewProps = std::shared_ptr<const ViewProps>;
}
```

</div>

<div
    v-motion
    :initial="{ opacity: 0, y: 0 }"
    :click-5="{ opacity: 1, y: -90, transition: { duration: 600, ease: 'easeOut' } }"
    style="line-height: 0.9"
>

```cpp {all|0}
class HostPlatformViewProps : public BaseViewProps {
    /* ... */
}
```

</div>

<div
    v-motion
    :initial="{ opacity: 0, y: 0 }"
    :click-6="{ opacity: 1, y: -90, transition: { duration: 600, ease: 'easeOut' } }"
    style="line-height: 0.9"
>

```cpp {all|4|6|7|11-17}
BaseViewProps::BaseViewProps(
    const PropsParserContext& context,
    const BaseViewProps& sourceProps,
    const RawProps& rawProps,
    const std::function<bool(const std::string&)>& filterObjectKeys
) : YogaStylableProps(context, sourceProps, rawProps, filterObjectKeys),
    AccessibilityProps(context, sourceProps, rawProps),

    /* mappings of all non-layuout props */

    convertRawProp(
        context,
        rawProps,
        "backgroundColor",
        sourceProps.backgroundColor,
        {})
    ) {}
```

</div>
