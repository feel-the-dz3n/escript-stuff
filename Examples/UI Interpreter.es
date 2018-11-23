func Main
{
	$welcomeTitle=#Did you know that...
	$welcomeText=#...if you hold left shift key when starting any ESCRIPT instance you will enter debug mode?
	
	for 0||5||WelcomeTextUpdate

	HideStatus
	set uiText||Welcome to ESCRIPT UI Interpreter!
	ip
}

func WelcomeTextUpdate
{
	//add ?
	$welcomeText=#$welcomeText?
	SetStatus $welcomeTitle||$welcomeText||-1
	sleep 1000
}

func ip
{
	$uiResult=TextBox ESCRIPT {ver major}.{ver minor} UI Interpreter||$uiText||1
	if $uiResult||==||Cancel||Break
	set uiText||{$dialogInput}
	ip
}