pipeline {
    agent any
<<<<<<< HEAD
 
=======
>>>>>>> c6b893cbf7c37a5707d3702647be0d036256d00d
	tools { 
        maven 'Maven 3.5.3'
		jdk 'Jdk10'
    }
<<<<<<< HEAD
	
    stages {
        stage('Test NodeJS') {
			bat "java -version"
        }
    }
}
=======
    stages {
        stage ('test nodejs') {
            nodejs(nodeJSInstallationName: 'Node 8.x', configId: '<config-file-provider-id>') {
                bat 'npm --version'
            }
        }
    }
}
>>>>>>> c6b893cbf7c37a5707d3702647be0d036256d00d
