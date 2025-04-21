# Angular Front-End Boilerplate :fire:

## Description

Node.js Boilerplate for Front-End using TypeScript and Angular.

## Overview

### Main technologies

- **JavaScript**: Web programming language;
- **TypeScript**: JavaScript superset for typing;
- **Node.js**: JavaScript runtime;
- **Angular**: TypeScript Framework for Front-End;
- **Axios**: HTTP requests tool;
- **Socket.io**: WebSocket library;
- **Express**: Robust tooling for HTTP servers;
- **Joi**: Schema validator library;
- **Jest**: Testing Framework;
- **ESLint**: JavaScript/TypeScript linter and formatter;
- **Huksy**: Git hooks tool used to check tests, format the code and the commits;

---

### Install dependencies

1. Install project dependencies  
```shell
npm install
```

#### What to do if the service goes down

- Check the logs;
- Test the dependencies and execution locally;
- Run automated tests;
- If necessary, merge with a hotfix on git;
- Rebuild the project and restart the service;

## Environment Preparation

1. Copy dotenv file  
```shell
cp envs/.env.local ./.env # copy development local example
source ./.env # load envs on shell session
```

## Running Locally

```shell
npm run mock-dependencies # start external service mock
npm run start:dev # start application in development mode
```

## Interface

- [localhost:3000](http://localhost:3000/) - Application Interface  
	* `/` - Index Page
- [localhost:4000](http://localhost:4000/) - Mocked Back-End Page  

___

### TO DO

- **Concepts**
	* Modularization
		- [ ] Dependency Injection
	* Application State
		- [ ] Page state
		- [ ] Global states
	* Components
		- [ ] Form
		- [ ] NavBar
		- [ ] Toast
		- [ ] DropDown
		- [ ] Modal
		- [ ] Image
		- [ ] Header
		- [ ] Scroller
	* Actions
		- [ ] Validations
		- [ ] Requests (Http)
		- [ ] Connections (WebSockets)
		- [ ] Hooks
- **Tests**
	- [ ] Component Render Test
	- [ ] Page Render Test
