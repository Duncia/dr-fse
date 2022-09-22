!function(){"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),function(){var t;e.g.importScripts&&(t=e.g.location+"");var i=e.g.document;if(!t&&i&&(i.currentScript&&(t=i.currentScript.src),!t)){var l=i.getElementsByTagName("script");l.length&&(t=l[l.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t}();var t=window.wp.element,i=window.wp.primitives,l=(0,t.createElement)(i.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,t.createElement)(i.Path,{d:"M15.6 7.2H14v1.5h1.6c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.8 0 5.2-2.3 5.2-5.2 0-2.9-2.3-5.2-5.2-5.2zM4.7 12.4c0-2 1.7-3.7 3.7-3.7H10V7.2H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2H10v-1.5H8.4c-2 0-3.7-1.7-3.7-3.7zm4.6.9h5.3v-1.5H9.3v1.5z"})),n=e.p+"images/desktop-placeholder.ba51a9eb.jpg",r=e.p+"images/mobile-placeholder.b5c3d8d1.jpg",a=window.wp.components,o=window.wp.blockEditor;wp.blocks.registerBlockType("dr-blocks/highlight-txt-right",{title:"Highlight Text Right",attributes:{title:{type:"string"},subtitle:{type:"string"},imgID:{type:"number"},imgIDMobile:{type:"number"},imgUrl:{type:"string",default:n},imgUrlMobile:{type:"string",default:r},buttonText:{type:"string"},linkObject:{type:"object"}},edit:function(e){const[i,n]=(0,t.useState)(!1);return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(o.InspectorControls,null,(0,t.createElement)(a.PanelBody,{title:"Images",initialOpen:!0},(0,t.createElement)(a.PanelRow,null,(0,t.createElement)(o.MediaUploadCheck,null,(0,t.createElement)(o.MediaUpload,{onSelect:function(t){e.setAttributes({imgID:t.id}),e.setAttributes({imgUrl:t.url})},value:e.attributes.imgID,render:e=>{let{open:i}=e;return(0,t.createElement)(a.Button,{onClick:i},"Desktop image")}}))),(0,t.createElement)(a.PanelRow,null,(0,t.createElement)(o.MediaUploadCheck,null,(0,t.createElement)(o.MediaUpload,{onSelect:function(t){e.setAttributes({imgIDMobile:t.id}),e.setAttributes({imgUrlMobile:t.url})},value:e.attributes.imgIDMobile,render:e=>{let{open:i}=e;return(0,t.createElement)(a.Button,{onClick:i},"Mobile image")}}))))),(0,t.createElement)(o.BlockControls,null,(0,t.createElement)(a.ToolbarGroup,null,(0,t.createElement)(a.ToolbarButton,{onClick:function(){n((e=>!e))},icon:l}))),(0,t.createElement)("section",{className:"container container--p300"},(0,t.createElement)("div",{className:"container__inner highlight pb-lr"},(0,t.createElement)("div",{className:"highlight__img"},(0,t.createElement)("img",{width:"600",height:"300",srcSet:`${e.attributes.imgUrlMobile} 480w, ${e.attributes.imgUrl} 768w`,alt:"Laptop"})),(0,t.createElement)("div",{className:"highlight__box"},(0,t.createElement)(o.RichText,{allowedFormats:["core/bold","core/italic","core/text-color"],tagName:"h3",className:"pb-sm",value:e.attributes.title,onChange:function(t){e.setAttributes({title:t})},placeholder:"H3 heading text"}),(0,t.createElement)(o.RichText,{allowedFormats:["core/bold","core/italic","core/text-color"],tagName:"p",value:e.attributes.subtitle,onChange:function(t){e.setAttributes({subtitle:t})},placeholder:"Paragraph text"}),(0,t.createElement)(o.RichText,{allowedFormats:["core/bold","core/italic"],tagName:"a",className:"btn",value:e.attributes.buttonText,onChange:t=>{e.setAttributes({buttonText:t})},placeholder:"Button text"}),i&&(0,t.createElement)(a.Popover,{position:"middle center",onFocusOutside:()=>n(!1)},(0,t.createElement)(o.__experimentalLinkControl,{settings:[{id:"opensInNewTab",title:"New tab?"}],value:e.attributes.linkObject,onChange:function(t){e.setAttributes({linkObject:t})}}),(0,t.createElement)(a.Button,{variant:"primary",onClick:()=>n(!1),style:{display:"block",width:"100%"}},"Confirm Link"))))))},save:function(e){return null}})}();