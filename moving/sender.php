<?php
    $name = $_POST['name'];
	$phone = $_POST['phone'];
    $email = $_POST['email'];

	$to = "ekaterina.rupkalvis@gmail.com"; 
	$date = date ("d.m.Y"); 
	$time = date ("h:i");
	$from = $email;
	$subject = "Заявка c сайта: Квартирные переезды";

	
	$msg="
    Имя: $name /n
    Телефон: $phone /n
    Почта: $email"; 	
	mail($to, $subject, $msg, "From: $to ");

?>

<p> Благодарим за заказ! Ожидайте звонок нашего менеджера. </p>
