FROM node:14

RUN npm install --registry=https://repo.nju.edu.cn/repository/npm/ -g serve

COPY dist /root/dist

WORKDIR /root

CMD ["serve", "-s", "dist"]
