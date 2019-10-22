# cmpe-281 Project #1 a 3-tier web Application

## Author: Sergio Aguilar

Highly available, highly scalable, cost effective 3 tier web application which would be accessible over public internet through a registered domain name   www.saacefe.com

- The web application allow authorized users to perform following operations:
  -	Upload new files. (max size 10 MB per file) (Create)
  -	Browse through already uploaded list of files with each record having a URL to download the fie. (Read/ List Page)
  -	Update already uploaded files. (Update Page)
  -	Delete already uploaded file (Delete Page)

- For each file upload, application track following fields:
  -	User’s first name
  -	User’s last name
  -	File Upload Time
  -	File Updated Time
  -	File Description

- The list page also list above fields along with a link to download the file. The download use case is leveraging CloudFront.

-	The architecture diagram depicting the architecture of the project and all appropriate solution components.

- Project leverage following AWS services:
  - [ ]	EC2
  - [ ]	ELB      
  -	[ ] Lambda
  -	[ ] AutoScaling Group
  -	[ ] Single AZ RDS
  -	[ ] CloudFront
  -	[ ] S3
  -	[ ] S3 Transfer Acceleration
  -	[ ] R53
  -	[ ] ElastiCache (Optional)
  -	[ ] CloudWatch
  -	[ ] SNS
   
-	Wherever possible, a multi-AZ and multi-region architecture needs to be selected.
-	Appropriate metrics monitoring and alarms needs to be set so that you can be notified if your application enters into an ‘unhealthy’ state.
-	Wherever possible, you should implement auto recovery process so that even when a single AZ goes down, your application should be resilient enough to handle the outage. Your application should auto-recover and re-balance the traffic appropriately without any significant impact to your application’s availability.
-	For file storage portion, re-use the same S3 and CloudFront backend architecture that you came up with as part of homework #2 assignment. All the rules around data archival from homework #2 still applies here: The most content uploaded by customers globally is used frequently in first 75 days but then it is rarely used. When content is needed post 75 days, it is still needed instantly by the customers. The content needs to be available online only for one year after creation after which it needs to be archived for one additional year for legal/compliance reasons before it can be deleted from the system.
-	The solution needs to be cost effective so wherever possible, you should leverage techniques taught in class to save money. (Try and stick with free tier as well wherever possible)
-	The front end of the application need not be super pretty but the it would be critical to have a functioning end-to-end 3 tier web application.
-	You would need to submit the source code of your project as well. Use AWS Codestar for code repository and version control.
-	Set up code pipeline one for dev and one for production and show the CI/CD code, build, test and promotion of code. (Optional)
-	Showcase authentication using standard OpenAuth method including Social logins. E.g. Login with facebook, google or other popular accounts. (Optional)
-	Create an admin view to see the files uploaded by all users with ability to manage (delete) those files.
-	The back end needs to be API driven so you can have future mobile app interacting with same consistent back end.
-	Use AWS Eclipse tool kit to help with programming with ease for AWS APIs/SDK.
-	You can use any programming language you would like. Consider using web frameworks to expedite development such as SpringMVC, Spring Boot, bootstrap etc.
