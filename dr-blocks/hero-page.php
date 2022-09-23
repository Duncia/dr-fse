<section class="container container--p300 container--p50-top container__hero-top">
    <div class="container__inner hero--page">
        <?php if(isset($attributes["title"]) && $attributes["title"] != ""): ?>
            <h1 class="pb-sm"><?php echo $attributes["title"]; ?></h1>
        <?php endif; ?>
        <?php if(isset($attributes["text"]) && $attributes["text"] != ""): ?>
            <p class="pb-sm"><?php echo $attributes["text"]; ?></p>
        <?php endif; ?>
    </div>
</section>