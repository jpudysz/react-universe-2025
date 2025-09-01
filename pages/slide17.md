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
    React Native needs to parse our <span class="text-orange-400/70">props</span>
</p>

<p
    v-motion
    :initial="{ opacity: 0, y: 50 }"
    :click-2="{ opacity: 1, y: -100, transition: { duration: 600, ease: 'easeOut' } }"
    :click-3="{ opacity: 0, y: -150, transition: { duration: 400, ease: 'easeIn' } }"
    class="font-geist text-5xl font-bold"
    style="line-height: 0.9"
>
    It pulls the recipy about how to do it from <span class="text-blue-400/90">component descriptor registry</span>
</p>

<p
    v-motion
    :initial="{ opacity: 0, y: -150 }"
    :click-3="{ opacity: 1, y: -200, transition: { duration: 600, ease: 'easeOut' } }"
    :click-6="{ opacity: 0, y: -200, transition: { duration: 400, ease: 'easeIn' } }"
    class="font-geist text-5xl font-bold"
    style="line-height: 0.9"
>
    For RCTView we have <span class="text-pink-400/90">ViewComponentDescriptor</span>
</p>

<div
    v-motion
    class="absolute"
    :initial="{ opacity: 0, y: 50 }"
    :click-4="{ opacity: 1, y: -150, transition: { duration: 600, ease: 'easeOut' } }"
    :click-6="{ opacity: 0, y: -250, transition: { duration: 400, ease: 'easeIn' } }"
>

```cpp {all|all|all|all|all|2}
class ViewComponentDescriptor
    : public ConcreteComponentDescriptor<ViewShadowNode> {
 public:
  ViewComponentDescriptor(const ComponentDescriptorParameters& parameters)
      : ConcreteComponentDescriptor<ViewShadowNode>(parameters) {}
};
```

</div>

