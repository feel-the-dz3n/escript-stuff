func Main
{
	//if {msg ESCRIPT||Enter debug mode?~n~You can enter it by "Debug" command later.||5||2}||==||Yes||Debug

	$w=winver
	if {StringContains $w||Windows}||==||0||{#ErrorWindows}
	if {msg ESCRIPT||Do you want to import TestLib.dll?~n~~n~~Code:~n~async ->~n~sleep 3000~n~Import TestLib.dll~n~(can be used for big libraries)||5||2}||==||Yes||GoImport
	Break
}

func ImMethod
{
	sleep 3000
	echo calling: Import TestLib.dll
	Import TestLib.dll
	msg Test Example||Library TestLib.dll was imported. You can call method 'TestLib' from this dll.||exclamation||ok
}

func GoImport
{
	ShowConsole
	color yellow
	echo Importing TestLib.dll in 3 seconds
	async {#ImMethod}
	
	//msg Test Example||Library TestLib.dll was imported. You can call method 'TestLib' from this dll.||exclamation||ok
	CommandInterpreter
}

func GoError
{
	msg Test Example Error||Can't import TestLib.dll||error||ok
	Break
}

func ErrorWindows
{
	msg Test Example Error||This library is compiled for .NET Framework 4.0, not .NET Core. It may not work.||warning||ok
}