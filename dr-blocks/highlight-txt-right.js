import {RichText} from "@wordpress/block-editor"
import { InnerBlocks } from "@wordpress/block-editor"

wp.blocks.registerBlockType("dr-blocks/highlight-txt-right", {
    title: "Highlight Text Right",
    attributes: {
        title: {type: "string"},
        subtitle: {type: "string"}
    },
    edit: EditComponent,
    save: SaveComponent
})

function EditComponent(props){
    function handleTitleChange(val){
        props.setAttributes({title: val})
    }
    function handleTextChange(val){
        props.setAttributes({subtitle: val})
    }
    return(
        <section className="container container--p300">
            <div className="container__inner highlight pb-lr">
                <div className="highlight__img">
                    <img width="600" height="300" 
                    srcset="http://localhost/dr-fse/wp-content/themes/dr-fse/img/laptop-mobile.jpg 480w, http://localhost/dr-fse/wp-content/themes/dr-fse/img/laptop-desktop.jpg 768w" alt="Laptop" />
                </div>
                <div className="highlight__box">
                    <RichText allowedFormats={["core/bold", "core/italic"]} tagName="h3" className="pb-sm" value={props.attributes.title} onChange={handleTitleChange} placeholder={"H3 heading text"}/>
                    <RichText allowedFormats={["core/bold", "core/italic"]} tagName="p" value={props.attributes.subtitle} onChange={handleTextChange} placeholder={"Paragraph text"}/>  
                </div>
            </div>
        </section>
    )
}

function SaveComponent(props){
    return (
        <section className="container container--p300">
            <div className="container__inner highlight pb-lr">
                <div className="highlight__img">
                    <img width="600" height="300" 
                    srcset="http://localhost/dr-fse/wp-content/themes/dr-fse/img/laptop-mobile.jpg 480w, http://localhost/dr-fse/wp-content/themes/dr-fse/img/laptop-desktop.jpg 768w" alt="Laptop" />
                </div>
                <div className="highlight__box">
                    <RichText.Content tagName="h3" className="pb-sm" value={props.attributes.title}/>
                    <RichText.Content tagName="p" value={props.attributes.subtitle}/>
                </div>
            </div>
        </section>
    )
}