wp.blocks.registerBlockType("dr-blocks/footer", {
    title: "DR Footer",
    edit: function(){
        return wp.element.createElement("section", {className: "placeholder-block"}, "Footer Placeholder")
    },
    save: function(){
        return null
    }
})