<?php snippet('header') ?>

<?php foreach($pages->visible() as $section): ?>

<?php snippet($section->uid(), array('data' => $section)); ?>

<?php endforeach ?>

<?php snippet('footer') ?>
