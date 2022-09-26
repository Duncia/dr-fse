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
    //Custom block CSS
    add_theme_support('editor-styles');
    add_editor_style(array('build/style-index.css', 'build/index.css'));
    //Register menu
    register_nav_menu('header-meniu', 'Header');
    register_nav_menu('footer-meniu', 'Footer');

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

//Register custom blocks
class DrJsxBlock{
  function __construct($name, $renderCallback = null){
    $this->name = $name;
    $this->renderCallback = $renderCallback;
    add_action('init', [$this, 'onInit']);
  }
  function blockRenderCallback($attributes, $content) {
    ob_start();
    require get_theme_file_path("/dr-blocks/{$this->name}.php");
    return ob_get_clean();
  }
  function onInit(){
    wp_register_script($this->name, get_stylesheet_directory_uri()."/build/{$this->name}.js", array('wp-blocks', 'wp-editor'));
    $blockArgs = array(
      'editor_script' => $this->name
    );
    if($this->renderCallback){
      $blockArgs['render_callback'] = [$this, 'blockRenderCallback'];
    };
    register_block_type("dr-blocks/{$this->name}", $blockArgs);
  }
}

new DrJsxBlock('highlight-txt-right', true);
new DrJsxBlock('explanation', true);
new DrJsxBlock('hero', true);
new DrJsxBlock('hero-page', true);
new DrJsxBlock('contact', true);

class DrPlaceholderBlock{
  function __construct($name){
    $this->name = $name;
    add_action('init', [$this, 'onInit']);
  }
  function blockRenderCallback($attributes, $content) {
    ob_start();
    require get_theme_file_path("/dr-blocks/{$this->name}.php");
    return ob_get_clean();
  }
  function onInit(){
    wp_register_script($this->name, get_stylesheet_directory_uri()."/dr-blocks/{$this->name}.js", array('wp-blocks', 'wp-editor'));
    register_block_type("dr-blocks/{$this->name}", array(
      'editor_script' => $this->name,
      'render_callback' => [$this, 'blockRenderCallback']
    ));
  }
}
new DrPlaceholderBlock("header");
new DrPlaceholderBlock("footer");
