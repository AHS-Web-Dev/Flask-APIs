from flask import Flask
from flask_cors import CORS


app = Flask(__name__)
cors = CORS(app)

@app.route('/getcompanyceo', methods=['GET'])
def index():

	data_dict = {
		"Apple": "Tim Cook",
		"Google": "Sundar",
		"Facebook": "Mark Zuckerberg"
	}

	return data_dict

if __name__ == '__main__':
	app.run(debug=True, host='localhost', port=8080)