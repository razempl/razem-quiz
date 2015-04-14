## A quiz

### How to get it working

You need to have docker and fig installed, then:

    cp dev.env .env

    sudo npm install -g foreman mariner
    make init

And fire up the interface and the server. In two separate terminals
execute:

    make dev
    make server

Keep em both running and head to `localhost:5000`.
