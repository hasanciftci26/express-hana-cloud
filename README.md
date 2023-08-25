# Express App with BTP HANA Cloud Connection

HANA Cloud Connection Main Package = @sap/hana-client

**HANA Cloud Connection Config**

Config    |Value
----------|----------
serverNode|SQL Endpoint of HANA Cloud Instance
uid       |HANA Cloud User
password  |HANA Cloud Password

**If HDI Container connection is desired to be established, Runtime User (RT) and password can be found at hana hdi-shared service instance credentials!**

**BTP HDI Container Service Instance Credentials**
Property    |Description
------------|------------
host        |SQL Host of HANA Cloud Instance
port        |SQL Port of HANA Cloud Instance
schema      |Schema of the HDI Container
hdi_user    |HDI Container Desing Time User (Object Owner)
hdi_password|HDI Container Desing Time User Password
user        |HDI Container Runtime User (Application User)
password    |HDI Container Runtime User Password