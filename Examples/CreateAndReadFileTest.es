func Main
{
msg ESCRIPT Example||File "escript.txt" will be created and opened. You can edit it and when you close notepad you will see a differences.||information||ok
echo Creating file "escript.txt"
WriteFile escript.txt||Hey! How are you?||0
color green
echo Starting notepad! You can edit the file!
sleep 3000
start notepad.exe||escript.txt||1
color cyan
echo OK, reading escript.txt
set fileContent||{ReadFile escript.txt}
echo Content:
color white
echo $fileContent
//$asyncResult=X
msg ESCRIPT Example||Content (escript.txt):~n~$fileContent||0||ok
color yellow
echo
echo Done. Press any key to delete "escript.txt" 
set inputText||null
FileDelete escript.txt
color red
echo Done!
}

func CheckForAsync
{
if $asyncResult||!=||X||Exit
}