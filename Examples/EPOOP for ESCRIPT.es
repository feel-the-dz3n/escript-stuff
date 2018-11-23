func Main
{
	ShowConsole
	set version||1.0.0.0
	title EPOOP $version
	set inputText||ESCRIPT> EPOOP> 
	^ReadLine
	echo EPOOP Result: $result	
	Main
}