pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                // Pull code from Git
                git branch: 'main', credentialsId: 'YOUR_CREDENTIAL_ID', url: 'https://github.com/username/repo.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install node modules
                sh 'npm install'
                // Install Playwright browsers
                sh 'npx playwright install'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                // Run Playwright tests and generate HTML report
                sh 'npx playwright test --reporter=html'
            }
        }

        stage('Archive Test Report') {
            steps {
                // Save HTML reports in Jenkins
                archiveArtifacts artifacts: 'playwright-report/**', fingerprint: true
            }
        }
    }

    post {
        always {
            echo 'Build Completed!'
        }
    }
}
