---
layout: center
---

<div 
  v-motion
  data-id="box"
  :initial="{ opacity: 0, x: 50 }"
  :enter="{ opacity: 1, x: 0, transition: { delay: 300, duration: 400, ease: 'easeOut' } }"
  class="flex flex-col"
>
  <div class="bg-gray-900 border-3 border-gray-500 rounded-lg min-w-40 h-[100px] justify-center items-center flex">
    <p class="font-geist text-sm font-bold text-blue-400">DX</p>
  </div>
</div>

<!-- Texts - appear on click-1 -->
<p 
    v-motion
    :initial="{ opacity: 0, y: 20 }"
    :click-1="{ opacity: 1, y: 0, transition: { delay: 100, duration: 400, ease: 'easeOut' } }"
    data-id="text1"
    class="font-geist text-md font-bold absolute left-[60px] bottom-20"
>Superset of StyleSheet
</p>

<p 
    v-motion
    :initial="{ opacity: 0, y: 20 }"
    :click-1="{ opacity: 1, y: 0, transition: { delay: 200, duration: 400, ease: 'easeOut' } }"
    data-id="text2"
    class="font-geist text-md font-bold absolute left-[60px] bottom-70"
>
Theming
</p>

<p 
    v-motion
    :initial="{ opacity: 0, y: 20 }"
    :click-1="{ opacity: 1, y: 0, transition: { delay: 300, duration: 400, ease: 'easeOut' } }"
    data-id="text3"
    class="font-geist text-md font-bold absolute left-[60px] bottom-100"
>
Accent to native Runtime
</p>

<p 
    v-motion
    :initial="{ opacity: 0, y: 20 }"
    :click-1="{ opacity: 1, y: 0, transition: { delay: 400, duration: 400, ease: 'easeOut' } }"
    data-id="text4"
    class="font-geist text-md font-bold absolute left-92 bottom-100"
>
Breakpoints / Media Queries
</p>

<p 
    v-motion
    :initial="{ opacity: 0, y: 20 }"
    :click-1="{ opacity: 1, y: 0, transition: { delay: 500, duration: 400, ease: 'easeOut' } }"
    data-id="text5"
    class="font-geist text-md font-bold absolute right-[60px] bottom-100"
>
ShadowTree updates
</p>

<p 
    v-motion
    :initial="{ opacity: 0, y: 20 }"
    :click-1="{ opacity: 1, y: 0, transition: { delay: 600, duration: 400, ease: 'easeOut' } }"
    data-id="text6"
    class="font-geist text-md font-bold absolute right-[60px] bottom-70"
>
Selective updates
</p>

<p 
    v-motion
    :initial="{ opacity: 0, y: 20 }"
    :click-1="{ opacity: 1, y: 0, transition: { delay: 700, duration: 400, ease: 'easeOut' } }"
    data-id="text7"
    class="font-geist text-md font-bold absolute right-[60px] bottom-20"
>
Variants
</p>

<p 
    v-motion
    :initial="{ opacity: 0, y: 20 }"
    :click-1="{ opacity: 1, y: 0, transition: { delay: 800, duration: 400, ease: 'easeOut' } }"
    data-id="text8"
    class="font-geist text-md font-bold absolute left-101 bottom-20"
>
Compound variatns
</p>

<!-- Arrows - appear on click-2 -->
<div 
  v-motion
  :initial="{ opacity: 0 }"
  :click-2="{ opacity: 1, transition: { delay: 0, duration: 400, ease: 'easeOut' } }"
>
<FancyArrow from="[data-id=text1]@top" to="[data-id=box]@left" width="1" head-size="20" color="gray" />
</div>

<div 
  v-motion
  :initial="{ opacity: 0 }"
  :click-2="{ opacity: 1, transition: { delay: 100, duration: 400, ease: 'easeOut' } }"
>
<FancyArrow from="[data-id=text2]@bottom" to="[data-id=box]@left" width="1" head-size="20" color="gray" />
</div>

<div 
  v-motion
  :initial="{ opacity: 0 }"
  :click-2="{ opacity: 1, transition: { delay: 200, duration: 400, ease: 'easeOut' } }"
>
<FancyArrow from="[data-id=text3]@bottom" to="[data-id=box]@left" width="1" head-size="20" color="gray" />
</div>

<div 
  v-motion
  :initial="{ opacity: 0 }"
  :click-2="{ opacity: 1, transition: { delay: 300, duration: 400, ease: 'easeOut' } }"
>
<FancyArrow from="[data-id=text4]@bottom" to="[data-id=box]@top" width="1" head-size="20" color="gray" />
</div>

<div 
  v-motion
  :initial="{ opacity: 0 }"
  :click-2="{ opacity: 1, transition: { delay: 400, duration: 400, ease: 'easeOut' } }"
>
<FancyArrow from="[data-id=text5]@bottom" to="[data-id=box]@right" width="1" head-size="20" color="gray" />
</div>

<div 
  v-motion
  :initial="{ opacity: 0 }"
  :click-2="{ opacity: 1, transition: { delay: 500, duration: 400, ease: 'easeOut' } }"
>
<FancyArrow from="[data-id=text6]@bottom" to="[data-id=box]@right" width="1" head-size="20" color="gray" />
</div>

<div 
  v-motion
  :initial="{ opacity: 0 }"
  :click-2="{ opacity: 1, transition: { delay: 600, duration: 400, ease: 'easeOut' } }"
>
<FancyArrow from="[data-id=text7]@top" to="[data-id=box]@right" width="1" head-size="20" color="gray" />
</div>

<div 
  v-motion
  :initial="{ opacity: 0 }"
  :click-2="{ opacity: 1, transition: { delay: 700, duration: 400, ease: 'easeOut' } }"
>
<FancyArrow from="[data-id=text8]@top" to="[data-id=box]@bottom" width="1" head-size="20" color="gray" />
</div>

<!-- Click triggers -->
<div v-click class="absolute inset-0 pointer-events-none"></div>
<div v-click class="absolute inset-0 pointer-events-none"></div>

