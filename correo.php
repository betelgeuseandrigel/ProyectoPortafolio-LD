<?php
    $destinatario = "luciano-14k1@hotmail.com"; 

    $nombre = $_POST["nombre"];
    $email = $_POST["email"];
    $asunto = $_POST["asunto"];
    $mensaje = $_POST["mensaje"];

    $header = "Enviado desde la pagina de luciano diaz";
    $mensajeCompleto = $mensaje . "\nAtentamente: " . $nombre;

    mail($destinatario, $asunto, $mensajeCompleto, $header);
    echo "<srcipt>alert('correo enviado exitosamente')</script>";
    echo "<srcipt> setTimeout(\"location.href'=index.html'\", 1000)</script>";
    

?>