FileCopy D:\vsprojects\escript-master\bin\Release\escript.exe||escript-latest.exe||1
WriteFile latest-version.txt||{AssemblyVersion escript-latest.exe}||0
if $programDebug||!=||1||Exit