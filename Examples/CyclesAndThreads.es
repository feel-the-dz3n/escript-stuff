func Main
{
	set a||0
	set b||0

	ShowConsole
	async {#AsyncTask}||rAsync||{#AfterAsync}
	sleep 500
	async {#AsyncTas2}||rAsync2||{#AfterAsyn2}
	for 0||50000||ForFor
}

func AsyncTask
{
	msg Threads||This window works in another thread, the result will be in $rAsync. Also, you can write method or write code that will be called after async method.||0||0
}

func AfterAsync
{
	set a||1
}


func AsyncTas2
{
	msg Threads||The second window, running in 3rd thread.||0||0
}

func AfterAsyn2
{
	set b||1
}

func ForFor
{
	echo [$for] Break when all threads will be completed
	sleep 1200
	CheckForThreads
}

func CheckForThreads
{
	// bad method but it's ok
	if {Count $a||+||$b}||==||2||Break
}









