export const categories = {
  xml: {
    name: 'XML操作',
    color: 'bg-red-200',
  },
};

const base = {
  component: 'BlockBasic',
  category: 'xml',
  inputs: 1,
  outputs: 1,
  maxConnection: 1,
  disableEdit: true,
  allowedInputs: true,
  data: {},
};

export const tasks = {
  'change-path': {
    name: '找到新节点',
    icon: 'riNodeTree',
    ...base,
  },
  'add-node': {
    name: '添加节点',
    icon: 'riAddLine',
    ...base,
  },
  'add-node-property': {
    name: '处理属性值',
    icon: 'riAddLine',
    ...base,
  },
  'add-node-text': {
    name: '处理文本值',
    icon: 'riAddLine',
    ...base,
  },
  'delete-node': {
    name: '删除节点',
    icon: 'riDeleteBin7Line',
    ...base,
  },
  'delete-propetry': {
    name: '删除属性',
    icon: 'riDeleteBin7Line',
    ...base,
  },
  'delete-text': {
    name: '删除文本',
    icon: 'riDeleteBin7Line',
    ...base,
  },
  'copy-node': {
    name: '复制节点',
    icon: 'riFileCopy2Line',
    ...base,
  },
  'retrun-parent': {
    name: '返回父节点',
    icon: 'riArrowGoBackLine',
    ...base,
  },
  'batch-add-node-property': {
    name: '批量属性',
    icon: 'riMenuAddLine',
    ...base,
  },
  'clear-node': {
    name: '清空节点',
    icon: 'riChatDeleteLine',
    ...base,
  },
};
