/* to-do screenshot, looping, cookies, assets, tab loaded, opened tab, and run workflow block? */
import { categories as xmlCategories, tasks as xmlTasks } from './shared-xml';

export const tasks = {
  trigger: {
    name: '触发器',
    description: '工作流的触发方式',
    icon: 'riFlashlightLine',
    component: 'BlockBasic',
    editComponent: 'EditTrigger',
    category: 'general',
    inputs: 0,
    outputs: 1,
    allowedInputs: true,
    maxConnection: 1,
    data: {
      description: '',
      type: 'manual',
      interval: 60,
      delay: 5,
      date: '',
      time: '00:00',
      url: '',
      shortcut: '',
      activeInInput: false,
      isUrlRegex: false,
    },
  },
  'active-tab': {
    name: '激活标签',
    description: '将当前标签设置为激活状态',
    icon: 'riWindowLine',
    component: 'BlockBasic',
    category: 'browser',
    disableEdit: true,
    inputs: 1,
    outputs: 1,
    allowedInputs: true,
    maxConnection: 1,
    data: {},
  },
  'new-tab': {
    name: '新建标签',
    description: '创建新的标签',
    icon: 'riGlobalLine',
    component: 'BlockBasic',
    editComponent: 'EditNewTab',
    category: 'browser',
    inputs: 1,
    outputs: 1,
    allowedInputs: true,
    maxConnection: 1,
    data: {
      description: '',
      url: '',
      active: true,
      inGroup: false,
      updatePrevTab: false,
    },
  },
  'new-window': {
    name: '打开新的窗口',
    description: '打开新的窗口，访问页面',
    icon: 'riWindow2Line',
    component: 'BlockBasic',
    editComponent: 'EditNewWindow',
    category: 'browser',
    inputs: 1,
    outputs: 1,
    allowedInputs: true,
    maxConnection: 1,
    data: {
      description: '',
      incognito: false,
      windowState: 'normal',
    },
  },
  'go-back': {
    name: '后退页面',
    description: '根据当前标签的浏览历史，后退到上次访问的页面',
    icon: 'riArrowGoBackLine',
    component: 'BlockBasic',
    category: 'browser',
    inputs: 1,
    outputs: 1,
    maxConnection: 1,
    disableEdit: true,
    allowedInputs: true,
    data: {},
  },
  'forward-page': {
    name: '前进页面',
    description: '根据当前标签的浏览历史，前进到之后访问的页面',
    icon: 'riArrowGoForwardLine',
    component: 'BlockBasic',
    category: 'browser',
    inputs: 1,
    outputs: 1,
    maxConnection: 1,
    disableEdit: true,
    allowedInputs: true,
    data: {},
  },
  'close-tab': {
    name: '关闭标签',
    icon: 'riCloseCircleLine',
    component: 'BlockBasic',
    category: 'browser',
    editComponent: 'EditCloseTab',
    inputs: 1,
    outputs: 1,
    maxConnection: 1,
    allowedInputs: true,
    data: {
      url: '',
      activeTab: true,
    },
  },
  'take-screenshot': {
    name: '截图',
    description: '在当前激活的标签中，进行页面截图',
    icon: 'riImageLine',
    component: 'BlockBasic',
    category: 'browser',
    editComponent: 'EditTakeScreenshot',
    inputs: 1,
    outputs: 1,
    maxConnection: 1,
    allowedInputs: true,
    data: {
      fileName: '',
      ext: 'png',
      quality: 100,
      captureActiveTab: true,
    },
  },
  'event-click': {
    name: '点击元素',
    icon: 'riCursorLine',
    component: 'BlockBasic',
    editComponent: 'EditInteractionBase',
    category: 'interaction',
    inputs: 1,
    outputs: 1,
    allowedInputs: true,
    maxConnection: 1,
    data: {
      description: '',
      selector: '',
      markEl: false,
      multiple: false,
    },
  },
  delay: {
    name: '延时',
    description: '等待一定事件后，执行下一个标签',
    icon: 'riTimerLine',
    component: 'BlockDelay',
    editComponent: 'EditTrigger',
    category: 'general',
    inputs: 1,
    outputs: 1,
    allowedInputs: true,
    maxConnection: 1,
    data: {
      time: 500,
    },
  },
  'get-text': {
    name: '获取文本',
    description: '从一个元素中获取文本',
    icon: 'riParagraph',
    component: 'BlockBasic',
    editComponent: 'EditGetText',
    category: 'interaction',
    inputs: 1,
    outputs: 1,
    allowedInputs: true,
    maxConnection: 1,
    data: {
      description: '',
      selector: '',
      markEl: false,
      multiple: false,
      regex: '',
      regexExp: ['g'],
      dataColumn: '',
      saveData: true,
    },
  },
  'export-data': {
    name: '导出数据',
    icon: 'riDownloadLine',
    component: 'BlockExportData',
    editComponent: 'EditTrigger',
    category: 'general',
    inputs: 1,
    outputs: 1,
    allowedInputs: true,
    maxConnection: 1,
    data: {
      name: '',
      type: 'json',
    },
  },
  'element-scroll': {
    name: '滚动元素',
    icon: 'riMouseLine',
    component: 'BlockBasic',
    editComponent: 'EditScrollElement',
    category: 'interaction',
    inputs: 1,
    outputs: 1,
    allowedInputs: true,
    maxConnection: 1,
    data: {
      description: '',
      selector: 'html',
      markEl: false,
      multiple: false,
      scrollY: 0,
      scrollX: 0,
      incX: false,
      incY: false,
      smooth: false,
      scrollIntoView: false,
    },
  },
  link: {
    name: '链接',
    description: '根据链接访问新的页面',
    icon: 'riLink',
    component: 'BlockBasic',
    editComponent: 'EditInteractionBase',
    category: 'interaction',
    inputs: 1,
    outputs: 1,
    allowedInputs: true,
    maxConnection: 1,
    data: {
      description: '',
      selector: '',
      markEl: false,
      disableMultiple: true,
    },
  },
  'attribute-value': {
    name: '属性值',
    description: '从一个元素中获取属性值',
    icon: 'riBracketsLine',
    component: 'BlockBasic',
    editComponent: 'EditAttributeValue',
    category: 'interaction',
    inputs: 1,
    outputs: 1,
    allowedInputs: true,
    maxConnection: 1,
    data: {
      description: '',
      selector: '',
      markEl: false,
      multiple: false,
      attributeName: '',
      dataColumn: '',
      saveData: true,
    },
  },
  forms: {
    name: '表单',
    icon: 'riInputCursorMove',
    description: '操作表单元素，支持输入框、单选、多选和复选框',
    component: 'BlockBasic',
    editComponent: 'EditForms',
    category: 'interaction',
    inputs: 1,
    outputs: 1,
    allowedInputs: true,
    maxConnection: 1,
    data: {
      description: '',
      selector: '',
      markEl: false,
      multiple: false,
      selected: true,
      clearValue: true,
      type: 'text-field',
      value: '',
      delay: 0,
      events: [],
    },
  },
  'repeat-task': {
    name: '重复任务',
    icon: 'riRepeat2Line',
    component: 'BlockRepeatTask',
    editComponent: 'EditTrigger',
    category: 'general',
    inputs: 1,
    outputs: 2,
    allowedInputs: true,
    maxConnection: 1,
    data: {
      repeatFor: 1,
    },
  },
  // 'reload-page': {
  //   name: 'Reload page',
  //   icon: 'riRestartLine',
  //   component: 'BlockBasic',
  //   category: 'interaction',
  //   inputs: 1,
  //   outputs: 1,
  //   allowedInputs: true,
  //   maxConnection: 1,
  //   disableEdit: true,
  //   data: {},
  // },
  'javascript-code': {
    name: 'JS代码',
    description: '在网页中执行自定义 JavaScript 代码',
    icon: 'riCodeSSlashLine',
    component: 'BlockBasic',
    editComponent: 'EditJavascriptCode',
    category: 'interaction',
    inputs: 1,
    outputs: 1,
    allowedInputs: true,
    maxConnection: 1,
    data: {
      description: '',
      timeout: 10000,
      code: 'console.log("Hello world!")',
    },
  },
  'trigger-event': {
    name: '触发事件',
    description: '触发事件',
    icon: 'riLightbulbFlashLine',
    component: 'BlockBasic',
    editComponent: 'EditTriggerEvent',
    category: 'interaction',
    inputs: 1,
    outputs: 1,
    allowedInputs: true,
    maxConnection: 1,
    data: {
      description: '',
      selector: '',
      markEl: false,
      multiple: false,
      eventName: '',
      eventType: '',
      eventParams: { bubbles: true, cancelable: false },
    },
  },
  conditions: {
    name: '条件',
    description: '条件节点',
    icon: 'riAB',
    component: 'BlockConditions',
    category: 'conditions',
    inputs: 1,
    outputs: 0,
    allowedInputs: true,
    maxConnection: 1,
    data: {
      conditions: [],
    },
  },
  'element-exists': {
    name: '元素存在',
    description: '根据元素是否存在执行下一步的工作流',
    icon: 'riFocus3Line',
    component: 'BlockElementExists',
    editComponent: 'EditElementExists',
    category: 'conditions',
    inputs: 1,
    outputs: 2,
    allowedInputs: true,
    maxConnection: 1,
    data: {
      selector: '',
      tryCount: 1,
      timeout: 500,
      markEl: false,
    },
  },
  webhook: {
    name: 'Webhook',
    description: '调用 Webhook 来通知外部服务',
    icon: 'webhookIcon',
    component: 'BlockBasic',
    editComponent: 'EditWebhook',
    category: 'general',
    inputs: 1,
    outputs: 1,
    allowedInputs: true,
    maxConnection: 1,
    data: {
      description: '',
      url: '',
      contentType: 'json',
      timeout: 10000,
      headers: [{ name: '', value: '' }],
      body: '{\n "key": {{ dataColumns@0.key }} \n}',
    },
  },
  'loop-data': {
    name: '循环数据',
    icon: 'riRefreshLine',
    component: 'BlockBasic',
    editComponent: 'EditLoopData',
    category: 'general',
    docs: true,
    inputs: 1,
    outputs: 1,
    allowedInputs: true,
    maxConnection: 1,
    data: {
      loopId: '',
      maxLoop: 0,
      loopData: '[]',
      description: '',
      loopThrough: 'data-columns',
    },
  },
  'loop-breakpoint': {
    name: '循环断点',
    description: '在断点处，结束循环',
    icon: 'riStopLine',
    component: 'BlockLoopBreakpoint',
    category: 'general',
    disableEdit: true,
    docs: true,
    inputs: 1,
    outputs: 1,
    allowedInputs: true,
    maxConnection: 1,
    data: {
      loopId: '',
    },
  },
  'switch-to': {
    name: '切换iFrame',
    description: '在主窗口和iFrame之间切换',
    icon: 'riArrowUpDownLine',
    component: 'BlockBasic',
    editComponent: 'EditSwitchTo',
    category: 'interaction',
    inputs: 1,
    outputs: 1,
    allowedInputs: true,
    maxConnection: 1,
    data: {
      selector: '',
      windowType: 'main-window',
    },
  },
  ...xmlTasks,
};

