from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.models import User  # Correct import for the User model
from api.serializers import UserSerializer

def get_user_credentials(request):
    # Extract the username from the request data
    username = request.data.get('username')
    
    # Handle missing username in the request data
    if not username:
        return Response({'error': 'Username is required'}, status=status.HTTP_400_BAD_REQUEST)
    
    try:
        # Fetch the user object using the provided username
        user_reqd = User.objects.get(username=username)
    except User.DoesNotExist:
        # Handle case where user is not found
        return Response({'error': 'User not found'}, status=status.HTTP_404_NOT_FOUND)
    
    # Serialize the user data
    seria = UserSerializer(user_reqd)
    
    # Return the serialized user data in the response
    return Response(seria.data, status=status.HTTP_200_OK)
