pipeline {
    agent any
	tools { 
        maven 'Maven 3.5.3'
		jdk 'J8'
    }
    stages {
        stage ('test nodejs') {
            steps {
                nodejs(nodeJSInstallationName: 'NodeJS', configId: '<config-file-provider-id>') {
                    bar 'node --version'
                }
            }
        }
    }
}
