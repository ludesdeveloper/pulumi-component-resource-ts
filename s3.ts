import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";

export class S3Bucket extends pulumi.ComponentResource {
    public bucketName
    constructor(name: string, opts?: pulumi.ComponentResourceOptions) {
        super("pkg:index:MyComponent", name, {}, opts);
        const bucket = new aws.s3.Bucket("my-bucket");
        this.bucketName = bucket.id
        this.registerOutputs({
            bucketId: this.bucketName,
        })
    }

}
