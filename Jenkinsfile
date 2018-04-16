pipeline {
    agent any
	tools { 
        maven 'Maven 3.5.3'
		jdk 'Jdk10'
    }
    stages {
        stage ('test nodejs') {
            steps {
                nodejs(nodeJSInstallationName: 'Node 8.x', configId: '<config-file-provider-id>') {
                    bar 'node --version'
                }
            }
        }
    }
}
