<?php

require_once 'env.php';

$dbc = new PDO("mysql:DB_HOST;dbname=DB_NAME",DB_USERNAME,DB_PASSWORD);

$dbc->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

