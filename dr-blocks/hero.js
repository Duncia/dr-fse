import {RichText} from "@wordpress/block-editor"

wp.blocks.registerBlockType("dr-blocks/hero", {
    title: "Hero",
    attributes: {
        titleSmall: {type: "string"},
        titleBig: {type: "string"},
        titleCaps: {type: "string"},
        titleYear: {type: "string"}
    },
    edit: EditComponent,
    save: SaveComponent
})

function EditComponent(props){
    function handleTitleSmallChange(val){
        props.setAttributes({titleSmall: val})
    }
    function handleTitleBigChange(val){
        props.setAttributes({titleBig: val})
    }
    function handleTitleCapsChange(val){
        props.setAttributes({titleCaps: val})
    }
    function handleTitleYearChange(val){
        props.setAttributes({titleYear: val})
    }
    return(
        <section className="container container--p300 container--p50-top container__hero-top">
            <div className="container__inner hero">
                <div class="hero__left">
                    <RichText allowedFormats={["core/bold", "core/italic", "core/text-color"]} tagName="h3" className="pb-sm" value={props.attributes.titleSmall} onChange={handleTitleSmallChange} placeholder={"Top left title"}/>
                    <RichText allowedFormats={["core/bold", "core/italic", "core/text-color"]} tagName="h1" value={props.attributes.titleBig} onChange={handleTitleBigChange} placeholder={"Main H1 title"}/>
                </div>
                <div className="hero__right">
                    <RichText allowedFormats={["core/bold", "core/italic", "core/text-color"]} tagName="h4" className="pb-sm" value={props.attributes.titleCaps} onChange={handleTitleCapsChange} placeholder={"Right caps text"}/>
                    <RichText allowedFormats={["core/bold", "core/italic", "core/text-color"]} tagName="h4" className="pb-sm" value={props.attributes.titleYear} onChange={handleTitleYearChange} placeholder={"Right year text"}/>
                </div>
            </div>
        </section>
    )
}

function SaveComponent(props){
    return null
}