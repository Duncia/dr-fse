<?php 
$openInNewTab = "";
if(isset($attributes["linkObject"]["opensInNewTab"]) && $attributes["linkObject"]["opensInNewTab"] === true){
    $openInNewTab = "_blank";
};
?>
<section class="container container--p300 <?php echo $attributes["className"]; ?>">
    <div class="container__inner contact">
        <div class="contact__left">
            <h3><?php if(isset($attributes["title"])) {echo $attributes["title"];}; ?></h3>
        </div>
        <div class="contact__right txt-center">
            <?php if(isset($attributes["buttonText"]) && $attributes["buttonText"] != ""): ?>
            <a href="<?php if(isset($attributes["linkObject"]["url"])) {echo $attributes["linkObject"]["url"];}; ?>" target="<?php echo $openInNewTab; ?>" class="btn"><?php echo $attributes["buttonText"]; ?></a>
            <?php endif; ?>
        </div>
    </div>
</section>