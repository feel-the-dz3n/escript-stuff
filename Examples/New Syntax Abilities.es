//
// This script was created to show ESCRIPT 5.0 new syntax abilities.
//

func Main
{
	// this is comment
	NewSyntaxAbilities
	Break
}

func NotePad
{
	start notepad||$workingScriptFullFileName||0
}

func NewSyntaxAbilities
{
	// call Version and return in "ver" variable	
	$ver=Version

	msg New Syntax Abilities||Welcome to ESCRIPT version $ver!~n~~n~Code:~n~&#dollar;ver=Version~n~~n~&#dollar;ver is $ver||0||ok
 
	set ver||{Version}
	msg New Syntax Abilities||Welcome to ESCRIPT version $ver!~n~~n~Code:~n~set ver^split^{#{Version}}~n~~n~&#dollar;ver is $ver||0||ok

	msg New Syntax Abilities||Now you can use {#{MethodName}} to call method and return right in arguments of another.~n~Example: echo {#{Version}}~n~~n~Also you can write $VariableName=MethodName to return in variable without using "set"~n~Example:~n~&#dollar;ver=Version||0||ok

	msg New Syntax Abilities||To ignore arguments or method, just write # after {#{}.~n~~n~Example:~n~echo Version: {#{#Version}}||0||ok

	if $isCompiledScript||==||1||Break
	// if it's a compiled script (.exe) - exit

	if {msg New Syntax Abilities||That's all. Do you want to see the source code in Notepad?||question||yesno}||==||Yes||NotePad
}