export const categories = {
  interaction: {
    name: '网页交互',
    color: 'bg-green-200',
  },
  browser: {
    name: '浏览器',
    color: 'bg-orange-200',
  },
  general: {
    name: '通用',
    color: 'bg-yellow-200',
  },
  conditions: {
    name: '条件',
    color: 'bg-blue-200',
  },
  ...xmlCategories,
};

export const eventList = [
  { id: 'click', name: '点击', type: 'mouse-event' },
  { id: 'dblclick', name: '双击', type: 'mouse-event' },
  { id: 'mouseup', name: '松开鼠标按键', type: 'mouse-event' },
  { id: 'mousedown', name: '按下鼠标按键', type: 'mouse-event' },
  { id: 'focus', name: '获得焦点', type: 'focus-event' },
  { id: 'blur', name: '失去焦点', type: 'focus-event' },
  { id: 'input', name: '输入', type: 'input-event' },
  { id: 'change', name: '改变', type: 'event' },
  { id: 'touchstart', name: '开始触摸', type: 'touch-event' },
  { id: 'touchend', name: '结束触摸', type: 'touch-event' },
  { id: 'touchmove', name: '移动触摸手指', type: 'touch-event' },
  { id: 'touchcancel', name: '取消触摸', type: 'touch-event' },
  { id: 'keydown', name: '按键', type: 'keyboard-event' },
  { id: 'keyup', name: '松开按键', type: 'keyboard-event' },
  { id: 'submit', name: '提交', type: 'submit-event' },
  { id: 'wheel', name: '鼠标滚轮', type: 'wheel-event' },
];

