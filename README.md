# Flask + Express on EC2 with Jenkins CI/CD

## Architecture
- **EC2 Instance**: Ubuntu 22.04 t2.micro
- **Flask Backend**: Python 3 · Port 5000 · managed by pm2
- **Express Frontend**: Node.js 18 · Port 3000 · managed by pm2
- **Jenkins**: CI/CD server · Port 8080 · same EC2 instance

## Live URLs
- Flask: http://<EC2_PUBLIC_IP>:5000
- Express: http://<EC2_PUBLIC_IP>:3000
- Jenkins: http://<EC2_PUBLIC_IP>:8080

## Deployment Steps
1. EC2 launched with Ubuntu 22.04, security group ports 22/3000/5000/8080 open
2. Installed Python3, Node.js 18, Git, pm2, Jenkins
3. Flask app cloned and started via `pm2 start`
4. Express app cloned and started via `pm2 start`
5. Jenkins configured with Git + NodeJS plugins
6. Pipeline jobs created using Jenkinsfile (SCM-based)
7. GitHub webhooks added to trigger auto-deployment on push

## CI/CD Pipeline Flow
git push → GitHub Webhook → Jenkins triggers pipeline →
  1. Checkout code
  2. Install dependencies (pip / npm install)
  3. Run tests
  4. Restart app via pm2

## Process Management
```bash
pm2 list              # view all running apps
pm2 logs flask-app    # view Flask logs
pm2 logs express-app  # view Express logs
pm2 restart all       # restart everything
```

## Jenkins Pipelines
- `flask-pipeline` → Jenkinsfile in flask-app repo
- `express-pipeline` → Jenkinsfile in express-app repo
