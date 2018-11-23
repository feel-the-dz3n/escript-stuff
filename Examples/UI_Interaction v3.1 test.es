//////////////////////////////////////////////////////
//  Press ENTER to close message box if you can't!  //
//////////////////////////////////////////////////////

func Main
{
	if {msg ESCRIPT||Enter debug mode?~n~You can enter it by "Debug" command later.||5||2}||==||Yes||Debug
	if {msg UI Test||Do you want to see the source code of this script?||5||2}||==||Yes||showSource
	if {msg UI Test||Do you want to open this script in Notepad?||5||2}||==||Yes||notepad

	PleaseStop
}

func PleaseStop
{
	msg UI Test||Well, goodbye!||1||0
	ShowConsole
	set showCommands||0
	set showResult||0
	color cyan
	echo
	echo Also, we can use Exit method to close this window
	echo but in this code used Break method
	reak
}

func showSource
{
	$file=ReadFile $workingScriptFullFileName
	msg UI Test: $workingScriptFileName||$file||0||0
}

func notepad
{
	start notepad.exe||$workingScriptFullFileName||1
}

func sc
{
	ShowConsole
	//msg DWM test?||Apply DWM method to ESCRIPT?~n~If Aero is enabled, console window will get new appearance!~n~~n~(works only on Windows Vista+)||5||2
	set ans||No
	if $ans||==||Yes||DWM
}


