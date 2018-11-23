func msgx text
{
	msg ESCRIPT||$text||none||ok
}

func ShowUserName
{
	msgx Your username is: $userName
}

func GetUserName
{
	ReturnUsername
	set userName||$result
	set test||2
}

func Main
{
	GetUserName
	ShowUserName
}