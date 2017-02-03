# minimal example from:
# http://flask.pocoo.org/docs/quickstart/

from flask import Flask, render_template, request
app = Flask(__name__,static_url_path='/static')

@app.route('/')
def tree_edit():
    return render_template('index.html')

@app.route('/data', methods = ['GET','POST'])
def data():
    if request.method == 'POST':
        print(request.get_json(force=True))
    else:
        return "[1, 2, 3]"

if __name__ == '__main__':
    app.run(debug = True)
