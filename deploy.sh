REPOSITORY=/home/ubuntu/deploy

if [ ! -d "$REPOSITORY" ]; then
  mkdir -p "$REPOSITORY"
fi

cd $REPOSITORY

sudo npm install
sudo pm2 restart all