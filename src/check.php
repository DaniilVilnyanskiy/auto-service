<?php
    print_r($_POST);
// получаем данные из form1
$name = $_POST['name'];
$number = $_POST['number'];
$text = $_POST['text'];
$submit = $_POST['submit'];

//
//$error = '';
//if(trim($email) == '')
//    $error = 'Введите email';
//else if (trim($message) == '')
//    $error = 'Введите сообщение';
//else if (strlen($message) < 10)
//    $error = 'Не менее 10 символов';
//
//if ($error != '') {
//    echo $error;
//    exit;
//} else {
//    echo $message; // удалить это условие когда будет хостинг
//}
echo $text
// next - отправка на почту, раскомментировать когда будет хостинг

/*$subject = "=?utf-8?B?".base64_encode("Test message")."?=";
$headers = "From: $email\r\nReply-to: $email\r\nContent-type: text/html;charset=utf-8\r\n";

mail('ИМЯ ПОЧТЫ', $subject, $message, $headers);

header('Location: /contacts.php');*/


?>