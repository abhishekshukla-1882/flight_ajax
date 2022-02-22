<?
include 'function.php';
switch ($_POST['action']) {
    case 'get':
        echo json_encode(gData($_POST['file']));
        break;
    case 'update':
        echo json_encode(uData($_POST['file'], $_POST['details']));
        break;
}
