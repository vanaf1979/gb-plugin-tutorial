/**
 * External dependencies.
 */
import React from 'react'

/**
 * WordPress dependencies.
 */
const { __ } = wp.i18n;
const { compose } = wp.compose;
const { withDispatch, withSelect } = wp.data;
const { TextControl } = wp.components;


/**
 * Browser title input component.
 *
 * @since 1.0.0
 */
class BrowserTitleField extends React.Component {
    
    constructor() {

        super()

    }


    render() {

        return (

            <div className="metatags-browser-title-field">

                <TextControl
                    label={__("Brwoser title", "metatags")}
                    value={this.props.metaFieldValue}
                    onChange={this.props.setMetaFieldValue}
                />

            </div>

        )

    }

}


export default compose([

    withDispatch(( dispatch , props ) => {

        return {
            setMetaFieldValue: function( value ) {
                dispatch( 'core/editor' ).editPost( { meta: { metatags_browser_title: value } } );
            }
        }

    }),
    withSelect(( select , props ) => {
        
        return {
            metaFieldValue: select( 'core/editor' ).getEditedPostAttribute( 'meta' )[ 'metatags_browser_title' ],
        };

    }),

])( BrowserTitleField );