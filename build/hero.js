!function(){"use strict";var e=window.wp.element,t=window.wp.blockEditor;wp.blocks.registerBlockType("dr-blocks/hero",{title:"Hero",attributes:{titleSmall:{type:"string"},titleBig:{type:"string"},titleCaps:{type:"string"},titleYear:{type:"string"}},edit:function(a){return(0,e.createElement)("section",{className:"container container--p300 container--p50-top container__hero-top"},(0,e.createElement)("div",{className:"container__inner hero"},(0,e.createElement)("div",{class:"hero__left"},(0,e.createElement)(t.RichText,{allowedFormats:["core/bold","core/italic","core/text-color"],tagName:"h3",className:"pb-sm",value:a.attributes.titleSmall,onChange:function(e){a.setAttributes({titleSmall:e})},placeholder:"Top left title"}),(0,e.createElement)(t.RichText,{allowedFormats:["core/bold","core/italic","core/text-color"],tagName:"h1",value:a.attributes.titleBig,onChange:function(e){a.setAttributes({titleBig:e})},placeholder:"Main H1 title"})),(0,e.createElement)("div",{className:"hero__right"},(0,e.createElement)(t.RichText,{allowedFormats:["core/bold","core/italic","core/text-color"],tagName:"h4",className:"pb-sm",value:a.attributes.titleCaps,onChange:function(e){a.setAttributes({titleCaps:e})},placeholder:"Right caps text"}),(0,e.createElement)(t.RichText,{allowedFormats:["core/bold","core/italic","core/text-color"],tagName:"h4",className:"pb-sm",value:a.attributes.titleYear,onChange:function(e){a.setAttributes({titleYear:e})},placeholder:"Right year text"}))))},save:function(e){return null}})}();