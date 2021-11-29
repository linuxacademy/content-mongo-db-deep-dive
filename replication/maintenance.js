db = db.getSiblingDB( "admin" );
print ( "Currently connected to:" );
printjson( db.getMongo() );
print ("\n");
if (db.serverCmdLineOpts().parsed.net.port != 27018 ){
	throw new Error('Server is not running on port 27018.');
}

print( "#### Maintenance Completed Sucessfully ####" );
