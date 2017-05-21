<?php
function onesignal_send_notification_filter($fields, $new_status, $old_status, $post)
{
    $fields['isAndroid'] = true;
    $fields['isIos'] = true;
    $fields['isAnyWeb'] = false;
    $fields['isChrome'] = false;
    $fields['data'] = array(
       "id" => $fields['id'],
        "myappurl" => $fields['url']
    );
    unset($fields['url']);
    return $fields;
}