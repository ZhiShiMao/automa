<template>
  <div class="flex items-center mb-2 mt-8">
    <ui-input
      :model-value="data.fileName"
      placeholder="文件名"
      class="flex-1 mr-2"
      title="文件名"
      @change="updateData({ fileName: $event })"
    />
    <ui-select
      :model-value="data.ext || 'png'"
      placeholder="类型"
      @change="updateData({ ext: $event })"
    >
      <option value="png">PNG</option>
      <option value="jpeg">JPEG</option>
    </ui-select>
  </div>
  <p class="text-sm text-gray-600 ml-2">图片质量：</p>
  <div class="bg-box-transparent px-4 mb-4 py-2 rounded-lg flex items-center">
    <input
      :value="data.quality"
      title="图片质量"
      class="focus:outline-none flex-1"
      type="range"
      min="0"
      max="100"
      @change="updateQuality"
    />
    <span class="w-12 text-right">{{ data.quality }}%</span>
  </div>
  <ui-checkbox
    v-if="false"
    :model-value="data.captureActiveTab"
    @change="updateData({ captureActiveTab: $event })"
  >
    在当前激活的标签中，进行页面截图
  </ui-checkbox>
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
function updateQuality({ target }) {
  let quality = +target.value;

  if (quality <= 0) quality = 0;
  if (quality >= 100) quality = 100;

  updateData({ quality });
}
</script>
