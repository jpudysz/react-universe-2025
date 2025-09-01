---
layout: center
---

<div>

<p class="font-mono italic font-light text-sm color-white/75">
react-native/Libraries/Renderer/implementations/ReactFabric-dev.js
</p>

```tsx {all|22-23}{maxHeight: '250px'}
function fastAddProperties(payload, props, validAttributes) {
    if (isArrayImpl(props)) {
        for (var i = 0; i < props.length; i++)
            payload = fastAddProperties(payload, props[i], validAttributes);
        
            return payload;
        }
        
        for (i in props) {
            var prop = props[i],
                attributeConfig = validAttributes[i];
            if (null != attributeConfig) {
                var newValue = void 0;
                if (void 0 === prop)
                if (payload && void 0 !== payload[i]) newValue = null;
                else continue;
                else
                "function" === typeof prop
                    ? (newValue = !0)
                    : "object" !== typeof attributeConfig
                        ? (newValue = prop)
                        : "function" === typeof attributeConfig.process
                    ? (newValue = attributeConfig.process(prop))
                    : "function" === typeof attributeConfig.diff &&
                    (newValue = prop);
                void 0 !== newValue
                ? (payload || (payload = {}), (payload[i] = newValue))
                : (payload = fastAddProperties(payload, prop, attributeConfig));
            }
        }
    }
    return payload;
}
```

</div>