export const dataExportTypes = [
  { name: 'JSON', id: 'json' },
  { name: 'CSV', id: 'csv' },
  { name: '纯文本', id: 'plain-text' },
];

export const firstWorkflows = [
  {
    id: 'google-search',
    name: 'Google search',
    createdAt: Date.now(),
    drawflow: `{"drawflow":{"Home":{"data":{"d634ff22-5dfe-44dc-83d2-842412bd9fbf":{"id":"d634ff22-5dfe-44dc-83d2-842412bd9fbf","name":"trigger","data":{"type":"manual","interval":10},"class":"trigger","html":"BlockBasic","typenode":"vue","inputs":{},"outputs":{"output_1":{"connections":[{"node":"b9e7e0d4-e86a-4635-a352-31c63723fef4","output":"input_1"}]}},"pos_x":50,"pos_y":300},"b9e7e0d4-e86a-4635-a352-31c63723fef4":{"id":"b9e7e0d4-e86a-4635-a352-31c63723fef4","name":"new-tab","data":{"url":"https://google.com","active":true},"class":"new-tab","html":"BlockBasic","typenode":"vue","inputs":{"input_1":{"connections":[{"node":"d634ff22-5dfe-44dc-83d2-842412bd9fbf","input":"output_1"}]}},"outputs":{"output_1":{"connections":[{"node":"09f3a14c-0514-4287-93b0-aa92b0064fba","output":"input_1"}]}},"pos_x":278,"pos_y":268},"09f3a14c-0514-4287-93b0-aa92b0064fba":{"id":"09f3a14c-0514-4287-93b0-aa92b0064fba","name":"forms","data":{"description":"Type query","selector":"[name='q']","markEl":false,"multiple":false,"selected":true,"type":"text-field","value":"Stackoverflow","delay":"120","events":[]},"class":"forms","html":"BlockBasic","typenode":"vue","inputs":{"input_1":{"connections":[{"node":"b9e7e0d4-e86a-4635-a352-31c63723fef4","input":"output_1"}]}},"outputs":{"output_1":{"connections":[{"node":"5f76370d-aa3d-4258-8319-230fcfc49a3a","output":"input_1"}]}},"pos_x":551,"pos_y":290},"5f76370d-aa3d-4258-8319-230fcfc49a3a":{"id":"5f76370d-aa3d-4258-8319-230fcfc49a3a","name":"event-click","data":{"description":"Click search","selector":"center:nth-child(1) > .gNO89b","markEl":false,"multiple":false},"class":"event-click","html":"BlockBasic","typenode":"vue","inputs":{"input_1":{"connections":[{"node":"09f3a14c-0514-4287-93b0-aa92b0064fba","input":"output_1"}]}},"outputs":{"output_1":{"connections":[]}},"pos_x":794,"pos_y":308}}}}}`,
  },
  {
    id: 'lorem-ipsum',
    name: 'Generate lorem ipsum',
    createdAt: Date.now(),
    drawflow:
      '{"drawflow":{"Home":{"data":{"c5774692-0be4-457f-82be-d5e4b3344ad7":{"id":"c5774692-0be4-457f-82be-d5e4b3344ad7","name":"trigger","data":{"type":"manual"},"class":"trigger","html":"BlockBasic","typenode":"vue","inputs":{},"outputs":{"output_1":{"connections":[{"node":"10a0429e-b8c4-4c04-9ea3-df169cea78e4","output":"input_1"}]}},"pos_x":50,"pos_y":300},"10a0429e-b8c4-4c04-9ea3-df169cea78e4":{"id":"10a0429e-b8c4-4c04-9ea3-df169cea78e4","name":"new-tab","data":{"url":"http://lipsum.com","active":true},"class":"new-tab","html":"BlockBasic","typenode":"vue","inputs":{"input_1":{"connections":[{"node":"c5774692-0be4-457f-82be-d5e4b3344ad7","input":"output_1"}]}},"outputs":{"output_1":{"connections":[{"node":"24bdec44-1e80-4cee-9139-00545b8d33d9","output":"input_1"}]}},"pos_x":285,"pos_y":282},"df24edcc-4c29-49f5-8a29-0e572a4bc6ae":{"id":"df24edcc-4c29-49f5-8a29-0e572a4bc6ae","name":"delay","data":{"time":4000},"class":"delay","html":"BlockDelay","typenode":"vue","inputs":{"input_1":{"connections":[{"node":"24bdec44-1e80-4cee-9139-00545b8d33d9","input":"output_1"}]}},"outputs":{"output_1":{"connections":[{"node":"2d93c1de-42ca-4f39-8e61-e3e55529fbba","output":"input_1"}]}},"pos_x":833,"pos_y":297},"24bdec44-1e80-4cee-9139-00545b8d33d9":{"id":"24bdec44-1e80-4cee-9139-00545b8d33d9","name":"element-scroll","data":{"description":"","selector":"#amount","markEl":false,"multiple":false,"scrollY":0,"scrollX":0,"incX":false,"incY":false,"smooth":true,"scrollIntoView":true},"class":"element-scroll","html":"BlockBasic","typenode":"vue","inputs":{"input_1":{"connections":[{"node":"10a0429e-b8c4-4c04-9ea3-df169cea78e4","input":"output_1"},{"node":"2f5fec61-a318-4e2b-b7d3-bc7328bd282c","input":"output_1"}]}},"outputs":{"output_1":{"connections":[{"node":"df24edcc-4c29-49f5-8a29-0e572a4bc6ae","output":"input_1"}]}},"pos_x":566,"pos_y":317},"2d93c1de-42ca-4f39-8e61-e3e55529fbba":{"id":"2d93c1de-42ca-4f39-8e61-e3e55529fbba","name":"forms","data":{"description":"Lipsum length","selector":"#amount","markEl":false,"multiple":false,"selected":true,"type":"text-field","value":"3","delay":0,"events":[]},"class":"forms","html":"BlockBasic","typenode":"vue","inputs":{"input_1":{"connections":[{"node":"df24edcc-4c29-49f5-8a29-0e572a4bc6ae","input":"output_1"}]}},"outputs":{"output_1":{"connections":[{"node":"0f3e2baa-8d6d-4323-8ac7-362f1be39ecb","output":"input_1"}]}},"pos_x":1058,"pos_y":327},"0f3e2baa-8d6d-4323-8ac7-362f1be39ecb":{"id":"0f3e2baa-8d6d-4323-8ac7-362f1be39ecb","name":"event-click","data":{"description":"Generate button","selector":"#generate","markEl":false,"multiple":false},"class":"event-click","html":"BlockBasic","typenode":"vue","inputs":{"input_1":{"connections":[{"node":"2d93c1de-42ca-4f39-8e61-e3e55529fbba","input":"output_1"}]}},"outputs":{"output_1":{"connections":[{"node":"fb9be12f-8995-4876-8bfe-79323769474b","output":"input_1"}]}},"pos_x":1309,"pos_y":329},"fb9be12f-8995-4876-8bfe-79323769474b":{"id":"fb9be12f-8995-4876-8bfe-79323769474b","name":"delay","data":{"time":2000},"class":"delay","html":"BlockDelay","typenode":"vue","inputs":{"input_1":{"connections":[{"node":"0f3e2baa-8d6d-4323-8ac7-362f1be39ecb","input":"output_1"}]}},"outputs":{"output_1":{"connections":[{"node":"7205fcf2-deda-445e-9690-4e36adb52585","output":"input_1"}]}},"pos_x":1566,"pos_y":310},"7205fcf2-deda-445e-9690-4e36adb52585":{"id":"7205fcf2-deda-445e-9690-4e36adb52585","name":"get-text","data":{"description":"Get text result","selector":"#lipsum","markEl":false,"multiple":false,"regex":"","regexExp":["g"],"dataColumn":"","saveData":true},"class":"get-text","html":"BlockBasic","typenode":"vue","inputs":{"input_1":{"connections":[{"node":"fb9be12f-8995-4876-8bfe-79323769474b","input":"output_1"}]}},"outputs":{"output_1":{"connections":[{"node":"3d3e8fac-97fa-4c3d-84bc-a3db18740184","output":"input_1"}]}},"pos_x":1823,"pos_y":337},"3d3e8fac-97fa-4c3d-84bc-a3db18740184":{"id":"3d3e8fac-97fa-4c3d-84bc-a3db18740184","name":"repeat-task","data":{"repeatFor":2},"class":"repeat-task","html":"BlockRepeatTask","typenode":"vue","inputs":{"input_1":{"connections":[{"node":"7205fcf2-deda-445e-9690-4e36adb52585","input":"output_1"}]}},"outputs":{"output_1":{"connections":[{"node":"4d39ecd5-f33f-4e57-b11d-2f26b1076334","output":"input_1"}]},"output_2":{"connections":[{"node":"2f5fec61-a318-4e2b-b7d3-bc7328bd282c","output":"input_1","points":[{"pos_x":2290.2500152587886,"pos_y":542.0000076293943},{"pos_x":1125.2500152587886,"pos_y":552.0000076293943}]}]}},"pos_x":2073,"pos_y":293.5},"2f5fec61-a318-4e2b-b7d3-bc7328bd282c":{"id":"2f5fec61-a318-4e2b-b7d3-bc7328bd282c","name":"go-back","data":{},"class":"go-back","html":"BlockBasic","typenode":"vue","inputs":{"input_1":{"connections":[{"node":"3d3e8fac-97fa-4c3d-84bc-a3db18740184","input":"output_2"}]}},"outputs":{"output_1":{"connections":[{"node":"24bdec44-1e80-4cee-9139-00545b8d33d9","output":"input_1","points":[{"pos_x":1305.2500152587886,"pos_y":829.5000076293943},{"pos_x":545.250015258789,"pos_y":834.499988555908}]}]}},"pos_x":1135.5,"pos_y":628},"4d39ecd5-f33f-4e57-b11d-2f26b1076334":{"id":"4d39ecd5-f33f-4e57-b11d-2f26b1076334","name":"export-data","data":{"name":"Lipsum","type":"plain-text"},"class":"export-data","html":"BlockExportData","typenode":"vue","inputs":{"input_1":{"connections":[{"node":"3d3e8fac-97fa-4c3d-84bc-a3db18740184","input":"output_1"}]}},"outputs":{"output_1":{"connections":[]}},"pos_x":2409.75,"pos_y":289}}}}}',
  },
];

export const contentTypes = [
  { name: 'application/json', value: 'json' },
  { name: 'application/x-www-form-urlencoded', value: 'form' },
];
