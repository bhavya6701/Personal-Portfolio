from flask import request, jsonify
from config import app, db
from models import Message
import datetime


@app.route("/messages", methods=["GET"])
def get_messages():
    """
    Return all the messages in the database
    """
    messages = Message.query.all()
    json_messages = list(map(lambda message: message.to_json(), messages))
    return jsonify({"messages": json_messages})


@app.route("/send_message", methods=["POST"])
def send_message():
    """
    Send a new message
    """
    name = request.form.get("name")
    email = request.form.get("email")
    subject = request.form.get("subject")
    message = request.form.get("message")
    created_at = datetime.datetime.now(datetime.UTC)

    if not email or not email or not subject or not message:
        return (
            jsonify({"message": "You must fill all the details to send the message"}),
            400,
        )

    new_message = Message(
        name=name, email=email, subject=subject, message=message, created_at=created_at
    )
    try:
        db.session.add(new_message)
        db.session.commit()
    except Exception as e:
        return jsonify({"message": str(e)}), 400

    return jsonify({"message": "Message sent successfully"}), 201

@app.route("/delete_message/<int:message_id>", methods=["DELETE"])
def delete_message(message_id):
    """
    Delete a message
    """
    message = Message.query.get(message_id)
    if not message:
        return jsonify({"message": "Message not found"}), 404

    db.session.delete(message)
    db.session.commit()

    return jsonify({"message": "Message deleted successfully"})


if __name__ == "__main__":
    with app.app_context():
        # Create the database tables
        db.create_all()

    # Run the app
    app.run(debug=True)
