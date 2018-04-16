pipeline {
    agent any
 
	tools { 
        maven 'Maven 3.5.3'
		jdk 'Jdk10'
    }
	
    stages {
        stage('Test NodeJS') {
            steps {
                nodejs(nodeJSInstallationName: 'Node 6.x', configId: '<config-file-provider-id>') {
                    bat 'npm --version'
                }
            }
        }
    }
}