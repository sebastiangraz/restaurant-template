<section id="images">
  <h1><?php echo $data->title()->html() ?></h1>
  <h3>Check out our restaurant in images</h3>

  <?php $slideshow_items = yaml($data->Slideshow()) ?>

  <?php foreach($slideshow_items as $slideshow_item): ?>
    <figure>
      <?php if($image = $data->image($slideshow_item['image'])):?>
        <?php echo $image->html() ?>
      <?php endif  ?>
    </figure>
  <?php endforeach ?>

</section>
