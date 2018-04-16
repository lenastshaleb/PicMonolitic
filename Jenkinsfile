pipeline {
    agent any
	tools { 
        maven 'Maven 3.5.3'
		jdk 'J8'
    }
    stages {
        stage ('test nodejs') {
            steps {
                nodejs(nodeJSInstallationName: 'Node 9.x', configId: '<config-file-provider-id>') {
                    bar 'node --version'
                }
            }
        }
    }
}
