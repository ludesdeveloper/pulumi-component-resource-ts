import { S3Bucket } from './s3'

const s3Bucket = new S3Bucket("s3-bucket")

export const bucketName = s3Bucket.bucketName
