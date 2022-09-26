<footer class="footer container container--p300">
    <section class="container__inner footer__nav pt-sm">
        <?php $args_footer = array(
            'theme_location' => 'footer-meniu');
            wp_nav_menu($args_footer); ?>
        <div class="footer__text pb-md">
            <p><span id="footer-year"></span> | Robkė Dunčia</p>
        </div>
    </section>
</footer>