from flask import Blueprint, jsonify
from models import Recipe

recipes = Blueprint('recipes', __name__)

@recipes.route('/recipes', methods=['GET'])
def get_recipes():
   recipes = Recipe.query.all()
   return jsonify([recipe.to_dict() for recipe in recipes])
