#!/bin/bash

push_image () {
  docker build -t gcr.io/jackzampolin-web/pylonserver:latest .
  gcloud docker -- push gcr.io/jackzampolin-web/pylonserver:latest
}

roll_pods () {
  local pods=$(kubectl get pods --namespace pylonserver -o jsonpath='{ .items[*].metadata.name }')
  local pod
  for pod in $pods; do
    kubectl delete pod --namespace pylonserver $pod
    echo "killed pod $pod"
    echo "Sleeping for 30 seconds to wait for new pod to come up"
    echo "30..."
    sleep 5
    echo "25..."
    sleep 5
    echo "20..."
    sleep 5
    echo "15..."
    sleep 5
    echo "10..."
    sleep 5
    echo "5..."
    sleep 5
  done
}

echo "Pushing image..."

push_image

echo "Image pushed. Now rolling pods to update site..."

roll_pods
