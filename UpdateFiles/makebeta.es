FileCopy D:\vsprojects\escript-master\bin\Release\escript.exe||escript-beta.exe||1
WriteFile beta-version.txt||{AssemblyVersion escript-rc.exe}||0
if $programDebug||!=||1||Exit