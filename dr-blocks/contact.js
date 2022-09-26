import {link} from "@wordpress/icons"
import {ToolbarGroup, ToolbarButton, Popover, Button} from "@wordpress/components"
import {RichText, BlockControls, __experimentalLinkControl as LinkControl} from "@wordpress/block-editor"
import {useState} from "@wordpress/element"

wp.blocks.registerBlockType("dr-blocks/contact", {
    title: "Contact",
    attributes: {
        title: {type: "string"},
        buttonText: {type: "string"},
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
            <div className="container__inner contact">
                <div className="contact__left">
                    <RichText allowedFormats={["core/bold", "core/italic", "core/text-color"]} tagName="h3" value={props.attributes.title} onChange={handleTitleChange} placeholder={"Main text"}/>        
                </div>
                <div className="explanation__right txt-center">
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
            </div>
        </section>
    </>
    )
}

function SaveComponent(props){
    return null
}