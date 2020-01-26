from flask import Flask, request, jsonify
from recp import Recipe
import json
app = Flask(__name__)

@app.route('/')
def hello_world():
    return "hello_world"


@app.route('/test', methods=['GET'])
def test():
    print ("On the test")
    if request.method == 'GET':
        r = Recipe()

        tup = r.analyzeImageScrape()

        print (json.dumps(tup))

        return jsonify(tup)


    return "OK"


if __name__ == '__main__' :
    app.run(host="0.0.0.0",port='8080')