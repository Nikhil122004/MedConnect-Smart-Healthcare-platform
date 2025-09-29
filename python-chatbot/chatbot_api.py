# chatbot_dash_api.py
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.pipeline import make_pipeline
from sklearn.model_selection import train_test_split
from dash import Dash, dcc, html
from flask import request, jsonify
from flask_cors import CORS

# Load dataset
data = pd.read_csv("chatbot_dataset.csv")
data['Question'] = data['Question'].str.lower().str.split().apply(lambda x: ' '.join(x))
x_train, x_test, y_train, y_test = train_test_split(data['Question'], data['Answer'], test_size=0.2, random_state=42)

# Train model
model = make_pipeline(TfidfVectorizer(), MultinomialNB())
model.fit(x_train, y_train)
print("Chatbot model ready")

# Initialize Dash
app = Dash(__name__)
CORS(app.server)  # Enable CORS for React frontend

# Expose API endpoint for React
@app.server.route("/chat", methods=["POST"])
def chat_api():
    data_json = request.get_json()
    question = data_json.get("message", "")
    question = ' '.join(question.lower().split())
    answer = model.predict([question])[0]
    return jsonify({"response": answer})

# Optional Dash UI
app.layout = html.Div([
    html.H1("Chatbot Dashboard"),
    dcc.Textarea(id='user-input', value="Hello! How can I help you?", style={'width': '100%', 'height': 100}),
    html.Button('Submit', id='submit-button', n_clicks=0),
    html.Div(id='chatbot-output', style={'padding': '10px'})
])

if __name__ == "__main__":
    app.run(debug=True)
