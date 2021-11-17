<template>
  <ui-input
    :model-value="data.selector"
    label="元素选择器"
    class="mb-1 w-full"
    @change="updateData({ selector: $event })"
  />
  <div class="flex space-x-2">
    <ui-input
      :model-value="data.tryCount"
      class="flex-1"
      type="number"
      title="尝试检查元素的存在"
      label="重试次数"
      min="1"
      @change="updateData({ tryCount: +$event })"
    />
    <ui-input
      :model-value="data.timeout"
      label="超时时长(ms)"
      title="每一次重试时长"
      class="flex-1"
      type="number"
      min="200"
      @change="updateData({ timeout: +$event })"
    />
  </div>
</template>
<script setup>
const props = defineProps({
  data: {
    type: Object,
    default: () => ({}),
  },
});
const emit = defineEmits(['update:data']);

function updateData(value) {
  emit('update:data', { ...props.data, ...value });
}
</script>
