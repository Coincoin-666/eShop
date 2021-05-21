<?php
if(isset($_POST['mailform']))
{
  if(!empty($_POST['nom']) AND !empty($_POST['mail']) AND !empty($_POST['objet']) AND !empty($_POST['message']))
  {
    $header="MIME-Version: 1.0\r\n";
    $header.='From:"ITECH"<chris.balkumar@outlook.fr>'."\n";
    $header.='Content-Type:text/html; charset="uft-8"'."\n";
    $header.='Content-Transfer-Encoding: 8bit';

    $message='
    <html>
    <head><meta charset="utf-8" />
     </head>
      <body>
      <meta charset="utf-8" />
        <div align="center">
          <img src="assets/img/frame.png"/>
          <br />
          <u>Nom de l\'expéditeur :</u>'.$_POST['nom'].'<br />
          <u>Mail de l\'expéditeur :</u>'.$_POST['mail'].'<br />
          <u>Objet de l\'expéditeur :</u>'.$_POST['objet'].'<br />
          <u>Numéro de téléphone de l\'expéditeur :</u>'.$_POST['tel'].'<br />
          <br />
          '.nl2br($_POST['message']).'
          <br />
          <img src="assets/img/frame2.png"/>
        </div>
      </body>
    </html>
    ';

    mail("chris.balkumar@outlook.fr", "CONTACT - ITECH", $message, $header);
    $msg="Votre message a bien été envoyé !";
  }
  else
  {
    $msg="Tous les champs doivent être complétés !";
  }
}
?>