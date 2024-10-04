from node:22-alpine3.19

# Install bash
RUN apk add --no-cache bash

# EXPOSE 8000

COPY ./entrypoint.sh /tmp

RUN chmod +x /tmp/entrypoint.sh


ENV SHELL /bin/bash

ENTRYPOINT [ "/tmp/entrypoint.sh" ]