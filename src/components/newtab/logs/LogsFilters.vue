<template>
  <div class="flex items-center mb-6 space-x-4">
    <ui-input
      :model-value="filters.query"
      prepend-icon="riSearch2Line"
      placeholder="搜索 ..."
      class="flex-1"
      @change="updateFilters('query', $event)"
    />
    <div class="flex items-center workflow-sort">
      <ui-button
        icon
        class="rounded-r-none border-gray-300 border-r"
        @click="updateSorts('order', sorts.order === 'asc' ? 'desc' : 'asc')"
      >
        <v-remixicon
          :name="sorts.order === 'asc' ? 'riSortAsc' : 'riSortDesc'"
        />
      </ui-button>
      <ui-select
        :model-value="sorts.by"
        placeholder="排序"
        @change="updateSorts('by', $event)"
      >
        <option v-for="sort in sortsList" :key="sort.id" :value="sort.id">
          {{ sort.name }}
        </option>
      </ui-select>
    </div>
    <ui-popover>
      <template #trigger>
        <ui-button>
          <v-remixicon name="riFilter2Line" class="mr-2 -ml-1" />
          <span>筛选</span>
        </ui-button>
      </template>
      <div class="w-48">
        <p class="flex-1 mb-2 font-semibold">筛选</p>
        <p class="mb-2 text-sm text-gray-600">通过状态筛选</p>
        <div class="grid grid-cols-2 gap-2">
          <ui-radio
            v-for="status in filterByStatus"
            :key="status.id"
            :model-value="filters.byStatus"
            :value="status.id"
            class="capitalize text-sm"
            @change="updateFilters('byStatus', $event)"
          >
            {{ status.name }}
          </ui-radio>
        </div>
        <p class="mb-1 text-sm text-gray-600 mt-3">通过日期筛选</p>
        <ui-select
          :model-value="filters.byDate"
          class="w-full"
          @change="updateFilters('byDate', $event)"
        >
          <option v-for="date in filterByDate" :key="date.id" :value="date.id">
            {{ date.name }}
          </option>
        </ui-select>
      </div>
    </ui-popover>
  </div>
</template>
<script setup>
defineProps({
  filters: {
    type: Object,
    default: () => ({}),
  },
  sorts: {
    type: Object,
    default: () => ({}),
  },
});
const emit = defineEmits(['updateSorts', 'updateFilters']);

const filterByStatus = [
  { id: 'all', name: '全部' },
  { id: 'success', name: '成功' },
  { id: 'stopped', name: '停止' },
  { id: 'error', name: '错误' },
];
const filterByDate = [
  { id: 0, name: '全部' },
  { id: 1, name: '最近24小时' },
  { id: 7, name: '最近7天' },
  { id: 30, name: '最近30天' },
];
const sortsList = [
  { id: 'name', name: '名称' },
  { id: 'startedAt', name: '创建日期' },
];

function updateFilters(key, value) {
  emit('updateFilters', { key, value });
}
function updateSorts(key, value) {
  emit('updateSorts', { key, value });
}
</script>
