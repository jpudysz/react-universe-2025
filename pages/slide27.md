---
layout: center
---

<div class="flex flex-col gap-10">

<p class="font-geist text-2xl font-bold">How Unistyles work?</p>

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

```tsx {all|2,6-12}
import { View } from 'react-native'
import { StyleSheet } from 'react-native-unistyles'

<View style={styles.box} />

const styles = StyleSheet.create({
    box: {
        width: 100,
        height: 100,
        backgroundColor: 'orange',
    }
})
```

```tsx {all|6,10,11|6-13}
import { View } from 'react-native'
import { StyleSheet } from 'react-native-unistyles'

<View style={styles.box} />

const styles = StyleSheet.create((theme, rt) => ({
    box: {
        width: 100,
        height: 100,
        paddingTop: rt.inset.top,
        backgroundColor: theme.colors.background
    }
}))
```

````

</div>
