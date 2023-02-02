# FROM 表示设置要制作的镜像基于哪个镜像，FROM指令必须是整个Dockerfile的第一个指令，如果指定的镜像不存在默认会自动从Docker Hub上下载。
# 指定我们的基础镜像是node，latest表示版本是最新
FROM node:14.15.1
#WORKDIR指令用于设置Dockerfile中的RUN、CMD和ENTRYPOINT指令执行命令的工作目录(默认为/目录)，该指令在Dockerfile文件中可以出现多次，如果使用相对路径则为相对于WORKDIR上一次的值，
WORKDIR /home/OliverHome/server

#将工作目录拷贝到容器里面
COPY ./react-app /home/OliverHome

# 配置环境变量
ENV HOST 0.0.0.0
ENV PORT 8000
# 容器对外暴露的端口号(笔者的nestjs运行的端口号是3000)
EXPOSE 8000

# 容器启动时执行的命令，类似npm run start
CMD ["/bin/bash", "-c", "./start.sh"]