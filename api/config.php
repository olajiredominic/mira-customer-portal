<?php
  $db_server = 'localhost';
  $db_user = 'root';
  $db_password = '';
  $db = 'ticketapp';

  define('TICKET_PREFIX','TKT');


  define('ADMINPERMISSIONS',[
    'ADDADMIN',
    'LISTADMIN',
    'UPDATEADMIN',
    'VIEWADMIN',
    'UPDATEADMINPERMISSIONS',
    'CREATETICKET',
    'LISTTICKET',
    'MODIFYTICKET',
    'VIEWTICKET',
    'REPLYTICKET',
    'CREATECLIENT',
    'LISTCLIENT',
    'SEARCHCLIENT',
    'VIEWCLIENT',
    'UPDATECLIENT',
    'ADDDEPLOYMENT',
    'VIEWDEPLOYMENT',
    'VIEWWDEPLOYMENTCOST',
    'VIEWDEPLOYMENTTIME',
    'UPDATEDEPLOYMENT',
    'UPDATEDEPLOYMENTFILE',
    'VIEWDEPLOYMENTFILE',
    'ADDPRODUCT',
    'LISTPRODUCT',
    'SEARCHPRODUCT',
    'DELETEPRODUCT',
    'UPDATEPRODUCT',
    'VIEWPRODUCT',
    'CREATEUSER',
    'LISTUSER',
    'VIEWUSER'
  ]);

  define('USERPERMISSIONS',[
    'CREATETICKET',
    'LISTTICKET',
    'MODIFYTICKET',
    'VIEWTICKET',
    'REPLYTICKET',
    'VIEWDEPLOYMENT',
    'VIEWWDEPLOYMENTCOST',
  ]);
?>