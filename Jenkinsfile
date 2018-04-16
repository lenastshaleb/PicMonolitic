pipeline {
    agent any
	tools { 
        maven 'Maven'
		nodejs 'NodeJS'
		jdk 'Jdk'
    }
    stages {
	
        //clone git [il faut que l'option from scm soit spécifée dans l'interface de jenkins]
		stage('cloning') {
			steps {
				git 'https://github.com/lenastshaleb/PicMonolitic.git'
			}
		}
		
		//verifie si java est installé
		stage('checking java') {
			steps{
				bat "java -version"
			}
		}
	
		//on vide les tiroirs 
		stage('cleaning') {
			steps{
				bat "mvn clean"
			}
		}
		
		stage('Test'){
			steps{
				bat "mvn test"
			}
		}
	}
}
