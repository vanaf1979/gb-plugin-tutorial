<?php
/**
 * Plugin Name: MetaTags
 * Plugin URI: https://vanaf1979.nl/
 * Description: Gutenberg search engine metatag sidebar plugin.
 * Version: 1.0
 * Author: Vanaf1979
 * Author URI: https://vanaf1979.nl/
 * Text Domain: metatags
 * Domain Path: languages
 */

namespace MetaTags;


if ( ! defined( 'ABSPATH' ) ) exit;


/**
 * Main MetaTags Class.
 *
 * @since  1.0
 */
class MetaTags {

    /**
     * MetaTags instance.
     *
     * @var array $instance
     */
    private static $instance;


    /**
     * This plugins name.
     *
     * @var array $pluginname
     */
    private static $pluginslug = 'metatags';


    /**
     * WordPress post meta fields.
     *
     * @var array $metafields
     */
    private $metafields = array(
        'title' => 'metatags_browser_title',
        'description' => 'metatags_description_field',
        'robots' => 'metatags_robots_field'
    );


    /**
     * Gutenberg dependancies.
     *
     * @var array $dependancies
     */
    private $dependancies = array(
        'wp-plugins',
        'wp-edit-post',
        'wp-element',
        'wp-components',
        'wp-data',
        'wp-dom-ready'
    );


    /**
     * __construct.
     *
     * Initialize properties.
     *
     * @since 1.0.0
     */
    public function __construct() { }


    /**
     * instance.
     *
     * Initialize the plugin.
     *
     * @since 1.0.0
     */
    public static function instance() {

        if ( ! isset( self::$instance ) && ! ( self::$instance instanceof MetaTags ) ) {

            self::$instance = new Self();

        }

        return self::$instance;

    }


    /**
     * register.
     *
     * Register hooks with WordPress.
     * 
     * @uses add_action() https://developer.wordpress.org/reference/functions/add_action/
     *
     * @access public
     * @return void
     */
    public function register() : void {

        \add_action(
            'enqueue_block_editor_assets',
            array( $this , 'enqueue_styles' ),
            999
        );

        \add_action(
            'enqueue_block_editor_assets',
            array( $this , 'enqueue_scripts'),
            999
        );

        \add_action(
            'init',
            array( $this , 'register_meta_fields' ),
            1
        );

        \add_action(
            'after_setup_theme',
            array( $this , 'add_title_theme_support' ),
            1
        );

        \add_action(
            'pre_get_document_title',
            array( $this , 'add_title_to_head' ),
            999
        );

        \add_action(
            'wp_head',
            array( $this , 'add_metatags_to_head' ),
            1,
            1
        );

    }


    /**
     * enqueue_styles.
     * 
     * Enqueue editor sidebar stylesheets.
     * 
     * @uses wp_enqueue_style() https://developer.wordpress.org/reference/functions/wp_enqueue_style/
     * 
     * @access public
     * @return void
     */
    public function enqueue_styles() : void {

        \wp_enqueue_style(
            $this->pluginslug . '-styles',
            plugin_dir_url( __FILE__ ) . 'dist/css/metatags.css',
            array(),
            '1.0.0',
            'all'
        );

    }


    /**
     * enqueue_scripts.
     * 
     * Enqueue editor sidebar scripts.
     * 
     * @uses wp_enqueue_script() https://developer.wordpress.org/reference/functions/wp_enqueue_script/
     * 
     * @access public
     * @return void
     */
    public function enqueue_scripts() : void {

        \wp_enqueue_script(
            $this->pluginslug . '-scripts',
            plugin_dir_url( __FILE__ ) . 'dist/js/metatags.js',
            $this->dependancies,
            '1.0.0',
            'all'
        );

    }


    /**
     * register_meta_fields.
     * 
     * Register meta fields with WordPress.
     * 
     * @uses register_meta() https://developer.wordpress.org/reference/functions/register_meta/
     * 
     * @access public
     * @return void
     */
    public function register_meta_fields() : void {

        $args = array(
            'show_in_rest' => true,
            'single' => true,
            'type' => 'string',
        );

        foreach( $this->metafields as $key => $value ) {

            \register_meta( 'post' , $value , $args );

        }
        
    }


    /**
     * add_title_theme_support.
     *
     * Add theme support for the title tag.
     * 
     * @uses add_theme_support() https://developer.wordpress.org/reference/functions/add_theme_support/
     *
     * @access public
     * @return void
     */
    public function add_title_theme_support() {
        
        \add_theme_support( 'title-tag' );

    }


    /**
     * add_title_to_head.
     *
     * Add a title tag to the head.
     *
     * @uses get_post_meta() https://developer.wordpress.org/reference/functions/get_post_meta/
     * 
     * @access public
     * @param string $title
     * @return string
     */
    public function add_title_to_head( String $title ) : string {

        global $post;

        $title = \trim( \get_post_meta( $post->ID , 'metatags_browser_title' , true ) );

        return $title > '' ? $title : $post->post_title;
        
    }


    /**
     * add_metatags_to_head.
     *
     * Add seo meta tags to the head.
     *
     * @uses get_post_meta() https://developer.wordpress.org/reference/functions/get_post_meta/
     * 
     * @since 1.0.0
     * @access public
     * @return void
     */
    public function add_metatags_to_head() : void {

        global $post;
        
        foreach( $this->metafields as $key => $value ) {

            if ( $key == 'title' ) {

                continue;

            }
            
            $value = \trim( \get_post_meta( $post->ID , $value , true ) );

            echo "\t<meta name=\"{$key}\" content=\"{$value}\" />\n";

        }

    }

}


function runMetaTagse() {

    MetaTags::instance()->register();

}

runMetaTagse();
?>