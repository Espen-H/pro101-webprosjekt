<?php
 header("Access-Control-Allow-Origin: *");
$url = 'https://oslobysykkel.no/api/v1/stations/availability';
$client_id = '366635260e95c9aaf1e66215eb52c9cb';

$options = array(
  'http' => array(
      'header'  => "Content-type: application/json\r\n" .
                   "Client-Identifier: " . $client_id . "\r\n",
      'method'  => 'GET',
 )
);
$context = stream_context_create($options);
$result = @file_get_contents($url, false, $context);

if ($http_response_header[0] == "HTTP/1.1 200 OK") {
  echo $result;
} else { 
  echo $http_response_header[0];
}
?>