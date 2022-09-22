import {link} from "@wordpress/icons"
import {ToolbarGroup, ToolbarButton, Popover, Button} from "@wordpress/components"
import {RichText, BlockControls, __experimentalLinkControl as LinkControl} from "@wordpress/block-editor"
import {useState} from "@wordpress/element"

wp.blocks.registerBlockType("dr-blocks/explanation", {
    title: "Explanation",
    attributes: {
        title: {type: "string"},
        subtitle: {type: "string"},
        buttonText: {type: "string"},
        description: {type: "string"},
        linkObject: { type: "object" }
    },
    edit: EditComponent,
    save: SaveComponent
})

function EditComponent(props){
    const [isLinkPickerVisible, setIsLinkPickerVisible] = useState(false)

    function handleTitleChange(val){
        props.setAttributes({title: val})
    }
    function handleTextChange(val){
        props.setAttributes({subtitle: val})
    }
    function handleDescriptionChange(val){
        props.setAttributes({description: val})
    }
    function buttonHandler() {
        setIsLinkPickerVisible(prev => !prev)
    }
    function handleLinkChange(newLink) {
        props.setAttributes({ linkObject: newLink })
    }
    return(
    <>
            <BlockControls>
                <ToolbarGroup>
                    <ToolbarButton onClick={buttonHandler} icon={link} />
                </ToolbarGroup>
            </BlockControls>
        <section className="container container--p300">
            <div className="container__inner explanation pb-lr">
                <div className="explanation__left">
                    <RichText allowedFormats={["core/bold", "core/italic"]} tagName="h3" className="pb-sm" value={props.attributes.title} onChange={handleTitleChange} placeholder={"H3 heading text"}/>
                    <RichText allowedFormats={["core/bold", "core/italic"]} tagName="p" className="pb-sm" value={props.attributes.subtitle} onChange={handleTextChange} placeholder={"Paragraph text"}/>        
                    <RichText allowedFormats={["core/bold", "core/italic"]} tagName="a" className="btn" value={props.attributes.buttonText} onChange={(val) => {props.setAttributes({buttonText: val})}} placeholder={"Button text"}/>
                    {isLinkPickerVisible && (
                        <Popover position="middle center" onFocusOutside={() => setIsLinkPickerVisible(false)}>
                            <LinkControl settings={[{
							id: 'opensInNewTab',
							title: 'New tab?',
						}]} value={props.attributes.linkObject} onChange={handleLinkChange} />
                            <Button variant="primary" onClick={() => setIsLinkPickerVisible(false)} style={{ display: "block", width: "100%" }}>Confirm Link</Button>
                        </Popover>
                    )}
                </div>
                <div className="explanation__right txt-center">
                    <RichText allowedFormats={["core/bold", "core/italic"]} tagName="h4" className="pb-sm" value={props.attributes.description} onChange={handleDescriptionChange} placeholder={"Description"}/>
                </div>
            </div>
        </section>
    </>
    )
}

function SaveComponent(props){
    return null
}