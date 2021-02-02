#!/bin/bash
container_name=vh-front
ssh -i $ID_RSA -o StrictHostKeyChecking=no $SERVER_USER@$SERVER_IP "docker login -u gitlab-ci-token -p $CI_BUILD_TOKEN $CI_REGISTRY"
ssh -i $ID_RSA -o StrictHostKeyChecking=no $SERVER_USER@$SERVER_IP "docker pull $IMAGE"
ssh -i $ID_RSA -o StrictHostKeyChecking=no $SERVER_USER@$SERVER_IP "if docker ps -a --format '{{.Names}}' | grep -Eq "^${container_name}\$"; then docker rm -f ${container_name}; fi " 
ssh -i $ID_RSA -o StrictHostKeyChecking=no $SERVER_USER@$SERVER_IP "docker run -d --net=vh --name ${container_name} --memory="200m" --cpus="0.5" --restart always -p 80 $IMAGE"
ssh -i $ID_RSA -o StrictHostKeyChecking=no $SERVER_USER@$SERVER_IP "docker ps -a --format '{{.Names}}' | grep -Eq "^${container_name}\$"
