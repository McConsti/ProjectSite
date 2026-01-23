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

@app.get("/")
def root():
    return {"message": "This place is boring. Go see something else!"}

app.get("/webapi/ISDK/AuthUser/{steam_id}")
def index(steam_id: int):
	if steam_id == 8888:
		print("cool")
	else:
		print("not cool")
		return {"error": "get the fard outta here"}

@app.get("/sec/", response_class=HTMLResponse)
def sec(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})

@app.post("/api/interlope/")
def interlope(key: int):
    if key == 2:
        print("Kill me")
        return {"message": "key is yes"}
    else:
        return {"error": "get the fard outta here"}

@app.post("/api/logon")
def logon(token: str):
    for id in authedUsers:
        if authedUsers[id]["token"] == token:
            return authedUsers[id]["name"]
    return {"Data": "You are not authorized to access the Service System"}

@app.get('/api/version')
def sendversion():
    return {BackendVersion}


if __name__ == '__main__':
    uvicorn.run(app, host='0.0.0.0', port=8080)