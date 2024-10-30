pipeline {
    agent any
    tools { 
        nodejs "Node" 
    }
    stages {
        stage('Debug PATH') {
            steps {
                bat 'echo %PATH%'
                bat 'npm -v'  
                bat 'npx -v'  
            }
        }
        stage('Cypress Parallel Test Suite') {
            parallel {
                stage('Slave 1') {
                    agent { label "Agente_1" }
                    steps {
                        git url: 'https://github.com/boofitho/cypress_curso.git'
                        bat 'npm install'
                        bat 'npm install cypress --save-dev'
                        bat 'dir node_modules\\.bin'
                        bat 'npx cypress run --record --key bfaebdfa-022b-45b3-9fdb-59f99f97778d --parallel'
                    }
                }
                stage('Slave 2') {
                    agent { label "Agente_2" }
                    steps {
                        git url: 'https://github.com/boofitho/cypress_curso.git'
                        bat 'npm install'
                        bat 'npm install cypress --save-dev'
                        bat 'dir node_modules\\.bin'
                        bat 'npx cypress run --record --key bfaebdfa-022b-45b3-9fdb-59f99f97778d --parallel'
                    }
                }
                stage('Slave 3') {
                    agent { label "Agente_3" }
                    steps {
                        git url: 'https://github.com/boofitho/cypress_curso.git'
                        bat 'npm install'
                        bat 'npm install cypress --save-dev'
                        bat 'dir node_modules\\.bin'
                        bat 'npx cypress run --record --key bfaebdfa-022b-45b3-9fdb-59f99f97778d --parallel'
                    }
                }
            } // Cierre de parallel
        } // Cierre de Cypress Parallel Test Suite
    } // Cierre de stages
} // Cierre de pipeline
