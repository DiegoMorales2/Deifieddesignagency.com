<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect the form data
    $firstName = htmlspecialchars($_POST['first-name']);
    $lastName = htmlspecialchars($_POST['last-name']);
    $email = htmlspecialchars($_POST['email']);
    $phoneNumber = htmlspecialchars($_POST['phone-number']);
    $message = htmlspecialchars($_POST['message']);

    // Set the recipient email address
    $to = "info@deifieddesign.com";  // Replace with your email address

    // Set the email subject
    $subject = "New Message from Deified Design Agency";

    // Build the email content
    $emailContent = "First Name: $firstName\n";
    $emailContent .= "Last Name: $lastName\n";
    $emailContent .= "Email: $email\n";
    $emailContent .= "Phone Number: $phoneNumber\n";
    $emailContent .= "Message:\n$message\n";

    // Set the email headers
    $headers = "From: $firstName $lastName <$email>";

    // Send the email
    if (mail($to, $subject, $emailContent, $headers)) {
        echo json_encode(['status' => 'success']);
    } else {
        echo json_encode(['status' => 'error']);
    }
}
?>