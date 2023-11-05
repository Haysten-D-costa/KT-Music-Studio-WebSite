<?php
    $conn = mysqli_connect("localhost", "root", "");
    
    if($conn) { echo "<br> Successful Connection !"; }
    else {
        echo "<br> Failed Connection !";
        exit();
    }
    $query = "CREATE DATABASE KTMStudio";
    $r = mysqli_query($conn, $query);
    if($r) { echo "<br> Table created successfully !"; }
    else {
        echo "<br> Table creation failed !";
        exit();
    }
    mysqli_close($conn);
?>