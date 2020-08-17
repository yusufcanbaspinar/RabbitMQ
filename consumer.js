const amqp = require("amqplib");

connect_rabbtimq();

async function connect_rabbtimq() {
    try {
        const connection = await amqp.connect("amqp://localhost:5672");
        const channel = await connection.createChannel();
        const assertion = await channel.assertQueue("jobsQueue");
        
        channel.consume("jobsQueue",message =>{
            console.log("Message",message.content.toString());
        });

    } catch (error) {
        console.log("Error:",error)
    }

}