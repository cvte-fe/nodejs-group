package: 
mvn clean install
run: 
java -jar target/springboottest1-0.0.1-SNAPSHOT.jar

mvn clean install && java -jar target/springboottest1-0.0.1-SNAPSHOT.jar

----

siege:
siege -c 500 -r 1 http://localhost:8080/test

Transactions:                    500 hits
Availability:                 100.00 %
Elapsed time:                   9.42 secs
Data transferred:               0.01 MB
Response time:                  5.10 secs
Transaction rate:              53.08 trans/sec
Throughput:                     0.00 MB/sec
Concurrency:                  270.50
Successful transactions:         500
Failed transactions:               0
Longest transaction:            8.50
Shortest transaction:           3.00

----

siege -c 500 -r 1 http://localhost:3030

Transactions:                    500 hits
Availability:                 100.00 %
Elapsed time:                   4.19 secs
Data transferred:               0.01 MB
Response time:                  3.11 secs
Transaction rate:             119.33 trans/sec
Throughput:                     0.00 MB/sec
Concurrency:                  371.17
Successful transactions:         500
Failed transactions:               0
Longest transaction:            3.27
Shortest transaction:           3.00

----
