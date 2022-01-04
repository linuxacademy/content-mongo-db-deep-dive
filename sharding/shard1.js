db = connect( 'mongodb://localhost/test' );

rs.initiate( {
   _id : "shard1",
   members: [
      { _id: 0, host: "10.0.0.103:27017" }
   ]
})

