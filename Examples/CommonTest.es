ShowConsole

SetColor 10
echo Welcome to Common Test!
SetColor 2
echo Made for ESCRIPT 1.51 (updated for 4.0)
SetColor 15
echo

Version
echo ESCRIPT Version: $result
echo


OSVersion
echo OS Version: $result
echo


ReturnUsername
echo User: $result
echo


set inputText Read line test: 
set t||^ReadLine
echo Result: $t


set inputText Read key test: 
set t||^ReadKey
echo Result: $t

echo Console hiding test
echo Hiding console in 5 seconds
sleep 5000
HideConsole
sleep 5000
ShowConsole
echo Done!

