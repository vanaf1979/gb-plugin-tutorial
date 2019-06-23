import React from 'react'

const { __ } = wp.i18n;
const { compose } = wp.compose;
const { withDispatch, withSelect } = wp.data;
const { TextareaControl } = wp.components;


class MetaDescriptionField extends React.Component {
    
    constructor() {

        super()

    }


    render() {

        return (

            <div className="metatags-browser-title-field">

                <TextareaControl
                    label={__("Meta description", "metatags")}
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
                dispatch( 'core/editor' ).editPost( { meta: { metatags_description_field: value } } );
            }
        }

    }),
    withSelect(( select , props ) => {
        
        return {
            metaFieldValue: select( 'core/editor' ).getEditedPostAttribute( 'meta' )[ 'metatags_description_field' ],
        };

    }),

])( MetaDescriptionField );