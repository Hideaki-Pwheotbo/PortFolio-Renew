<?php  
//POSTリクエストの場合のみ受付  
    //アクセストークン  
    $access_token = "6020511443.2e1105b.c606df93a1be4c27a1a9093abc2909a2";  
    //JSONデータを取得して出力  
    echo @file_get_contents("https://api.instagram.com/v1/users/self/media/recent/?access_token={$access_token}");  
    //終了  
    exit;  
?> 