from flask import Flask, render_template, session, redirect, url_for

app = Flask(__name__)
app.secret_key = 'your-secret-key'  # Change this to a secret key for security

@app.route('/')
def count():
    session['visits'] = session.get('visits', 0) + 1
    return render_template('index.html', count=session['visits'])

@app.route('/destroy_session')
def destroy_session():
    session.clear()
    return redirect(url_for('count'))

if __name__ == '__main__':
    app.run(debug=True)

