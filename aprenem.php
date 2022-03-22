<?php

$errors = [];
$errorMessage = '';

if (!empty($_POST)) {
    $ques1 = $_POST['ques1'];
    $ques2 = $_POST['ques2'];
    $ques3 = $_POST['ques3'];


    if (empty($ques1) and empty($ques2) and empty($ques3)) {
        $errors[] = 'All questions are empty';
    }


    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = 'Email is invalid';
    }


    if (empty($errors)) and (isset($_POST['submit'])){
        $toEmail = 'ragoston001@gmail.com';
        $emailSubject = 'Resposta questionari Aprenem';
        $headers = ['From' => ragoston001@gmail, 'Reply-To' => ragoston001@gmail, 'Content-type' => 'text/html; charset=iso-8859-1'];

        $bodyParagraphs = ["Ques1: {$ques1}", "Ques2: {$ques2}", "Ques1: {$ques3}", "Email: {$email}"];
        $body = join(PHP_EOL, $bodyParagraphs);

        if (mail($toEmail, $emailSubject, $body, $headers)) {
            header('Location: portada.html');
        } else {
            $errorMessage = 'Oops, something went wrong. Please try again later';
        }
    } else {
        $allErrors = join('<br/>', $errors);
        $errorMessage = "<p style='color: red;'>{$allErrors}</p>";
    }
}

?>
