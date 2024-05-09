const aws = require('@aws-sdk/client-lightsail');

const client = new aws.LightsailClient()

 
async function createInstance(instance_name, zone="us-east-1")
{
    const input = 
    {
        instanceNames: [ `${instance_name}` ],
        availabilityZone: zone,
        blueprintId: "nodejs_14_16",
        bundleId: "micro_1_0"
    }

    const command = new aws.CreateInstancesCommand(input)
    const response = await client.send(command)
    console.log(response)
}
(async()=>{
createInstance("instance_1");
})