func Main
{
	if {msg ESCRIPT||Enter debug mode?~n~You can enter it by "Debug" command later.||5||2}||==||Yes||Debug
	if {TextBox ESCRIPT 5.0 New Abilities||Enter something||1}||==||Cancel||Break
	$str=#$dialogInput
	TextBox ESCRIPT 5.0 New Abilities||Your text: $str~n~Split by symbol:||0
	if $result||==||Cancel||Break
	$sSymbol=#$dialogInput
	
	StringSplit $str||$sSymbol

	$r=#Result:

	for 0||{ListCount split}||{#AppendF}

	msg ESCRIPT 5.0 New Abilities||$r||0||0
}

func AppendF
{
	set r||$r~n~[$for] {ListGetValue split||$for}
}