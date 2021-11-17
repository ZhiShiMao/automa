<template>
  <edit-interaction-base v-bind="{ data }" @change="updateData">
    <ui-input
      :model-value="data.attributeName"
      placeholder="属性名"
      class="mt-3 w-full"
      @change="updateData({ attributeName: $event })"
    />
    <ui-checkbox
      :model-value="data.saveData"
      class="mt-3"
      @change="updateData({ saveData: $event })"
    >
      保存数据
    </ui-checkbox>
    <div v-if="data.saveData" class="flex items-center mt-1">
      <ui-select
        :model-value="data.dataColumn"
        placeholder="数据列"
        class="mr-2 flex-1"
        @change="updateData({ dataColumn: $event })"
      >
        <option
          v-for="column in workflow.data.value.dataColumns"
          :key="column.name"
          :value="column.name"
        >
          {{ column.name }}
        </option>
      </ui-select>
      <ui-button
        icon
        title="数据列"
        @click="workflow.showDataColumnsModal(true)"
      >
        <v-remixicon name="riKey2Line" />
      </ui-button>
    </div>
  </edit-interaction-base>
</template>
<script setup>
import { inject } from 'vue';
import EditInteractionBase from './EditInteractionBase.vue';

const props = defineProps({
  data: {
    type: Object,
    default: () => ({}),
  },
});
const emit = defineEmits(['update:data']);

const workflow = inject('workflow');

function updateData(value) {
  emit('update:data', { ...props.data, ...value });
}
</script>
