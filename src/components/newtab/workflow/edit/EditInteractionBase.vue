<template>
  <div>
    <slot name="prepend" />
    <ui-textarea
      :model-value="data.description"
      autoresize
      placeholder="描述"
      class="w-full mb-2"
      @change="updateData({ description: $event })"
    />
    <ui-input
      v-if="!hideSelector"
      :model-value="data.selector"
      placeholder="元素选择器"
      class="mb-1 w-full"
      @change="updateData({ selector: $event })"
    />
    <template v-if="!hideSelector">
      <ui-checkbox
        v-if="!data.disableMultiple && !hideMultiple"
        class="mr-6"
        title="选择多个元素"
        :model-value="data.multiple"
        @change="updateData({ multiple: $event })"
      >
        多个元素
      </ui-checkbox>
      <ui-checkbox
        :model-value="data.markEl"
        title="如果之前已经有元素选中，则不会被选择"
        @change="updateData({ markEl: $event })"
      >
        标记元素
      </ui-checkbox>
    </template>
    <slot></slot>
  </div>
</template>
<script setup>
const props = defineProps({
  data: {
    type: Object,
    default: () => ({}),
  },
  hideSelector: {
    type: Boolean,
    default: false,
  },
  hideMultiple: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(['update:data', 'change']);

function updateData(value) {
  const payload = { ...props.data, ...value };

  emit('update:data', payload);
  emit('change', payload);
}
</script>
