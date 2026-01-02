pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install'           // Installs Node.js packages
                sh 'npx playwright install' // Installs browser binaries required for Playwright
            }
        }

        stage('Run Playwright Tests') {
            steps {
                sh 'npx playwright test'    // Runs all Playwright tests
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'playwright-report/**', fingerprint: false
            // Archives the report folder as build artifacts
        }
    }
}
