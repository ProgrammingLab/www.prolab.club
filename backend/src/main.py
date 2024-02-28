from flask import Flask

app = Flask(__name__)

with open("sample.txt", "r", encoding="utf-8") as file:
    data = file.read()
cnt = int(data)

@app.route("/hello")
def hello():
    global cnt
    cnt += 1
    with open("sample.txt", "w+", encoding="utf-8") as file:
        file.write(str(cnt))
    return str(cnt)

# 実行
if __name__ == '__main__':
    app.run()