<?php
    
    
    $DB_HostName = "97.74.30.33";
    $DB_Name = "rschreiner";
    $DB_User = "rschreiner";
    $DB_Pass = "Orgidor15!!";
    $con = mysqli_connect($DB_HostName,$DB_User,$DB_Pass) or die(mysql_error());
    mysqli_select_db($con,$DB_Name) or die(mysql_error());

   $pollid = urldecode($_GET["pollid"]);
    
    //$sth = mysqli_query($con,"select     count(x.answer_id) as count, q.question, a.answer from     tesla_poll_questions q,  tesla_poll_answers a left outer join tesla_questions_with_answers x on x.answer_id = a.answer_id  where q.question_id = a.question_id and q.question_id = $questionid group by a.answer_id order by count desc");
    
    $sth = mysqli_query($con,"select tpo.poll_answer, tp.question, count(tpr.answer_id) as total from tesla_poll_options tpo left join tesla_polls tp on tp.poll_id = tpo.poll_id left join tesla_poll_responses tpr on tp.poll_id = tpr.poll_id and tpr.answer_id = tpo.id where tp.poll_id = $pollid group by tpo.poll_answer");
    
    $messages = array();
    while($r = mysqli_fetch_assoc($sth)) {
        $messages[] = $r;
    }
    
    echo json_encode($messages);
    
    mysqli_close($con);
    
    ?>
