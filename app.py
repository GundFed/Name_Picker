from flask import Flask, render_template, request
import random

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        word_list = request.form.get('word_list')
        if word_list:
            words = word_list.split(',')
            chosen_word = random.choice(words)
            return render_template('result.html', chosen_word=chosen_word)
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)
