# DOCKER COMMANDS

**Run a docker container**

```
-- run (create and start)
docker run <image id>

-- run in background (create and start)
docker run <image id> -d

-- run with shell attached to STDIN
docker run -it <image id> sh

-- run with port mapping
docker run -p <localport>:<containerport> <image id>

-- create
docker create <image id>

-- start
docker start <container id>

-- start with attached logs
docker start -a <container id>
```

**Run a docker container inside linux (wsl)**
```
--build
docker build -f Dockerfile.dev -t USERNAME:frontend .

--run
docker run -it -p 3000:3000 -v /app/node_modules -v ~/<folder>:/app USERNAME:frontend

-v                          volumeswitch
-v /app/node_modules        put a bookmark on the node modules folder
-v ~/<folder>:/app          map the <folder> to the :/app directory
```

**Stop running containers**

```
-- stop with cleanup
docker stop <container id>

-- stop without cleanup
docker kill <container id>
```

**Show running containers**

```
--current running containers
docker ps

--all previously running containers
docker ps --all
```

**Remove stopped containers**

```
docker system prune
```

**Get logs from a containers**

```
docker logs <container id>
```

**Execute a command in a container**

```
-- open shell inside of the container
docker exec -it <container id> sh

-- execute one command
docker exec -it <container id> <command>

-- attach to the stdin / stdout / stderr of the container
docker attach <container id> <command>
```

**FLAGS**

```
-a        => attach
-it       => combine( [-i] (attacht to STDIN channel) && [-t] (all text looks pretty / give autocomplete when there) )
```

**Extra**

```
cmd + d   => exit out of shell
```

**Linux**

```
cd        => change directory
cd..      => go a directory up
cd /      => go to root
ls        => show directories
touch     => create folder
.         => this dir
```

**Status codes**

```
0         => Exited and everything is OK
1,2,3 etc => Exited but something went wrong
```

# DOCKER FILE

**Build dockerfile**

```
-- build dockerfile
docker build <directory>

-- build dockerfile inside current dir
docker build .

-- build developer dockerfile inside current dir
docker build -f Dockerfile.dev .

-- build dockerfile with image tag
docker build -t <dockerid/projectname:version>

-- show progress like old buildkit
docker build --progress=plain

-- disable any caching
docker build --no-cache --progress=plain

-- turn of buildkit
DOCKER_BUILDKIT=0 docker build
```

**Tag image**

```
-- build dockerfile with image tag
docker build -t <dockerid/projectname:version>

-- tag immage when already build
docker tag <container id> <dockerid/projectname:version>
```

**Commit**

```
docker commit -c "CMD 'redis-server'" CONTAINERID
```

**Writing a dockerfile**

```
FROM        => Set the baseImage
RUN         => Execute any commands
CMD         => Provide defaults for an executing container.
COPY        => copy over the source to the destination
WORKDIR     => specify workdir
```

# DOCKER COMPOSE

**Run docker compose**

```
-- run docker compose
docker-compose up

-- run docker compose in background
docker-compose up -d

-- rebuild and run docker compose
docker-compose up --build
```

**Stop docker compose**

```
-- stop docker compose
docker-compose down
```

**Show docker compose**

```
--current running containers
docker-compose ps
```

**Writing docker-compose**

```
-- restart policies
"no"        => never attempt to restart this . containter if it stops or crashes
always      => if this container stops *for any reson* always attempt to restart
on-failure  => only restart if the container stops with an error code
unless-stopped => Always restart unless we (the devs) forcibly stop it
```
