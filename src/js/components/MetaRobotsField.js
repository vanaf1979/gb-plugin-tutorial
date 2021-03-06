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
const { RadioControl } = wp.components;


/**
 * Meta robots input component.
 *
 * @since 1.0.0
 */
class MetaRobotsField extends React.Component {
    
    constructor() {

        super()

    }


    render() {

        return (

            <div className="metatags-browser-title-field">

               <RadioControl
                    label={__("Robots", "metatags")}
                    selected={ this.props.metaFieldValue ? this.props.metaFieldValue : 'index, follow' }
                    options={ [
                        { label: 'Index, Follow', value: 'index, follow' },
                        { label: 'Index, NoFollow', value: 'index, nofollow' },
                        { label: 'NoIndex, NoFollow', value: 'noindex, nofollow' },
                        { label: 'NoIndex, Follow', value: 'noindex, follow' },
                    ] }
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
                dispatch( 'core/editor' ).editPost( { meta: { metatags_robots_field: value } } );
            }
        }

    }),
    withSelect(( select , props ) => {
        
        return {
            metaFieldValue: select( 'core/editor' ).getEditedPostAttribute( 'meta' )[ 'metatags_robots_field' ],
        };

    }),

])( MetaRobotsField );