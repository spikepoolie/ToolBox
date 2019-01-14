<?php
  

    $DB_HostName = "97.74.30.33";
    $DB_Name = "rschreiner";
    $DB_User = "rschreiner";
    $DB_Pass = "Orgidor15!!";
    $con = mysqli_connect($DB_HostName,$DB_User,$DB_Pass) or die(mysql_error());
    mysqli_select_db($con,$DB_Name) or die(mysql_error());
    $answer = urldecode($_GET["answer"]);
    $answer_array=explode('_',$answer);
    $pollid = $answer_array[0];
    $answerid = $answer_array[1];

    $sql = "INSERT INTO tesla_poll_responses (answer_id, poll_id) VALUES ($answerid, $pollid)";
    
    if (mysqli_query($con, $sql)) {
        echo '{"result":"OK"}';
    } else {
        echo '{"result":"'.mysqli_error($con).'"}';
    }
?>
