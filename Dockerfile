FROM node

ENV NPM_CONFIG_LOGLEVEL warn
ARG app_env
ENV APP_ENV $app_env

RUN mkdir -p /frontend
WORKDIR /frontend
COPY ./frontend ./

RUN npm install

CMD if [ ${APP_ENV} = production ]; \
	then \
	npm install -g serve && \
	npm run build && \
	cd build && \
	serve -p 3000 -s .; \
	else \
	npm run start; \
	fi

EXPOSE 3000