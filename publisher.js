const amqp = require("amqplib");

const message = {
    description: "This is a test message."
}

connect_rabbtimq();

async function connect_rabbtimq() {
    try {
        const connection = await amqp.connect("amqp://localhost:5672");
        const channel = await connection.createChannel();
        const assertion = await channel.assertQueue("jobsQueue");

        channel.sendToQueue("jobsQueue", Buffer.from(JSON.stringify(message)));
        console.log("Gönderilen mesaj:",message);
    } catch (error) {
        console.log("Error:",error)
    }

}