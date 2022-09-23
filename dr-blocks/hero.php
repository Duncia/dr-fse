<section class="container container--p300 container--p50-top container__hero-top">
    <div class="container__inner hero">
        <div class="hero__left">
            <?php if(isset($attributes["titleSmall"]) && $attributes["titleSmall"] != ""): ?>
            <h3 class="pb-sm"><?php echo $attributes["titleSmall"]; ?></h3>
            <?php endif; ?>
            <?php if(isset($attributes["titleBig"]) && $attributes["titleBig"] != ""): ?>
            <h1><?php echo $attributes["titleBig"]; ?></h1>
            <?php endif; ?>
        </div>
        <div class="hero__right">
            <?php if(isset($attributes["titleCaps"]) && $attributes["titleCaps"] != ""): ?>
            <h4 class="pb-sm"><?php echo $attributes["titleCaps"]; ?></h4>
            <?php endif; ?>
            <?php if(isset($attributes["titleYear"]) && $attributes["titleYear"] != ""): ?>
            <h4 class="pb-sm"><?php echo $attributes["titleYear"]; ?></h4>
            <?php endif; ?>
        </div>
    </div>
</section>