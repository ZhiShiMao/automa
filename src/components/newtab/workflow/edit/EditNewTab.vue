<template>
  <div class="mb-2 mt-4 space-y-2">
    <ui-textarea
      :model-value="data.description"
      class="w-full"
      placeholder="描述"
      @change="updateData({ description: $event })"
    />
    <ui-input
      v-if="!data.activeTab"
      :model-value="data.url"
      title="URL"
      class="w-full"
      placeholder="http://example.com/"
      @change="updateData({ url: $event })"
    />
    <a
      href="https://github.com/Kholid060/automa/wiki/Features#reference-data"
      rel="noopener"
      class="text-primary inline-block text-sm"
      target="_blank"
      style="margin-top: 0"
    >
      了解如何添加动态数据
    </a>
    <ui-checkbox
      :model-value="data.updatePrevTab"
      class="leading-tight"
      title="使用以前打开的标签，而不是创建新的标签"
      @change="updateData({ updatePrevTab: $event })"
    >
      更新之前打开的标签
    </ui-checkbox>
    <ui-checkbox
      :model-value="data.active"
      @change="updateData({ active: $event })"
    >
      将标签设置为激活状态
    </ui-checkbox>
    <ui-checkbox
      :model-value="data.inGroup"
      @change="updateData({ inGroup: $event })"
    >
      添加到标签组
    </ui-checkbox>
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
