<?php
$input = '<a href="#" class="see-all-cats">مردانه</a><br>
<a href="#" class="see-all-cats">لباس مردانه</a><br>
<a href="#">تی شرت و پولو شرت</a><br>
<a href="#">پیراهن</a><br>
<a href="#">شلوار</a><br>
<a href="#">لباس زیر</a><br>
<a href="#" class="see-all-cats">کفش مردانه</a><br>
<a href="#">کفش روزمره</a><br>
<a href="#">کفش رسمی</a><br>
<a href="#" class="see-all-cats">اکسسوری مردانه</a><br>
<a href="#">ساعت</a><br>
<a href="#">کیف</a><br>
<a href="#">کمربند</a><br>';

$input = explode("\n", $input);
$size = sizeof($input);
$output = "";
for ($i = 0; $i < $size; $i++){
    $newsize = sizeof($input);
    $rand = rand(0, $newsize - 1);
    $output .= $input[$rand] . "\n";
    unset($input[$rand]);
    $input = array_values($input);
}

echo "\n" . $output . "\n";