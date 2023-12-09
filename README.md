# Dockerize the infrastructure combined K6 + InfluxDB > Grafana Dashboard
 - Set up the infrastructure in docker-compose.yaml. Using K6 to send the data to InfluxDB, then use InfluxDB as the datasource to show the live test results to Grafana Dashboard.
 - API Documentation: https://dummyjson.com/docs

## Steps
1. Launch the infrastructure: docker-compose up -d influxdb grafana
2. Run the test case: 

```
docker-compose run k6 run /src/test_scripts/dummy-json/GetSingleProduct.js --insecure-skip-tls-verify
```
3. View the live test results at: http://localhost:3000/d/k6/k6-load-testing-results
4. Clean up
 - docker-compose down
 - docker system prune -f