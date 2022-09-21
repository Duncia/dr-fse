<?php 


/*
HOME PAGE template
 */
?>

<?php get_header(); ?>

<section class="container container--p300 container--p50-top container__hero-top">
    <div class="container__inner hero">
        <div class="hero__left">
            <h3 class="pb-sm">I am <span class="clr-grey">Robkė</span></h3>
            <h1>I am web developer <span class="clr-grey">&</span> email marketing specialist</h1>
        </div>
        <div class="hero__right">
            <h4 class="pb-sm">Digital platforms, content, and martech experience</h4>
            <h4 class="pb-sm"><span class="clr-grey">Since</span> 2007</h4>
        </div>
    </div>
</section>
<section class="container container--p300">
    <div class="container__inner highlight pb-lr">
        <div class="highlight__img">
            <img width="600" height="300" 
            srcset="<?php echo get_template_directory_uri() . '/img/laptop-mobile.jpg'; ?> 480w, <?php echo get_template_directory_uri() . '/img/laptop-desktop.jpg'; ?> 768w" alt="Laptop">
        </div>
        <div class="highlight__box">
            <h3 class="pb-sm">Website creation</h3>
            <p>Control your content, upload images, and enjoy custom functions.</p>
        </div>
    </div>
</section>

<section class="container container--p300">
    <div class="container__inner explanation pb-lr">
        <div class="explanation__left">
            <h3 class="pb-sm">Get a fully working website</h3>
            <p class="pb-sm">Let me know your vision about the website and let’s see what can be created. Endless possibilities for layouts, content boxes and user journeys, including CMS, contact form, and other most important parts.</p>
            <a class="btn" href="#">Learn more</a>
        </div>
        <div class="explanation__right txt-center">
            <h4 class="pb-sm">HTML | CSS | JavaScript</h4>
            <h4 class="pb-sm">REACT | WordPress</h4>
        </div>
    </div>
</section>

<section class="container container--p300">
    <div class="container__inner highlight highlight--reversed pb-lr">
        <div class="highlight__img">
            <img width="600" height="300" 
            srcset="<?php echo get_template_directory_uri() . '/img/content-mobile.jpg'; ?> 480w, <?php echo get_template_directory_uri() . '/img/content-desktop.jpg'; ?> 768w" alt="Laptop">
        </div>
        <div class="highlight__box">
            <h3 class="pb-sm">Content & marketing</h3>
            <p>Post news, introduce your services or products and grow your network.</p>
        </div>
    </div>
</section>

<section class="container container--p300">
    <div class="container__inner explanation pb-lr">
        <div class="explanation__left">
            <h3 class="pb-sm">All needed parts</h3>
            <p class="pb-sm">Website is not only about code and web development! I have experience with English and Lithuanian content, webmaster tasks and SEO / analytical part.</p>
            <a class="btn" href="#">Learn more</a>
        </div>
        <div class="explanation__right txt-center">
            <h4 class="pb-sm">Content | Admin</h4>
            <h4 class="pb-sm">SEO | Analytics</h4>
        </div>
    </div>
</section>

<section class="container container--p300">
    <div class="container__inner highlight pb-md">
        <div class="highlight__img">
            <img width="600" height="300" 
            srcset="<?php echo get_template_directory_uri() . '/img/contact-mobile.jpg'; ?> 480w, <?php echo get_template_directory_uri() . '/img/contact-desktop.jpg'; ?> 768w" alt="Laptop">
        </div>
        <div class="highlight__box">
            <h3 class="pb-sm">Let's work together!</h3>
            <p class="pb-sm">Drop me a message if you need website or content!</p>
            <a class="btn" href="#">Contact me now</a>
        </div>
    </div>
</section>

<?php get_footer(); ?>