<?php
/* https://api.telegram.org/botXXXXXXXXXXXXXXXXXXXXXXX/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$email = $_POST['user_email'];
$position = $_POST['user_position'];



$token = "1743126207:AAEb0Nv2zDl9dJaEdZoA1Y4HYSfEG9fIgpg";
$chat_id = "-1001288181698,";
$txt = "";
$arr = array(
  'ФИО: ' => $name,
  'Должность: ' => $position,
  'Телефон: ' => $phone,
  'Email' => $email
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

  $url = "https://api.telegram.org/bot{$token}/sendDocument";
  $_document = $_FILES['user_file']['tmp_name'];
  $document = new CURLFile(realpath($_document), $_FILES['user_file']['name']);
  $ch = curl_init();
  curl_setopt($ch, CURLOPT_URL, $url);
  curl_setopt($ch, CURLOPT_POST, 1);
  curl_setopt($ch, CURLOPT_POSTFIELDS, ["chat_id" => "-1001288181698", "document" => $document]);
  curl_setopt($ch, CURLOPT_HTTPHEADER, ["Content-Type:multipart/form-data"]);
  curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
  $out = curl_exec($ch);
  curl_close($ch);
$date = date("d.m.y");
$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$date}","r");
// header('Location: /');

if($sendToTelegram){
    header('Location: ok.html');
    return true;
}else{
     header('Location: bad.html');
}

?>