pipeline {
    agent any
	tools { 
        maven 'Maven'
    }
    stages {
        stage('git'){
            steps {
                git 'https://github.com/lenastshaleb/PicMonolitic.git'
            }
        }
        stage('Build') {
            steps {
                bat 'mvn clean compile'
            }
        }
    }
}