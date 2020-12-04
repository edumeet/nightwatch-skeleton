# Nightwatchjs skeleton

```sh
npm install
```

Set your env if you run docker or k8s

```sh
mv .env.example .env
```

## local

```sh
npx nightwatch -e chrome
npx nightwatch -e firefox
```

### Verbose

```sh
npx nightwatch -e chrome --verbose
npx nightwatch -e firefox --verbose
```

## docker

See the docker-compose.yml

```bash
docker-compose up -d
```

```sh
npx nightwatch -e docker.grid.chrome
npx nightwatch -e docker.grid.firefox
npx nightwatch -e docker.grid.opera
```

## k8s

### env

Add http basic auth in the ingress and set credential to .env

### helm

See the  k8s/values.yml
install helm selenium chart with this values.yml

```sh
 helm install --name my-release -f values.yaml stable/selenium
 ```

### run

```sh
npx nightwatch -e k8s.grid.chrome
npx nightwatch -e k8s.gird.firefox
```
