import {link} from "@wordpress/icons"
import DesktopPlaceHolderImage from "../img/desktop-placeholder.jpg"
import MobilePlaceHolderImage from "../img/mobile-placeholder.jpg"
import {ToolbarGroup, ToolbarButton, Popover, Button, PanelBody, PanelRow} from "@wordpress/components"
import {RichText, InspectorControls, MediaUpload, MediaUploadCheck, BlockControls, __experimentalLinkControl as LinkControl } from "@wordpress/block-editor"
import {useState} from "@wordpress/element"

wp.blocks.registerBlockType("dr-blocks/highlight-txt-right", {
    title: "Highlight Text Right",
    attributes: {
        title: {type: "string"},
        subtitle: {type: "string"},
        imgID: {type: "number"},
        imgIDMobile: {type: "number"},
        imgUrl: {type: "string", default: DesktopPlaceHolderImage},
        imgUrlMobile: {type: "string", default: MobilePlaceHolderImage},
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
    function handleTextChange(val){
        props.setAttributes({subtitle: val})
    }
    function onFileSelect(img){
        props.setAttributes({imgID: img.id})
        props.setAttributes({imgUrl: img.url})
    }
    function onFileSelectMobile(img){
        props.setAttributes({imgIDMobile: img.id})
        props.setAttributes({imgUrlMobile: img.url})
    }
    function buttonHandler() {
        setIsLinkPickerVisible(prev => !prev)
    }
    function handleLinkChange(newLink) {
        props.setAttributes({ linkObject: newLink })
    }
    return(
        <>
            <InspectorControls>
                <PanelBody title="Images" initialOpen={true}>
                    <PanelRow>
                        <MediaUploadCheck>
                            <MediaUpload onSelect={onFileSelect} value={props.attributes.imgID} render={({open}) => {
                                return <Button onClick={open}>Desktop image</Button>
                            }} />
                        </MediaUploadCheck>
                    </PanelRow>
                    <PanelRow>
                        <MediaUploadCheck>
                            <MediaUpload onSelect={onFileSelectMobile} value={props.attributes.imgIDMobile} render={({open}) => {
                                return <Button onClick={open}>Mobile image</Button>
                            }} />
                        </MediaUploadCheck>
                    </PanelRow>
                </PanelBody>
            </InspectorControls>
            <BlockControls>
                <ToolbarGroup>
                    <ToolbarButton onClick={buttonHandler} icon={link} />
                </ToolbarGroup>
            </BlockControls>
            <section className="container container--p300">
                <div className="container__inner highlight pb-lr">
                    <div className="highlight__img">
                        <img width="600" height="300" 
                        srcSet={`${props.attributes.imgUrlMobile} 480w, ${props.attributes.imgUrl} 768w`}
                        alt="Laptop" />
                    </div>
                    <div className="highlight__box">
                        <RichText allowedFormats={["core/bold", "core/italic", "core/text-color"]} tagName="h3" className="pb-sm" value={props.attributes.title} onChange={handleTitleChange} placeholder={"H3 heading text"}/>
                        <RichText allowedFormats={["core/bold", "core/italic", "core/text-color"]} tagName="p" value={props.attributes.subtitle} onChange={handleTextChange} placeholder={"Paragraph text"}/>
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