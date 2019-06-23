
/**
 * Local dependencies.
 */
import Sidebar from './components/sidebar.js';

/**
 * WordPress dependencies.
 */
const { registerPlugin } = wp.plugins;

/**
 * Register the MetaTags plugin.
 */
registerPlugin("metatags", {
    icon: 'editor-customchar',
    render: Sidebar
});