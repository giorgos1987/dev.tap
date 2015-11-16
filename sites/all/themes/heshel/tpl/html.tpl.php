<!DOCTYPE html>
<html lang="<?php print $language->language; ?>">
<head>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<?php global $base_url; ?>
<link rel="shortcut icon" href="<?php print $base_url.'/sites/all/themes/heshel/'?>img/favicon.ico" type="image/x-icon">
<link rel="apple-touch-icon" href="<?php print $base_url.'/sites/all/themes/heshel/'?>img/apple_icons_57x57.png">
<link rel="apple-touch-icon" sizes="72x72" href="<?php print $base_url.'/sites/all/themes/heshel/'?>img/apple_icons_72x72.png">
<link rel="apple-touch-icon" sizes="114x114" href="<?php print $base_url.'/sites/all/themes/heshel/'?>img/apple_icons_114x114.png">
<title><?php print $head_title; ?></title>
<?php print $styles; ?><?php print $head; ?>
<?php
	//Tracking code
	$tracking_code = theme_get_setting('general_setting_tracking_code', 'heshel');
	print $tracking_code;
	//Custom css
	$custom_css = theme_get_setting('custom_css', 'heshel');
	if(!empty($custom_css)):
?>
<style type="text/css" media="all">
<?php print $custom_css;?>
</style>
<?php
	endif;
?>
</head>

<body class="<?php print $classes;?>" <?php print $attributes;?>>
	<?php print $page_top; ?><?php print $page; ?><?php print $page_bottom; ?>
	<div class="fixed-menu"></div>
	<?php print $scripts; ?>
</body>
</html>

