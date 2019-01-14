


<?php
    $DB_HostName = "97.74.30.33";
    $DB_Name = "rschreiner";
    $DB_User = "rschreiner";
    $DB_Pass = "Orgidor15!!";
    $con = mysqli_connect($DB_HostName,$DB_User,$DB_Pass) or die(mysql_error());
    mysqli_select_db($con,$DB_Name) or die(mysql_error());
    $formFields = json_decode(file_get_contents('php://input'));
    
    // set json string to php variables
    //$userName = $formFields->{"username"};
    
    $sth = mysqli_query($con,"select max(poll_id) as rowcount from tesla_polls");
    
    $messages = array();
    while($r = mysqli_fetch_assoc($sth)) {
        $messages[] = $r;
    }
    
    echo json_encode($messages);
    
    mysqli_close($con);
    ?>
