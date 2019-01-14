<?php
    $DB_HostName = "97.74.30.33";
    $DB_Name = "rschreiner";
    $DB_User = "rschreiner";
    $DB_Pass = "Orgidor15!!";
    $con = mysqli_connect($DB_HostName,$DB_User,$DB_Pass) or die(mysql_error());
    mysqli_select_db($con,$DB_Name) or die(mysql_error());
    $questionid = urldecode($_GET["questionid"]);

    $sth = mysqli_query($con,"select tp.question, tpo.poll_answer, tpo.poll_id, tpo.id from tesla_polls tp, tesla_poll_options tpo where  tp.poll_id = tpo.poll_id and tp.poll_id = $questionid");

    $messages = array();
    while($r = mysqli_fetch_assoc($sth)) {
        $messages[] = $r;
    }

    echo json_encode($messages);

    mysqli_close($con);


    ?>

