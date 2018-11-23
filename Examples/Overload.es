
func createVar
{
if $num||==||1||title $for variables created
set a$for||overloadTest
}

func showNum
{
set num||1
}

func Main
{
ShowConsole
color gray
echo
echo
echo
set inputText||How many variables I should create? 
set t||^ReadLine
set inputText||Show current number in title bar? y/n: 
set r||^ReadKey
ToLower $r
set r||$result
if $r||==||y||showNum
color cyan
echo Creating $t variables...
for $t||createVar
color green
echo $t variables created.

GetInput

}

func GetInput
{
color yellow
VarCount
set c||$result
echo Count: $c
color gray
echo Press D to call "VarList"
echo Press R to call "VarReinit" (remove all)
echo Press Q to stop script
echo Press anything else to count again
set inputText||My choice: 

set mc||^ReadKey
ToLower $mc
set mc||$result

if $mc||==||d||VarList
if $mc||==||r||VarReinit
if $mc||==||q||Break
GetInput
}