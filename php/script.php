<?php
    $name = $_POST["first-name"]." ".$_POST["last-name"]; // text-box....
    $email = $_POST["email"];
    $dob = $_POST["dob"];
    $gender = $_POST["gender"]; // radio-button....
    $phoneno = $_POST["phoneno"];
    $level = $_POST["level"];
    
    // check-box....
    $instrument = $_POST["instrument"];
    $instrument_selected = "";
    for ($i=0; $i < count($instrument); $i++) {
        $instrument_selected = $instrument_selected ." ". $instrument[$i];
    }
    $date = $_POST["date-time"];

    echo "<br> Displaying Details : ";
    echo "<br><br>Name : ". $name;
    echo "<br>Email : ". $email;
    echo "<br>Date of Birth : ". $dob;
    echo "<br>Gender : ". $gender;
    echo "<br>Phone no. : ". $phoneno;
    echo "<br>Musician level : ". $level;
    echo "<br>Instruments selected : ". $instrument_selected;
    echo "<br>Date of commence : ". $date;

    $conn = mysqli_connect("localhost", "root", "", "KMAcademy");
    if($conn) { echo "<br><br>Connection successful !"; }
    else {
        echo "<br>Connection Failed !";
        exit();
    }
    $query = "
        INSERT INTO student (name, email, dob, gender, phoneno, level, instruments, doc)
        VALUES
        ('$name', '$email', '$dob', '$gender', '$phoneno', '$level', '$instrument_selected', '$date');
    ";
    $r = mysqli_query($conn, $query);
    if($r) { echo "<br>Entry insertion successful !"; }
    else {
        echo "<br>Entry insertion failed !";
        exit();
    }
    mysqli_close($conn);
?>