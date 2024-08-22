FROM node:20.11.1-buster
COPY . /opt/app/sea
WORKDIR /opt/app/sea
RUN yarn && yarn build
CMD ["yarn","start"]