require(["jquery","underscore","backbone","splunk.util","views/shared/controls/SyntheticRadioControl"],(function(__WEBPACK_EXTERNAL_MODULE__0__,__WEBPACK_EXTERNAL_MODULE__1__,__WEBPACK_EXTERNAL_MODULE__3__,__WEBPACK_EXTERNAL_MODULE__4__,__WEBPACK_EXTERNAL_MODULE__7__){return function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={i:moduleId,l:!1,exports:{}};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.l=!0,module.exports}return __webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.d=function(exports,name,getter){__webpack_require__.o(exports,name)||Object.defineProperty(exports,name,{enumerable:!0,get:getter})},__webpack_require__.r=function(exports){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.t=function(value,mode){if(1&mode&&(value=__webpack_require__(value)),8&mode)return value;if(4&mode&&"object"==typeof value&&value&&value.__esModule)return value;var ns=Object.create(null);if(__webpack_require__.r(ns),Object.defineProperty(ns,"default",{enumerable:!0,value:value}),2&mode&&"string"!=typeof value)for(var key in value)__webpack_require__.d(ns,key,function(key){return value[key]}.bind(null,key));return ns},__webpack_require__.n=function(module){var getter=module&&module.__esModule?function(){return module.default}:function(){return module};return __webpack_require__.d(getter,"a",getter),getter},__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s="splunk_monitoring_console-extensions/index_detail_deployment_extension")}({0:function(module,exports){module.exports=__WEBPACK_EXTERNAL_MODULE__0__},1:function(module,exports){module.exports=__WEBPACK_EXTERNAL_MODULE__1__},3:function(module,exports){module.exports=__WEBPACK_EXTERNAL_MODULE__3__},4:function(module,exports){module.exports=__WEBPACK_EXTERNAL_MODULE__4__},7:function(module,exports){module.exports=__WEBPACK_EXTERNAL_MODULE__7__},"splunk_monitoring_console-extensions/index_detail_deployment_extension":function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;__WEBPACK_AMD_DEFINE_ARRAY__=[__webpack_require__(1),__webpack_require__(0),__webpack_require__(3),__webpack_require__(4),__webpack_require__(7)],void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(_,$,Backbone,utils,SyntheticRadioControl){$(".viz").hide(),this.model=this.model||{},this.model.state=new Backbone.Model({showHeatMap:!1,selectedGroup:"all",relatedTo:""});var heat_map_toggle=new SyntheticRadioControl({model:this.model.state,modelAttribute:"showHeatMap",items:[{label:_("Column Chart").t(),value:!1},{label:_("Heat Map").t(),value:!0}]});$("#instances_by_index_usage .heatmap_toggle").append(heat_map_toggle.render().$el),$("#instances_by_index_usage .heatmap_toggle .btn-group .btn").click((function(){"true"==this.getAttribute("data-value")?($("#instances_by_index_usage .viz").show(),$("#instances_by_index_usage .chart").hide()):"false"==this.getAttribute("data-value")&&($("#instances_by_index_usage .viz").hide(),$("#instances_by_index_usage .chart").show())}))}.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}})}));