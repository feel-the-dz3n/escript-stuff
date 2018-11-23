func Main
{
	ShowConsole
	echo Custom methods:
	UseTextTest Main||0||1
	UseTextTest TheFunction||0||1
	UseTextTest ReturnFunction||0||1

	color cyan
	echo
	echo Code: {#TheFunction kek lol||superkek}
	echo       {#{...}   {#echo [workingMethod] arg0: &#dollar;arg0 arg1: &#dollar;arg1}
	echo
	echo Code: {#echo Return test: {ReturnFunction 5}}
	echo
	TheFunction kek lol||superkek
}

func TheFunction arg0 arg1
{
	color green
	echo [$workingMethod] arg0: $arg0 arg1: $arg1
	echo Return test: {ReturnFunction 5}
	Break
}

func ReturnFunction a0
{
	Return {Count $a0||+||5}
}