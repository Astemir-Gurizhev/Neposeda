<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$age = $_POST['age'];
$phone = $_POST['phone'];

// Формирование самого письма
$title = "Новая заявка ЧДС НЕПОСЕДА";
$body = "
<h2>Данные:</h2>
<b>Имя:</b> $name<br><br>
<b>Возраст ребенка:</b> $age<br><br>
<b>Номер:</b> $phone
";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    //$mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
    $mail->Username   = 'private.kindergarten.NEPOSEDA@gmail.com'; // Логин на почте
    $mail->Password   = 'private.kindergarten.NEPOSEDA'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('private.kindergarten.NEPOSEDA@gmail.com', 'ЧДС Непоседа'); // Адрес самой почты и имя отправителя

    // Получатель письма
    // $mail->addAddress('kanokovadiana@yandex.ru');  
    $mail->addAddress('gurizhev.astemir@gmail.com');  
// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;    

// Проверяем отправленность сообщения
if ($mail->send()) {header('Location: thankyou.html');}
else {header('Location: error.html');} 

} catch (Exception $e) {
    header('Location: error.html');
    // $result = "error";
    // $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
//echo json_encode(["result" => $result, "resultfile" => $rfile, "status" => $status]);
header('Location: thankyou.html');