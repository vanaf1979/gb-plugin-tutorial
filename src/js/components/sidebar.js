/**
 * External dependencies.
 */
import React from 'react'

/**
 * Local dependencies.
 */
import BrowserTitleField from './BrowserTitleField.js';
import MetaDescriptionField from './MetaDescriptionField.js';
import MetaRobotsField from './MetaRobotsField.js';

/**
 * WordPress dependencies.
 */
const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { PluginSidebarMoreMenuItem, PluginSidebar } = wp.editPost;
const { Panel } = wp.components;


/**
 * Sidebar component voor the gutenberg editor.
 *
 * @since 1.0.0
 */
class Sidebar extends React.Component {
    
    constructor() {

        super()

    }


    render() {

        return (
            <Fragment>

                <PluginSidebarMoreMenuItem target="metatags-sidebar" icon='editor-customchar'>

                    {__("MetaTags", "metatags")}

                </PluginSidebarMoreMenuItem>

                <PluginSidebar name="metatags-sidebar" title={__("MetaTags", "metatags")} >

                    <div className="metabox-sidebar-content">

                        <BrowserTitleField/>

                        <MetaDescriptionField/>

                        <MetaRobotsField/>
                        
                    </div>

                </PluginSidebar>

            </Fragment>
        )

    }

}


export default Sidebar
