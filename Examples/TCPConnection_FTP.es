

func Main
{
	$server=#old-dos.ru
	$port=#21
	$isOk=#1

	SetColor 11
	SetStatus TCP Connection||Connecting to $server:$port...
	TCP_SetTriggers triggerMsg||triggerDisconnected||triggerConnected
	TCP_Connect $server||$port
	SetStatusProgress 100
	sleep 500
	HideStatus
	ShowConsole
	Ask
}

func triggerDisconnected
{
	SetColor 12
	echo TCP Connection was closed!
	SetColor 15
	set isOk||0
}

func triggerConnected
{
	SetColor 10
	echo TCP Connection was established!
	SetColor 15
}

func triggerMsg
{
	SetColor 14
	echo TCP Message: $tcpMsg
	SetColor 15
}

func StopScript
{
	$isOk=#0
	SetColor yellow
	echo Goodbye
	Break
}


func Ask
{
	if $isOk||!=||1||StopScript
	if {TextBox What send to $server:$port?||Enter message:}||!=||OK||StopScript
	if $isOk||==||1||{#TCP_Send $dialogInput}||StopScript
	Ask
}