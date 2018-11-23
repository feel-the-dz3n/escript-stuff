func Main
{
	Debug
	echo Syntax Fix Test
	msg {#||}||{#||}||{Return 0}||{Return 0}
	// -> msg ^split^||^split||0||0 ->
	//    Caption: ||
	//    Text:    ||
	//    Icon:    0
	//    Button:  0
}