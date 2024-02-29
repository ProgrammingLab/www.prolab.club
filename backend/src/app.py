from flask import Flask

app = Flask(__name__)


@app.route("/hello")
def hello():
    with open("sample.txt", "r", encoding="utf-8") as file:
        data = file.read()
    cnt = int(data)
    cnt += 1
    with open("sample.txt", "w+", encoding="utf-8") as file:
        file.write(str(cnt))
    return str(cnt)
