ShowConsole
color yellow
echo Sending POST request to microsoft.com...
color darkgray
echo Data: lol=1
WebPost https://microsoft.com||lol=1
set webResponse||$result
SetColor 14
echo Response:
echo $webResponse