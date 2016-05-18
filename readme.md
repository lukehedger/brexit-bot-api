# Brexit Bot API

> [BrexitBot](https://github.com/lukehedger/brexit-bot) API

## Setup bot API
```
npm i
```

### Install MongoDB
```
brew install mongodb
mkdir -p /data/db
sudo chmod 0755 /data/db
sudo chown $USER /data/db
```

### Create admin user
```
mongo
> use brexitbot
> db.createUser(
  {
    user: "admin",
    pwd: "admin",
    roles:
    [
      {
        role: "userAdmin",
        db: "brexitbot"
      }
    ]
  }
)
```

## Run bot API
```
npm start
```

### Start MongoDB
```
mongod
```

### Start MongoDB GUI
```
npm run start:db
```
