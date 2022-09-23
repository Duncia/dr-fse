import {RichText} from "@wordpress/block-editor"

wp.blocks.registerBlockType("dr-blocks/hero-page", {
    title: "Hero page",
    attributes: {
        title: {type: "string"},
        text: {type: "string"}
    },
    edit: EditComponent,
    save: SaveComponent
})

function EditComponent(props){
    function handleTitleSmallChange(val){
        props.setAttributes({title: val})
    }
    function handleTitleBigChange(val){
        props.setAttributes({text: val})
    }
    return(
        <section className="container container--p300 container--p50-top container__hero-top">
            <div className="container__inner hero--page">
                <RichText allowedFormats={["core/bold", "core/italic", "core/text-color"]} tagName="h1" className="pb-sm" value={props.attributes.title} onChange={handleTitleSmallChange} placeholder={"Title"}/>
                <RichText allowedFormats={["core/bold", "core/italic", "core/text-color"]} tagName="p" className="pb-sm" value={props.attributes.text} onChange={handleTitleBigChange} placeholder={"Text"}/>
            </div>
        </section>
    )
}

function SaveComponent(props){
    return null
}