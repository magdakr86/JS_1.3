process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function() {
	var input = process.stdin.read();
	if (input == null) {
		process.stdout.write('Hello! For more info, please type "help"\n');
	};

	if (input !== null) {
		var instruction = input.toString().trim();

		switch(instruction)	{
			case 'help':
			  process.stdout.write('Type "version" to get the version info of the node. Type "language" to get the system language name. Type "exit" to leave the app.\n');
			  break;
			case 'version':
			  process.stdout.write('Node version is ' + process.versions.node + '.\n');
			  break;
			case 'language':
			  process.stdout.write('System language is ' + process.env.LANG + '.\n');
			  break;
			case 'exit':
			  process.stdout.write('Quitting app!\n');
			  process.exit();
			  break;
			default:
			  process.stderr.write('Wrong instruction!\n');
			  break;
		}	
	}
});