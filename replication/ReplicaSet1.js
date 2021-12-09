db = connect( 'mongodb://localhost/test' );

rs.initiate( {
   _id : "ReplicaSet1",
   members: [
      { _id: 1, host: "10.0.0.102:27017" },
      { _id: 2, host: "10.0.0.103:27017" }
   ]
})

