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
				withSonarQubeEnv('sonarqube') {      
					bat "mvn sonar:sonar"
				}
			}
		}
	}
}
