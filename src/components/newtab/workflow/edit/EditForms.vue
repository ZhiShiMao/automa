<template>
  <edit-interaction-base v-bind="{ data }" @change="updateData">
    <ui-select
      :model-value="data.type"
      class="block w-full mt-4 mb-3"
      placeholder="表单类型"
      @change="updateData({ type: $event })"
    >
      <option v-for="form in forms" :key="form.id" :value="form.id">
        {{ form.name }}
      </option>
    </ui-select>
    <ui-checkbox
      v-if="data.type === 'checkbox' || data.type === 'radio'"
      :model-value="data.selected"
      @change="updateData({ selected: $event })"
    >
      选中
    </ui-checkbox>
    <template v-if="data.type === 'text-field' || data.type === 'select'">
      <ui-textarea
        :model-value="data.value"
        placeholder="值"
        class="w-full"
        @change="updateData({ value: $event })"
      />
      <ui-checkbox
        :model-value="data.clearValue"
        class="mb-1 ml-1"
        @change="updateData({ clearValue: $event })"
      >
        清除表单值
      </ui-checkbox>
    </template>
    <ui-input
      v-if="data.type === 'text-field'"
      :model-value="data.delay"
      label="键入延迟（毫秒）（0表示禁用）"
      placeholder="延时时长"
      class="w-full"
      min="0"
      type="number"
      @change="updateData({ delay: +$event })"
    />
  </edit-interaction-base>
</template>
<script setup>
import EditInteractionBase from './EditInteractionBase.vue';

const props = defineProps({
  data: {
    type: Object,
    default: () => ({}),
  },
});
const emit = defineEmits(['update:data']);

const forms = [
  { id: 'text-field', name: '文本输入框' },
  { id: 'select', name: '多选' },
  { id: 'checkbox', name: '选择框' },
  { id: 'radio', name: '单选' },
];

function updateData(value) {
  emit('update:data', { ...props.data, ...value });
}
</script>
