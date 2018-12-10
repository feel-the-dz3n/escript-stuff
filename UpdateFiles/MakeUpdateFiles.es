func Main
{
	$rev=ListGetValue args||1
	FileCopy D:\vsprojects\escript-master\bin\Release\escript.exe||escript-$rev.exe||1
	WriteFile $rev-version.txt||{AssemblyVersion escript-$rev.exe}||0
	if $programDebug||!=||1||Exit
}