<!-- Copyright 2024 StarfleetAI -->
<!-- SPDX-License-Identifier: Apache-2.0 -->

<script setup lang="ts">
  import IconBase from './IconBase.vue'

  withDefaults(
    defineProps<{
      color?: string
      height?: number | string
      pointer?: boolean
      viewBoxValue?: string
      width?: number | string
    }>(),
    {
      color: 'currentColor',
      width: 21,
      height: 21,
      viewBoxValue: `0 0 21 21`,
    },
  )
</script>

<template>
  <IconBase
    :width="width"
    :height="height"
    :color="color"
    :view-box-value="viewBoxValue"
    :pointer="pointer"
  >
    <path
      d="M11.3443 1.7915L3.92217 10.698C3.63149 11.0469 3.48616 11.2213 3.48393 11.3686C3.482 11.4966 3.53906 11.6184 3.63867 11.6989C3.75324 11.7915 3.98027 11.7915 4.43431 11.7915H10.511L9.67762 18.4582L17.0997 9.55163C17.3904 9.20282 17.5358 9.02841 17.538 8.88112C17.5399 8.75307 17.4828 8.63125 17.3832 8.55076C17.2687 8.45817 17.0416 8.45817 16.5876 8.45817H10.511L11.3443 1.7915Z"
      stroke="#B74E47"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </IconBase>
</template>
