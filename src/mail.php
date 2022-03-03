<?php
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $mark = $_POST['mark'];
    $model = $_POST['model'];
    $date = $_POST['date'];
    $capacity = $_POST['capacity'];
    $fueltype = $_POST['fueltype'];
    $changeOfOil = 'не требуется';
    $another = 'клиент не нуждается в дополнительных услугах';

    if(isset($_POST['ChangeOfOil']) && is_array($_POST['ChangeOfOil']) && count($_POST['ChangeOfOil']) > 0){
      $changeOfOil = implode(', ', $_POST['ChangeOfOil']);
    }
    
    if(isset($_POST['Another']) && is_array($_POST['Another']) && count($_POST['Another']) > 0){
      $another = implode(', ', $_POST['Another']);
    }

    
    $to      = 'avtolendvin@gmail.com';
    $subject = 'ЗАЯВКА С САЙТА';
    $message = "
    Имя - $name 
    Номер телефона - $phone 
    Марка авто - $mark
    Модель авто - $model
    Год выпуска авто - $date
    Обьём двигателя авто - $capacity
    
    Тип топлива : $fueltype

    Замена масла : $changeOfOil

    Другие услуги : $another

    ";
    mail($to, $subject, $message);
?>