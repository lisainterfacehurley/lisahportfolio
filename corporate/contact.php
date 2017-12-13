<?php
/*
 * Script for sending E-Mail messages.
 
 */


$sendTo = "lhurley2@cox.net";

$action = $_POST['action'];

    $name = $_POST['form'][0]['name'];
    $email = $_POST['form'][0]['email'];
    $subject = $_POST['form'][0]['subject'];
    $message = $_POST['form'][0]['message'];

    if ($name == "" || $email == "" || $message == "" || $subject == "") {
        echo "<p class=\"error\">There was problem while sending E-Mail. Please verify entered data and try again!</p>";
        exit();
    }

    else
    {
        $header = 'From: ' . $name . '<' . $email . ">\r\n" .
        'Reply-To: ' . $email . "\r\n" .
        'X-Mailer: PHP/' . phpversion();

        $sent = mail($sendTo, $subject, $message, $header);

        if ($sent) {
            echo "<p class=\"success\">Message sent successfully.</p>";
        } else {
            echo "<p class=\"error\">There was problem while sending E-Mail.</p>";
        }
    }
?>



