<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $phone = $_POST["phone"];

    // Email configuration
    $to = "mail@greathouse.rv.ua";
    $subject = "New Feedback Submission";
    $message = "Name: $name\nPhone: $phone";

    // Send email
    mail($to, $subject, $message);

    // Redirect back to the form or a thank you page
    header("Location: thanks.html");
    exit();
}
?>