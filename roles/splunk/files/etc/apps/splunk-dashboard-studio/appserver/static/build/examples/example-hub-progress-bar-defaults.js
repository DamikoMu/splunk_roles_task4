import{a}from"../chunks/chunk-WOT7CAEO.js";import"../chunks/chunk-DHWZTE6I.js";import"../chunks/chunk-V5HIW6KV.js";import"../chunks/chunk-MNBJFLCI.js";import"../chunks/chunk-YCDSEQ2I.js";import"../chunks/chunk-QFKHGRFL.js";import"../chunks/chunk-ITAS4PYU.js";import"../chunks/chunk-AZCO5M5M.js";import"../chunks/chunk-25ZUMQES.js";import{a as r}from"../chunks/chunk-46S5TEW5.js";import"../chunks/chunk-KFU7BJII.js";import"../chunks/chunk-FGFH2JG2.js";import{b as s}from"../chunks/chunk-FQXD4G67.js";import{i as t}from"../chunks/chunk-VV54FNKQ.js";var i=t(s()),o=t(r());var e={visualizations:{viz_pcZVNjLm:{type:"splunk.markdown",options:{markdown:`## Overview
Using defaults saves you time by applying a certain configuration or option in one place. One visualization option that is useful when set as a default is the **progress bar**. Normally, Dashboard Studio visualizations always come with the \`"showProgressBar": false\` option already shown (Example's Hub visualizations have these removed from the displayed source). 

The progress bar allows some visibility into the status of your search. Which can be useful for large searches and can indicate whether or not your dashboard has the latest information or is still retrieving it from Splunk. 

All available visualization defaults can be set globally, per visualization type, and locally within each visualization definition. The local configuration takes highest priority, then type option, then the global option. 

To the right is a GIF of a visualization that has the progress bar enabled. 

### Default Definition
\`\`\`
"defaults": {
		"visualizations": {
			"global": {
				"showProgressBar": false
			},
			"splunk.area": {
				"showProgressBar": true
			}
		}
	}
\`\`\``}},viz_0QN67Fwe:{type:"splunk.image",showProgressBar:!1,showLastUpdated:!1,options:{src:"/static/app/splunk-dashboard-studio/images/examples-hub/progress_bar.gif"}}},dataSources:{},defaults:{visualizations:{global:{showProgressBar:!1},"splunk.area":{showProgressBar:!0}}},inputs:{},layout:{type:"grid",options:{},structure:[{item:"viz_pcZVNjLm",type:"block",position:{x:0,y:0,w:634,h:726}},{item:"viz_0QN67Fwe",type:"block",position:{x:634,y:0,w:566,h:726}}],globalInputs:[]},description:"Progress bars can be revealed per visualization instance, for every visualization of a certain type, or at a default global level",title:"Progress Bar Defaults"};(0,o.default)(i.default.createElement(a,{definition:e}),{pageTitle:"Progress Bar Defaults",hideFooter:!0,layout:"fixed"});
