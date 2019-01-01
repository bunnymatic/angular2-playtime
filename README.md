Angular/Java Spring Boot Playtime
---------------------------------

`play/` holds the angular stuff.
`spring-server/` holds the java stuff.


Java
====

```
cd spring-server
./gradlew run
```

Open your browser to http://localhost:8080/.
You should see some JSON.


Angular (Heroes)
================

```
cd play
yarn install
yarn start
```

Open your browser to http://localhost:4200.
You should see a list of heroes.


Excercise for the reader:
-------------------------

Hook up the Angular with the Java endpoint.
