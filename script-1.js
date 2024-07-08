from flask import Flask, request, render_template, send_file
from pytube import YouTube
import os

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('descargar.html')

@app.route('/download', methods=['POST'])
def download():
    url = request.form['url']
    try:
        yt = YouTube(url)
        video = yt.streams.get_highest_resolution()
        output_path = video.download(output_path='downloads')
        return send_file(output_path, as_attachment=True, download_name=f"{yt.title}.mp4")
    except Exception as e:
        return str(e)

if __name__ == '__main__':
    os.makedirs('downloads', exist_ok=True)
    app.run(host='0.0.0.0', port=81, debug=True)
