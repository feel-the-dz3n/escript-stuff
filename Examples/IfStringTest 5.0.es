func Main
{
	//ShowConsole

	$msg=#Entered text will be compared with 'ESCRIPT':
	DoJob
}

func DoJob
{
		
	if {TextBox ESCRIPT Test||$msg}||!=||OK||Break

	if $dialogInput||==||ESCRIPT||MsgEx $dialogInput (dialogInput) is ESCRIPT||MsgEx $dialogInput (dialogInput) is not ESCRIPT
	DoJob
}

func MsgEx text
{
	msg ESCRIPT Test||$text||none||ok
}