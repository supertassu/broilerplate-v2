FROM alpine:edge

# PYTHON
RUN apk add --no-cache python py-pip

# CHROME
RUN apk add --no-cache chromium chromium-chromedriver

# FIREFOX
# RUN wget --no-verbose --output-document /tmp/firefox-56.0.tar.bz2 https://ftp.mozilla.org/pub/firefox/releases/56.0/linux-x86_64/en-US/firefox-56.0.tar.bz2 && \
#     tar -xjf /tmp/firefox-56.0.tar.bz2 -C /tmp && \
#     ln -s /tmp/firefox/firefox-bin /usr/bin/firefox

# RUN GECKODRIVER_VERSION=`wget --no-verbose --output-document - https://api.github.com/repos/mozilla/geckodriver/releases/latest | grep tag_name | cut -d '"' -f 4` && \
#     wget --no-verbose --output-document /tmp/geckodriver.tar.gz https://github.com/mozilla/geckodriver/releases/download/$GECKODRIVER_VERSION/geckodriver-$GECKODRIVER_VERSION-linux64.tar.gz && \
#     tar --directory /tmp -zxf /tmp/geckodriver.tar.gz && \
#     chmod +x /tmp/geckodriver && \
#     ln -fs /tmp/geckodriver /usr/local/bin/geckodriver

# ROBOT + LIBRARIES
COPY requirements.txt /tmp/requirements.txt
RUN  pip install -r /tmp/requirements.txt
