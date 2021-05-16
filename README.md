
# How to build
---
- Clone the master repository : ```git clone <url>```

- Create a branch - potentially with name if the issue / feature - like BUGFIX12345 ```git checkout -b BUGFIX/12345```

- Once we have tested it locally, push it to the remote repository
		git push origin BUGIX/12345

- Create a merge request to master from UI, which will get deployed in staging.

- Once we are happy with all the changes in staging and we want to move to production.

- Create a tag in gitlab - which will deploy the same in production.
  
---