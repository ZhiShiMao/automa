<template>
  <div :id="componentId" class="p-4">
    <div class="flex items-center mb-2">
      <div
        :class="block.category.color"
        class="inline-block text-sm mr-4 p-2 rounded-lg"
      >
        <v-remixicon name="riTimerLine" size="20" class="inline-block mr-1" />
        <span>延时</span>
      </div>
      <div class="flex-grow"></div>
      <v-remixicon
        name="riDeleteBin7Line"
        class="cursor-pointer"
        @click="editor.removeNodeId(`node-${block.id}`)"
      />
    </div>
    <input
      :value="block.data.time"
      min="0"
      title="多少毫秒后执行"
      class="px-4 py-2 rounded-lg w-36 bg-input"
      placeholder="毫秒"
      type="number"
      required
      @input="handleInput"
    />
  </div>
</template>
<script setup>
import emitter from 'tiny-emitter/instance';
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

function handleInput({ target }) {
  target.reportValidity();

  const time = +target.value || 0;

  if (time < 0) return;

  props.editor.updateNodeDataFromId(block.id, { time });
  emitter.emit('editor:data-changed', block.id);
}
</script>
