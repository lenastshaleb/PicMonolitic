pipeline {
    agent any
	tools { 
        maven 'Maven'
		nodejs 'NodeJS'
		jdk 'Jdk'
    }
    stages {
	
		stage('Integration'){
            steps{
				// passe les tests d'integration
                bat "mvn deploy"				
            }
		}
	}
}
