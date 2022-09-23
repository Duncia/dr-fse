<?php
if(!isset($attributes['imgUrl'])) {
    $attributes['imgUrl'] = get_theme_file_uri('img/desktop-placeholder.jpg');
}
if(!isset($attributes['imgUrlMobile'])) {
    $attributes['imgUrlMobile'] = get_theme_file_uri('img/mobile-placeholder.jpg');
}
$openInNewTab = "";
if(isset($attributes["linkObject"]["opensInNewTab"]) && $attributes["linkObject"]["opensInNewTab"] === true){
    $openInNewTab = "_blank";
};
?>

<section class="container container--p300">
    <div class="container__inner highlight <?php if(isset($attributes["imgClass"])) {echo $attributes["imgClass"];}; ?> pb-lr">
        <div class="highlight__img">
            <img width="600" height="300" 
            srcset="<?php echo $attributes['imgUrlMobile']; ?> 480w, <?php echo $attributes['imgUrl']; ?> 768w" alt="Laptop" />
            </div>
        <div class="highlight__box">
            <h3 class="pb-sm"><?php if(isset($attributes["title"])) {echo $attributes["title"];}; ?></h3>
            <p><?php if(isset($attributes["subtitle"])) {echo $attributes["subtitle"];}; ?></p>
            <?php if(isset($attributes["buttonText"]) && $attributes["buttonText"] != ""): ?>
            <a href="<?php if(isset($attributes["linkObject"]["url"])) {echo $attributes["linkObject"]["url"];}; ?>" target="<?php echo $openInNewTab; ?>" class="btn"><?php echo $attributes["buttonText"]; ?></a>
            <?php endif; ?>
        </div>
    </div>
</section>