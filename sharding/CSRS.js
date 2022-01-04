db = connect( 'mongodb://localhost/test' );

rs.initiate( {
   _id : "CSRS",
   configsvr: true,
   members: [
      { _id: 0, host: "10.0.0.102:27017" }
   ]
})

