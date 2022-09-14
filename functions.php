<?php
//Theme setup
function drfse_setup(){
    //Title in the tab of every page
    add_theme_support('title-tag');
    //Enabling thumbnails
    add_theme_support('post-thumbnails');
    //Support for Woocommerce
    add_theme_support('woocommerce');
    //Load translations in languages folder
    load_theme_textdomain( 'drfse', get_template_directory() . '/languages' );
}
add_action('after_setup_theme', 'drfse_setup');

//Add JS/CSS files
function drfse_js_css_files() {
    wp_enqueue_style('drfse_main_styles', get_theme_file_uri('/build/style-index.css'));
    wp_enqueue_script('index', get_theme_file_uri('/build/index.js'), array('jquery'), '1.0.0', true);
  }
add_action('wp_enqueue_scripts', 'drfse_js_css_files');

//Remove dash from page title
add_filter( 'document_title_separator', 'document_title_separator' );
function document_title_separator( $sep ) {
    $sep = "|";
    return $sep;
}

//Upload SVG
function cc_mime_types($mimes) {
    $mimes['svg'] = 'image/svg+xml';
    return $mimes;
  }
add_filter('upload_mimes', 'cc_mime_types');