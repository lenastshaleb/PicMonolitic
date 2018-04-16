pipeline {
    agent any
	tools { 
        maven 'Maven'
		nodejs 'NodeJS'
		jdk 'Jdk'
    }
    stages {
	
        stage('Analyse SonarQube') {
			steps{
				withSonarQubeEnv('SonarQube') {      
					bat "mvn sonar:sonar"
				}
			}
		}
	}
}
