---
layout: center
---

<div class="flex flex-col">

<p class="font-mono italic font-light text-sm color-white/75">
react-native/ReactCommon/react/renderer/uimanager/UIManagerBinding.cpp
</p>

````md magic-move

```cpp {all}
// createNode
return jsi::Function::createFromHostFunction(
    runtime,
    name,
    paramCount,
    [](
        jsi::Runtime& runtime,
        const jsi::Value&,
        const jsi::Value* arguments,
        size_t count
    ) -> jsi::Value {
        /* ... */

    }
```

```cpp {13-24|20}
// createNode
return jsi::Function::createFromHostFunction(
    runtime,
    name,
    paramCount,
    [](
        jsi::Runtime& runtime,
        const jsi::Value&,
        const jsi::Value* arguments,
        size_t count
    ) -> jsi::Value {
        /* ... */

        return valueFromShadowNode(
            runtime,
            uiManager->createNode(
                tagFromValue(arguments[0]),
                stringFromValue(runtime, arguments[1]),
                surfaceIdFromValue(runtime, arguments[2]),
                RawProps(runtime, arguments[3]),
                std::move(instanceHandle)
            ),
            true
        )
    }
```

````

</div>