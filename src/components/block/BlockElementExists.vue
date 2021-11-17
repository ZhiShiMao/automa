<template>
  <block-base
    :id="componentId"
    class="element-exists"
    @edit="editBlock"
    @delete="editor.removeNodeId(`node-${block.id}`)"
  >
    <div
      :class="block.category.color"
      class="inline-block text-sm mb-2 p-2 rounded-lg"
    >
      <v-remixicon name="riFocus3Line" size="20" class="inline-block mr-1" />
      <span>元素存在</span>
    </div>
    <p
      title="元素选择器"
      class="
        text-overflow
        p-2
        rounded-lg
        bg-box-transparent
        text-sm
        font-mono
        text-right
        mb-2
      "
      style="max-width: 200px"
    >
      {{ block.data.selector || '元素选择器' }}
    </p>
    <p class="text-right text-gray-600">
      <span title="当元素不存在时执行"> &#9432; </span>
      不存在
    </p>
    <input
      type="text"
      class="hidden trigger"
      disabled="true"
      @change="handleDataChanged"
    />
  </block-base>
</template>
<script setup>
import emitter from 'tiny-emitter/instance';
import BlockBase from './BlockBase.vue';
import { useComponentId } from '@/composable/componentId';
import { useEditorBlock } from '@/composable/editorBlock';

const props = defineProps({
  editor: {
    type: Object,
    default: () => ({}),
  },
});

const componentId = useComponentId('block-delay');
const block = useEditorBlock(`#${componentId}`, props.editor);

function editBlock() {
  emitter.emit('editor:edit-block', {
    ...block.details,
    data: block.data,
    blockId: block.id,
  });
}
function handleDataChanged() {
  const { data } = props.editor.getNodeFromId(block.id);

  block.data = data;
}
</script>
<style>
.drawflow .element-exists .outputs {
  top: 70px !important;
  transform: none !important;
}
.drawflow .element-exists .output {
  margin-bottom: 22px;
}
</style>
