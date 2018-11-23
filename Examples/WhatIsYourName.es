ShowConsole

func HelloMethod
{
color darkgray
echo -------------------------
echo Hello from $workingMethod
echo -------------------------
echo
color gray
echo What is your name?
set inputText||- 
set name||^ReadLine
ShowName
}

func ShowName
{
echo
color green
echo Your name is: $name
echo
}

:lbl
HelloMethod
goto lbl