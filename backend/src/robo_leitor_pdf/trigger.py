import sys
import time
import logging
from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler
from parser import leitor

def on_created(event):
    leitor()

if __name__ == "__main__":

    event_handler = FileSystemEventHandler()
    event_handler.on_created = on_created

    path = "monitorando"
    observer = Observer()
    observer.schedule(event_handler, path, recursive=True)
    observer.start()
    try:
        print('Monitoring')
        while True:
            time.sleep(1)
    except KeyboardInterrupt:
        observer.stop()
        print('Done')
    observer.join()