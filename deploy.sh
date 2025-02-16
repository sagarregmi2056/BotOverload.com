#!/bin/bash
echo "Building and deploying to server..."

# Build locally
npm run build

# Deploy to server (copies dist files to correct location)
scp -r dist/* root@157.245.154.237:/var/www/botoverload/

# SSH into server and set permissions + reload nginx
ssh root@157.245.154.237 "chown -R www-data:www-data /var/www/botoverload && chmod -R 755 /var/www/botoverload && systemctl reload nginx"

echo "Deployment complete!"