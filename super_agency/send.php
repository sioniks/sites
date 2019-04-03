<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title> Страница авторизации
        </title>
        <meta content="" name="Dzebliuk">
        <meta content="" name="description">
        <meta content="" name="keywords">
        <meta content="width=device-width, initial-scale=1" name="viewport">
        <meta content="ie=edge" http-equiv="x-ua-compatible">
        <link rel="icon" type="image/png" href="./assets/images/icons/favicon.png">
        <link rel="stylesheet" href="./assets/fonts/font-aw/css/font-awesome.min.css">
        <link rel="stylesheet" href="./assets/css/foundation.css">
        <link rel="stylesheet" href="./assets/css/main.css">
        <link rel="stylesheet" href="./assets/css/media.css">
        <script src="./assets/js/foundation.js" defer></script>
        <script src="./assets/js/app.js" defer></script><!--[if lt IE 9]>
        <script src="http://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.2/html5shiv.min.js"></script><![endif]-->
    </head>
    <body>
        <div class="wrapper">
            <section class="section thank-block">
                <div class="container">
                    <button class="toggle__menu"><span class="sandwich"><span class="sw__top"></span><span class="sw__center"></span><span class="sw__bottom"></span></span></button>
                    <div class="head__logo logo"><a href="./index.html"><img class="head__logo-img" src="./assets/images/logo/logo.png"></a></div>
                    <nav class="header-nav">
                        <ul class="menu head__menu" id="menu">
                            <li class="menu__item"> <a class="menu__link menu__link_advertisers" href="./advertiser.html">advertiser</a></li>
                            <li class="menu__item"> <a class="menu__link menu__link_publisher" href="./publisher.html">publisher</a></li>
                            <li class="menu__item"> <a class="menu__link menu__link_developer" href="./developer.html">developer</a></li>
                            <li class="menu__item"> <a class="menu__link menu__link_contacts" href="./login.html">contacts</a></li>
                        </ul>
                        <ul class="form head__form">
                            <li class="form__item"><a class="form__link form__link_login" href="http://my.leadocean.net/signin?lang=en">login</a></li>
                            <li class="form__item"><a class="form__link form__link_signup" href="http://my.leadocean.net/signup?lang=en">sign up</a></li>
                        </ul>
                    </nav>
                    <p class="thank__massage">
        <?php
        $mailto = "support@leadocean.club";
        $subject = "Обращение с сайта";

        $status="Something goes wrong...<br>";

        $myCurl = curl_init();
        curl_setopt_array($myCurl, array(
            CURLOPT_URL => 'https://www.google.com/recaptcha/api/siteverify',
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_POST => true,
            CURLOPT_POSTFIELDS => http_build_query(array('secret'=>'6LeMjDUUAAAAAO7rUKNlyahu2zlaULWgwB5jWoLM', 'response'=>$_POST['g-recaptcha-response'], 'remoteip' => $_SERVER['REMOTE_ADDR']))
        ));
        $response = json_decode(curl_exec($myCurl));
        curl_close($myCurl);

        if($response->success === true && !empty($_POST)){
            $name = trim(urldecode(htmlspecialchars($_POST['name'])));
            $email = trim(urldecode(htmlspecialchars($_POST['email'])));
            $skype = trim(urldecode(htmlspecialchars($_POST['skype'])));
            $comment = trim(urldecode(htmlspecialchars($_POST['message'])));
            if(empty($_POST['name']) || empty($_POST['email']) || empty($_POST['skype']) || empty($_POST['message']))
            {
                $status = "All fields are required!";
            }
            elseif (!preg_match("/^[0-9a-z_\.]+@[0-9a-z_^\.]+\.[a-z]{2,6}$/i", $email))
            {
                $status = "You have entered an incorrect E-mail!";
            }
            else {
                $headers .= "From: \"" . $name . "\" <" . $email . ">\r\n";
                $headers = "From: \"" . $name . "\" <" . $email . ">\r\n";
                $headers .= "Reply-To: ". strip_tags($email) . "\r\n";
                $headers .= "CC: $mailto\r\n";
                $headers .= "MIME-Version: 1.0\r\n";
                $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
                $sendmessage = "<html><body>
                     <p><b>Имя:</b> " . $name . "</p>
                     <p><b>E-mail для связи:</b> " . $email . "</p>
                     <p><b>Skype:</b> " . $skype . "</p>
                     <p><b>Сообщение:</b> " . $comment . "</p>
                     </body></html>";
                if (mail($mailto, $subject, $sendmessage, $headers)) {
                    unset($name, $email, $comment);
                    $status = "THANK YOU FOR YOUR REQUEST! </br> YOU’LL HEAR FROM US SOON!";
                } else {
                    $status = "For technical reasons, the message was not sent. Try it again.";
                }
            }
        }
        echo $status;
        ?>
                    </p><img class="rocket" src="./assets/images/decor/rocket.png">
                </div>
            </section>
            <footer class="footer">
                <p class="copyright">2017 M-Stream</p><a class="adv__submit_button submit_button" href="./login.html">Advertise</a><a class="pub__submit_button submit_button" href="http://my.leadocean.net/signup?lang=en">Monetize </a>
            </footer>
        </div>
    </body>
</html>