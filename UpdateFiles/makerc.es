FileCopy D:\vsprojects\escript-master\bin\Release\escript.exe||escript-rc.exe||1
WriteFile rc-version.txt||{AssemblyVersion escript-rc.exe}||0
if $programDebug||!=||1||Exit