<?php 
$openInNewTab = "";
if(isset($attributes["linkObject"]["opensInNewTab"]) && $attributes["linkObject"]["opensInNewTab"] === true){
    $openInNewTab = "_blank";
};
?>
<section class="container container--p300">
    <div class="container__inner explanation pb-lr">
        <div class="explanation__left">
            <h3 class="pb-sm"><?php if(isset($attributes["title"])) {echo $attributes["title"];}; ?></h3>
            <p class="pb-sm"><?php if(isset($attributes["subtitle"])) {echo $attributes["subtitle"];}; ?></p>
            <?php if(isset($attributes["buttonText"]) && $attributes["buttonText"] != ""): ?>
            <a href="<?php if(isset($attributes["linkObject"]["url"])) {echo $attributes["linkObject"]["url"];}; ?>" target="<?php echo $openInNewTab; ?>" class="btn"><?php echo $attributes["buttonText"]; ?></a>
            <?php endif; ?>
            
        </div>
        <div class="explanation__right txt-center">
            <h4 class="pb-sm"><?php if(isset($attributes["description"])) {echo $attributes["description"];}; ?></h4>
        </div>
    </div>
</section>