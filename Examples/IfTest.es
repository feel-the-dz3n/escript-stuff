func pHigherB
{
SetColor 10
echo A ( $a ) is higher than B ( $b )
}

func pNotHigherB
{
SetColor 12
echo A ( $a ) is NOT higher than B ( $b )
}

SetColor white

set inputText||set a: 
set a||^ReadLine
set inputText||set b: 
set b||^ReadLine

if $a||>||$b||pHigherB||pNotHigherB