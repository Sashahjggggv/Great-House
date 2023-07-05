<?php 
  $name = $_POST['name'];
  $phone = $_POST['phone'];

  $name = htmlspecialchars($name);
  $phone = htmlspecialchars($phone);

  $name = urldecode($name);
  $phone = urldecode($phone);

  $name = trim($name);
  $phone = trim($phone);

  if(mail("info@greathouse.rv.ua",
  "Нова заявка з сайту greathouse.rv.ua",
  "Імʼя: " $name "\n"
  "Телефон: " $phone,
  "From: no-reply@greathouse.rv.ua \r\n")
  ) {
    echo ('Заявка успішно подана! Звʼяжемося з вами найближчим часом.');
  } else {
    echo ('Наявні помилки! Перевірте дані...');
  }
?>