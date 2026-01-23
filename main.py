from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.templating import Jinja2Templates
from fastapi.responses import HTMLResponse
from starlette.requests import Request
from fastapi.staticfiles import StaticFiles
import uvicorn

templates = Jinja2Templates(directory="fardPlaytimeSite")

app = FastAPI()
app.mount("/static", StaticFiles(directory="static"), name="static") #Mounts the static directory in the root of the project so that index.html can pull assets




@app.get("/", response_class=HTMLResponse)  #Set the api path
def root(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})


if __name__ == '__main__':
    uvicorn.run(app, host='192.168.178.20', port=8080) #My local ip so I can test easier