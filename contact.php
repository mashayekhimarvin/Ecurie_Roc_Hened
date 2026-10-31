<?php

// Protection anti-spam (honeypot)
if (!empty($_POST['website'])) {
    exit;
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $nom = htmlspecialchars(trim($_POST['nom']));
    $email = htmlspecialchars(trim($_POST['email']));
    $telephone = htmlspecialchars(trim($_POST['telephone']));
    $message = htmlspecialchars(trim($_POST['message']));

    $destinataire = "contact@roc-hened.fr";
    $sujet = "Nouveau message depuis le site Écuries Roc Hened";

    $contenu = "Nom : $nom\n";
    $contenu .= "Email : $email\n";
    $contenu .= "Téléphone : $telephone\n\n";
    $contenu .= "Message :\n$message";

    $headers = [];
    $headers[] = "From: contact@roc-hened.fr";
    $headers[] = "Reply-To: $email";
    $headers[] = "Content-Type: text/plain; charset=UTF-8";

    if (mail(
        $destinataire,
        $sujet,
        $contenu,
        implode("\r\n", $headers)
    )) {

        header("Location: merci.html");
        exit;

    } else {

        echo "Une erreur est survenue lors de l'envoi du message.";
    }
}
?>