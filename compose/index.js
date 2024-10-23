const express = require("express");
const redis = require("redis");
const process = require("process");

const app = express();
const client = redis.createClient({
	host: "redis-server", //for all the hosts in the application you use the service name from the dockerfile
	port: 6379,
});
client.set("visits", 0);

app.get("/", (req, res) => {
	//process.exit(0);
	client.get("visits", (err, visits) => {
		if (err) {
			console.log(err);
		}

		res.send("Number of visits is " + visits);
		client.set("visits", parseInt(visits) + 1);
	});
});

app.listen("8081", () => {
	console.log("listening on 8081");
});
