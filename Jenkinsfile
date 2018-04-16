pipeline {
    agent any
	tools { 
        maven 'Maven 3.5.3'
		jdk 'Jdk10'
    }
    stages {
        stage ('test nodejs') {
            nodejs(nodeJSInstallationName: 'Node 8.x', configId: '<config-file-provider-id>') {
                bat 'npm --version'
            }
        }
    }
}