from config import db

# Create a class for the Message table
class Message(db.Model):
    
    # Define the columns of the table, with the data types
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(255), nullable=False)
    subject = db.Column(db.String(255), nullable=False)
    message = db.Column(db.Text, nullable=False)
    created_at = db.Column(db.DateTime, nullable=False)
    
    
    def to_json(self):
        '''
        Convert the object into a JSON object
        '''
        return {
            'id': self.id,
            'name': self.name,
            'email': self.email,
            'subject': self.subject,
            'message': self.message,
            'createdAt': self.created_at
        }
    
    