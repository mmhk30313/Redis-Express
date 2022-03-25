### Project Name:
# Redis-Express

### Instructions:

  - First of all you should start redis server in window command prompt
  - For that write there ->> redis-server
  - If you use cli for checking redis command  ->>  redis-cli

### Api Endpoints:

  - /post/:key/:value
    * This particular endpoint should now store the key-value pair data inside Redis.
  - /get/:key
    * This particular endpoint should return the stored value inside Redis if any relevant key is found.

##  What is Redis?

- Redis full form is Remote Directory Server. Redis is a NO-SQL in-memory remote database that offers high performance, replication, and a unique data model.

- Now when we have a brief idea of what Redis is, let’s see how we can install Redis on windows 10.

- Redis was not developed for windows and thus a team of Microsoft handles the task to make it available to us.
### To Install Redis See The Following Docs:

* https://github.com/MicrosoftArchive/redis
* https://github.com/microsoftarchive/redis/releases
* Setup Instructions:
  - Download zip file from [Redis-x64-3.0.504.zip](https://github.com/microsoftarchive/redis/releases/download/win-3.0.504/Redis-x64-3.0.504.zip)
  - Extract the downloaded zip file into a folder [name may be redis for easy to understand]
  - Copy the folder path and setup copied path into new path in environment variable
  - To check for redis
    * Open the window command prompt
    * Write there -> redis-server
      - The redis server will be started
    * Open another window command prompt
    * Write there -> redis-cli
      - We can run our redis commands there
      - set key value => To store key: value
      - get key => To get key's value from the redis

##  Redis Documentation:
####  https://redis.io/docs/about/