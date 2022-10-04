FROM openjdk:11
VOLUME /tmp
EXPOSE 8080
ADD ./target/tscatalog-0.0.1-SNAPSHOT.jar tscatalog.jar
ENTRYPOINT ["java","-jar","/tscatalog.jar"]