FROM alpine:3.12

# Copy .mkv file from host to container
COPY video.mkv .

# Install mpv
RUN apk add --no-cache mpv python3

# Set the working directory within the container
EXPOSE 8000

# Run mpv to play the .mkv file
CMD ["python3", "-m","http.server", "8000"]
