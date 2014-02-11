from flask import Flask, render_template, url_for, request

import settings


app = Flask(
    __name__,
    static_folder=settings.STATIC_PATH,
    static_url_path=settings.STATIC_URL_PATH
)


@app.route('/', methods=['GET'])
def index():

    try:
        datasource = request.args.getlist('datasource')
    except:
        datasource = 'none'
    return render_template('index.html', datasource)


if __name__ == '__main__':
    app.run(
        debug=settings.DEBUG,
    )
