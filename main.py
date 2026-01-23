from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.templating import Jinja2Templates
from fastapi.responses import HTMLResponse
from starlette.requests import Request
from fastapi.staticfiles import StaticFiles
import uvicorn

templates = Jinja2Templates(directory="fardPlaytimeSite")

app = FastAPI()
app.mount("/static", StaticFiles(directory="static"), name="static")

BackendVersion = 1.3

authedUsers = {

    1: {
        "token": "22",
        "name": "Consti"
    }


}

@app.get("/", response_class=HTMLResponse)
def root(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})


if __name__ == '__main__':
    uvicorn.run(app, host='0.0.0.0', port=8080)