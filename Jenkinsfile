pipeline {
    agent any
	tools { 
        maven 'Maven 3.5.3'
		nodejs 'NodeJS'
		jdk 'J8'
    }
    stages {
        stage ('test nodejs') {
			bat 'node --version'
        }
    }
}
