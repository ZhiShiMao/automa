<template>
  <div class="container pt-8 pb-4">
    <h1 class="text-2xl font-semibold mb-6">流程</h1>
    <div class="flex items-center mb-6 space-x-4">
      <ui-input
        v-model="state.query"
        prepend-icon="riSearch2Line"
        placeholder="搜索 ..."
        class="flex-1"
      />
      <div class="flex items-center workflow-sort">
        <ui-button
          icon
          class="rounded-r-none border-gray-300 border-r"
          @click="state.sortOrder = state.sortOrder === 'asc' ? 'desc' : 'asc'"
        >
          <v-remixicon
            :name="state.sortOrder === 'asc' ? 'riSortAsc' : 'riSortDesc'"
          />
        </ui-button>
        <ui-select v-model="state.sortBy" placeholder="排序">
          <option v-for="sort in sorts" :key="sort.id" :value="sort.id">
            {{ sort.name }}
          </option>
        </ui-select>
      </div>
      <ui-button @click="importWorkflow">
        <v-remixicon name="riUploadLine" class="mr-2 -ml-1" />
        导入流程
      </ui-button>
      <ui-button variant="accent" @click="newWorkflow"> 新建流程 </ui-button>
    </div>
    <div v-if="Workflow.all().length === 0" class="py-12 flex items-center">
      <img src="@/assets/svg/alien.svg" class="w-96" />
      <div class="ml-4">
        <h1 class="text-2xl font-semibold max-w-md mb-6">暂无任何流程</h1>
        <ui-button variant="accent" @click="newWorkflow">新建流程</ui-button>
      </div>
    </div>
    <div v-else class="grid gap-4 grid-cols-5 2xl:grid-cols-6">
      <shared-card
        v-for="workflow in workflows"
        v-bind="{ data: workflow, menu }"
        :key="workflow.id"
        @click="$router.push(`/workflows/${$event.id}`)"
        @execute="executeWorkflow"
        @menuSelected="menuHandlers[$event.name]($event.data)"
      />
    </div>
  </div>
</template>
<script setup>
import { computed, shallowReactive } from 'vue';
import { useDialog } from '@/composable/dialog';
import { sendMessage } from '@/utils/message';
import { exportWorkflow, importWorkflow } from '@/utils/workflow-data';
import SharedCard from '@/components/newtab/shared/SharedCard.vue';
import Workflow from '@/models/workflow';

const dialog = useDialog();

const sorts = [
  { name: '名称', id: 'name' },
  { name: '创建日期', id: 'createdAt' },
];
const menu = [
  { name: '导出', icon: 'riDownloadLine' },
  { name: '重命名', icon: 'riPencilLine' },
  { name: '删除', icon: 'riDeleteBin7Line' },
];

const state = shallowReactive({
  query: '',
  sortBy: 'createdAt',
  sortOrder: 'desc',
});

const workflows = computed(() =>
  Workflow.query()
    .where(({ name }) =>
      name.toLocaleLowerCase().includes(state.query.toLocaleLowerCase())
    )
    .orderBy(state.sortBy, state.sortOrder)
    .get()
);

function executeWorkflow(workflow) {
  sendMessage('workflow:execute', workflow, 'background');
}
function newWorkflow() {
  dialog.prompt({
    title: '新建流程',
    placeholder: '流程名称',
    okText: '添加流程',
    onConfirm: (name) => {
      Workflow.insert({
        data: {
          name: name || 'Unnamed',
          createdAt: Date.now(),
        },
      });
    },
  });
}
function deleteWorkflow({ name, id }) {
  dialog.confirm({
    title: '删除流程',
    okVariant: 'danger',
    body: `确定要删除 "${name}" 流程？`,
    onConfirm: () => {
      Workflow.delete(id);
    },
  });
}
function renameWorkflow({ id, name }) {
  dialog.prompt({
    title: '重命名流程',
    placeholder: '流程名称',
    okText: '重命名',
    inputValue: name,
    onConfirm: (newName) => {
      Workflow.update({
        where: id,
        data: {
          name: newName,
        },
      });
    },
  });
}

const menuHandlers = {
  "导出": exportWorkflow,
  "重命名": renameWorkflow,
  "删除": deleteWorkflow,
};
</script>
<style>
.workflow-sort select {
  @apply rounded-l-none !important;
}
</style>
