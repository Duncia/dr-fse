wp.blocks.registerBlockType("dr-blocks/header", {
    title: "DR Header",
    edit: function(){
        return wp.element.createElement("section", {className: "placeholder-block"}, "Header Placeholder")
    },
    save: function(){
        return null
    }
})