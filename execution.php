<?php
  require_once 'vendor/autoload.php';
	$name = $_POST["Name"];
	$email = $_POST["Email"];
	$subject = $_POST["subject"];
	$content = $_POST["message"];
  $realContent = 'from:'.$name.' <'.$email.'>'."\r\n\r\n\r\n".$content;

// Create the Transport
$transport = (new Swift_SmtpTransport('smtp.gmail.com', 587, 'tls'))
  ->setUsername('cqcontactform@gmail.com')
  //SET PASSWORD HERE
  ->setPassword('')
;

// Create the Mailer using your created Transport
$mailer = new Swift_Mailer($transport);

// Create a message
$message = (new Swift_Message())
  ->setSubject($subject)
  ->setFrom([$email => $name])
  ->setTo(['sajaltry2001@gmail.com' => 'Sajal Chhamunya'])
  ->setBody($realContent)
  ;

// Send the message
  if(!($mailer->send($message))) {
    echo "Error while sending Email.";
  } else {
    echo "Email sent successfully";
  }




?>