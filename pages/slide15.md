---
layout: center
---

<div class="flex flex-col">

<p class="font-mono italic font-light text-sm color-white/75">
react-native/packages/react-native/ReactCommon/react/renderer/uimanager/UIManager.cpp
</p>

```cpp {all|5|5,15-16}
std::shared_ptr<ShadowNode> UIManager::createNode(
    Tag tag,
    const std::string& name,
    SurfaceId surfaceId,
    RawProps rawProps,
    InstanceHandle::Shared instanceHandle) const {
    
    auto& componentDescriptor = componentDescriptorRegistry_->at(name);
    auto fallbackDescriptor = componentDescriptorRegistry_->getFallbackComponentDescriptor();

    PropsParserContext propsParserContext{surfaceId, *contextContainer_.get()};

    auto family = componentDescriptor.createFamily(
        {tag, surfaceId, std::move(instanceHandle)});
    const auto props = componentDescriptor.cloneProps(
        propsParserContext, nullptr, std::move(rawProps));

    /* .. */
}
```

</div>